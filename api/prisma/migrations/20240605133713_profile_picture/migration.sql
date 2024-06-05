/*
  Warnings:

  - Added the required column `profile_picture` to the `profiles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `posts` MODIFY `likes` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `profiles` ADD COLUMN `profile_picture` VARCHAR(191) NOT NULL;
