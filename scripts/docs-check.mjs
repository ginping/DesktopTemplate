import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const root = process.cwd();
const required = [
  "README.md",
  "AGENTS.md",
  "docs/PROJECT-PROGRESS.md",
  "docs/PROJECT-CONTEXT.md",
  "docs/RUNBOOK-INDEX.md",
  "docs/engineering-quality/README.md",
  "docs/engineering-quality/REVIEW-CHECKLIST.md",
  "docs/engineering-quality/SECURITY.md",
];
const errors = [];

for (const file of required) {
  const absolute = resolve(root, file);
  if (!existsSync(absolute)) {
    errors.push(`Missing required document: ${file}`);
    continue;
  }
  const source = readFileSync(absolute, "utf8");
  for (const match of source.matchAll(/\[[^\]]+\]\((?!https?:|#|mailto:)([^)]+)\)/g)) {
    const target = match[1]?.split("#")[0];
    if (target && !existsSync(resolve(dirname(absolute), target)))
      errors.push(`Broken local link in ${file}: ${target}`);
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`Documentation contract passed (${required.length} required files).`);
