export type DotenvPairNode = {
  type: "pair";
  key: string;
  value: string;
};

export type DotenvRawNode = {
  type: "raw";
  value: string;
};

export type DotenvNode = DotenvPairNode | DotenvRawNode;
