import { defineConfig, options } from "@codeforge/buildkit";

export default defineConfig({
  ...options,
  external: options.external.concat([
    "pg",
    "knex",
    "objection",
    "@codeforge/logger",
  ]),
});
