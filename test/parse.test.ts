import { describe, it, expect } from "vitest";
import { DotenvNode, parser } from "@/parser";

const parse = (input: string): DotenvNode[] => parser.parse(input, {} as any);

describe("Parser Tests", () => {
  it("should parse a simple .env file", () => {
    const input = "Z=3\nA=1\nB=2";
    const expectedOutput: DotenvNode[] = [
      { type: "pair", key: "Z", value: "3" },
      { type: "pair", key: "A", value: "1" },
      { type: "pair", key: "B", value: "2" },
    ];
    expect(parse(input)).toEqual(expectedOutput);
  });

  it("should handle comments in .env files", () => {
    const input = "Z=3\n# This is a comment\nA=1";
    const expectedOutput: DotenvNode[] = [
      { type: "pair", key: "Z", value: "3" },
      { type: "raw", value: "# This is a comment" },
      { type: "pair", key: "A", value: "1" },
    ];
    expect(parse(input)).toEqual(expectedOutput);
  });

  it("should ignore empty lines in .env files", () => {
    const input = "\nZ=3\n\nA=1\n";
    const expectedOutput: DotenvNode[] = [
      { type: "raw", value: "" },
      { type: "pair", key: "Z", value: "3" },
      { type: "raw", value: "" },
      { type: "pair", key: "A", value: "1" },
      { type: "raw", value: "" },
    ];
    expect(parse(input)).toEqual(expectedOutput);
  });
});
