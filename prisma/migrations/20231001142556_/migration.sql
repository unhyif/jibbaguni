-- CreateEnum
CREATE TYPE "transactionTypeEnum" AS ENUM ('MONTHLY_RENT', 'JEONSE', 'SALE');

-- CreateEnum
CREATE TYPE "directionEnum" AS ENUM ('EAST', 'WEST', 'SOUTH', 'NORTH');

-- CreateEnum
CREATE TYPE "furnitureEnum" AS ENUM ('AIR_CONDITIONER', 'BED', 'CLOSET', 'DESK', 'FRIDGE', 'INDUCTION', 'MICROWAVE', 'SHOE_CLOSET', 'SINK', 'STOVE', 'TV', 'WASHING_MACHINE');

-- CreateTable
CREATE TABLE "userProfile" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "userProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "visitLog" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userProfileId" INTEGER NOT NULL,
    "link" TEXT,
    "address" JSONB,
    "realEstate" JSONB,
    "transactionType" "transactionTypeEnum",
    "price" INTEGER,
    "monthly" INTEGER,
    "maintenanceCost" INTEGER,
    "supplyArea" DOUBLE PRECISION,
    "exclusiveArea" DOUBLE PRECISION,
    "direction" "directionEnum",
    "floor" INTEGER,
    "hasElevator" BOOLEAN,
    "canPark" BOOLEAN,

    CONSTRAINT "visitLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "visitLogImage" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "visitLogId" INTEGER NOT NULL,

    CONSTRAINT "visitLogImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "furniture" (
    "id" SERIAL NOT NULL,
    "code" "furnitureEnum" NOT NULL,

    CONSTRAINT "furniture_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_furnitureTovisitLog" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_furnitureTovisitLog_AB_unique" ON "_furnitureTovisitLog"("A", "B");

-- CreateIndex
CREATE INDEX "_furnitureTovisitLog_B_index" ON "_furnitureTovisitLog"("B");

-- AddForeignKey
ALTER TABLE "visitLog" ADD CONSTRAINT "visitLog_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "userProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "visitLogImage" ADD CONSTRAINT "visitLogImage_visitLogId_fkey" FOREIGN KEY ("visitLogId") REFERENCES "visitLog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_furnitureTovisitLog" ADD CONSTRAINT "_furnitureTovisitLog_A_fkey" FOREIGN KEY ("A") REFERENCES "furniture"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_furnitureTovisitLog" ADD CONSTRAINT "_furnitureTovisitLog_B_fkey" FOREIGN KEY ("B") REFERENCES "visitLog"("id") ON DELETE CASCADE ON UPDATE CASCADE;
