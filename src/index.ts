import { parser } from "./parser";
import { printer } from "./printer";
import { Plugin } from "prettier";

const languages = [
  {
    name: "dotenv",
    parsers: ["dotenv"],
    extensions: [".env"],
  },
];

const plugin: Plugin = {
  languages,
  parsers: {
    dotenv: parser,
  },
  printers: {
    "dotenv-ast": printer,
  },
  options: {
    // Define any plugin-specific options here
    // For example, you could add an option to control the formatting style
  },
};

export default plugin;
