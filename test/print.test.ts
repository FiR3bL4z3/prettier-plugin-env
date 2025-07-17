import { describe, it, expect } from "vitest";
import { printer } from "@/printer";
import { DotenvNode } from "@/types/dotenv-node";

const print = (input: DotenvNode[]) =>
  printer.print(
    {
      stack: [input],
    } as any,
    {} as any,
    {} as any
  );

describe("Printer Tests", () => {
  it("should format a simple .env file", () => {
    const input: DotenvNode[] = [
      { type: "pair", key: "Z", value: "3" },
      { type: "pair", key: "A", value: "1" },
      { type: "pair", key: "B", value: "2" },
    ];
    const expectedOutput = "A = 1\nB = 2\nZ = 3";
    expect(print(input)).toEqual(expectedOutput);
  });

  it("should format a .env file with comments", () => {
    const input: DotenvNode[] = [
      { type: "raw", value: "# This is a comment" },
      { type: "pair", key: "KEY", value: "value" },
      { type: "raw", value: "# Another comment" },
    ];
    const expectedOutput =
      "# This is a comment\nKEY = value\n# Another comment";
    expect(print(input)).toEqual(expectedOutput);
  });

  it("should format a .env file with out of order keys", () => {
    const input: DotenvNode[] = [
      { type: "pair", key: "B", value: "2" },
      { type: "pair", key: "A", value: "1" },
      { type: "pair", key: "C", value: "3" },
    ];
    const expectedOutput = "A = 1\nB = 2\nC = 3";
    expect(print(input)).toEqual(expectedOutput);
  });
  it("should format a .env file with out of order keys and comments", () => {
    const input: DotenvNode[] = [
      { type: "pair", key: "B", value: "2" },
      { type: "raw", value: "# Comment for A" },
      { type: "pair", key: "A", value: "1" },
      { type: "raw", value: "# Comment for C" },
      { type: "raw", value: "# Another comment for C" },
      { type: "pair", key: "C", value: "3" },
      { type: "raw", value: "# Random trailing comment" },
    ];
    const expectedOutput =
      "# Comment for A\nA = 1\nB = 2\n# Comment for C\n# Another comment for C\nC = 3\n# Random trailing comment";
    expect(print(input)).toEqual(expectedOutput);
  });

  it("should format a .env file with different key lengths", () => {
    const input: DotenvNode[] = [
      { type: "pair", key: "A", value: "1" },
      { type: "pair", key: "BB", value: "2" },
      { type: "pair", key: "CCC", value: "3" },
    ];
    const expectedOutput = "A   = 1\nBB  = 2\nCCC = 3";
    expect(print(input)).toEqual(expectedOutput);
  });
});
