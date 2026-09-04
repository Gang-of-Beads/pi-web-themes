import { build } from "esbuild";

/**
 * The published plugin is one bundled ESM file. pi-web's browser loads plugin
 * modules without a bundler, so a bare `lit` specifier would not resolve; the
 * pack ships with lit folded in, and the type-only contract import is erased.
 */
await build({
  entryPoints: ["pi-web-plugin.ts"],
  bundle: true,
  format: "esm",
  outfile: "pi-web-plugin.js",
  minify: false,
  legalComments: "none",
});
