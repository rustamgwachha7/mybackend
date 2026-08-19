/*
  Warnings:

  - You are about to drop the column `email` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Task` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "email",
DROP COLUMN "password",
ADD COLUMN     "description" TEXT;
