/*
  Warnings:

  - You are about to drop the column `display` on the `Button` table. All the data in the column will be lost.
  - You are about to drop the column `message_id` on the `Button` table. All the data in the column will be lost.
  - You are about to drop the column `text` on the `Button` table. All the data in the column will be lost.
  - Added the required column `content` to the `Button` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "KeyboardType" AS ENUM ('INLINE', 'DEFAULT');

-- DropForeignKey
ALTER TABLE "Button" DROP CONSTRAINT "Button_message_id_fkey";

-- AlterTable
ALTER TABLE "Button" DROP COLUMN "display",
DROP COLUMN "message_id",
DROP COLUMN "text",
ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "keyboard_id" INTEGER;

-- DropEnum
DROP TYPE "ButtonDisplayType";

-- CreateTable
CREATE TABLE "Keyboard" (
    "id" SERIAL NOT NULL,
    "type" "KeyboardType" NOT NULL,
    "message_id" INTEGER NOT NULL,

    CONSTRAINT "Keyboard_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Keyboard_message_id_key" ON "Keyboard"("message_id");

-- AddForeignKey
ALTER TABLE "Keyboard" ADD CONSTRAINT "Keyboard_message_id_fkey" FOREIGN KEY ("message_id") REFERENCES "Message"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Button" ADD CONSTRAINT "Button_keyboard_id_fkey" FOREIGN KEY ("keyboard_id") REFERENCES "Keyboard"("id") ON DELETE SET NULL ON UPDATE CASCADE;
