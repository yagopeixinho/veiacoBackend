-- CreateTable
CREATE TABLE "_DebtToUser" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_DebtToUser_AB_unique" ON "_DebtToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_DebtToUser_B_index" ON "_DebtToUser"("B");

-- AddForeignKey
ALTER TABLE "_DebtToUser" ADD CONSTRAINT "_DebtToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "dividas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DebtToUser" ADD CONSTRAINT "_DebtToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;
