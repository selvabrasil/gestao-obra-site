import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDir = path.join(projectRoot, "dist", "public");
const assetSourceDir = "/home/ubuntu/webdev-static-assets";
const assetOutputDir = path.join(outputDir, "site-assets");

const assetFiles = [
  "gestao-obra-logo.png",
  "gestao-obra-hero.jpg",
  "gestao-obra-categorias.jpg",
  "gestao-obra-privacidade.jpg",
  "tela-resumo-app.jpeg",
  "tela-relatorio-app.jpeg",
];

await mkdir(assetOutputDir, { recursive: true });
await Promise.all([
  rm(path.join(outputDir, "__manus__"), { recursive: true, force: true }),
  rm(path.join(outputDir, ".gitkeep"), { force: true }),
]);
for (const file of assetFiles) {
  await cp(path.join(assetSourceDir, file), path.join(assetOutputDir, file));
}

const indexPath = path.join(outputDir, "index.html");
const index = await readFile(indexPath, "utf8");
const staticIndex = index.replace(
  "/manus-storage/gestao-obra-logo_e73fa381.png",
  "./site-assets/gestao-obra-logo.png",
);

await Promise.all([
  writeFile(indexPath, staticIndex, "utf8"),
  writeFile(path.join(outputDir, ".nojekyll"), "", "utf8"),
]);

console.log(`Pacote do GitHub Pages pronto em: ${outputDir}`);
