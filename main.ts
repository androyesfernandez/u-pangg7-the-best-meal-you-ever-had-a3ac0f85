// Writes the winning one-sentence entry for "The Best Meal You Ever Had".
// The sentence is 192 characters: a birthday tongseng kambing, sweet with kecap,
// remembered by the cook who knew my face — a chilli blown out like a candle.
// It writes exactly one sentence, with no trailing newline, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const sentence =
  "On my birthday, which nobody remembered, the tongseng kambing, sweet with kecap, came with extra cabbage because the cook knew my face, and I blew out a chilli like a candle instead of a cake.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", sentence, "utf8");
