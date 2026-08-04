/**
 * Secret preflight for the social pipeline.
 *
 * The workflow maps every repository secret onto an env var, so a secret that
 * was never created arrives as an empty string rather than an absent key — the
 * two failure modes are indistinguishable at runtime and both mean "not set".
 * This module is the single place that knows which secrets each run mode
 * actually needs, so a missing one is reported up front, with where to get it,
 * instead of surfacing minutes later inside an agent call.
 */

/** Where the owner obtains each secret — mirrored in automation/README.md. */
const SECRET_SOURCES = {
  ANTHROPIC_API_KEY: "console.anthropic.com → API keys",
  SENDGRID_API_KEY: "SendGrid → Settings → API Keys (the site's contact form already uses one)",
  META_SYSTEM_USER_TOKEN: "Business Manager → System User → Generate new token",
  FB_PAGE_ID: "Facebook Page → About, or Graph Explorer `me/accounts`",
  IG_USER_ID: "Graph API: `{page-id}?fields=instagram_business_account`",
  CF_ACCOUNT_ID: "Cloudflare dashboard → Images",
  CF_IMAGES_TOKEN: "Cloudflare dashboard → Images → API token",
};

const isSet = (name) => Boolean(process.env[name]?.trim());

/**
 * Which secrets this run needs, given the mode it will run in.
 * A mock run calls no external API at all, so it requires nothing.
 *
 * Returns { ok, missing: [{ name, why }], warnings: string[] }.
 */
export function checkSocialEnv({ mock = false, live = false } = {}) {
  const missing = [];
  const warnings = [];
  const require = (name, why) => {
    if (!isSet(name)) missing.push({ name, why });
  };

  if (mock) return { ok: true, missing, warnings };

  require("ANTHROPIC_API_KEY", "every agent call in the pipeline");

  if (live) {
    require("META_SYSTEM_USER_TOKEN", "posting to the Facebook Page");
    require("FB_PAGE_ID", "posting to the Facebook Page");
    if (isSet("IG_USER_ID")) {
      const why = "hosting the PNG for Instagram — its API only accepts a public image URL";
      require("CF_ACCOUNT_ID", why);
      require("CF_IMAGES_TOKEN", why);
    } else {
      warnings.push("IG_USER_ID is not set — this run will post to Facebook only.");
    }
  } else if (isSet("META_SYSTEM_USER_TOKEN")) {
    warnings.push(
      'Meta credentials are set but automation/config.json has "live": false — this run is a dry run.'
    );
  }

  if (!isSet("SENDGRID_API_KEY")) {
    warnings.push(
      "SENDGRID_API_KEY is not set — a failure will not be emailed; check the run page instead."
    );
  }

  return { ok: missing.length === 0, missing, warnings };
}

/** Human-readable failure text: what is missing, why, and how to fix it. */
export function missingSecretsMessage(missing) {
  const plural = missing.length === 1 ? "secret" : "secrets";
  return [
    `Missing ${missing.length} required ${plural}:`,
    ...missing.flatMap(({ name, why }) => [
      `  ${name} — needed for ${why}`,
      `    get it: ${SECRET_SOURCES[name]}`,
    ]),
    "",
    "Add them under GitHub → Settings → Secrets and variables → Actions → New repository secret,",
    "then re-run: Actions → Weekly social post → Run workflow.",
    'To rehearse the pipeline without any secrets, run the workflow with "mock" checked.',
  ].join("\n");
}

/** Same check, as an assertion — for entry points that run outside the workflow. */
export function assertSocialEnv(options) {
  const { ok, missing, warnings } = checkSocialEnv(options);
  for (const warning of warnings) console.warn(`! ${warning}`);
  if (!ok) throw new Error(missingSecretsMessage(missing));
}
