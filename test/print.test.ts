import { describe, it, expect } from "vitest";
import { printer } from "@/printer";
import { DotenvNode } from "@/parser";

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
    const expectedOutput = "Z = 3\nA = 1\nB = 2";
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
});
