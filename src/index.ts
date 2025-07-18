import { parser } from "./parser";
import { printer } from "./printer";
import { Plugin, SupportOptions } from "prettier";

const languages = [
  {
    name: "dotenv",
    parsers: ["dotenv"],
    extensions: [".env", ".env*"],
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
