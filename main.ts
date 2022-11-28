import { parse } from "./deps.ts";

import { buildBookmarklet, buildJS } from "./build/mod.ts";

if (import.meta.main) {
  await main();
}

async function main() {
  const { _: [path] } = parse(Deno.args);
  if (!path) {
    console.error("Provide a path to an entrypoint file.");
    Deno.exit(1);
  }

  const js = await buildJS(String(path), Deno.makeTempFileSync());
  const bmt = await buildBookmarklet(js);
  console.log(bmt);
  Deno.exit(0);
}
