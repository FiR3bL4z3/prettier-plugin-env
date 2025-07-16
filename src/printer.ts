import { Printer } from "prettier";
import { DotenvNode } from "./parser";

const getMaxKeyLength = (nodes: DotenvNode[]) => {
  return nodes.reduce((max, node) => {
    if (node.type === "pair" && node.key) {
      return Math.max(max, node.key.length);
    }
    return max;
  }, 0);
};

const print: Printer<DotenvNode[]>["print"] = (path) => {
  const ast = path.stack[0];
  const maxKeyLength = getMaxKeyLength(ast);
  return ast
    .map((node) => {
      if (node.type === "pair") {
        const paddedKey = node.key.padEnd(maxKeyLength, " ");
        return `${paddedKey} = ${node.value}`;
      }
      return node.value;
    })
    .join("\n");
};

export const printer: Printer = {
  print,
};
