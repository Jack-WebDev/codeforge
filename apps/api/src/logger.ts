import { Logger as BaseLogger, createLogger } from "@codeforge/serverkit";

import { config } from "./config";

export type Logger = BaseLogger;

export const logger: Logger = createLogger({
  name: "api",
  level: config.debug.level,
  pretty: config.env === "development",
});
