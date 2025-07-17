import { DotenvNode } from "@/types/dotenv-node";
import { getMaxKeyLength } from "@/lib/get-max-key-length";

export const transformAlignSpaces = (nodes: DotenvNode[]) => {
  return nodes.map((node) => {
    if (node.type === "pair") {
      const paddedKey = node.key.padEnd(getMaxKeyLength(nodes), " ");
      return { ...node, key: paddedKey };
    }
    return node;
  });
};
