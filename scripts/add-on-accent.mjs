import { readFileSync, writeFileSync } from "node:fs";

const FILE = "pi-web-plugin.ts";

function channel(hex, index) {
  const value = parseInt(hex.slice(1 + index * 2, 3 + index * 2), 16) / 255;
  return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
}

function luminance(hex) {
  return 0.2126 * channel(hex, 0) + 0.7152 * channel(hex, 1) + 0.0722 * channel(hex, 2);
}

function contrast(a, b) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

const source = readFileSync(FILE, "utf8");
const lines = source.split("\n");
const out = [];
let added = 0;

for (const line of lines) {
  out.push(line);
  const match = /^(\s*)"--pi-accent": "(#[0-9a-fA-F]{6})",\s*$/u.exec(line);
  if (!match) continue;
  const [, indent, accent] = match;
  const onWhite = contrast(accent, "#ffffff");
  const onBlack = contrast(accent, "#0b0b0c");
  const foreground = onWhite >= onBlack ? "#ffffff" : "#0b0b0c";
  out.push(`${indent}"--pi-on-accent": "${foreground}",`);
  added += 1;
  console.log(accent, "→", foreground, "ratio", Math.max(onWhite, onBlack).toFixed(2));
}

writeFileSync(FILE, out.join("\n"));
console.log("themes given a foreground:", added);
