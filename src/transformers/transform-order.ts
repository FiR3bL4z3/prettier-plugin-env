import { DotenvNode, DotenvPairNode, DotenvRawNode } from "@/types/dotenv-node";

const groupKeysWithComments = (nodes: DotenvNode[]) => {
  const groups: [DotenvRawNode[], DotenvPairNode | null][] = [];

  let currentGroup: DotenvRawNode[] = [];
  for (const node of nodes) {
    if (node.type === "pair") {
      groups.push([currentGroup, node]);
      currentGroup = [];
    } else {
      currentGroup.push(node);
    }
  }
  if (currentGroup.length > 0) {
    groups.push([currentGroup, null]);
  }
  return groups;
};

export const transformOrder = (nodes: DotenvNode[]): DotenvNode[] => {
  const groups = groupKeysWithComments(nodes);

  const orderedNodes = groups.sort((a, b) => {
    const aKey = a[1]?.key;
    const bKey = b[1]?.key;
    if (!aKey && !bKey) return 0;
    if (!aKey) return 1;
    if (!bKey) return -1;

    return aKey.localeCompare(bKey);
  });
  return orderedNodes.flatMap(([comments, pair]) => {
    return [...comments, ...(pair ? [pair] : [])];
  });
};
