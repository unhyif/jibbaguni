/*
  Warnings:

  - You are about to drop the column `code` on the `furniture` table. All the data in the column will be lost.
  - Added the required column `name` to the `furniture` table without a default value. This is not possible if the table is not empty.
  - Made the column `link` on table `visitLog` required. This step will fail if there are existing NULL values in that column.
  - Made the column `address` on table `visitLog` required. This step will fail if there are existing NULL values in that column.
  - Made the column `realEstate` on table `visitLog` required. This step will fail if there are existing NULL values in that column.
  - Made the column `transactionType` on table `visitLog` required. This step will fail if there are existing NULL values in that column.
  - Made the column `direction` on table `visitLog` required. This step will fail if there are existing NULL values in that column.
  - Made the column `hasElevator` on table `visitLog` required. This step will fail if there are existing NULL values in that column.
  - Made the column `canPark` on table `visitLog` required. This step will fail if there are existing NULL values in that column.
  - Made the column `memo` on table `visitLog` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "furnitureNameEnum" AS ENUM ('AIR_CONDITIONER', 'BED', 'CLOSET', 'DESK', 'FRIDGE', 'INDUCTION', 'MICROWAVE', 'SHOE_CLOSET', 'SINK', 'STOVE', 'TV', 'WASHING_MACHINE');

-- AlterTable
ALTER TABLE "furniture" DROP COLUMN "code",
ADD COLUMN     "name" "furnitureNameEnum" NOT NULL;

-- AlterTable
ALTER TABLE "visitLog" ALTER COLUMN "link" SET NOT NULL,
ALTER COLUMN "address" SET NOT NULL,
ALTER COLUMN "realEstate" SET NOT NULL,
ALTER COLUMN "transactionType" SET NOT NULL,
ALTER COLUMN "direction" SET NOT NULL,
ALTER COLUMN "hasElevator" SET NOT NULL,
ALTER COLUMN "hasElevator" SET DEFAULT false,
ALTER COLUMN "canPark" SET NOT NULL,
ALTER COLUMN "canPark" SET DEFAULT false,
ALTER COLUMN "memo" SET NOT NULL;

-- DropEnum
DROP TYPE "furnitureEnum";
