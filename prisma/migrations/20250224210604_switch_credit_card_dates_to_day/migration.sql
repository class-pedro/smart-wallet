/*
  Warnings:

  - You are about to drop the column `closingDate` on the `credit_cards` table. All the data in the column will be lost.
  - You are about to drop the column `dueDate` on the `credit_cards` table. All the data in the column will be lost.
  - Added the required column `closingDateDay` to the `credit_cards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dueDateDay` to the `credit_cards` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "credit_cards" DROP COLUMN "closingDate",
DROP COLUMN "dueDate",
ADD COLUMN     "closingDateDay" INTEGER NOT NULL,
ADD COLUMN     "dueDateDay" INTEGER NOT NULL;
