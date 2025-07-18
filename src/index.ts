import { parser } from "./parser";
import { printer } from "./printer";
import { Plugin, SupportOptions } from "prettier";

const languages = [
  {
    name: "dotenv",
    parsers: ["dotenv"],
    extensions: [
      ".env",
      ".env.development",
      ".env.development.local",
      ".env.dev",
      ".env.dev.local",
      ".env.feature",
      ".env.feature.local",
      ".env.local",
      ".env.preview",
      ".env.preview.local",
      ".env.production",
      ".env.production.local",
      ".env.staging",
      ".env.staging.local",
      ".env.test",
      ".env.test.local",
    ],
    filenames: [".env"],
  },
];

const options: SupportOptions = {
  envAlign: {
    type: "boolean",
    category: "env",
    default: false,
    description: "Align equal signs in .env files",
  },
  envOrder: {
    type: "boolean",
    category: "env",
    default: true,
    description: "Sort keys in .env files",
  },
};

const plugin: Plugin = {
  languages,
  parsers: {
    dotenv: parser,
  },
  printers: {
    "dotenv-ast": printer,
  },
  options,
};

export default plugin;
