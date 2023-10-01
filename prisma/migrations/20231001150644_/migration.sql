/*
  Warnings:

  - The primary key for the `userProfile` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `id` on the `userProfile` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `userProfileId` on the `visitLog` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "visitLog" DROP CONSTRAINT "visitLog_userProfileId_fkey";

-- AlterTable
ALTER TABLE "userProfile" DROP CONSTRAINT "userProfile_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "userProfile_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "visitLog" DROP COLUMN "userProfileId",
ADD COLUMN     "userProfileId" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "visitLog" ADD CONSTRAINT "visitLog_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "userProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
