import { Parser } from "prettier";
import { DotenvNode } from "./types/dotenv-node";

const parse: Parser<DotenvNode[]>["parse"] = (text) => {
  const lines = text.split("\n");
  const parsed = lines.map((line) => {
    const match = line.match(/^([^=]+)=(.*)$/);
    if (match) {
      return {
        type: "pair",
        key: match[1].trim(),
        value: match[2].trim(),
      } as const;
    } else {
      return { type: "raw", value: line } as const; // handle comments or blank lines
    }
  });
  return parsed;
};

export const parser: Parser = {
  parse,
  astFormat: "dotenv-ast",
  locStart: () => 0,
  locEnd: () => 0,
};
