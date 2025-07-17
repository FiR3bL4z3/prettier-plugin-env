import { DotenvNode } from "@/types/dotenv-node";

export const joinLine = (node: DotenvNode) => {
  if (node.type === "pair") {
    return `${node.key} = ${node.value}`;
  }
  if (node.type === "raw") {
    return node.value;
  }
  return "";
};
