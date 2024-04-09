-- CreateTable
CREATE TABLE "Invention" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "nameOfInventor" TEXT NOT NULL,
    "nameOfInvention" TEXT NOT NULL,
    "priceForApproval" INTEGER NOT NULL,
    "imagePath" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isApproved" BOOLEAN NOT NULL DEFAULT false,
    "creationDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "approvedDate" DATETIME NOT NULL,
    "paidFor" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "Sales" (
    "salesId" TEXT NOT NULL,
    "january" INTEGER NOT NULL DEFAULT 0,
    "february" INTEGER NOT NULL DEFAULT 0,
    "march" INTEGER NOT NULL DEFAULT 0,
    "april" INTEGER NOT NULL DEFAULT 0,
    "may" INTEGER NOT NULL DEFAULT 0,
    "june" INTEGER NOT NULL DEFAULT 0,
    "july" INTEGER NOT NULL DEFAULT 0,
    "august" INTEGER NOT NULL DEFAULT 0,
    "september" INTEGER NOT NULL DEFAULT 0,
    "october" INTEGER NOT NULL DEFAULT 0,
    "november" INTEGER NOT NULL DEFAULT 0,
    "december" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "Sales_salesId_fkey" FOREIGN KEY ("salesId") REFERENCES "Invention" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Sales_salesId_key" ON "Sales"("salesId");
