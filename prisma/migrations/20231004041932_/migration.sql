/*
  Warnings:

  - You are about to alter the column `memo` on the `visitLog` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE "visitLog" ALTER COLUMN "memo" SET DATA TYPE VARCHAR(255);
