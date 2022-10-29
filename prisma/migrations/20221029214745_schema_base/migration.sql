-- CreateEnum
CREATE TYPE "GuiaStatus" AS ENUM ('Liberada', 'PedidoExames');

-- CreateEnum
CREATE TYPE "GuiaTipos" AS ENUM ('Ambulatorial');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Guias" (
    "id" SERIAL NOT NULL,
    "status" "GuiaStatus" NOT NULL DEFAULT 'Liberada',
    "tipo" "GuiaTipos" NOT NULL DEFAULT 'Ambulatorial',
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Guias_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Guias" ADD CONSTRAINT "Guias_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
