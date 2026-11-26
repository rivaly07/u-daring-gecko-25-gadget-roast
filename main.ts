import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const entry = "My smart bulbs need the internet to switch on, so one router hiccup turns my whole house into an escape room with no clues.";
const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
const characterCount = [...entry].length;

if (characterCount < 1 || characterCount > 200 || entry.trim() === "" || /[\r\n]/u.test(entry)) {
  throw new Error("Entry must be one non-empty line containing 1 to 200 characters.");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), `${entry}\n`, { encoding: "utf8" });
