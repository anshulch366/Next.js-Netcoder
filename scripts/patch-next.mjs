import fs from "node:fs";
import path from "node:path";

const nextDistDir = path.join(process.cwd(), "node_modules", "next", "dist");

if (!fs.existsSync(nextDistDir)) {
  process.exit(0);
}

const uncompiledTargets = [
  path.join(nextDistDir, "server", "api-utils", "index.js"),
  path.join(nextDistDir, "esm", "server", "api-utils", "index.js"),
];

const compiledServerDir = path.join(nextDistDir, "compiled", "next-server");
const compiledTargets = fs.existsSync(compiledServerDir)
  ? fs
      .readdirSync(compiledServerDir)
      .filter((name) => name.endsWith(".js"))
      .map((name) => path.join(compiledServerDir, name))
  : [];

const patterns = [
  [
    /(const revalidateOnlyGenerated\s*=\s*)([a-zA-Z0-9_$]+)\.hasOwnProperty\(([^)]+)\)/g,
    "$1Object.prototype.hasOwnProperty.call($2, $3)",
  ],
  [
    /(previewModeId,revalidateOnlyGenerated:)([a-zA-Z0-9_$]+)\.hasOwnProperty\(([^)]+)\)/g,
    "$1Object.prototype.hasOwnProperty.call($2,$3)",
  ],
];

let patchedCount = 0;

for (const filePath of [...uncompiledTargets, ...compiledTargets]) {
  if (!fs.existsSync(filePath)) continue;
  const original = fs.readFileSync(filePath, "utf8");
  let updated = original;
  for (const [regex, replacement] of patterns) {
    updated = updated.replace(regex, replacement);
  }
  if (updated !== original) {
    fs.writeFileSync(filePath, updated, "utf8");
    patchedCount += 1;
  }
}

if (patchedCount > 0) {
  console.log(`Patched ${patchedCount} Next.js file(s) for null-prototype req.headers compatibility.`);
}
