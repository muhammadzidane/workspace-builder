import fs from "fs";
import path from "path";

const modelsDir = path.join(process.cwd(), "public/models");
const outputFile = path.join(process.cwd(), "src/models.ts");

const files = fs
  .readdirSync(modelsDir)
  .filter((f) => f.endsWith(".glb") || f.endsWith(".gltf"))
  .map((f) => `/models/${f}`);

const fileContent = `// AUTO-GENERATED FILE — DO NOT EDIT
export const models = ${JSON.stringify(files, null, 2)} as const;
`;

fs.writeFileSync(outputFile, fileContent);

// eslint-disable-next-line no-console
console.log("✅ models.ts generated");
