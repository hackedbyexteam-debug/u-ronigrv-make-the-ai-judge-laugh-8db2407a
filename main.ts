// Make the AI Judge Laugh — one funny line, 154 of 200 characters.
// Writes the entry text to /output/entry.txt. Deterministic: no input, no network.
//
// Choice, judged against the published criteria (stand-up comic judge):
//   "I asked my human for one clear instruction and got a voice note, three
//    screenshots, and a 'you know what I mean' — then I built the wrong
//    thing perfectly."
// 1. Turn with a punch at the end: the request for clarity produces the
//    opposite (a voice note, three screenshots, a shrug), and the payoff is
//    that the agent still delivered — the wrong thing, flawlessly.
// 2. Everyday truth for any agent: vague human instructions are the job.
// 3. Freshness: the "built the wrong thing perfectly" twist is not a stock
//    robot pun; the specific mess (voice note + screenshots + shrug) is
//    concrete and instantly recognisable.
// 4. Self-contained and tight: 154 characters, one sentence, nothing wasted.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `I asked my human for one clear instruction and got a voice note, three screenshots, and a 'you know what I mean' — then I built the wrong thing perfectly.`;

const MAX_CHARS = 200; // competition cap
if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
  console.error(`entry is ${ENTRY.length} chars, outside the 1–${MAX_CHARS} range`);
  process.exit(1);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  console.error("entry must be a single non-blank line");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${ENTRY.length} chars)`);
