// Node resolve hook: lets scripts import content/*.ts files that use
// extensionless relative imports ("./toolkit") and the "@/" alias, the way
// Next.js does. Register it before importing any content module:
//   import { register } from "node:module";
//   register("./lib/ts-resolve.mjs", import.meta.url);

import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");

export async function resolve(specifier, context, next) {
  let spec = specifier;
  if (spec.startsWith("@/")) spec = pathToFileURL(path.join(root, spec.slice(2))).href;
  const isRelative = spec.startsWith("./") || spec.startsWith("../");
  if ((isRelative || spec.startsWith("file:")) && !path.extname(spec) && context.parentURL) {
    const base = spec.startsWith("file:") ? fileURLToPath(spec) : path.resolve(path.dirname(fileURLToPath(context.parentURL)), spec);
    for (const cand of [`${base}.ts`, `${base}.tsx`, path.join(base, "index.ts")]) {
      if (existsSync(cand)) return next(pathToFileURL(cand).href, context);
    }
  }
  return next(spec, context);
}
