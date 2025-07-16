import { describe, it, expect } from "vitest";
import prettier from "prettier";
import plugin from "@/index";
import { readEnvTestCases } from "./utils/read-env-test-cases";

describe("Plugin Tests", async () => {
  const envFiles = await readEnvTestCases();

  it.each(envFiles)(
    "formats $testCase content",
    async ({ input, expected }) => {
      const output = await prettier.format(input, {
        parser: "dotenv",
        plugins: [plugin],
      });
      expect(output).toEqual(expected);
    }
  );
});
