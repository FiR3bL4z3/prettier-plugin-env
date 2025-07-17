import { DotenvNode } from "@/types/dotenv-node";

export const getMaxKeyLength = (nodes: DotenvNode[]) => {
  return nodes.reduce((max, node) => {
    if (node.type === "pair" && node.key) {
      return Math.max(max, node.key.length);
    }
    return max;
  }, 0);
};
