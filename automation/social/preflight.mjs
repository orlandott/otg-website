/**
 * Secret preflight for the weekly social workflow.
 *
 * Runs before `npm ci` and the Chromium download so an unset repository secret
 * fails in seconds with the exact list of what to add — instead of ~3 minutes
 * later, inside the first agent call, with the failure email skipped because
 * SENDGRID_API_KEY is missing too.
 *
 * Usage:
 *   node automation/social/preflight.mjs           # check a real run
 *   node automation/social/preflight.mjs --mock    # fixture run — needs nothing
 */
import { checkSocialEnv, missingSecretsMessage } from "../lib/env.mjs";
import { annotate, stepSummary } from "../lib/actions.mjs";
import { repoPath, readJson } from "../lib/files.mjs";

const MOCK = process.argv.includes("--mock");
const config = readJson(repoPath("automation/config.json"));

if (!config.social.enabled) {
  console.log('Social automation disabled ("enabled": false) — nothing to check.');
  process.exit(0);
}

const live = Boolean(config.social.live);
const { ok, missing, warnings } = checkSocialEnv({ mock: MOCK, live });
const mode = MOCK ? "mock" : live ? "live" : "dry";

for (const warning of warnings) console.warn(`! ${warning}`);

if (ok) {
  console.log(`✓ Secrets present for a ${mode} run.`);
  if (warnings.length) {
    stepSummary(`**Social preflight (${mode} run):**\n${warnings.map((w) => `- ${w}`).join("\n")}`);
  }
  process.exit(0);
}

const { GITHUB_SERVER_URL: server, GITHUB_REPOSITORY: repo } = process.env;
const readmeLink =
  server && repo
    ? `[\`automation/README.md\`](${server}/${repo}/blob/main/automation/README.md#secrets)`
    : "`automation/README.md`";

const message = missingSecretsMessage(missing);
console.error(`✗ ${message}`);
annotate("error", "Weekly social post — missing repository secrets", message);
stepSummary(
  [
    "## ✗ Weekly social post — missing repository secrets",
    "",
    "| Secret | Needed for |",
    "|---|---|",
    ...missing.map(({ name, why }) => `| \`${name}\` | ${why} |`),
    "",
    "Add them under **Settings → Secrets and variables → Actions → New repository secret**,",
    "then re-run this workflow. To rehearse without secrets, run it with **mock** checked.",
    "",
    `Setup details: ${readmeLink}.`,
  ].join("\n")
);
process.exit(1);
