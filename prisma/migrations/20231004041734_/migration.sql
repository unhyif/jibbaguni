/*
  Warnings:

  - You are about to alter the column `link` on the `visitLog` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `url` on the `visitLogImage` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - Added the required column `memo` to the `visitLog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "visitLog" ADD COLUMN     "memo" TEXT NOT NULL,
ALTER COLUMN "link" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "visitLogImage" ALTER COLUMN "url" SET DATA TYPE VARCHAR(255);
