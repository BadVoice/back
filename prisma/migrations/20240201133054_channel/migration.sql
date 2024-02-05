-- CreateEnum
CREATE TYPE "ChannelType" AS ENUM ('Telegram', 'Vkontakte', 'WhatsApp');

-- CreateEnum
CREATE TYPE "ButtonType" AS ENUM ('LINK', 'TEXT');

-- CreateEnum
CREATE TYPE "ButtonDisplayType" AS ENUM ('INLINE', 'DEFAULT');

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Channel" (
    "id" SERIAL NOT NULL,
    "company_id" INTEGER NOT NULL,
    "channel_name" TEXT NOT NULL,
    "app_name" "ChannelType" NOT NULL,

    CONSTRAINT "Channel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" SERIAL NOT NULL,
    "text" TEXT,
    "channel_id" INTEGER NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Button" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "type" "ButtonType" NOT NULL,
    "display" "ButtonDisplayType" NOT NULL,
    "message_id" INTEGER,

    CONSTRAINT "Button_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Channel_company_id_app_name_key" ON "Channel"("company_id", "app_name");

-- AddForeignKey
ALTER TABLE "Channel" ADD CONSTRAINT "Channel_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_channel_id_fkey" FOREIGN KEY ("channel_id") REFERENCES "Channel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Button" ADD CONSTRAINT "Button_message_id_fkey" FOREIGN KEY ("message_id") REFERENCES "Message"("id") ON DELETE SET NULL ON UPDATE CASCADE;
