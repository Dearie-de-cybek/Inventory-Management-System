
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.16.2
 * Query Engine version: 4bc8b6e1b66cb932731fb1bdbbc550d1e010de81
 */
Prisma.prismaVersion = {
  client: "4.16.2",
  engine: "4bc8b6e1b66cb932731fb1bdbbc550d1e010de81"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  first_name: 'first_name',
  last_name: 'last_name',
  profile_pic: 'profile_pic',
  email: 'email',
  phone: 'phone',
  password_hash: 'password_hash',
  user_role: 'user_role'
};

exports.Prisma.PartsScalarFieldEnum = {
  part_id: 'part_id',
  part_name: 'part_name',
  part_number: 'part_number',
  description: 'description',
  category: 'category',
  quantity_in_stock: 'quantity_in_stock',
  reorder_threshold: 'reorder_threshold',
  unit_price: 'unit_price'
};

exports.Prisma.SuppliersScalarFieldEnum = {
  supplier_id: 'supplier_id',
  supplier_name: 'supplier_name',
  contact_name: 'contact_name',
  contact_email: 'contact_email',
  contact_phone: 'contact_phone'
};

exports.Prisma.PurchaseOrdersScalarFieldEnum = {
  order_id: 'order_id',
  supplier_id: 'supplier_id',
  order_date: 'order_date',
  expected_delivery_date: 'expected_delivery_date',
  status: 'status',
  total_cost: 'total_cost'
};

exports.Prisma.OrderItemsScalarFieldEnum = {
  order_item_id: 'order_item_id',
  order_id: 'order_id',
  part_id: 'part_id',
  quantity_ordered: 'quantity_ordered',
  unit_price: 'unit_price'
};

exports.Prisma.SalesOrdersScalarFieldEnum = {
  order_id: 'order_id',
  customer_name: 'customer_name',
  order_date: 'order_date',
  status: 'status',
  total_price: 'total_price'
};

exports.Prisma.SalesOrderItemsScalarFieldEnum = {
  order_item_id: 'order_item_id',
  order_id: 'order_id',
  part_id: 'part_id',
  quantity_sold: 'quantity_sold',
  unit_price: 'unit_price'
};

exports.Prisma.CustomersScalarFieldEnum = {
  customer_id: 'customer_id',
  customer_name: 'customer_name',
  customer_email: 'customer_email',
  customer_phone: 'customer_phone'
};

exports.Prisma.InventoryTransactionsScalarFieldEnum = {
  transaction_id: 'transaction_id',
  part_id: 'part_id',
  quantity_change: 'quantity_change',
  transaction_date: 'transaction_date',
  transaction_type: 'transaction_type',
  related_order_id: 'related_order_id'
};

exports.Prisma.AdjustmentsScalarFieldEnum = {
  adjustment_id: 'adjustment_id',
  part_id: 'part_id',
  adjustment_reason: 'adjustment_reason',
  quantity_change: 'quantity_change',
  adjustment_date: 'adjustment_date'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.UserRole = {
  MECHANIC: 'MECHANIC',
  SUPPLIER: 'SUPPLIER',
  ADMIN: 'ADMIN'
};

exports.Prisma.ModelName = {
  User: 'User',
  Parts: 'Parts',
  Suppliers: 'Suppliers',
  PurchaseOrders: 'PurchaseOrders',
  OrderItems: 'OrderItems',
  SalesOrders: 'SalesOrders',
  SalesOrderItems: 'SalesOrderItems',
  Customers: 'Customers',
  InventoryTransactions: 'InventoryTransactions',
  Adjustments: 'Adjustments'
};

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
