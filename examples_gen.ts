/* Run:
 * deno run -A examples_gen.ts
 */

import { deslash, expandGlob, join } from "./deps.ts";

import { buildBookmarklet, buildJS, buildMD } from "./build/mod.ts";

if (import.meta.main) {
  await gen();
  Deno.exit(0);
}

/**
 * gen generates copy-able bookmarklet code for each of the examples within this directory.
 *
 * Example entry points are all main.ts files within ./examples.
 */
export async function gen() {
  const examples = await expandGlob("./examples/**/main.ts");

  for await (const e of examples) {
    await buildAndCleanup(e.path);
  }
}

export async function buildAndCleanup(path: string) {
  const js = await buildJS(path, Deno.makeTempFileSync());
  const bmt = await buildBookmarklet(js);
  const md = await buildMD(bmt);

  const dir = join(deslash(path), "..");
  const exampleTmplPath = join(dir, "README.tmpl.md");
  try {
    const exampleTmpl = await Deno.readTextFile(exampleTmplPath);
    await Deno.writeTextFile(
      join(dir, "README.md"),
      exampleTmpl.replace(/{{\s*bookmarklet:usage\s*}}/m, md),
    );
  } catch {
    console.warn("Missing " + exampleTmplPath);
  }
}
