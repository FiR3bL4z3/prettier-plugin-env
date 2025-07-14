import { describe, it, expect } from "vitest";
import prettier from "prettier";
import plugin from "@/index";
import { readEnvFiles } from "./utils/read-env-files";

describe("Plugin Tests", async () => {
  const envFiles = await readEnvFiles();

  it.each(envFiles)(
    "formats $fileName content",
    async ({ content, fileName }) => {
      const output = await prettier.format(content, {
        parser: "dotenv",
        plugins: [plugin],
      });
      expect([fileName, output]).toMatchSnapshot();
    }
  );
});
