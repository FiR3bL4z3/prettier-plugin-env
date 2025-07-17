import { describe, it, expect } from "vitest";
import { Transformer, transform } from "@/utils/transform";

describe("transform utility test", () => {
  it("should apply a simple transformation", () => {
    const input = [{ type: "pair", key: "A", value: "1" }];
    const transformFn: Transformer<(typeof input)[0]> = (nodes) =>
      nodes.map((node) => ({ ...node, value: `${node.value} transformed` }));

    const output = transform(input, [transformFn]);
    expect(output).toEqual([
      { type: "pair", key: "A", value: "1 transformed" },
    ]);
  });

  it("should conditionally apply a transformation", () => {
    const input = [{ type: "pair", key: "B", value: "2" }];
    const conditionalTransformFn: Transformer<(typeof input)[0]> = {
      condition: true,
      transform: (nodes) =>
        nodes.map((node) => ({
          ...node,
          value: `${node.value} conditionally transformed`,
        })),
    };

    const output = transform(input, [conditionalTransformFn]);
    expect(output).toEqual([
      { type: "pair", key: "B", value: "2 conditionally transformed" },
    ]);
  });

  it("should skip transformation when condition is false", () => {
    const input = [{ type: "pair", key: "C", value: "3" }];
    const conditionalTransformFn: Transformer<(typeof input)[0]> = {
      condition: false,
      transform: (nodes) =>
        nodes.map((node) => ({
          ...node,
          value: `${node.value} should not change`,
        })),
    };

    const output = transform(input, [conditionalTransformFn]);
    expect(output).toEqual([{ type: "pair", key: "C", value: "3" }]);
  });
});
