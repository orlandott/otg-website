/**
 * GitHub Actions output helpers.
 *
 * Both no-op outside Actions, so the same scripts behave identically on a
 * laptop and in CI.
 */
import fs from "node:fs";

const escapeData = (s) =>
  String(s).replace(/%/g, "%25").replace(/\r/g, "%0D").replace(/\n/g, "%0A");

const escapeProperty = (s) => escapeData(s).replace(/:/g, "%3A").replace(/,/g, "%2C");

/**
 * Emit a workflow annotation — shown on the run page next to the job, not just
 * buried in the log. `level` is "error", "warning", or "notice".
 */
export function annotate(level, title, message) {
  if (!process.env.GITHUB_ACTIONS) return;
  console.log(`::${level} title=${escapeProperty(title)}::${escapeData(message)}`);
}

/** Append markdown to the job summary rendered at the top of the run page. */
export function stepSummary(markdown) {
  const file = process.env.GITHUB_STEP_SUMMARY;
  if (!file) return;
  try {
    fs.appendFileSync(file, markdown.endsWith("\n") ? markdown : `${markdown}\n`, "utf8");
  } catch (err) {
    console.warn(`[actions] could not write step summary: ${err.message}`);
  }
}
