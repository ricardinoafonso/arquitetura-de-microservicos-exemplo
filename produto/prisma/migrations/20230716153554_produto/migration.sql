/*
  Warnings:

  - Added the required column `code` to the `produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `produtos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "produtos" ADD COLUMN     "code" TEXT NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL;
