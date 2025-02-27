-- DropForeignKey
ALTER TABLE "amounts" DROP CONSTRAINT "amounts_debitCardId_fkey";

-- DropForeignKey
ALTER TABLE "amounts" DROP CONSTRAINT "amounts_walletId_fkey";

-- DropForeignKey
ALTER TABLE "expenses" DROP CONSTRAINT "expenses_creditCardId_fkey";

-- DropForeignKey
ALTER TABLE "expenses" DROP CONSTRAINT "expenses_debitCardId_fkey";

-- DropForeignKey
ALTER TABLE "expenses" DROP CONSTRAINT "expenses_walletId_fkey";

-- AddForeignKey
ALTER TABLE "expenses" ADD CONSTRAINT "expenses_walletId_fkey" FOREIGN KEY ("walletId") REFERENCES "wallets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expenses" ADD CONSTRAINT "expenses_creditCardId_fkey" FOREIGN KEY ("creditCardId") REFERENCES "credit_cards"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expenses" ADD CONSTRAINT "expenses_debitCardId_fkey" FOREIGN KEY ("debitCardId") REFERENCES "debit_cards"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "amounts" ADD CONSTRAINT "amounts_walletId_fkey" FOREIGN KEY ("walletId") REFERENCES "wallets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "amounts" ADD CONSTRAINT "amounts_debitCardId_fkey" FOREIGN KEY ("debitCardId") REFERENCES "debit_cards"("id") ON DELETE CASCADE ON UPDATE CASCADE;
