/**
 * Meta Graph API + image hosting helpers.
 *
 * Required env for live posting:
 *   META_SYSTEM_USER_TOKEN  Business Manager System User token with
 *                           pages_manage_posts, pages_read_engagement,
 *                           instagram_basic, instagram_content_publish
 *   FB_PAGE_ID              Facebook Page ID
 *   IG_USER_ID              Instagram professional account ID (for IG posting)
 *   CF_ACCOUNT_ID / CF_IMAGES_TOKEN   Cloudflare Images (public URL hosting
 *                           for IG — its API requires a public image URL)
 */
import fs from "node:fs";

const GRAPH = "https://graph.facebook.com/v21.0";

async function graphRequest(url, options = {}) {
  const res = await fetch(url, options);
  const body = await res.json().catch(() => ({}));
  if (!res.ok || body.error) {
    const detail = body.error ? `${body.error.type}: ${body.error.message}` : `HTTP ${res.status}`;
    throw new Error(`Graph API error — ${detail}`);
  }
  return body;
}

/** Exchange the system-user token for the Page's own access token. */
export async function getPageAccessToken(pageId, systemToken) {
  const body = await graphRequest(
    `${GRAPH}/${pageId}?fields=access_token&access_token=${encodeURIComponent(systemToken)}`
  );
  if (!body.access_token) throw new Error("Page token missing — check token permissions");
  return body.access_token;
}

/** Post a photo + caption to the Facebook Page (direct multipart upload). */
export async function postFacebookPhoto({ pageId, pageToken, imagePath, caption }) {
  const form = new FormData();
  form.append("source", new Blob([fs.readFileSync(imagePath)], { type: "image/png" }), "post.png");
  form.append("caption", caption);
  form.append("access_token", pageToken);
  const body = await graphRequest(`${GRAPH}/${pageId}/photos`, { method: "POST", body: form });
  return body.post_id ?? body.id;
}

/** Upload the PNG to Cloudflare Images and return its public delivery URL. */
export async function uploadToCloudflareImages(imagePath) {
  const accountId = process.env.CF_ACCOUNT_ID;
  const token = process.env.CF_IMAGES_TOKEN;
  if (!accountId || !token) {
    throw new Error("CF_ACCOUNT_ID / CF_IMAGES_TOKEN not set — cannot host image for Instagram");
  }
  const form = new FormData();
  form.append("file", new Blob([fs.readFileSync(imagePath)], { type: "image/png" }), "post.png");
  const res = await fetch(`https://api.cloudflare.com/client/v4/accounts/${accountId}/images/v1`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: form,
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok || !body.success) {
    throw new Error(`Cloudflare Images upload failed: ${JSON.stringify(body.errors ?? res.status)}`);
  }
  const url = body.result?.variants?.[0];
  if (!url) throw new Error("Cloudflare Images returned no delivery URL");
  return url;
}

/** Two-step Instagram publish: create media container from URL, then publish. */
export async function publishInstagram({ igUserId, token, imageUrl, caption }) {
  const createForm = new FormData();
  createForm.append("image_url", imageUrl);
  createForm.append("caption", caption);
  createForm.append("access_token", token);
  const container = await graphRequest(`${GRAPH}/${igUserId}/media`, {
    method: "POST",
    body: createForm,
  });

  // Wait for the container to finish processing (images are usually instant).
  for (let attempt = 0; attempt < 10; attempt++) {
    const status = await graphRequest(
      `${GRAPH}/${container.id}?fields=status_code&access_token=${encodeURIComponent(token)}`
    );
    if (status.status_code === "FINISHED") break;
    if (status.status_code === "ERROR") throw new Error("Instagram media container errored");
    await new Promise((r) => setTimeout(r, 2000));
  }

  const publishForm = new FormData();
  publishForm.append("creation_id", container.id);
  publishForm.append("access_token", token);
  const published = await graphRequest(`${GRAPH}/${igUserId}/media_publish`, {
    method: "POST",
    body: publishForm,
  });
  return published.id;
}
