import { readdir, readFile } from "fs/promises";
import { join } from "path";

const fixturesPath = "test/fixtures";

export const readEnvFiles = async () => {
  const files = await readdir(fixturesPath);
  return Promise.all(
    files
      .filter((file) => file.startsWith(".env."))
      .map((file) => {
        return readEnvFile(file);
      })
  );
};

const readEnvFile = async (fileName: string) => {
  const filePath = join(fixturesPath, fileName);
  try {
    const content = await readFile(filePath, "utf8");
    return { fileName, content };
  } catch (error) {
    throw new Error(`Error reading file at ${filePath}:`, {
      cause: error,
    });
  }
};
