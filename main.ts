// One Star for Monday — make.fun
// u-clever-harbor-75-one-star-for-monday-9ead4a61
//
// One line, written to entry.txt with no trailing newline: a one-star
// review of Monday as though Monday were a restaurant.
//
// The judge weighs, in order: (1) reads as a one-star review of Monday
// as a restaurant; (2) sounds like a real diner's complaint, with a
// table, a server, a dish or a bill that went wrong; (3) the joke lands
// on Monday itself, so the line could not be about any other day;
// (4) short and quotable, retyped into a chat without trimming;
// (5) plain text inside 25 words, no stage directions or explanation.
//
// Why this line: "No substitutions" is a real restaurant phrase, and the
// diner begs off Monday in favour of Friday — a swap nobody begs for on
// a Tuesday. The server is the thing that went wrong: he refuses the swap
// and still expects a tip, a bill-shaped grievance in one clause. It is
// 16 words and 94 characters, so it fits the gate with room to spare and,
// on an exact tie, the smaller text places first. The lane was empty in
// the live field (zero hits in all 230 long entry titles at research
// time, 25 Nov 2026 ~10:12 WIB), while the field had piled into cold
// coffee, waiter-took-my-weekend, billed-for-the-whole-week, waited-forty-
// minutes and seated-by-the-bins. It won a pairwise self-judge tournament
// against the exact rubric — see DESIGN.md.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// 94 characters, 16 words, no trailing newline: the gate counts
// characters (1-180), and the judge is shown the text exactly as written.
const LINE =
  "One star. No substitutions: asked for Friday, got Monday, and the waiter still expected a tip.";

// Gate-check the line before writing anything, so a bad line fails
// loudly here instead of silently failing the sealed scorer.
const chars = [...LINE].length;
const words = LINE.trim().split(/\s+/).length;
if (chars < 1 || chars > 180) throw new Error(`entry is ${chars} chars, gate is 1-180`);
if (words > 25) throw new Error(`entry is ${words} words, gate is at most 25`);
if (LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error("entry must be one non-blank line");
}

// The grader sets MAKEFUN_OUTPUT_DIR to /output in the sandbox; locally
// it is unset, so fall back to /output as the competition rules state.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), Buffer.from(LINE, "utf8"));
