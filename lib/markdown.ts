import fs from "fs";
import path from "path";

export function getMarkdownContent(filename: string): string {
  const docsDir = path.join(process.cwd(), "docs");
  const filePath = path.join(docsDir, filename);
  return fs.readFileSync(filePath, "utf8");
}
