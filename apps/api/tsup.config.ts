import { defineConfig, options } from "@codeforge/buildkit";

export default defineConfig({
  ...options,
  dts: false,
  external: options.external.concat([
    "esbuild",
    "@codeforge/testkit",
    "tsconfig-paths",
  ]),
  format: ["cjs"],
  entry: ["src/index.ts", "db/**/*.ts"],
});
