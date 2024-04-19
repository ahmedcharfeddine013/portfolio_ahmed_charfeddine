/*
  Warnings:

  - Added the required column `published` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "descripion" TEXT NOT NULL,
    "imagePath" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "githubLink" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL
);
INSERT INTO "new_Project" ("createdAt", "descripion", "githubLink", "id", "imagePath", "name", "updatedAt") SELECT "createdAt", "descripion", "githubLink", "id", "imagePath", "name", "updatedAt" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
