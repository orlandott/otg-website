import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { repoPath } from "../lib/files.mjs";
import { BRAND } from "../lib/brand.mjs";

// Solid brand colors are injected into the templates as CSS variables so the
// palette has one home (brand.mjs). Translucent overlay tints stay in the
// templates — they are per-design effects, not palette entries.
const PALETTE_CSS = [
  `--deep-navy: ${BRAND.colors.deepNavy}`,
  `--primary: ${BRAND.colors.primary}`,
  `--secondary: ${BRAND.colors.secondary}`,
  `--green: ${BRAND.colors.green}`,
].join("; ");

async function getChromium() {
  try {
    return (await import("playwright")).chromium;
  } catch {
    return (await import("playwright-core")).chromium;
  }
}

async function launchBrowser() {
  const chromium = await getChromium();
  try {
    return await chromium.launch();
  } catch (err) {
    const executablePath = process.env.CHROMIUM_PATH || "/opt/pw-browsers/chromium";
    if (fs.existsSync(executablePath)) {
      return chromium.launch({ executablePath });
    }
    throw err;
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Render one 1080x1080 social image from an HTML template.
 * @param format "card" | "photo"
 * @param fields { badge, headline, subline, cta, photoFile? }
 * @param outPath absolute path for the PNG
 */
export async function renderSocialImage(format, fields, outPath) {
  const templatePath = repoPath("automation", "social", "templates", `${format}.html`);
  let html = fs.readFileSync(templatePath, "utf8");

  const replacements = {
    PALETTE: PALETTE_CSS,
    BADGE: escapeHtml(fields.badge),
    HEADLINE: escapeHtml(fields.headline),
    SUBLINE: escapeHtml(fields.subline),
    CTA: escapeHtml(fields.cta),
    PHONE: escapeHtml(fields.phone),
    SITE: escapeHtml(fields.site),
    LOGO_URL: pathToFileURL(repoPath("public", "images", "logo.png")).href,
    PHOTO_URL: fields.photoFile
      ? pathToFileURL(repoPath("public", "images", fields.photoFile)).href
      : "",
  };
  for (const [key, value] of Object.entries(replacements)) {
    html = html.replaceAll(`{{${key}}}`, value);
  }

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  const htmlPath = outPath.replace(/\.png$/, ".html");
  fs.writeFileSync(htmlPath, html, "utf8");

  const browser = await launchBrowser();
  try {
    const page = await browser.newPage({ viewport: { width: 1080, height: 1080 } });
    await page.goto(pathToFileURL(htmlPath).href, { waitUntil: "networkidle" });
    await page.screenshot({ path: outPath });
  } finally {
    await browser.close();
  }
  return outPath;
}
