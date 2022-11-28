import type { BuildOptions } from "../../deps.ts";
import { build as esbuild } from "../../deps.ts";

/**
 * Builds JS from a given source file.
 */
export async function build(
  inputPath: string,
  outPath: string,
  opts?: BuildOptions,
) {
  const { errors, warnings } = await esbuild({
    entryPoints: [inputPath],
    platform: "browser",
    outfile: outPath,
    bundle: true,
    minify: true,
    ...opts,
  });

  if (errors.length > 0) {
    console.error(errors);
    Deno.exit(1);
  }

  if (warnings.length > 0) {
    console.warn(warnings);
  }

  return await Deno.readTextFile(outPath);
}
