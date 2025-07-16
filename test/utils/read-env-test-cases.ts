import { readdir, readFile } from "fs/promises";
import { join } from "path";

const fixturesPath = "test/fixtures";

export const readEnvTestCases = async () => {
  const envFolders = await readdir(fixturesPath);
  return Promise.all(
    envFolders.map((envFolder) => {
      return readEnvFile(envFolder);
    })
  );
};

const readEnvFile = async (folderName: string) => {
  const inputFilePath = join(fixturesPath, folderName, ".env");
  const expectedFilePath = join(fixturesPath, folderName, ".env.expected");
  try {
    const [input, expected] = await Promise.all([
      readFile(inputFilePath, "utf-8"),
      readFile(expectedFilePath, "utf-8"),
    ]);
    return { testCase: folderName, input, expected };
  } catch (error) {
    throw new Error(`Error reading files for test case: ${folderName}.`, {
      cause: error,
    });
  }
};
