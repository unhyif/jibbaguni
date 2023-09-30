-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "auth";

-- CreateEnum
CREATE TYPE "public"."TransactionTypeEnum" AS ENUM ('MONTHLY_RENT', 'JEONSE', 'SALE');

-- CreateEnum
CREATE TYPE "public"."DirectionEnum" AS ENUM ('EAST', 'WEST', 'SOUTH', 'NORTH');

-- CreateEnum
CREATE TYPE "public"."FurnitureEnum" AS ENUM ('AIR_CONDITIONER', 'BED', 'CLOSET', 'DESK', 'FRIDGE', 'INDUCTION', 'MICROWAVE', 'SHOE_CLOSET', 'SINK', 'STOVE', 'TV', 'WASHING_MACHINE');

-- CreateTable
CREATE TABLE "auth"."User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isAuthenticated" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."VisitLog" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "link" TEXT,
    "address" JSONB,
    "realEstate" JSONB,
    "transactionType" "public"."TransactionTypeEnum",
    "price" INTEGER,
    "monthly" INTEGER,
    "maintenanceCost" INTEGER,
    "supplyArea" DOUBLE PRECISION,
    "exclusiveArea" DOUBLE PRECISION,
    "direction" "public"."DirectionEnum",
    "floor" INTEGER,
    "hasElevator" BOOLEAN,
    "canPark" BOOLEAN,

    CONSTRAINT "VisitLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."VisitLogImage" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "visitLogId" INTEGER NOT NULL,

    CONSTRAINT "VisitLogImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Furniture" (
    "id" SERIAL NOT NULL,
    "code" "public"."FurnitureEnum" NOT NULL,

    CONSTRAINT "Furniture_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."_FurnitureToVisitLog" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "auth"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_FurnitureToVisitLog_AB_unique" ON "public"."_FurnitureToVisitLog"("A", "B");

-- CreateIndex
CREATE INDEX "_FurnitureToVisitLog_B_index" ON "public"."_FurnitureToVisitLog"("B");

-- AddForeignKey
ALTER TABLE "public"."VisitLog" ADD CONSTRAINT "VisitLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "auth"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."VisitLogImage" ADD CONSTRAINT "VisitLogImage_visitLogId_fkey" FOREIGN KEY ("visitLogId") REFERENCES "public"."VisitLog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_FurnitureToVisitLog" ADD CONSTRAINT "_FurnitureToVisitLog_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Furniture"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_FurnitureToVisitLog" ADD CONSTRAINT "_FurnitureToVisitLog_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."VisitLog"("id") ON DELETE CASCADE ON UPDATE CASCADE;
