/**
 * CLI wrapper around notifyOwner, so a workflow can email the owner after a step
 * has actually succeeded (e.g. only once the post is really on main).
 *
 * Usage: node automation/notify.mjs "<subject>" <body-file>
 */
import fs from "node:fs";
import { notifyOwner } from "./lib/notify.mjs";

const [subject, bodyFile] = process.argv.slice(2);

if (!subject || !bodyFile) {
  console.error('usage: node automation/notify.mjs "<subject>" <body-file>');
  process.exit(1);
}

await notifyOwner(subject, fs.readFileSync(bodyFile, "utf8"));
