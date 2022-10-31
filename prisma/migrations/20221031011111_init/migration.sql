-- CreateEnum
CREATE TYPE "GuiaStatus" AS ENUM ('Liberada', 'SobAuditoria', 'Cancelada', 'Negada');

-- CreateEnum
CREATE TYPE "GuiaTipos" AS ENUM ('Ambulatorial', 'Cirurgica');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('auditoria', 'regulacao', 'admin');

-- CreateTable
CREATE TABLE "customers" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "guias" (
    "id" SERIAL NOT NULL,
    "status" "GuiaStatus" NOT NULL DEFAULT 'Liberada',
    "tipo" "GuiaTipos" NOT NULL DEFAULT 'Ambulatorial',
    "data_emissao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_alteracao" TIMESTAMP(3) NOT NULL,
    "customer_id" INTEGER NOT NULL,
    "user_id" INTEGER,
    "solicitante_id" INTEGER NOT NULL,

    CONSTRAINT "guias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuarios" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prestadores" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "prestadores_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "customers_email_key" ON "customers"("email");

-- AddForeignKey
ALTER TABLE "guias" ADD CONSTRAINT "guias_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "guias" ADD CONSTRAINT "guias_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "guias" ADD CONSTRAINT "guias_solicitante_id_fkey" FOREIGN KEY ("solicitante_id") REFERENCES "prestadores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
