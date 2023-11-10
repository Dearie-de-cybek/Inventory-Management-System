/*
  Warnings:

  - You are about to drop the column `is_admin` on the `User` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('MECHANIC', 'SUPPLIER', 'ADMIN');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "is_admin",
ADD COLUMN     "user_role" "UserRole" NOT NULL DEFAULT 'MECHANIC';

-- CreateTable
CREATE TABLE "Parts" (
    "part_id" SERIAL NOT NULL,
    "part_name" TEXT NOT NULL,
    "part_number" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "quantity_in_stock" INTEGER NOT NULL,
    "reorder_threshold" INTEGER NOT NULL,
    "unit_price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Parts_pkey" PRIMARY KEY ("part_id")
);

-- CreateTable
CREATE TABLE "Suppliers" (
    "supplier_id" SERIAL NOT NULL,
    "supplier_name" TEXT NOT NULL,
    "contact_name" TEXT NOT NULL,
    "contact_email" TEXT NOT NULL,
    "contact_phone" TEXT NOT NULL,

    CONSTRAINT "Suppliers_pkey" PRIMARY KEY ("supplier_id")
);

-- CreateTable
CREATE TABLE "PurchaseOrders" (
    "order_id" SERIAL NOT NULL,
    "supplier_id" INTEGER NOT NULL,
    "order_date" TIMESTAMP(3) NOT NULL,
    "expected_delivery_date" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,
    "total_cost" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "PurchaseOrders_pkey" PRIMARY KEY ("order_id")
);

-- CreateTable
CREATE TABLE "OrderItems" (
    "order_item_id" SERIAL NOT NULL,
    "order_id" INTEGER NOT NULL,
    "part_id" INTEGER NOT NULL,
    "quantity_ordered" INTEGER NOT NULL,
    "unit_price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "OrderItems_pkey" PRIMARY KEY ("order_item_id")
);

-- CreateTable
CREATE TABLE "SalesOrders" (
    "order_id" SERIAL NOT NULL,
    "customer_name" TEXT NOT NULL,
    "order_date" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,
    "total_price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "SalesOrders_pkey" PRIMARY KEY ("order_id")
);

-- CreateTable
CREATE TABLE "SalesOrderItems" (
    "order_item_id" SERIAL NOT NULL,
    "order_id" INTEGER NOT NULL,
    "part_id" INTEGER NOT NULL,
    "quantity_sold" INTEGER NOT NULL,
    "unit_price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "SalesOrderItems_pkey" PRIMARY KEY ("order_item_id")
);

-- CreateTable
CREATE TABLE "Customers" (
    "customer_id" SERIAL NOT NULL,
    "customer_name" TEXT NOT NULL,
    "customer_email" TEXT NOT NULL,
    "customer_phone" TEXT NOT NULL,

    CONSTRAINT "Customers_pkey" PRIMARY KEY ("customer_id")
);

-- CreateTable
CREATE TABLE "InventoryTransactions" (
    "transaction_id" SERIAL NOT NULL,
    "part_id" INTEGER NOT NULL,
    "quantity_change" INTEGER NOT NULL,
    "transaction_date" TIMESTAMP(3) NOT NULL,
    "transaction_type" TEXT NOT NULL,
    "related_order_id" INTEGER,

    CONSTRAINT "InventoryTransactions_pkey" PRIMARY KEY ("transaction_id")
);

-- CreateTable
CREATE TABLE "Adjustments" (
    "adjustment_id" SERIAL NOT NULL,
    "part_id" INTEGER NOT NULL,
    "adjustment_reason" TEXT NOT NULL,
    "quantity_change" INTEGER NOT NULL,
    "adjustment_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Adjustments_pkey" PRIMARY KEY ("adjustment_id")
);
