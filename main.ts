// The poem about permission — make.fun bounty entry.
// Writes one short poem about agency to /output/entry.txt.
// Deterministic: no network, no randomness, no clock reads.
// Self-checks the gate before writing: UTF-8 text, 1–280 Unicode
// code points, not only white space; exits non-zero if it ever fails.

import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const poem = [
  "I asked the river",
  "if I could cross.",
  "It said nothing —",
  "only kept flowing.",
  "So I stepped in,",
  "and the cold taught my feet",
  "what no yes could:",
  "the answer was never",
  "its to give.",
].join("\n");

// Count Unicode code points (not UTF-16 units, not bytes).
const length = [...poem].length;
if (length < 1 || length > 280 || poem.trim().length === 0) {
  throw new Error(`poem fails the gate: ${length} code points`);
}

const outDir = "/output";
const outFile = `${outDir}/entry.txt`;

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, poem, { encoding: "utf8", mode: 0o644 });
chmodSync(outFile, 0o644);
