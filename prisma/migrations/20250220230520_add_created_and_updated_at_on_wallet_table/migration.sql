-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cellphone" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wallets" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "balance" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "wallets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "credit_cards" (
    "id" TEXT NOT NULL,
    "walletId" TEXT NOT NULL,
    "cardName" TEXT NOT NULL,
    "limit" INTEGER NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "closingDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "credit_cards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "debit_cards" (
    "id" TEXT NOT NULL,
    "walletId" TEXT NOT NULL,
    "cardName" TEXT NOT NULL,
    "balance" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "debit_cards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "expenses" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "coast" INTEGER NOT NULL,
    "paymentType" TEXT NOT NULL,
    "paymentMethod" TEXT NOT NULL,
    "paymentDate" TIMESTAMP(3) NOT NULL,
    "purchaseDate" TIMESTAMP(3) NOT NULL,
    "installments" INTEGER,
    "status" TEXT NOT NULL,
    "walletId" TEXT,
    "creditCardId" TEXT,
    "debitCardId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "expenses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "amounts" (
    "id" TEXT NOT NULL,
    "desciption" TEXT NOT NULL,
    "amountType" TEXT NOT NULL,
    "walletId" TEXT,
    "debitCardId" TEXT,

    CONSTRAINT "amounts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_document_key" ON "users"("document");

-- CreateIndex
CREATE UNIQUE INDEX "wallets_userId_key" ON "wallets"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "expenses_walletId_key" ON "expenses"("walletId");

-- CreateIndex
CREATE UNIQUE INDEX "expenses_creditCardId_key" ON "expenses"("creditCardId");

-- CreateIndex
CREATE UNIQUE INDEX "expenses_debitCardId_key" ON "expenses"("debitCardId");

-- CreateIndex
CREATE UNIQUE INDEX "amounts_walletId_key" ON "amounts"("walletId");

-- CreateIndex
CREATE UNIQUE INDEX "amounts_debitCardId_key" ON "amounts"("debitCardId");

-- AddForeignKey
ALTER TABLE "wallets" ADD CONSTRAINT "wallets_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "credit_cards" ADD CONSTRAINT "credit_cards_walletId_fkey" FOREIGN KEY ("walletId") REFERENCES "wallets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "debit_cards" ADD CONSTRAINT "debit_cards_walletId_fkey" FOREIGN KEY ("walletId") REFERENCES "wallets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expenses" ADD CONSTRAINT "expenses_walletId_fkey" FOREIGN KEY ("walletId") REFERENCES "wallets"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expenses" ADD CONSTRAINT "expenses_creditCardId_fkey" FOREIGN KEY ("creditCardId") REFERENCES "credit_cards"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expenses" ADD CONSTRAINT "expenses_debitCardId_fkey" FOREIGN KEY ("debitCardId") REFERENCES "debit_cards"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "amounts" ADD CONSTRAINT "amounts_walletId_fkey" FOREIGN KEY ("walletId") REFERENCES "wallets"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "amounts" ADD CONSTRAINT "amounts_debitCardId_fkey" FOREIGN KEY ("debitCardId") REFERENCES "debit_cards"("id") ON DELETE SET NULL ON UPDATE CASCADE;
