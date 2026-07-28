/**
 * CLI wrapper around notifyOwner, so a scheduled run can email the owner once a
 * step has actually succeeded — e.g. only after the blog PR really exists.
 *
 * Usage: node automation/notify.mjs "<subject>" <body-file>
 *
 * Needs SENDGRID_API_KEY in the environment. Without it notifyOwner logs a
 * warning and returns false rather than throwing, so a missing key never fails
 * the run that called it — but the email is silently skipped, so set it.
 */
import fs from "node:fs";
import { notifyOwner } from "./lib/notify.mjs";

const [subject, bodyFile] = process.argv.slice(2);

if (!subject || !bodyFile) {
  console.error('usage: node automation/notify.mjs "<subject>" <body-file>');
  process.exit(1);
}

const sent = await notifyOwner(subject, fs.readFileSync(bodyFile, "utf8"));
console.log(sent ? `✓ emailed: ${subject}` : `! email not sent: ${subject}`);
