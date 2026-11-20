import { build } from "esbuild";

/**
 * The published plugin is one bundled ESM file. pi-web's browser loads plugin
 * modules without a bundler, so a bare specifier would not resolve. The pack is
 * plain data today: only the tests import lit, so nothing is folded in and
 * `legalComments` has nothing to keep.
 */
await build({
  entryPoints: ["pi-web-plugin.ts"],
  bundle: true,
  format: "esm",
  outfile: "pi-web-plugin.js",
  minify: false,
});
