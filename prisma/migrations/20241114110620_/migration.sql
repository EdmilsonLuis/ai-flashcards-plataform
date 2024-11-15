/*
  Warnings:

  - You are about to drop the column `questions` on the `Set` table. All the data in the column will be lost.
  - Added the required column `cards` to the `Set` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `Set` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Set" DROP COLUMN "questions",
ADD COLUMN     "cards" JSONB NOT NULL,
ADD COLUMN     "content" TEXT NOT NULL,
ALTER COLUMN "description" DROP NOT NULL;
