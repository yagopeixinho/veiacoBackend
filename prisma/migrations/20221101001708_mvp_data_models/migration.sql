-- CreateTable
CREATE TABLE "usuarios" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "veiacos" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "veiacos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dividas" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "dividas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_UserToVeiaco" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_DebtToVeiaco" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_UserToVeiaco_AB_unique" ON "_UserToVeiaco"("A", "B");

-- CreateIndex
CREATE INDEX "_UserToVeiaco_B_index" ON "_UserToVeiaco"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DebtToVeiaco_AB_unique" ON "_DebtToVeiaco"("A", "B");

-- CreateIndex
CREATE INDEX "_DebtToVeiaco_B_index" ON "_DebtToVeiaco"("B");

-- AddForeignKey
ALTER TABLE "_UserToVeiaco" ADD CONSTRAINT "_UserToVeiaco_A_fkey" FOREIGN KEY ("A") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserToVeiaco" ADD CONSTRAINT "_UserToVeiaco_B_fkey" FOREIGN KEY ("B") REFERENCES "veiacos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DebtToVeiaco" ADD CONSTRAINT "_DebtToVeiaco_A_fkey" FOREIGN KEY ("A") REFERENCES "dividas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DebtToVeiaco" ADD CONSTRAINT "_DebtToVeiaco_B_fkey" FOREIGN KEY ("B") REFERENCES "veiacos"("id") ON DELETE CASCADE ON UPDATE CASCADE;
