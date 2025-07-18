import { Printer } from "prettier";

import { transform } from "./utils/transform";
import { DotenvNode } from "./types/dotenv-node";
import { transformAlignSpaces } from "./transformers/transform-align-spaces";
import { joinLine } from "./lib/join-line";
import { transformOrder } from "./transformers/transform-order";
import { DotenvPluginOptions } from "./types/dotenv-plugin-options";

const print: Printer<DotenvNode[]>["print"] = (path, options) => {
  const { envAlign = false, envOrder = true } = options as DotenvPluginOptions;

  const ast = path.stack[0];

  const transformedAst = transform(ast, [
    {
      condition: envOrder,
      transform: transformOrder,
    },
    {
      condition: envAlign,
      transform: transformAlignSpaces,
    },
  ]);
  return transformedAst.map((node) => joinLine(node)).join("\n");
};

export const printer: Printer = {
  print,
};
