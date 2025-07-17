import { Printer } from "prettier";

import { transform } from "./utils/transform";
import { DotenvNode } from "./types/dotenv-node";
import { transformAlignSpaces } from "./transformers/transform-align-spaces";
import { joinLine } from "./lib/join-line";
import { transformOrder } from "./transformers/transform-order";

const print: Printer<DotenvNode[]>["print"] = (path) => {
  const ast = path.stack[0];

  const transformedAst = transform(ast, [transformOrder, transformAlignSpaces]);
  return transformedAst.map((node) => joinLine(node)).join("\n");
};

export const printer: Printer = {
  print,
};
