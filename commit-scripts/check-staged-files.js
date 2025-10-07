import { execSync } from "child_process";
import path from "path";

// --- Configuration ---
const ALLOWED_FOLDER = "src/data";
const EXCLUDED_ROOT_FILES = [
  "package.json",
  "package-lock.json",
  "README.md",
  "scripts/check-staged-files.js", // Exclude this script itself
  "src/data/template-user.js",
];

function checkStagedFiles() {
  try {
    // 1. Get the list of staged files
    const stagedFilesOutput = execSync("git diff --cached --name-only", {
      encoding: "utf-8",
    });
    const stagedFiles = stagedFilesOutput
      .trim()
      .split("\n")
      .filter((file) => file.length > 0);

    const unallowedFiles = stagedFiles.filter((filePath) => {
      // Check if the file is in the allowed folder
      const isAllowedFolder = filePath.startsWith(ALLOWED_FOLDER);

      // Check if the file is an excluded root file
      const isExcludedRootFile = EXCLUDED_ROOT_FILES.includes(
        path.normalize(filePath)
      );

      // The commit fails if the file is NOT in the allowed folder AND NOT an excluded root file
      return !isAllowedFolder && !isExcludedRootFile;
    });

    if (unallowedFiles.length > 0) {
      console.error(
        "\n❌ Commit Failed: You can only stage files within the `src/` folder (or essential root files).\n"
      );
      console.error("The following staged files are not permitted:");
      unallowedFiles.forEach((file) => console.error(` - ${file}`));
      console.error(
        "\nPlease unstage these files or move them into the `src/` folder."
      );

      // Abort the commit (exit with a non-zero code)
      process.exit(1);
    }

    console.log("✅ Staged file check passed.");
  } catch (error) {
    console.error(
      "An error occurred during the staged file check:",
      error.message
    );
    process.exit(1);
  }
}

checkStagedFiles();
