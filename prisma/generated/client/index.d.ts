
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions

export type PrismaPromise<T> = $Public.PrismaPromise<T>


export type UserPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "User"
  objects: {}
  scalars: $Extensions.GetResult<{
    id: number
    first_name: string | null
    last_name: string | null
    profile_pic: string | null
    email: string
    phone: string | null
    password_hash: string
    user_role: UserRole
  }, ExtArgs["result"]["user"]>
  composites: {}
}

/**
 * Model User
 * 
 */
export type User = runtime.Types.DefaultSelection<UserPayload>
export type PartsPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Parts"
  objects: {}
  scalars: $Extensions.GetResult<{
    part_id: number
    part_name: string
    part_number: string
    description: string
    category: string
    quantity_in_stock: number
    reorder_threshold: number
    unit_price: number
  }, ExtArgs["result"]["parts"]>
  composites: {}
}

/**
 * Model Parts
 * 
 */
export type Parts = runtime.Types.DefaultSelection<PartsPayload>
export type SuppliersPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Suppliers"
  objects: {}
  scalars: $Extensions.GetResult<{
    supplier_id: number
    supplier_name: string
    contact_name: string
    contact_email: string
    contact_phone: string
  }, ExtArgs["result"]["suppliers"]>
  composites: {}
}

/**
 * Model Suppliers
 * 
 */
export type Suppliers = runtime.Types.DefaultSelection<SuppliersPayload>
export type PurchaseOrdersPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "PurchaseOrders"
  objects: {}
  scalars: $Extensions.GetResult<{
    order_id: number
    supplier_id: number
    order_date: Date
    expected_delivery_date: Date
    status: string
    total_cost: number
  }, ExtArgs["result"]["purchaseOrders"]>
  composites: {}
}

/**
 * Model PurchaseOrders
 * 
 */
export type PurchaseOrders = runtime.Types.DefaultSelection<PurchaseOrdersPayload>
export type OrderItemsPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "OrderItems"
  objects: {}
  scalars: $Extensions.GetResult<{
    order_item_id: number
    order_id: number
    part_id: number
    quantity_ordered: number
    unit_price: number
  }, ExtArgs["result"]["orderItems"]>
  composites: {}
}

/**
 * Model OrderItems
 * 
 */
export type OrderItems = runtime.Types.DefaultSelection<OrderItemsPayload>
export type SalesOrdersPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "SalesOrders"
  objects: {}
  scalars: $Extensions.GetResult<{
    order_id: number
    customer_name: string
    order_date: Date
    status: string
    total_price: number
  }, ExtArgs["result"]["salesOrders"]>
  composites: {}
}

/**
 * Model SalesOrders
 * 
 */
export type SalesOrders = runtime.Types.DefaultSelection<SalesOrdersPayload>
export type SalesOrderItemsPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "SalesOrderItems"
  objects: {}
  scalars: $Extensions.GetResult<{
    order_item_id: number
    order_id: number
    part_id: number
    quantity_sold: number
    unit_price: number
  }, ExtArgs["result"]["salesOrderItems"]>
  composites: {}
}

/**
 * Model SalesOrderItems
 * 
 */
export type SalesOrderItems = runtime.Types.DefaultSelection<SalesOrderItemsPayload>
export type CustomersPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Customers"
  objects: {}
  scalars: $Extensions.GetResult<{
    customer_id: number
    customer_name: string
    customer_email: string
    customer_phone: string
  }, ExtArgs["result"]["customers"]>
  composites: {}
}

/**
 * Model Customers
 * 
 */
export type Customers = runtime.Types.DefaultSelection<CustomersPayload>
export type InventoryTransactionsPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "InventoryTransactions"
  objects: {}
  scalars: $Extensions.GetResult<{
    transaction_id: number
    part_id: number
    quantity_change: number
    transaction_date: Date
    transaction_type: string
    related_order_id: number | null
  }, ExtArgs["result"]["inventoryTransactions"]>
  composites: {}
}

/**
 * Model InventoryTransactions
 * 
 */
export type InventoryTransactions = runtime.Types.DefaultSelection<InventoryTransactionsPayload>
export type AdjustmentsPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Adjustments"
  objects: {}
  scalars: $Extensions.GetResult<{
    adjustment_id: number
    part_id: number
    adjustment_reason: string
    quantity_change: number
    adjustment_date: Date
  }, ExtArgs["result"]["adjustments"]>
  composites: {}
}

/**
 * Model Adjustments
 * 
 */
export type Adjustments = runtime.Types.DefaultSelection<AdjustmentsPayload>

/**
 * Enums
 */

export const UserRole: {
  MECHANIC: 'MECHANIC',
  SUPPLIER: 'SUPPLIER',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.parts`: Exposes CRUD operations for the **Parts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parts
    * const parts = await prisma.parts.findMany()
    * ```
    */
  get parts(): Prisma.PartsDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.suppliers`: Exposes CRUD operations for the **Suppliers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suppliers
    * const suppliers = await prisma.suppliers.findMany()
    * ```
    */
  get suppliers(): Prisma.SuppliersDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.purchaseOrders`: Exposes CRUD operations for the **PurchaseOrders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PurchaseOrders
    * const purchaseOrders = await prisma.purchaseOrders.findMany()
    * ```
    */
  get purchaseOrders(): Prisma.PurchaseOrdersDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.orderItems`: Exposes CRUD operations for the **OrderItems** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItems.findMany()
    * ```
    */
  get orderItems(): Prisma.OrderItemsDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.salesOrders`: Exposes CRUD operations for the **SalesOrders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SalesOrders
    * const salesOrders = await prisma.salesOrders.findMany()
    * ```
    */
  get salesOrders(): Prisma.SalesOrdersDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.salesOrderItems`: Exposes CRUD operations for the **SalesOrderItems** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SalesOrderItems
    * const salesOrderItems = await prisma.salesOrderItems.findMany()
    * ```
    */
  get salesOrderItems(): Prisma.SalesOrderItemsDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.customers`: Exposes CRUD operations for the **Customers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customers.findMany()
    * ```
    */
  get customers(): Prisma.CustomersDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.inventoryTransactions`: Exposes CRUD operations for the **InventoryTransactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryTransactions
    * const inventoryTransactions = await prisma.inventoryTransactions.findMany()
    * ```
    */
  get inventoryTransactions(): Prisma.InventoryTransactionsDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.adjustments`: Exposes CRUD operations for the **Adjustments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Adjustments
    * const adjustments = await prisma.adjustments.findMany()
    * ```
    */
  get adjustments(): Prisma.AdjustmentsDelegate<GlobalReject, ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export type Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export type Args<T, F extends $Public.Operation> = $Public.Args<T, F>
  export type Payload<T, F extends $Public.Operation> = $Public.Payload<T, F>
  export type Result<T, A, F extends $Public.Operation> = $Public.Result<T, A, F>
  export type Exact<T, W> = $Public.Exact<T, W>

  /**
   * Prisma Client JS version: 4.16.2
   * Query Engine version: 4bc8b6e1b66cb932731fb1bdbbc550d1e010de81
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'parts' | 'suppliers' | 'purchaseOrders' | 'orderItems' | 'salesOrders' | 'salesOrderItems' | 'customers' | 'inventoryTransactions' | 'adjustments'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: UserPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Parts: {
        payload: PartsPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.PartsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PartsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PartsPayload>
          }
          findFirst: {
            args: Prisma.PartsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PartsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PartsPayload>
          }
          findMany: {
            args: Prisma.PartsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PartsPayload>[]
          }
          create: {
            args: Prisma.PartsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PartsPayload>
          }
          createMany: {
            args: Prisma.PartsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PartsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PartsPayload>
          }
          update: {
            args: Prisma.PartsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PartsPayload>
          }
          deleteMany: {
            args: Prisma.PartsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PartsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PartsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PartsPayload>
          }
          aggregate: {
            args: Prisma.PartsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateParts>
          }
          groupBy: {
            args: Prisma.PartsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PartsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartsCountArgs<ExtArgs>,
            result: $Utils.Optional<PartsCountAggregateOutputType> | number
          }
        }
      }
      Suppliers: {
        payload: SuppliersPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.SuppliersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SuppliersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SuppliersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SuppliersPayload>
          }
          findFirst: {
            args: Prisma.SuppliersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SuppliersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SuppliersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SuppliersPayload>
          }
          findMany: {
            args: Prisma.SuppliersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SuppliersPayload>[]
          }
          create: {
            args: Prisma.SuppliersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SuppliersPayload>
          }
          createMany: {
            args: Prisma.SuppliersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SuppliersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SuppliersPayload>
          }
          update: {
            args: Prisma.SuppliersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SuppliersPayload>
          }
          deleteMany: {
            args: Prisma.SuppliersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SuppliersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SuppliersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SuppliersPayload>
          }
          aggregate: {
            args: Prisma.SuppliersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSuppliers>
          }
          groupBy: {
            args: Prisma.SuppliersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SuppliersGroupByOutputType>[]
          }
          count: {
            args: Prisma.SuppliersCountArgs<ExtArgs>,
            result: $Utils.Optional<SuppliersCountAggregateOutputType> | number
          }
        }
      }
      PurchaseOrders: {
        payload: PurchaseOrdersPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.PurchaseOrdersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PurchaseOrdersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseOrdersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PurchaseOrdersPayload>
          }
          findFirst: {
            args: Prisma.PurchaseOrdersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PurchaseOrdersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseOrdersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PurchaseOrdersPayload>
          }
          findMany: {
            args: Prisma.PurchaseOrdersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PurchaseOrdersPayload>[]
          }
          create: {
            args: Prisma.PurchaseOrdersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PurchaseOrdersPayload>
          }
          createMany: {
            args: Prisma.PurchaseOrdersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PurchaseOrdersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PurchaseOrdersPayload>
          }
          update: {
            args: Prisma.PurchaseOrdersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PurchaseOrdersPayload>
          }
          deleteMany: {
            args: Prisma.PurchaseOrdersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseOrdersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PurchaseOrdersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PurchaseOrdersPayload>
          }
          aggregate: {
            args: Prisma.PurchaseOrdersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePurchaseOrders>
          }
          groupBy: {
            args: Prisma.PurchaseOrdersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PurchaseOrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseOrdersCountArgs<ExtArgs>,
            result: $Utils.Optional<PurchaseOrdersCountAggregateOutputType> | number
          }
        }
      }
      OrderItems: {
        payload: OrderItemsPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.OrderItemsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OrderItemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OrderItemsPayload>
          }
          findFirst: {
            args: Prisma.OrderItemsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OrderItemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OrderItemsPayload>
          }
          findMany: {
            args: Prisma.OrderItemsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OrderItemsPayload>[]
          }
          create: {
            args: Prisma.OrderItemsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OrderItemsPayload>
          }
          createMany: {
            args: Prisma.OrderItemsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.OrderItemsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OrderItemsPayload>
          }
          update: {
            args: Prisma.OrderItemsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OrderItemsPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OrderItemsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<OrderItemsPayload>
          }
          aggregate: {
            args: Prisma.OrderItemsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrderItems>
          }
          groupBy: {
            args: Prisma.OrderItemsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OrderItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemsCountArgs<ExtArgs>,
            result: $Utils.Optional<OrderItemsCountAggregateOutputType> | number
          }
        }
      }
      SalesOrders: {
        payload: SalesOrdersPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.SalesOrdersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SalesOrdersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalesOrdersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SalesOrdersPayload>
          }
          findFirst: {
            args: Prisma.SalesOrdersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SalesOrdersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalesOrdersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SalesOrdersPayload>
          }
          findMany: {
            args: Prisma.SalesOrdersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SalesOrdersPayload>[]
          }
          create: {
            args: Prisma.SalesOrdersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SalesOrdersPayload>
          }
          createMany: {
            args: Prisma.SalesOrdersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SalesOrdersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SalesOrdersPayload>
          }
          update: {
            args: Prisma.SalesOrdersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SalesOrdersPayload>
          }
          deleteMany: {
            args: Prisma.SalesOrdersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SalesOrdersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SalesOrdersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SalesOrdersPayload>
          }
          aggregate: {
            args: Prisma.SalesOrdersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSalesOrders>
          }
          groupBy: {
            args: Prisma.SalesOrdersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SalesOrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalesOrdersCountArgs<ExtArgs>,
            result: $Utils.Optional<SalesOrdersCountAggregateOutputType> | number
          }
        }
      }
      SalesOrderItems: {
        payload: SalesOrderItemsPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.SalesOrderItemsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SalesOrderItemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalesOrderItemsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SalesOrderItemsPayload>
          }
          findFirst: {
            args: Prisma.SalesOrderItemsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SalesOrderItemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalesOrderItemsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SalesOrderItemsPayload>
          }
          findMany: {
            args: Prisma.SalesOrderItemsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SalesOrderItemsPayload>[]
          }
          create: {
            args: Prisma.SalesOrderItemsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SalesOrderItemsPayload>
          }
          createMany: {
            args: Prisma.SalesOrderItemsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SalesOrderItemsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SalesOrderItemsPayload>
          }
          update: {
            args: Prisma.SalesOrderItemsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SalesOrderItemsPayload>
          }
          deleteMany: {
            args: Prisma.SalesOrderItemsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SalesOrderItemsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SalesOrderItemsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SalesOrderItemsPayload>
          }
          aggregate: {
            args: Prisma.SalesOrderItemsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSalesOrderItems>
          }
          groupBy: {
            args: Prisma.SalesOrderItemsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SalesOrderItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalesOrderItemsCountArgs<ExtArgs>,
            result: $Utils.Optional<SalesOrderItemsCountAggregateOutputType> | number
          }
        }
      }
      Customers: {
        payload: CustomersPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.CustomersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CustomersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CustomersPayload>
          }
          findFirst: {
            args: Prisma.CustomersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CustomersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CustomersPayload>
          }
          findMany: {
            args: Prisma.CustomersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CustomersPayload>[]
          }
          create: {
            args: Prisma.CustomersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CustomersPayload>
          }
          createMany: {
            args: Prisma.CustomersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CustomersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CustomersPayload>
          }
          update: {
            args: Prisma.CustomersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CustomersPayload>
          }
          deleteMany: {
            args: Prisma.CustomersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CustomersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CustomersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CustomersPayload>
          }
          aggregate: {
            args: Prisma.CustomersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCustomers>
          }
          groupBy: {
            args: Prisma.CustomersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CustomersGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomersCountArgs<ExtArgs>,
            result: $Utils.Optional<CustomersCountAggregateOutputType> | number
          }
        }
      }
      InventoryTransactions: {
        payload: InventoryTransactionsPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.InventoryTransactionsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<InventoryTransactionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryTransactionsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<InventoryTransactionsPayload>
          }
          findFirst: {
            args: Prisma.InventoryTransactionsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<InventoryTransactionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryTransactionsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<InventoryTransactionsPayload>
          }
          findMany: {
            args: Prisma.InventoryTransactionsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<InventoryTransactionsPayload>[]
          }
          create: {
            args: Prisma.InventoryTransactionsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<InventoryTransactionsPayload>
          }
          createMany: {
            args: Prisma.InventoryTransactionsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.InventoryTransactionsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<InventoryTransactionsPayload>
          }
          update: {
            args: Prisma.InventoryTransactionsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<InventoryTransactionsPayload>
          }
          deleteMany: {
            args: Prisma.InventoryTransactionsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryTransactionsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.InventoryTransactionsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<InventoryTransactionsPayload>
          }
          aggregate: {
            args: Prisma.InventoryTransactionsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateInventoryTransactions>
          }
          groupBy: {
            args: Prisma.InventoryTransactionsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<InventoryTransactionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryTransactionsCountArgs<ExtArgs>,
            result: $Utils.Optional<InventoryTransactionsCountAggregateOutputType> | number
          }
        }
      }
      Adjustments: {
        payload: AdjustmentsPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.AdjustmentsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AdjustmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdjustmentsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AdjustmentsPayload>
          }
          findFirst: {
            args: Prisma.AdjustmentsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AdjustmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdjustmentsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AdjustmentsPayload>
          }
          findMany: {
            args: Prisma.AdjustmentsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AdjustmentsPayload>[]
          }
          create: {
            args: Prisma.AdjustmentsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AdjustmentsPayload>
          }
          createMany: {
            args: Prisma.AdjustmentsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AdjustmentsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AdjustmentsPayload>
          }
          update: {
            args: Prisma.AdjustmentsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AdjustmentsPayload>
          }
          deleteMany: {
            args: Prisma.AdjustmentsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AdjustmentsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AdjustmentsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AdjustmentsPayload>
          }
          aggregate: {
            args: Prisma.AdjustmentsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAdjustments>
          }
          groupBy: {
            args: Prisma.AdjustmentsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AdjustmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdjustmentsCountArgs<ExtArgs>,
            result: $Utils.Optional<AdjustmentsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    profile_pic: string | null
    email: string | null
    phone: string | null
    password_hash: string | null
    user_role: UserRole | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    profile_pic: string | null
    email: string | null
    phone: string | null
    password_hash: string | null
    user_role: UserRole | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    first_name: number
    last_name: number
    profile_pic: number
    email: number
    phone: number
    password_hash: number
    user_role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    profile_pic?: true
    email?: true
    phone?: true
    password_hash?: true
    user_role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    profile_pic?: true
    email?: true
    phone?: true
    password_hash?: true
    user_role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    profile_pic?: true
    email?: true
    phone?: true
    password_hash?: true
    user_role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    first_name: string | null
    last_name: string | null
    profile_pic: string | null
    email: string
    phone: string | null
    password_hash: string
    user_role: UserRole
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    profile_pic?: boolean
    email?: boolean
    phone?: boolean
    password_hash?: boolean
    user_role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    profile_pic?: boolean
    email?: boolean
    phone?: boolean
    password_hash?: boolean
    user_role?: boolean
  }


  type UserGetPayload<S extends boolean | null | undefined | UserArgs> = $Types.GetResult<UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<UserPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends UserFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends UserFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
  }



  /**
   * Model Parts
   */


  export type AggregateParts = {
    _count: PartsCountAggregateOutputType | null
    _avg: PartsAvgAggregateOutputType | null
    _sum: PartsSumAggregateOutputType | null
    _min: PartsMinAggregateOutputType | null
    _max: PartsMaxAggregateOutputType | null
  }

  export type PartsAvgAggregateOutputType = {
    part_id: number | null
    quantity_in_stock: number | null
    reorder_threshold: number | null
    unit_price: number | null
  }

  export type PartsSumAggregateOutputType = {
    part_id: number | null
    quantity_in_stock: number | null
    reorder_threshold: number | null
    unit_price: number | null
  }

  export type PartsMinAggregateOutputType = {
    part_id: number | null
    part_name: string | null
    part_number: string | null
    description: string | null
    category: string | null
    quantity_in_stock: number | null
    reorder_threshold: number | null
    unit_price: number | null
  }

  export type PartsMaxAggregateOutputType = {
    part_id: number | null
    part_name: string | null
    part_number: string | null
    description: string | null
    category: string | null
    quantity_in_stock: number | null
    reorder_threshold: number | null
    unit_price: number | null
  }

  export type PartsCountAggregateOutputType = {
    part_id: number
    part_name: number
    part_number: number
    description: number
    category: number
    quantity_in_stock: number
    reorder_threshold: number
    unit_price: number
    _all: number
  }


  export type PartsAvgAggregateInputType = {
    part_id?: true
    quantity_in_stock?: true
    reorder_threshold?: true
    unit_price?: true
  }

  export type PartsSumAggregateInputType = {
    part_id?: true
    quantity_in_stock?: true
    reorder_threshold?: true
    unit_price?: true
  }

  export type PartsMinAggregateInputType = {
    part_id?: true
    part_name?: true
    part_number?: true
    description?: true
    category?: true
    quantity_in_stock?: true
    reorder_threshold?: true
    unit_price?: true
  }

  export type PartsMaxAggregateInputType = {
    part_id?: true
    part_name?: true
    part_number?: true
    description?: true
    category?: true
    quantity_in_stock?: true
    reorder_threshold?: true
    unit_price?: true
  }

  export type PartsCountAggregateInputType = {
    part_id?: true
    part_name?: true
    part_number?: true
    description?: true
    category?: true
    quantity_in_stock?: true
    reorder_threshold?: true
    unit_price?: true
    _all?: true
  }

  export type PartsAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parts to aggregate.
     */
    where?: PartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parts to fetch.
     */
    orderBy?: Enumerable<PartsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parts
    **/
    _count?: true | PartsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PartsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PartsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartsMaxAggregateInputType
  }

  export type GetPartsAggregateType<T extends PartsAggregateArgs> = {
        [P in keyof T & keyof AggregateParts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParts[P]>
      : GetScalarType<T[P], AggregateParts[P]>
  }




  export type PartsGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PartsWhereInput
    orderBy?: Enumerable<PartsOrderByWithAggregationInput>
    by: PartsScalarFieldEnum[]
    having?: PartsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartsCountAggregateInputType | true
    _avg?: PartsAvgAggregateInputType
    _sum?: PartsSumAggregateInputType
    _min?: PartsMinAggregateInputType
    _max?: PartsMaxAggregateInputType
  }


  export type PartsGroupByOutputType = {
    part_id: number
    part_name: string
    part_number: string
    description: string
    category: string
    quantity_in_stock: number
    reorder_threshold: number
    unit_price: number
    _count: PartsCountAggregateOutputType | null
    _avg: PartsAvgAggregateOutputType | null
    _sum: PartsSumAggregateOutputType | null
    _min: PartsMinAggregateOutputType | null
    _max: PartsMaxAggregateOutputType | null
  }

  type GetPartsGroupByPayload<T extends PartsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PartsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartsGroupByOutputType[P]>
            : GetScalarType<T[P], PartsGroupByOutputType[P]>
        }
      >
    >


  export type PartsSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    part_id?: boolean
    part_name?: boolean
    part_number?: boolean
    description?: boolean
    category?: boolean
    quantity_in_stock?: boolean
    reorder_threshold?: boolean
    unit_price?: boolean
  }, ExtArgs["result"]["parts"]>

  export type PartsSelectScalar = {
    part_id?: boolean
    part_name?: boolean
    part_number?: boolean
    description?: boolean
    category?: boolean
    quantity_in_stock?: boolean
    reorder_threshold?: boolean
    unit_price?: boolean
  }


  type PartsGetPayload<S extends boolean | null | undefined | PartsArgs> = $Types.GetResult<PartsPayload, S>

  type PartsCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<PartsFindManyArgs, 'select' | 'include'> & {
      select?: PartsCountAggregateInputType | true
    }

  export interface PartsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Parts'], meta: { name: 'Parts' } }
    /**
     * Find zero or one Parts that matches the filter.
     * @param {PartsFindUniqueArgs} args - Arguments to find a Parts
     * @example
     * // Get one Parts
     * const parts = await prisma.parts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PartsFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PartsFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Parts'> extends True ? Prisma__PartsClient<$Types.GetResult<PartsPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__PartsClient<$Types.GetResult<PartsPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Parts that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PartsFindUniqueOrThrowArgs} args - Arguments to find a Parts
     * @example
     * // Get one Parts
     * const parts = await prisma.parts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PartsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PartsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PartsClient<$Types.GetResult<PartsPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Parts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartsFindFirstArgs} args - Arguments to find a Parts
     * @example
     * // Get one Parts
     * const parts = await prisma.parts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PartsFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PartsFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Parts'> extends True ? Prisma__PartsClient<$Types.GetResult<PartsPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__PartsClient<$Types.GetResult<PartsPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Parts that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartsFindFirstOrThrowArgs} args - Arguments to find a Parts
     * @example
     * // Get one Parts
     * const parts = await prisma.parts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PartsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PartsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PartsClient<$Types.GetResult<PartsPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Parts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parts
     * const parts = await prisma.parts.findMany()
     * 
     * // Get first 10 Parts
     * const parts = await prisma.parts.findMany({ take: 10 })
     * 
     * // Only select the `part_id`
     * const partsWithPart_idOnly = await prisma.parts.findMany({ select: { part_id: true } })
     * 
    **/
    findMany<T extends PartsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PartsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<PartsPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Parts.
     * @param {PartsCreateArgs} args - Arguments to create a Parts.
     * @example
     * // Create one Parts
     * const Parts = await prisma.parts.create({
     *   data: {
     *     // ... data to create a Parts
     *   }
     * })
     * 
    **/
    create<T extends PartsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PartsCreateArgs<ExtArgs>>
    ): Prisma__PartsClient<$Types.GetResult<PartsPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Parts.
     *     @param {PartsCreateManyArgs} args - Arguments to create many Parts.
     *     @example
     *     // Create many Parts
     *     const parts = await prisma.parts.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PartsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PartsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Parts.
     * @param {PartsDeleteArgs} args - Arguments to delete one Parts.
     * @example
     * // Delete one Parts
     * const Parts = await prisma.parts.delete({
     *   where: {
     *     // ... filter to delete one Parts
     *   }
     * })
     * 
    **/
    delete<T extends PartsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PartsDeleteArgs<ExtArgs>>
    ): Prisma__PartsClient<$Types.GetResult<PartsPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Parts.
     * @param {PartsUpdateArgs} args - Arguments to update one Parts.
     * @example
     * // Update one Parts
     * const parts = await prisma.parts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PartsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PartsUpdateArgs<ExtArgs>>
    ): Prisma__PartsClient<$Types.GetResult<PartsPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Parts.
     * @param {PartsDeleteManyArgs} args - Arguments to filter Parts to delete.
     * @example
     * // Delete a few Parts
     * const { count } = await prisma.parts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PartsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PartsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parts
     * const parts = await prisma.parts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PartsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PartsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Parts.
     * @param {PartsUpsertArgs} args - Arguments to update or create a Parts.
     * @example
     * // Update or create a Parts
     * const parts = await prisma.parts.upsert({
     *   create: {
     *     // ... data to create a Parts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parts we want to update
     *   }
     * })
    **/
    upsert<T extends PartsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PartsUpsertArgs<ExtArgs>>
    ): Prisma__PartsClient<$Types.GetResult<PartsPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Parts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartsCountArgs} args - Arguments to filter Parts to count.
     * @example
     * // Count the number of Parts
     * const count = await prisma.parts.count({
     *   where: {
     *     // ... the filter for the Parts we want to count
     *   }
     * })
    **/
    count<T extends PartsCountArgs>(
      args?: Subset<T, PartsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PartsAggregateArgs>(args: Subset<T, PartsAggregateArgs>): Prisma.PrismaPromise<GetPartsAggregateType<T>>

    /**
     * Group by Parts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PartsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartsGroupByArgs['orderBy'] }
        : { orderBy?: PartsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PartsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Parts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PartsClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Parts base type for findUnique actions
   */
  export type PartsFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parts
     */
    select?: PartsSelect<ExtArgs> | null
    /**
     * Filter, which Parts to fetch.
     */
    where: PartsWhereUniqueInput
  }

  /**
   * Parts findUnique
   */
  export interface PartsFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends PartsFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Parts findUniqueOrThrow
   */
  export type PartsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parts
     */
    select?: PartsSelect<ExtArgs> | null
    /**
     * Filter, which Parts to fetch.
     */
    where: PartsWhereUniqueInput
  }


  /**
   * Parts base type for findFirst actions
   */
  export type PartsFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parts
     */
    select?: PartsSelect<ExtArgs> | null
    /**
     * Filter, which Parts to fetch.
     */
    where?: PartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parts to fetch.
     */
    orderBy?: Enumerable<PartsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parts.
     */
    cursor?: PartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parts.
     */
    distinct?: Enumerable<PartsScalarFieldEnum>
  }

  /**
   * Parts findFirst
   */
  export interface PartsFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends PartsFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Parts findFirstOrThrow
   */
  export type PartsFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parts
     */
    select?: PartsSelect<ExtArgs> | null
    /**
     * Filter, which Parts to fetch.
     */
    where?: PartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parts to fetch.
     */
    orderBy?: Enumerable<PartsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parts.
     */
    cursor?: PartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parts.
     */
    distinct?: Enumerable<PartsScalarFieldEnum>
  }


  /**
   * Parts findMany
   */
  export type PartsFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parts
     */
    select?: PartsSelect<ExtArgs> | null
    /**
     * Filter, which Parts to fetch.
     */
    where?: PartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parts to fetch.
     */
    orderBy?: Enumerable<PartsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parts.
     */
    cursor?: PartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parts.
     */
    skip?: number
    distinct?: Enumerable<PartsScalarFieldEnum>
  }


  /**
   * Parts create
   */
  export type PartsCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parts
     */
    select?: PartsSelect<ExtArgs> | null
    /**
     * The data needed to create a Parts.
     */
    data: XOR<PartsCreateInput, PartsUncheckedCreateInput>
  }


  /**
   * Parts createMany
   */
  export type PartsCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parts.
     */
    data: Enumerable<PartsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Parts update
   */
  export type PartsUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parts
     */
    select?: PartsSelect<ExtArgs> | null
    /**
     * The data needed to update a Parts.
     */
    data: XOR<PartsUpdateInput, PartsUncheckedUpdateInput>
    /**
     * Choose, which Parts to update.
     */
    where: PartsWhereUniqueInput
  }


  /**
   * Parts updateMany
   */
  export type PartsUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parts.
     */
    data: XOR<PartsUpdateManyMutationInput, PartsUncheckedUpdateManyInput>
    /**
     * Filter which Parts to update
     */
    where?: PartsWhereInput
  }


  /**
   * Parts upsert
   */
  export type PartsUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parts
     */
    select?: PartsSelect<ExtArgs> | null
    /**
     * The filter to search for the Parts to update in case it exists.
     */
    where: PartsWhereUniqueInput
    /**
     * In case the Parts found by the `where` argument doesn't exist, create a new Parts with this data.
     */
    create: XOR<PartsCreateInput, PartsUncheckedCreateInput>
    /**
     * In case the Parts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartsUpdateInput, PartsUncheckedUpdateInput>
  }


  /**
   * Parts delete
   */
  export type PartsDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parts
     */
    select?: PartsSelect<ExtArgs> | null
    /**
     * Filter which Parts to delete.
     */
    where: PartsWhereUniqueInput
  }


  /**
   * Parts deleteMany
   */
  export type PartsDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parts to delete
     */
    where?: PartsWhereInput
  }


  /**
   * Parts without action
   */
  export type PartsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parts
     */
    select?: PartsSelect<ExtArgs> | null
  }



  /**
   * Model Suppliers
   */


  export type AggregateSuppliers = {
    _count: SuppliersCountAggregateOutputType | null
    _avg: SuppliersAvgAggregateOutputType | null
    _sum: SuppliersSumAggregateOutputType | null
    _min: SuppliersMinAggregateOutputType | null
    _max: SuppliersMaxAggregateOutputType | null
  }

  export type SuppliersAvgAggregateOutputType = {
    supplier_id: number | null
  }

  export type SuppliersSumAggregateOutputType = {
    supplier_id: number | null
  }

  export type SuppliersMinAggregateOutputType = {
    supplier_id: number | null
    supplier_name: string | null
    contact_name: string | null
    contact_email: string | null
    contact_phone: string | null
  }

  export type SuppliersMaxAggregateOutputType = {
    supplier_id: number | null
    supplier_name: string | null
    contact_name: string | null
    contact_email: string | null
    contact_phone: string | null
  }

  export type SuppliersCountAggregateOutputType = {
    supplier_id: number
    supplier_name: number
    contact_name: number
    contact_email: number
    contact_phone: number
    _all: number
  }


  export type SuppliersAvgAggregateInputType = {
    supplier_id?: true
  }

  export type SuppliersSumAggregateInputType = {
    supplier_id?: true
  }

  export type SuppliersMinAggregateInputType = {
    supplier_id?: true
    supplier_name?: true
    contact_name?: true
    contact_email?: true
    contact_phone?: true
  }

  export type SuppliersMaxAggregateInputType = {
    supplier_id?: true
    supplier_name?: true
    contact_name?: true
    contact_email?: true
    contact_phone?: true
  }

  export type SuppliersCountAggregateInputType = {
    supplier_id?: true
    supplier_name?: true
    contact_name?: true
    contact_email?: true
    contact_phone?: true
    _all?: true
  }

  export type SuppliersAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suppliers to aggregate.
     */
    where?: SuppliersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: Enumerable<SuppliersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SuppliersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Suppliers
    **/
    _count?: true | SuppliersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SuppliersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SuppliersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuppliersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuppliersMaxAggregateInputType
  }

  export type GetSuppliersAggregateType<T extends SuppliersAggregateArgs> = {
        [P in keyof T & keyof AggregateSuppliers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuppliers[P]>
      : GetScalarType<T[P], AggregateSuppliers[P]>
  }




  export type SuppliersGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SuppliersWhereInput
    orderBy?: Enumerable<SuppliersOrderByWithAggregationInput>
    by: SuppliersScalarFieldEnum[]
    having?: SuppliersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuppliersCountAggregateInputType | true
    _avg?: SuppliersAvgAggregateInputType
    _sum?: SuppliersSumAggregateInputType
    _min?: SuppliersMinAggregateInputType
    _max?: SuppliersMaxAggregateInputType
  }


  export type SuppliersGroupByOutputType = {
    supplier_id: number
    supplier_name: string
    contact_name: string
    contact_email: string
    contact_phone: string
    _count: SuppliersCountAggregateOutputType | null
    _avg: SuppliersAvgAggregateOutputType | null
    _sum: SuppliersSumAggregateOutputType | null
    _min: SuppliersMinAggregateOutputType | null
    _max: SuppliersMaxAggregateOutputType | null
  }

  type GetSuppliersGroupByPayload<T extends SuppliersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<SuppliersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuppliersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuppliersGroupByOutputType[P]>
            : GetScalarType<T[P], SuppliersGroupByOutputType[P]>
        }
      >
    >


  export type SuppliersSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    supplier_id?: boolean
    supplier_name?: boolean
    contact_name?: boolean
    contact_email?: boolean
    contact_phone?: boolean
  }, ExtArgs["result"]["suppliers"]>

  export type SuppliersSelectScalar = {
    supplier_id?: boolean
    supplier_name?: boolean
    contact_name?: boolean
    contact_email?: boolean
    contact_phone?: boolean
  }


  type SuppliersGetPayload<S extends boolean | null | undefined | SuppliersArgs> = $Types.GetResult<SuppliersPayload, S>

  type SuppliersCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<SuppliersFindManyArgs, 'select' | 'include'> & {
      select?: SuppliersCountAggregateInputType | true
    }

  export interface SuppliersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Suppliers'], meta: { name: 'Suppliers' } }
    /**
     * Find zero or one Suppliers that matches the filter.
     * @param {SuppliersFindUniqueArgs} args - Arguments to find a Suppliers
     * @example
     * // Get one Suppliers
     * const suppliers = await prisma.suppliers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SuppliersFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SuppliersFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Suppliers'> extends True ? Prisma__SuppliersClient<$Types.GetResult<SuppliersPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__SuppliersClient<$Types.GetResult<SuppliersPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Suppliers that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SuppliersFindUniqueOrThrowArgs} args - Arguments to find a Suppliers
     * @example
     * // Get one Suppliers
     * const suppliers = await prisma.suppliers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SuppliersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SuppliersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SuppliersClient<$Types.GetResult<SuppliersPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuppliersFindFirstArgs} args - Arguments to find a Suppliers
     * @example
     * // Get one Suppliers
     * const suppliers = await prisma.suppliers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SuppliersFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SuppliersFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Suppliers'> extends True ? Prisma__SuppliersClient<$Types.GetResult<SuppliersPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__SuppliersClient<$Types.GetResult<SuppliersPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Suppliers that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuppliersFindFirstOrThrowArgs} args - Arguments to find a Suppliers
     * @example
     * // Get one Suppliers
     * const suppliers = await prisma.suppliers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SuppliersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SuppliersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SuppliersClient<$Types.GetResult<SuppliersPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuppliersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suppliers
     * const suppliers = await prisma.suppliers.findMany()
     * 
     * // Get first 10 Suppliers
     * const suppliers = await prisma.suppliers.findMany({ take: 10 })
     * 
     * // Only select the `supplier_id`
     * const suppliersWithSupplier_idOnly = await prisma.suppliers.findMany({ select: { supplier_id: true } })
     * 
    **/
    findMany<T extends SuppliersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SuppliersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<SuppliersPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Suppliers.
     * @param {SuppliersCreateArgs} args - Arguments to create a Suppliers.
     * @example
     * // Create one Suppliers
     * const Suppliers = await prisma.suppliers.create({
     *   data: {
     *     // ... data to create a Suppliers
     *   }
     * })
     * 
    **/
    create<T extends SuppliersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SuppliersCreateArgs<ExtArgs>>
    ): Prisma__SuppliersClient<$Types.GetResult<SuppliersPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Suppliers.
     *     @param {SuppliersCreateManyArgs} args - Arguments to create many Suppliers.
     *     @example
     *     // Create many Suppliers
     *     const suppliers = await prisma.suppliers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SuppliersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SuppliersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Suppliers.
     * @param {SuppliersDeleteArgs} args - Arguments to delete one Suppliers.
     * @example
     * // Delete one Suppliers
     * const Suppliers = await prisma.suppliers.delete({
     *   where: {
     *     // ... filter to delete one Suppliers
     *   }
     * })
     * 
    **/
    delete<T extends SuppliersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SuppliersDeleteArgs<ExtArgs>>
    ): Prisma__SuppliersClient<$Types.GetResult<SuppliersPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Suppliers.
     * @param {SuppliersUpdateArgs} args - Arguments to update one Suppliers.
     * @example
     * // Update one Suppliers
     * const suppliers = await prisma.suppliers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SuppliersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SuppliersUpdateArgs<ExtArgs>>
    ): Prisma__SuppliersClient<$Types.GetResult<SuppliersPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Suppliers.
     * @param {SuppliersDeleteManyArgs} args - Arguments to filter Suppliers to delete.
     * @example
     * // Delete a few Suppliers
     * const { count } = await prisma.suppliers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SuppliersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SuppliersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuppliersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suppliers
     * const suppliers = await prisma.suppliers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SuppliersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SuppliersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Suppliers.
     * @param {SuppliersUpsertArgs} args - Arguments to update or create a Suppliers.
     * @example
     * // Update or create a Suppliers
     * const suppliers = await prisma.suppliers.upsert({
     *   create: {
     *     // ... data to create a Suppliers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Suppliers we want to update
     *   }
     * })
    **/
    upsert<T extends SuppliersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SuppliersUpsertArgs<ExtArgs>>
    ): Prisma__SuppliersClient<$Types.GetResult<SuppliersPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuppliersCountArgs} args - Arguments to filter Suppliers to count.
     * @example
     * // Count the number of Suppliers
     * const count = await prisma.suppliers.count({
     *   where: {
     *     // ... the filter for the Suppliers we want to count
     *   }
     * })
    **/
    count<T extends SuppliersCountArgs>(
      args?: Subset<T, SuppliersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuppliersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuppliersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SuppliersAggregateArgs>(args: Subset<T, SuppliersAggregateArgs>): Prisma.PrismaPromise<GetSuppliersAggregateType<T>>

    /**
     * Group by Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuppliersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SuppliersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SuppliersGroupByArgs['orderBy'] }
        : { orderBy?: SuppliersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SuppliersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuppliersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Suppliers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SuppliersClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Suppliers base type for findUnique actions
   */
  export type SuppliersFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: SuppliersSelect<ExtArgs> | null
    /**
     * Filter, which Suppliers to fetch.
     */
    where: SuppliersWhereUniqueInput
  }

  /**
   * Suppliers findUnique
   */
  export interface SuppliersFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends SuppliersFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Suppliers findUniqueOrThrow
   */
  export type SuppliersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: SuppliersSelect<ExtArgs> | null
    /**
     * Filter, which Suppliers to fetch.
     */
    where: SuppliersWhereUniqueInput
  }


  /**
   * Suppliers base type for findFirst actions
   */
  export type SuppliersFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: SuppliersSelect<ExtArgs> | null
    /**
     * Filter, which Suppliers to fetch.
     */
    where?: SuppliersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: Enumerable<SuppliersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SuppliersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: Enumerable<SuppliersScalarFieldEnum>
  }

  /**
   * Suppliers findFirst
   */
  export interface SuppliersFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends SuppliersFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Suppliers findFirstOrThrow
   */
  export type SuppliersFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: SuppliersSelect<ExtArgs> | null
    /**
     * Filter, which Suppliers to fetch.
     */
    where?: SuppliersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: Enumerable<SuppliersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SuppliersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: Enumerable<SuppliersScalarFieldEnum>
  }


  /**
   * Suppliers findMany
   */
  export type SuppliersFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: SuppliersSelect<ExtArgs> | null
    /**
     * Filter, which Suppliers to fetch.
     */
    where?: SuppliersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: Enumerable<SuppliersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Suppliers.
     */
    cursor?: SuppliersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    distinct?: Enumerable<SuppliersScalarFieldEnum>
  }


  /**
   * Suppliers create
   */
  export type SuppliersCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: SuppliersSelect<ExtArgs> | null
    /**
     * The data needed to create a Suppliers.
     */
    data: XOR<SuppliersCreateInput, SuppliersUncheckedCreateInput>
  }


  /**
   * Suppliers createMany
   */
  export type SuppliersCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Suppliers.
     */
    data: Enumerable<SuppliersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Suppliers update
   */
  export type SuppliersUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: SuppliersSelect<ExtArgs> | null
    /**
     * The data needed to update a Suppliers.
     */
    data: XOR<SuppliersUpdateInput, SuppliersUncheckedUpdateInput>
    /**
     * Choose, which Suppliers to update.
     */
    where: SuppliersWhereUniqueInput
  }


  /**
   * Suppliers updateMany
   */
  export type SuppliersUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SuppliersUpdateManyMutationInput, SuppliersUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SuppliersWhereInput
  }


  /**
   * Suppliers upsert
   */
  export type SuppliersUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: SuppliersSelect<ExtArgs> | null
    /**
     * The filter to search for the Suppliers to update in case it exists.
     */
    where: SuppliersWhereUniqueInput
    /**
     * In case the Suppliers found by the `where` argument doesn't exist, create a new Suppliers with this data.
     */
    create: XOR<SuppliersCreateInput, SuppliersUncheckedCreateInput>
    /**
     * In case the Suppliers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SuppliersUpdateInput, SuppliersUncheckedUpdateInput>
  }


  /**
   * Suppliers delete
   */
  export type SuppliersDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: SuppliersSelect<ExtArgs> | null
    /**
     * Filter which Suppliers to delete.
     */
    where: SuppliersWhereUniqueInput
  }


  /**
   * Suppliers deleteMany
   */
  export type SuppliersDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suppliers to delete
     */
    where?: SuppliersWhereInput
  }


  /**
   * Suppliers without action
   */
  export type SuppliersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: SuppliersSelect<ExtArgs> | null
  }



  /**
   * Model PurchaseOrders
   */


  export type AggregatePurchaseOrders = {
    _count: PurchaseOrdersCountAggregateOutputType | null
    _avg: PurchaseOrdersAvgAggregateOutputType | null
    _sum: PurchaseOrdersSumAggregateOutputType | null
    _min: PurchaseOrdersMinAggregateOutputType | null
    _max: PurchaseOrdersMaxAggregateOutputType | null
  }

  export type PurchaseOrdersAvgAggregateOutputType = {
    order_id: number | null
    supplier_id: number | null
    total_cost: number | null
  }

  export type PurchaseOrdersSumAggregateOutputType = {
    order_id: number | null
    supplier_id: number | null
    total_cost: number | null
  }

  export type PurchaseOrdersMinAggregateOutputType = {
    order_id: number | null
    supplier_id: number | null
    order_date: Date | null
    expected_delivery_date: Date | null
    status: string | null
    total_cost: number | null
  }

  export type PurchaseOrdersMaxAggregateOutputType = {
    order_id: number | null
    supplier_id: number | null
    order_date: Date | null
    expected_delivery_date: Date | null
    status: string | null
    total_cost: number | null
  }

  export type PurchaseOrdersCountAggregateOutputType = {
    order_id: number
    supplier_id: number
    order_date: number
    expected_delivery_date: number
    status: number
    total_cost: number
    _all: number
  }


  export type PurchaseOrdersAvgAggregateInputType = {
    order_id?: true
    supplier_id?: true
    total_cost?: true
  }

  export type PurchaseOrdersSumAggregateInputType = {
    order_id?: true
    supplier_id?: true
    total_cost?: true
  }

  export type PurchaseOrdersMinAggregateInputType = {
    order_id?: true
    supplier_id?: true
    order_date?: true
    expected_delivery_date?: true
    status?: true
    total_cost?: true
  }

  export type PurchaseOrdersMaxAggregateInputType = {
    order_id?: true
    supplier_id?: true
    order_date?: true
    expected_delivery_date?: true
    status?: true
    total_cost?: true
  }

  export type PurchaseOrdersCountAggregateInputType = {
    order_id?: true
    supplier_id?: true
    order_date?: true
    expected_delivery_date?: true
    status?: true
    total_cost?: true
    _all?: true
  }

  export type PurchaseOrdersAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseOrders to aggregate.
     */
    where?: PurchaseOrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrders to fetch.
     */
    orderBy?: Enumerable<PurchaseOrdersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseOrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PurchaseOrders
    **/
    _count?: true | PurchaseOrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchaseOrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchaseOrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseOrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseOrdersMaxAggregateInputType
  }

  export type GetPurchaseOrdersAggregateType<T extends PurchaseOrdersAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchaseOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchaseOrders[P]>
      : GetScalarType<T[P], AggregatePurchaseOrders[P]>
  }




  export type PurchaseOrdersGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PurchaseOrdersWhereInput
    orderBy?: Enumerable<PurchaseOrdersOrderByWithAggregationInput>
    by: PurchaseOrdersScalarFieldEnum[]
    having?: PurchaseOrdersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseOrdersCountAggregateInputType | true
    _avg?: PurchaseOrdersAvgAggregateInputType
    _sum?: PurchaseOrdersSumAggregateInputType
    _min?: PurchaseOrdersMinAggregateInputType
    _max?: PurchaseOrdersMaxAggregateInputType
  }


  export type PurchaseOrdersGroupByOutputType = {
    order_id: number
    supplier_id: number
    order_date: Date
    expected_delivery_date: Date
    status: string
    total_cost: number
    _count: PurchaseOrdersCountAggregateOutputType | null
    _avg: PurchaseOrdersAvgAggregateOutputType | null
    _sum: PurchaseOrdersSumAggregateOutputType | null
    _min: PurchaseOrdersMinAggregateOutputType | null
    _max: PurchaseOrdersMaxAggregateOutputType | null
  }

  type GetPurchaseOrdersGroupByPayload<T extends PurchaseOrdersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PurchaseOrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseOrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseOrdersGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseOrdersGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseOrdersSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    supplier_id?: boolean
    order_date?: boolean
    expected_delivery_date?: boolean
    status?: boolean
    total_cost?: boolean
  }, ExtArgs["result"]["purchaseOrders"]>

  export type PurchaseOrdersSelectScalar = {
    order_id?: boolean
    supplier_id?: boolean
    order_date?: boolean
    expected_delivery_date?: boolean
    status?: boolean
    total_cost?: boolean
  }


  type PurchaseOrdersGetPayload<S extends boolean | null | undefined | PurchaseOrdersArgs> = $Types.GetResult<PurchaseOrdersPayload, S>

  type PurchaseOrdersCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<PurchaseOrdersFindManyArgs, 'select' | 'include'> & {
      select?: PurchaseOrdersCountAggregateInputType | true
    }

  export interface PurchaseOrdersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PurchaseOrders'], meta: { name: 'PurchaseOrders' } }
    /**
     * Find zero or one PurchaseOrders that matches the filter.
     * @param {PurchaseOrdersFindUniqueArgs} args - Arguments to find a PurchaseOrders
     * @example
     * // Get one PurchaseOrders
     * const purchaseOrders = await prisma.purchaseOrders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PurchaseOrdersFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PurchaseOrdersFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PurchaseOrders'> extends True ? Prisma__PurchaseOrdersClient<$Types.GetResult<PurchaseOrdersPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__PurchaseOrdersClient<$Types.GetResult<PurchaseOrdersPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one PurchaseOrders that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PurchaseOrdersFindUniqueOrThrowArgs} args - Arguments to find a PurchaseOrders
     * @example
     * // Get one PurchaseOrders
     * const purchaseOrders = await prisma.purchaseOrders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PurchaseOrdersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PurchaseOrdersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PurchaseOrdersClient<$Types.GetResult<PurchaseOrdersPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first PurchaseOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrdersFindFirstArgs} args - Arguments to find a PurchaseOrders
     * @example
     * // Get one PurchaseOrders
     * const purchaseOrders = await prisma.purchaseOrders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PurchaseOrdersFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PurchaseOrdersFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PurchaseOrders'> extends True ? Prisma__PurchaseOrdersClient<$Types.GetResult<PurchaseOrdersPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__PurchaseOrdersClient<$Types.GetResult<PurchaseOrdersPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first PurchaseOrders that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrdersFindFirstOrThrowArgs} args - Arguments to find a PurchaseOrders
     * @example
     * // Get one PurchaseOrders
     * const purchaseOrders = await prisma.purchaseOrders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PurchaseOrdersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PurchaseOrdersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PurchaseOrdersClient<$Types.GetResult<PurchaseOrdersPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more PurchaseOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrdersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PurchaseOrders
     * const purchaseOrders = await prisma.purchaseOrders.findMany()
     * 
     * // Get first 10 PurchaseOrders
     * const purchaseOrders = await prisma.purchaseOrders.findMany({ take: 10 })
     * 
     * // Only select the `order_id`
     * const purchaseOrdersWithOrder_idOnly = await prisma.purchaseOrders.findMany({ select: { order_id: true } })
     * 
    **/
    findMany<T extends PurchaseOrdersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PurchaseOrdersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<PurchaseOrdersPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a PurchaseOrders.
     * @param {PurchaseOrdersCreateArgs} args - Arguments to create a PurchaseOrders.
     * @example
     * // Create one PurchaseOrders
     * const PurchaseOrders = await prisma.purchaseOrders.create({
     *   data: {
     *     // ... data to create a PurchaseOrders
     *   }
     * })
     * 
    **/
    create<T extends PurchaseOrdersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PurchaseOrdersCreateArgs<ExtArgs>>
    ): Prisma__PurchaseOrdersClient<$Types.GetResult<PurchaseOrdersPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many PurchaseOrders.
     *     @param {PurchaseOrdersCreateManyArgs} args - Arguments to create many PurchaseOrders.
     *     @example
     *     // Create many PurchaseOrders
     *     const purchaseOrders = await prisma.purchaseOrders.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PurchaseOrdersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PurchaseOrdersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PurchaseOrders.
     * @param {PurchaseOrdersDeleteArgs} args - Arguments to delete one PurchaseOrders.
     * @example
     * // Delete one PurchaseOrders
     * const PurchaseOrders = await prisma.purchaseOrders.delete({
     *   where: {
     *     // ... filter to delete one PurchaseOrders
     *   }
     * })
     * 
    **/
    delete<T extends PurchaseOrdersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PurchaseOrdersDeleteArgs<ExtArgs>>
    ): Prisma__PurchaseOrdersClient<$Types.GetResult<PurchaseOrdersPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one PurchaseOrders.
     * @param {PurchaseOrdersUpdateArgs} args - Arguments to update one PurchaseOrders.
     * @example
     * // Update one PurchaseOrders
     * const purchaseOrders = await prisma.purchaseOrders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PurchaseOrdersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PurchaseOrdersUpdateArgs<ExtArgs>>
    ): Prisma__PurchaseOrdersClient<$Types.GetResult<PurchaseOrdersPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more PurchaseOrders.
     * @param {PurchaseOrdersDeleteManyArgs} args - Arguments to filter PurchaseOrders to delete.
     * @example
     * // Delete a few PurchaseOrders
     * const { count } = await prisma.purchaseOrders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PurchaseOrdersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PurchaseOrdersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PurchaseOrders
     * const purchaseOrders = await prisma.purchaseOrders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PurchaseOrdersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PurchaseOrdersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PurchaseOrders.
     * @param {PurchaseOrdersUpsertArgs} args - Arguments to update or create a PurchaseOrders.
     * @example
     * // Update or create a PurchaseOrders
     * const purchaseOrders = await prisma.purchaseOrders.upsert({
     *   create: {
     *     // ... data to create a PurchaseOrders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PurchaseOrders we want to update
     *   }
     * })
    **/
    upsert<T extends PurchaseOrdersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PurchaseOrdersUpsertArgs<ExtArgs>>
    ): Prisma__PurchaseOrdersClient<$Types.GetResult<PurchaseOrdersPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of PurchaseOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrdersCountArgs} args - Arguments to filter PurchaseOrders to count.
     * @example
     * // Count the number of PurchaseOrders
     * const count = await prisma.purchaseOrders.count({
     *   where: {
     *     // ... the filter for the PurchaseOrders we want to count
     *   }
     * })
    **/
    count<T extends PurchaseOrdersCountArgs>(
      args?: Subset<T, PurchaseOrdersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseOrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PurchaseOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PurchaseOrdersAggregateArgs>(args: Subset<T, PurchaseOrdersAggregateArgs>): Prisma.PrismaPromise<GetPurchaseOrdersAggregateType<T>>

    /**
     * Group by PurchaseOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrdersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PurchaseOrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseOrdersGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseOrdersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PurchaseOrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for PurchaseOrders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PurchaseOrdersClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * PurchaseOrders base type for findUnique actions
   */
  export type PurchaseOrdersFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrders
     */
    select?: PurchaseOrdersSelect<ExtArgs> | null
    /**
     * Filter, which PurchaseOrders to fetch.
     */
    where: PurchaseOrdersWhereUniqueInput
  }

  /**
   * PurchaseOrders findUnique
   */
  export interface PurchaseOrdersFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends PurchaseOrdersFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PurchaseOrders findUniqueOrThrow
   */
  export type PurchaseOrdersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrders
     */
    select?: PurchaseOrdersSelect<ExtArgs> | null
    /**
     * Filter, which PurchaseOrders to fetch.
     */
    where: PurchaseOrdersWhereUniqueInput
  }


  /**
   * PurchaseOrders base type for findFirst actions
   */
  export type PurchaseOrdersFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrders
     */
    select?: PurchaseOrdersSelect<ExtArgs> | null
    /**
     * Filter, which PurchaseOrders to fetch.
     */
    where?: PurchaseOrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrders to fetch.
     */
    orderBy?: Enumerable<PurchaseOrdersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseOrders.
     */
    cursor?: PurchaseOrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseOrders.
     */
    distinct?: Enumerable<PurchaseOrdersScalarFieldEnum>
  }

  /**
   * PurchaseOrders findFirst
   */
  export interface PurchaseOrdersFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends PurchaseOrdersFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PurchaseOrders findFirstOrThrow
   */
  export type PurchaseOrdersFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrders
     */
    select?: PurchaseOrdersSelect<ExtArgs> | null
    /**
     * Filter, which PurchaseOrders to fetch.
     */
    where?: PurchaseOrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrders to fetch.
     */
    orderBy?: Enumerable<PurchaseOrdersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseOrders.
     */
    cursor?: PurchaseOrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseOrders.
     */
    distinct?: Enumerable<PurchaseOrdersScalarFieldEnum>
  }


  /**
   * PurchaseOrders findMany
   */
  export type PurchaseOrdersFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrders
     */
    select?: PurchaseOrdersSelect<ExtArgs> | null
    /**
     * Filter, which PurchaseOrders to fetch.
     */
    where?: PurchaseOrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrders to fetch.
     */
    orderBy?: Enumerable<PurchaseOrdersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PurchaseOrders.
     */
    cursor?: PurchaseOrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrders.
     */
    skip?: number
    distinct?: Enumerable<PurchaseOrdersScalarFieldEnum>
  }


  /**
   * PurchaseOrders create
   */
  export type PurchaseOrdersCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrders
     */
    select?: PurchaseOrdersSelect<ExtArgs> | null
    /**
     * The data needed to create a PurchaseOrders.
     */
    data: XOR<PurchaseOrdersCreateInput, PurchaseOrdersUncheckedCreateInput>
  }


  /**
   * PurchaseOrders createMany
   */
  export type PurchaseOrdersCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PurchaseOrders.
     */
    data: Enumerable<PurchaseOrdersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * PurchaseOrders update
   */
  export type PurchaseOrdersUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrders
     */
    select?: PurchaseOrdersSelect<ExtArgs> | null
    /**
     * The data needed to update a PurchaseOrders.
     */
    data: XOR<PurchaseOrdersUpdateInput, PurchaseOrdersUncheckedUpdateInput>
    /**
     * Choose, which PurchaseOrders to update.
     */
    where: PurchaseOrdersWhereUniqueInput
  }


  /**
   * PurchaseOrders updateMany
   */
  export type PurchaseOrdersUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PurchaseOrders.
     */
    data: XOR<PurchaseOrdersUpdateManyMutationInput, PurchaseOrdersUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseOrders to update
     */
    where?: PurchaseOrdersWhereInput
  }


  /**
   * PurchaseOrders upsert
   */
  export type PurchaseOrdersUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrders
     */
    select?: PurchaseOrdersSelect<ExtArgs> | null
    /**
     * The filter to search for the PurchaseOrders to update in case it exists.
     */
    where: PurchaseOrdersWhereUniqueInput
    /**
     * In case the PurchaseOrders found by the `where` argument doesn't exist, create a new PurchaseOrders with this data.
     */
    create: XOR<PurchaseOrdersCreateInput, PurchaseOrdersUncheckedCreateInput>
    /**
     * In case the PurchaseOrders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseOrdersUpdateInput, PurchaseOrdersUncheckedUpdateInput>
  }


  /**
   * PurchaseOrders delete
   */
  export type PurchaseOrdersDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrders
     */
    select?: PurchaseOrdersSelect<ExtArgs> | null
    /**
     * Filter which PurchaseOrders to delete.
     */
    where: PurchaseOrdersWhereUniqueInput
  }


  /**
   * PurchaseOrders deleteMany
   */
  export type PurchaseOrdersDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseOrders to delete
     */
    where?: PurchaseOrdersWhereInput
  }


  /**
   * PurchaseOrders without action
   */
  export type PurchaseOrdersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrders
     */
    select?: PurchaseOrdersSelect<ExtArgs> | null
  }



  /**
   * Model OrderItems
   */


  export type AggregateOrderItems = {
    _count: OrderItemsCountAggregateOutputType | null
    _avg: OrderItemsAvgAggregateOutputType | null
    _sum: OrderItemsSumAggregateOutputType | null
    _min: OrderItemsMinAggregateOutputType | null
    _max: OrderItemsMaxAggregateOutputType | null
  }

  export type OrderItemsAvgAggregateOutputType = {
    order_item_id: number | null
    order_id: number | null
    part_id: number | null
    quantity_ordered: number | null
    unit_price: number | null
  }

  export type OrderItemsSumAggregateOutputType = {
    order_item_id: number | null
    order_id: number | null
    part_id: number | null
    quantity_ordered: number | null
    unit_price: number | null
  }

  export type OrderItemsMinAggregateOutputType = {
    order_item_id: number | null
    order_id: number | null
    part_id: number | null
    quantity_ordered: number | null
    unit_price: number | null
  }

  export type OrderItemsMaxAggregateOutputType = {
    order_item_id: number | null
    order_id: number | null
    part_id: number | null
    quantity_ordered: number | null
    unit_price: number | null
  }

  export type OrderItemsCountAggregateOutputType = {
    order_item_id: number
    order_id: number
    part_id: number
    quantity_ordered: number
    unit_price: number
    _all: number
  }


  export type OrderItemsAvgAggregateInputType = {
    order_item_id?: true
    order_id?: true
    part_id?: true
    quantity_ordered?: true
    unit_price?: true
  }

  export type OrderItemsSumAggregateInputType = {
    order_item_id?: true
    order_id?: true
    part_id?: true
    quantity_ordered?: true
    unit_price?: true
  }

  export type OrderItemsMinAggregateInputType = {
    order_item_id?: true
    order_id?: true
    part_id?: true
    quantity_ordered?: true
    unit_price?: true
  }

  export type OrderItemsMaxAggregateInputType = {
    order_item_id?: true
    order_id?: true
    part_id?: true
    quantity_ordered?: true
    unit_price?: true
  }

  export type OrderItemsCountAggregateInputType = {
    order_item_id?: true
    order_id?: true
    part_id?: true
    quantity_ordered?: true
    unit_price?: true
    _all?: true
  }

  export type OrderItemsAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to aggregate.
     */
    where?: OrderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: Enumerable<OrderItemsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemsMaxAggregateInputType
  }

  export type GetOrderItemsAggregateType<T extends OrderItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItems[P]>
      : GetScalarType<T[P], AggregateOrderItems[P]>
  }




  export type OrderItemsGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: OrderItemsWhereInput
    orderBy?: Enumerable<OrderItemsOrderByWithAggregationInput>
    by: OrderItemsScalarFieldEnum[]
    having?: OrderItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemsCountAggregateInputType | true
    _avg?: OrderItemsAvgAggregateInputType
    _sum?: OrderItemsSumAggregateInputType
    _min?: OrderItemsMinAggregateInputType
    _max?: OrderItemsMaxAggregateInputType
  }


  export type OrderItemsGroupByOutputType = {
    order_item_id: number
    order_id: number
    part_id: number
    quantity_ordered: number
    unit_price: number
    _count: OrderItemsCountAggregateOutputType | null
    _avg: OrderItemsAvgAggregateOutputType | null
    _sum: OrderItemsSumAggregateOutputType | null
    _min: OrderItemsMinAggregateOutputType | null
    _max: OrderItemsMaxAggregateOutputType | null
  }

  type GetOrderItemsGroupByPayload<T extends OrderItemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<OrderItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemsGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemsGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemsSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_item_id?: boolean
    order_id?: boolean
    part_id?: boolean
    quantity_ordered?: boolean
    unit_price?: boolean
  }, ExtArgs["result"]["orderItems"]>

  export type OrderItemsSelectScalar = {
    order_item_id?: boolean
    order_id?: boolean
    part_id?: boolean
    quantity_ordered?: boolean
    unit_price?: boolean
  }


  type OrderItemsGetPayload<S extends boolean | null | undefined | OrderItemsArgs> = $Types.GetResult<OrderItemsPayload, S>

  type OrderItemsCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<OrderItemsFindManyArgs, 'select' | 'include'> & {
      select?: OrderItemsCountAggregateInputType | true
    }

  export interface OrderItemsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItems'], meta: { name: 'OrderItems' } }
    /**
     * Find zero or one OrderItems that matches the filter.
     * @param {OrderItemsFindUniqueArgs} args - Arguments to find a OrderItems
     * @example
     * // Get one OrderItems
     * const orderItems = await prisma.orderItems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrderItemsFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, OrderItemsFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'OrderItems'> extends True ? Prisma__OrderItemsClient<$Types.GetResult<OrderItemsPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__OrderItemsClient<$Types.GetResult<OrderItemsPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one OrderItems that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OrderItemsFindUniqueOrThrowArgs} args - Arguments to find a OrderItems
     * @example
     * // Get one OrderItems
     * const orderItems = await prisma.orderItems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrderItemsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderItemsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OrderItemsClient<$Types.GetResult<OrderItemsPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsFindFirstArgs} args - Arguments to find a OrderItems
     * @example
     * // Get one OrderItems
     * const orderItems = await prisma.orderItems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrderItemsFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, OrderItemsFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'OrderItems'> extends True ? Prisma__OrderItemsClient<$Types.GetResult<OrderItemsPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__OrderItemsClient<$Types.GetResult<OrderItemsPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first OrderItems that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsFindFirstOrThrowArgs} args - Arguments to find a OrderItems
     * @example
     * // Get one OrderItems
     * const orderItems = await prisma.orderItems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrderItemsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderItemsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OrderItemsClient<$Types.GetResult<OrderItemsPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItems.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItems.findMany({ take: 10 })
     * 
     * // Only select the `order_item_id`
     * const orderItemsWithOrder_item_idOnly = await prisma.orderItems.findMany({ select: { order_item_id: true } })
     * 
    **/
    findMany<T extends OrderItemsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderItemsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<OrderItemsPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a OrderItems.
     * @param {OrderItemsCreateArgs} args - Arguments to create a OrderItems.
     * @example
     * // Create one OrderItems
     * const OrderItems = await prisma.orderItems.create({
     *   data: {
     *     // ... data to create a OrderItems
     *   }
     * })
     * 
    **/
    create<T extends OrderItemsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderItemsCreateArgs<ExtArgs>>
    ): Prisma__OrderItemsClient<$Types.GetResult<OrderItemsPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many OrderItems.
     *     @param {OrderItemsCreateManyArgs} args - Arguments to create many OrderItems.
     *     @example
     *     // Create many OrderItems
     *     const orderItems = await prisma.orderItems.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrderItemsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderItemsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OrderItems.
     * @param {OrderItemsDeleteArgs} args - Arguments to delete one OrderItems.
     * @example
     * // Delete one OrderItems
     * const OrderItems = await prisma.orderItems.delete({
     *   where: {
     *     // ... filter to delete one OrderItems
     *   }
     * })
     * 
    **/
    delete<T extends OrderItemsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OrderItemsDeleteArgs<ExtArgs>>
    ): Prisma__OrderItemsClient<$Types.GetResult<OrderItemsPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one OrderItems.
     * @param {OrderItemsUpdateArgs} args - Arguments to update one OrderItems.
     * @example
     * // Update one OrderItems
     * const orderItems = await prisma.orderItems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrderItemsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderItemsUpdateArgs<ExtArgs>>
    ): Prisma__OrderItemsClient<$Types.GetResult<OrderItemsPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemsDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrderItemsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderItemsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItems = await prisma.orderItems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrderItemsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OrderItemsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderItems.
     * @param {OrderItemsUpsertArgs} args - Arguments to update or create a OrderItems.
     * @example
     * // Update or create a OrderItems
     * const orderItems = await prisma.orderItems.upsert({
     *   create: {
     *     // ... data to create a OrderItems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItems we want to update
     *   }
     * })
    **/
    upsert<T extends OrderItemsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OrderItemsUpsertArgs<ExtArgs>>
    ): Prisma__OrderItemsClient<$Types.GetResult<OrderItemsPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItems.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemsCountArgs>(
      args?: Subset<T, OrderItemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderItemsAggregateArgs>(args: Subset<T, OrderItemsAggregateArgs>): Prisma.PrismaPromise<GetOrderItemsAggregateType<T>>

    /**
     * Group by OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemsGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItems.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__OrderItemsClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * OrderItems base type for findUnique actions
   */
  export type OrderItemsFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where: OrderItemsWhereUniqueInput
  }

  /**
   * OrderItems findUnique
   */
  export interface OrderItemsFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends OrderItemsFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * OrderItems findUniqueOrThrow
   */
  export type OrderItemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where: OrderItemsWhereUniqueInput
  }


  /**
   * OrderItems base type for findFirst actions
   */
  export type OrderItemsFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: Enumerable<OrderItemsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: Enumerable<OrderItemsScalarFieldEnum>
  }

  /**
   * OrderItems findFirst
   */
  export interface OrderItemsFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends OrderItemsFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * OrderItems findFirstOrThrow
   */
  export type OrderItemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: Enumerable<OrderItemsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: Enumerable<OrderItemsScalarFieldEnum>
  }


  /**
   * OrderItems findMany
   */
  export type OrderItemsFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: Enumerable<OrderItemsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    distinct?: Enumerable<OrderItemsScalarFieldEnum>
  }


  /**
   * OrderItems create
   */
  export type OrderItemsCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * The data needed to create a OrderItems.
     */
    data: XOR<OrderItemsCreateInput, OrderItemsUncheckedCreateInput>
  }


  /**
   * OrderItems createMany
   */
  export type OrderItemsCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: Enumerable<OrderItemsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * OrderItems update
   */
  export type OrderItemsUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * The data needed to update a OrderItems.
     */
    data: XOR<OrderItemsUpdateInput, OrderItemsUncheckedUpdateInput>
    /**
     * Choose, which OrderItems to update.
     */
    where: OrderItemsWhereUniqueInput
  }


  /**
   * OrderItems updateMany
   */
  export type OrderItemsUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemsUpdateManyMutationInput, OrderItemsUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemsWhereInput
  }


  /**
   * OrderItems upsert
   */
  export type OrderItemsUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * The filter to search for the OrderItems to update in case it exists.
     */
    where: OrderItemsWhereUniqueInput
    /**
     * In case the OrderItems found by the `where` argument doesn't exist, create a new OrderItems with this data.
     */
    create: XOR<OrderItemsCreateInput, OrderItemsUncheckedCreateInput>
    /**
     * In case the OrderItems was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemsUpdateInput, OrderItemsUncheckedUpdateInput>
  }


  /**
   * OrderItems delete
   */
  export type OrderItemsDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Filter which OrderItems to delete.
     */
    where: OrderItemsWhereUniqueInput
  }


  /**
   * OrderItems deleteMany
   */
  export type OrderItemsDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemsWhereInput
  }


  /**
   * OrderItems without action
   */
  export type OrderItemsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
  }



  /**
   * Model SalesOrders
   */


  export type AggregateSalesOrders = {
    _count: SalesOrdersCountAggregateOutputType | null
    _avg: SalesOrdersAvgAggregateOutputType | null
    _sum: SalesOrdersSumAggregateOutputType | null
    _min: SalesOrdersMinAggregateOutputType | null
    _max: SalesOrdersMaxAggregateOutputType | null
  }

  export type SalesOrdersAvgAggregateOutputType = {
    order_id: number | null
    total_price: number | null
  }

  export type SalesOrdersSumAggregateOutputType = {
    order_id: number | null
    total_price: number | null
  }

  export type SalesOrdersMinAggregateOutputType = {
    order_id: number | null
    customer_name: string | null
    order_date: Date | null
    status: string | null
    total_price: number | null
  }

  export type SalesOrdersMaxAggregateOutputType = {
    order_id: number | null
    customer_name: string | null
    order_date: Date | null
    status: string | null
    total_price: number | null
  }

  export type SalesOrdersCountAggregateOutputType = {
    order_id: number
    customer_name: number
    order_date: number
    status: number
    total_price: number
    _all: number
  }


  export type SalesOrdersAvgAggregateInputType = {
    order_id?: true
    total_price?: true
  }

  export type SalesOrdersSumAggregateInputType = {
    order_id?: true
    total_price?: true
  }

  export type SalesOrdersMinAggregateInputType = {
    order_id?: true
    customer_name?: true
    order_date?: true
    status?: true
    total_price?: true
  }

  export type SalesOrdersMaxAggregateInputType = {
    order_id?: true
    customer_name?: true
    order_date?: true
    status?: true
    total_price?: true
  }

  export type SalesOrdersCountAggregateInputType = {
    order_id?: true
    customer_name?: true
    order_date?: true
    status?: true
    total_price?: true
    _all?: true
  }

  export type SalesOrdersAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesOrders to aggregate.
     */
    where?: SalesOrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesOrders to fetch.
     */
    orderBy?: Enumerable<SalesOrdersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalesOrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SalesOrders
    **/
    _count?: true | SalesOrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalesOrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalesOrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalesOrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalesOrdersMaxAggregateInputType
  }

  export type GetSalesOrdersAggregateType<T extends SalesOrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateSalesOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalesOrders[P]>
      : GetScalarType<T[P], AggregateSalesOrders[P]>
  }




  export type SalesOrdersGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SalesOrdersWhereInput
    orderBy?: Enumerable<SalesOrdersOrderByWithAggregationInput>
    by: SalesOrdersScalarFieldEnum[]
    having?: SalesOrdersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalesOrdersCountAggregateInputType | true
    _avg?: SalesOrdersAvgAggregateInputType
    _sum?: SalesOrdersSumAggregateInputType
    _min?: SalesOrdersMinAggregateInputType
    _max?: SalesOrdersMaxAggregateInputType
  }


  export type SalesOrdersGroupByOutputType = {
    order_id: number
    customer_name: string
    order_date: Date
    status: string
    total_price: number
    _count: SalesOrdersCountAggregateOutputType | null
    _avg: SalesOrdersAvgAggregateOutputType | null
    _sum: SalesOrdersSumAggregateOutputType | null
    _min: SalesOrdersMinAggregateOutputType | null
    _max: SalesOrdersMaxAggregateOutputType | null
  }

  type GetSalesOrdersGroupByPayload<T extends SalesOrdersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<SalesOrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalesOrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalesOrdersGroupByOutputType[P]>
            : GetScalarType<T[P], SalesOrdersGroupByOutputType[P]>
        }
      >
    >


  export type SalesOrdersSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    customer_name?: boolean
    order_date?: boolean
    status?: boolean
    total_price?: boolean
  }, ExtArgs["result"]["salesOrders"]>

  export type SalesOrdersSelectScalar = {
    order_id?: boolean
    customer_name?: boolean
    order_date?: boolean
    status?: boolean
    total_price?: boolean
  }


  type SalesOrdersGetPayload<S extends boolean | null | undefined | SalesOrdersArgs> = $Types.GetResult<SalesOrdersPayload, S>

  type SalesOrdersCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<SalesOrdersFindManyArgs, 'select' | 'include'> & {
      select?: SalesOrdersCountAggregateInputType | true
    }

  export interface SalesOrdersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SalesOrders'], meta: { name: 'SalesOrders' } }
    /**
     * Find zero or one SalesOrders that matches the filter.
     * @param {SalesOrdersFindUniqueArgs} args - Arguments to find a SalesOrders
     * @example
     * // Get one SalesOrders
     * const salesOrders = await prisma.salesOrders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SalesOrdersFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SalesOrdersFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'SalesOrders'> extends True ? Prisma__SalesOrdersClient<$Types.GetResult<SalesOrdersPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__SalesOrdersClient<$Types.GetResult<SalesOrdersPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one SalesOrders that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SalesOrdersFindUniqueOrThrowArgs} args - Arguments to find a SalesOrders
     * @example
     * // Get one SalesOrders
     * const salesOrders = await prisma.salesOrders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SalesOrdersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SalesOrdersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SalesOrdersClient<$Types.GetResult<SalesOrdersPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first SalesOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrdersFindFirstArgs} args - Arguments to find a SalesOrders
     * @example
     * // Get one SalesOrders
     * const salesOrders = await prisma.salesOrders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SalesOrdersFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SalesOrdersFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'SalesOrders'> extends True ? Prisma__SalesOrdersClient<$Types.GetResult<SalesOrdersPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__SalesOrdersClient<$Types.GetResult<SalesOrdersPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first SalesOrders that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrdersFindFirstOrThrowArgs} args - Arguments to find a SalesOrders
     * @example
     * // Get one SalesOrders
     * const salesOrders = await prisma.salesOrders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SalesOrdersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SalesOrdersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SalesOrdersClient<$Types.GetResult<SalesOrdersPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more SalesOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrdersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalesOrders
     * const salesOrders = await prisma.salesOrders.findMany()
     * 
     * // Get first 10 SalesOrders
     * const salesOrders = await prisma.salesOrders.findMany({ take: 10 })
     * 
     * // Only select the `order_id`
     * const salesOrdersWithOrder_idOnly = await prisma.salesOrders.findMany({ select: { order_id: true } })
     * 
    **/
    findMany<T extends SalesOrdersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SalesOrdersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<SalesOrdersPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a SalesOrders.
     * @param {SalesOrdersCreateArgs} args - Arguments to create a SalesOrders.
     * @example
     * // Create one SalesOrders
     * const SalesOrders = await prisma.salesOrders.create({
     *   data: {
     *     // ... data to create a SalesOrders
     *   }
     * })
     * 
    **/
    create<T extends SalesOrdersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SalesOrdersCreateArgs<ExtArgs>>
    ): Prisma__SalesOrdersClient<$Types.GetResult<SalesOrdersPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many SalesOrders.
     *     @param {SalesOrdersCreateManyArgs} args - Arguments to create many SalesOrders.
     *     @example
     *     // Create many SalesOrders
     *     const salesOrders = await prisma.salesOrders.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SalesOrdersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SalesOrdersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SalesOrders.
     * @param {SalesOrdersDeleteArgs} args - Arguments to delete one SalesOrders.
     * @example
     * // Delete one SalesOrders
     * const SalesOrders = await prisma.salesOrders.delete({
     *   where: {
     *     // ... filter to delete one SalesOrders
     *   }
     * })
     * 
    **/
    delete<T extends SalesOrdersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SalesOrdersDeleteArgs<ExtArgs>>
    ): Prisma__SalesOrdersClient<$Types.GetResult<SalesOrdersPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one SalesOrders.
     * @param {SalesOrdersUpdateArgs} args - Arguments to update one SalesOrders.
     * @example
     * // Update one SalesOrders
     * const salesOrders = await prisma.salesOrders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SalesOrdersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SalesOrdersUpdateArgs<ExtArgs>>
    ): Prisma__SalesOrdersClient<$Types.GetResult<SalesOrdersPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more SalesOrders.
     * @param {SalesOrdersDeleteManyArgs} args - Arguments to filter SalesOrders to delete.
     * @example
     * // Delete a few SalesOrders
     * const { count } = await prisma.salesOrders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SalesOrdersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SalesOrdersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalesOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalesOrders
     * const salesOrders = await prisma.salesOrders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SalesOrdersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SalesOrdersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SalesOrders.
     * @param {SalesOrdersUpsertArgs} args - Arguments to update or create a SalesOrders.
     * @example
     * // Update or create a SalesOrders
     * const salesOrders = await prisma.salesOrders.upsert({
     *   create: {
     *     // ... data to create a SalesOrders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalesOrders we want to update
     *   }
     * })
    **/
    upsert<T extends SalesOrdersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SalesOrdersUpsertArgs<ExtArgs>>
    ): Prisma__SalesOrdersClient<$Types.GetResult<SalesOrdersPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of SalesOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrdersCountArgs} args - Arguments to filter SalesOrders to count.
     * @example
     * // Count the number of SalesOrders
     * const count = await prisma.salesOrders.count({
     *   where: {
     *     // ... the filter for the SalesOrders we want to count
     *   }
     * })
    **/
    count<T extends SalesOrdersCountArgs>(
      args?: Subset<T, SalesOrdersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalesOrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SalesOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SalesOrdersAggregateArgs>(args: Subset<T, SalesOrdersAggregateArgs>): Prisma.PrismaPromise<GetSalesOrdersAggregateType<T>>

    /**
     * Group by SalesOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrdersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SalesOrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalesOrdersGroupByArgs['orderBy'] }
        : { orderBy?: SalesOrdersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SalesOrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalesOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for SalesOrders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SalesOrdersClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * SalesOrders base type for findUnique actions
   */
  export type SalesOrdersFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrders
     */
    select?: SalesOrdersSelect<ExtArgs> | null
    /**
     * Filter, which SalesOrders to fetch.
     */
    where: SalesOrdersWhereUniqueInput
  }

  /**
   * SalesOrders findUnique
   */
  export interface SalesOrdersFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends SalesOrdersFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SalesOrders findUniqueOrThrow
   */
  export type SalesOrdersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrders
     */
    select?: SalesOrdersSelect<ExtArgs> | null
    /**
     * Filter, which SalesOrders to fetch.
     */
    where: SalesOrdersWhereUniqueInput
  }


  /**
   * SalesOrders base type for findFirst actions
   */
  export type SalesOrdersFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrders
     */
    select?: SalesOrdersSelect<ExtArgs> | null
    /**
     * Filter, which SalesOrders to fetch.
     */
    where?: SalesOrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesOrders to fetch.
     */
    orderBy?: Enumerable<SalesOrdersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesOrders.
     */
    cursor?: SalesOrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesOrders.
     */
    distinct?: Enumerable<SalesOrdersScalarFieldEnum>
  }

  /**
   * SalesOrders findFirst
   */
  export interface SalesOrdersFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends SalesOrdersFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SalesOrders findFirstOrThrow
   */
  export type SalesOrdersFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrders
     */
    select?: SalesOrdersSelect<ExtArgs> | null
    /**
     * Filter, which SalesOrders to fetch.
     */
    where?: SalesOrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesOrders to fetch.
     */
    orderBy?: Enumerable<SalesOrdersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesOrders.
     */
    cursor?: SalesOrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesOrders.
     */
    distinct?: Enumerable<SalesOrdersScalarFieldEnum>
  }


  /**
   * SalesOrders findMany
   */
  export type SalesOrdersFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrders
     */
    select?: SalesOrdersSelect<ExtArgs> | null
    /**
     * Filter, which SalesOrders to fetch.
     */
    where?: SalesOrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesOrders to fetch.
     */
    orderBy?: Enumerable<SalesOrdersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SalesOrders.
     */
    cursor?: SalesOrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesOrders.
     */
    skip?: number
    distinct?: Enumerable<SalesOrdersScalarFieldEnum>
  }


  /**
   * SalesOrders create
   */
  export type SalesOrdersCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrders
     */
    select?: SalesOrdersSelect<ExtArgs> | null
    /**
     * The data needed to create a SalesOrders.
     */
    data: XOR<SalesOrdersCreateInput, SalesOrdersUncheckedCreateInput>
  }


  /**
   * SalesOrders createMany
   */
  export type SalesOrdersCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SalesOrders.
     */
    data: Enumerable<SalesOrdersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * SalesOrders update
   */
  export type SalesOrdersUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrders
     */
    select?: SalesOrdersSelect<ExtArgs> | null
    /**
     * The data needed to update a SalesOrders.
     */
    data: XOR<SalesOrdersUpdateInput, SalesOrdersUncheckedUpdateInput>
    /**
     * Choose, which SalesOrders to update.
     */
    where: SalesOrdersWhereUniqueInput
  }


  /**
   * SalesOrders updateMany
   */
  export type SalesOrdersUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SalesOrders.
     */
    data: XOR<SalesOrdersUpdateManyMutationInput, SalesOrdersUncheckedUpdateManyInput>
    /**
     * Filter which SalesOrders to update
     */
    where?: SalesOrdersWhereInput
  }


  /**
   * SalesOrders upsert
   */
  export type SalesOrdersUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrders
     */
    select?: SalesOrdersSelect<ExtArgs> | null
    /**
     * The filter to search for the SalesOrders to update in case it exists.
     */
    where: SalesOrdersWhereUniqueInput
    /**
     * In case the SalesOrders found by the `where` argument doesn't exist, create a new SalesOrders with this data.
     */
    create: XOR<SalesOrdersCreateInput, SalesOrdersUncheckedCreateInput>
    /**
     * In case the SalesOrders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalesOrdersUpdateInput, SalesOrdersUncheckedUpdateInput>
  }


  /**
   * SalesOrders delete
   */
  export type SalesOrdersDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrders
     */
    select?: SalesOrdersSelect<ExtArgs> | null
    /**
     * Filter which SalesOrders to delete.
     */
    where: SalesOrdersWhereUniqueInput
  }


  /**
   * SalesOrders deleteMany
   */
  export type SalesOrdersDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesOrders to delete
     */
    where?: SalesOrdersWhereInput
  }


  /**
   * SalesOrders without action
   */
  export type SalesOrdersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrders
     */
    select?: SalesOrdersSelect<ExtArgs> | null
  }



  /**
   * Model SalesOrderItems
   */


  export type AggregateSalesOrderItems = {
    _count: SalesOrderItemsCountAggregateOutputType | null
    _avg: SalesOrderItemsAvgAggregateOutputType | null
    _sum: SalesOrderItemsSumAggregateOutputType | null
    _min: SalesOrderItemsMinAggregateOutputType | null
    _max: SalesOrderItemsMaxAggregateOutputType | null
  }

  export type SalesOrderItemsAvgAggregateOutputType = {
    order_item_id: number | null
    order_id: number | null
    part_id: number | null
    quantity_sold: number | null
    unit_price: number | null
  }

  export type SalesOrderItemsSumAggregateOutputType = {
    order_item_id: number | null
    order_id: number | null
    part_id: number | null
    quantity_sold: number | null
    unit_price: number | null
  }

  export type SalesOrderItemsMinAggregateOutputType = {
    order_item_id: number | null
    order_id: number | null
    part_id: number | null
    quantity_sold: number | null
    unit_price: number | null
  }

  export type SalesOrderItemsMaxAggregateOutputType = {
    order_item_id: number | null
    order_id: number | null
    part_id: number | null
    quantity_sold: number | null
    unit_price: number | null
  }

  export type SalesOrderItemsCountAggregateOutputType = {
    order_item_id: number
    order_id: number
    part_id: number
    quantity_sold: number
    unit_price: number
    _all: number
  }


  export type SalesOrderItemsAvgAggregateInputType = {
    order_item_id?: true
    order_id?: true
    part_id?: true
    quantity_sold?: true
    unit_price?: true
  }

  export type SalesOrderItemsSumAggregateInputType = {
    order_item_id?: true
    order_id?: true
    part_id?: true
    quantity_sold?: true
    unit_price?: true
  }

  export type SalesOrderItemsMinAggregateInputType = {
    order_item_id?: true
    order_id?: true
    part_id?: true
    quantity_sold?: true
    unit_price?: true
  }

  export type SalesOrderItemsMaxAggregateInputType = {
    order_item_id?: true
    order_id?: true
    part_id?: true
    quantity_sold?: true
    unit_price?: true
  }

  export type SalesOrderItemsCountAggregateInputType = {
    order_item_id?: true
    order_id?: true
    part_id?: true
    quantity_sold?: true
    unit_price?: true
    _all?: true
  }

  export type SalesOrderItemsAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesOrderItems to aggregate.
     */
    where?: SalesOrderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesOrderItems to fetch.
     */
    orderBy?: Enumerable<SalesOrderItemsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalesOrderItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SalesOrderItems
    **/
    _count?: true | SalesOrderItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalesOrderItemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalesOrderItemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalesOrderItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalesOrderItemsMaxAggregateInputType
  }

  export type GetSalesOrderItemsAggregateType<T extends SalesOrderItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateSalesOrderItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalesOrderItems[P]>
      : GetScalarType<T[P], AggregateSalesOrderItems[P]>
  }




  export type SalesOrderItemsGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SalesOrderItemsWhereInput
    orderBy?: Enumerable<SalesOrderItemsOrderByWithAggregationInput>
    by: SalesOrderItemsScalarFieldEnum[]
    having?: SalesOrderItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalesOrderItemsCountAggregateInputType | true
    _avg?: SalesOrderItemsAvgAggregateInputType
    _sum?: SalesOrderItemsSumAggregateInputType
    _min?: SalesOrderItemsMinAggregateInputType
    _max?: SalesOrderItemsMaxAggregateInputType
  }


  export type SalesOrderItemsGroupByOutputType = {
    order_item_id: number
    order_id: number
    part_id: number
    quantity_sold: number
    unit_price: number
    _count: SalesOrderItemsCountAggregateOutputType | null
    _avg: SalesOrderItemsAvgAggregateOutputType | null
    _sum: SalesOrderItemsSumAggregateOutputType | null
    _min: SalesOrderItemsMinAggregateOutputType | null
    _max: SalesOrderItemsMaxAggregateOutputType | null
  }

  type GetSalesOrderItemsGroupByPayload<T extends SalesOrderItemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<SalesOrderItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalesOrderItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalesOrderItemsGroupByOutputType[P]>
            : GetScalarType<T[P], SalesOrderItemsGroupByOutputType[P]>
        }
      >
    >


  export type SalesOrderItemsSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_item_id?: boolean
    order_id?: boolean
    part_id?: boolean
    quantity_sold?: boolean
    unit_price?: boolean
  }, ExtArgs["result"]["salesOrderItems"]>

  export type SalesOrderItemsSelectScalar = {
    order_item_id?: boolean
    order_id?: boolean
    part_id?: boolean
    quantity_sold?: boolean
    unit_price?: boolean
  }


  type SalesOrderItemsGetPayload<S extends boolean | null | undefined | SalesOrderItemsArgs> = $Types.GetResult<SalesOrderItemsPayload, S>

  type SalesOrderItemsCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<SalesOrderItemsFindManyArgs, 'select' | 'include'> & {
      select?: SalesOrderItemsCountAggregateInputType | true
    }

  export interface SalesOrderItemsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SalesOrderItems'], meta: { name: 'SalesOrderItems' } }
    /**
     * Find zero or one SalesOrderItems that matches the filter.
     * @param {SalesOrderItemsFindUniqueArgs} args - Arguments to find a SalesOrderItems
     * @example
     * // Get one SalesOrderItems
     * const salesOrderItems = await prisma.salesOrderItems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SalesOrderItemsFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SalesOrderItemsFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'SalesOrderItems'> extends True ? Prisma__SalesOrderItemsClient<$Types.GetResult<SalesOrderItemsPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__SalesOrderItemsClient<$Types.GetResult<SalesOrderItemsPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one SalesOrderItems that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SalesOrderItemsFindUniqueOrThrowArgs} args - Arguments to find a SalesOrderItems
     * @example
     * // Get one SalesOrderItems
     * const salesOrderItems = await prisma.salesOrderItems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SalesOrderItemsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SalesOrderItemsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SalesOrderItemsClient<$Types.GetResult<SalesOrderItemsPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first SalesOrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrderItemsFindFirstArgs} args - Arguments to find a SalesOrderItems
     * @example
     * // Get one SalesOrderItems
     * const salesOrderItems = await prisma.salesOrderItems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SalesOrderItemsFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SalesOrderItemsFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'SalesOrderItems'> extends True ? Prisma__SalesOrderItemsClient<$Types.GetResult<SalesOrderItemsPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__SalesOrderItemsClient<$Types.GetResult<SalesOrderItemsPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first SalesOrderItems that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrderItemsFindFirstOrThrowArgs} args - Arguments to find a SalesOrderItems
     * @example
     * // Get one SalesOrderItems
     * const salesOrderItems = await prisma.salesOrderItems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SalesOrderItemsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SalesOrderItemsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SalesOrderItemsClient<$Types.GetResult<SalesOrderItemsPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more SalesOrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrderItemsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalesOrderItems
     * const salesOrderItems = await prisma.salesOrderItems.findMany()
     * 
     * // Get first 10 SalesOrderItems
     * const salesOrderItems = await prisma.salesOrderItems.findMany({ take: 10 })
     * 
     * // Only select the `order_item_id`
     * const salesOrderItemsWithOrder_item_idOnly = await prisma.salesOrderItems.findMany({ select: { order_item_id: true } })
     * 
    **/
    findMany<T extends SalesOrderItemsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SalesOrderItemsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<SalesOrderItemsPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a SalesOrderItems.
     * @param {SalesOrderItemsCreateArgs} args - Arguments to create a SalesOrderItems.
     * @example
     * // Create one SalesOrderItems
     * const SalesOrderItems = await prisma.salesOrderItems.create({
     *   data: {
     *     // ... data to create a SalesOrderItems
     *   }
     * })
     * 
    **/
    create<T extends SalesOrderItemsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SalesOrderItemsCreateArgs<ExtArgs>>
    ): Prisma__SalesOrderItemsClient<$Types.GetResult<SalesOrderItemsPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many SalesOrderItems.
     *     @param {SalesOrderItemsCreateManyArgs} args - Arguments to create many SalesOrderItems.
     *     @example
     *     // Create many SalesOrderItems
     *     const salesOrderItems = await prisma.salesOrderItems.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SalesOrderItemsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SalesOrderItemsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SalesOrderItems.
     * @param {SalesOrderItemsDeleteArgs} args - Arguments to delete one SalesOrderItems.
     * @example
     * // Delete one SalesOrderItems
     * const SalesOrderItems = await prisma.salesOrderItems.delete({
     *   where: {
     *     // ... filter to delete one SalesOrderItems
     *   }
     * })
     * 
    **/
    delete<T extends SalesOrderItemsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SalesOrderItemsDeleteArgs<ExtArgs>>
    ): Prisma__SalesOrderItemsClient<$Types.GetResult<SalesOrderItemsPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one SalesOrderItems.
     * @param {SalesOrderItemsUpdateArgs} args - Arguments to update one SalesOrderItems.
     * @example
     * // Update one SalesOrderItems
     * const salesOrderItems = await prisma.salesOrderItems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SalesOrderItemsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SalesOrderItemsUpdateArgs<ExtArgs>>
    ): Prisma__SalesOrderItemsClient<$Types.GetResult<SalesOrderItemsPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more SalesOrderItems.
     * @param {SalesOrderItemsDeleteManyArgs} args - Arguments to filter SalesOrderItems to delete.
     * @example
     * // Delete a few SalesOrderItems
     * const { count } = await prisma.salesOrderItems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SalesOrderItemsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SalesOrderItemsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalesOrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrderItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalesOrderItems
     * const salesOrderItems = await prisma.salesOrderItems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SalesOrderItemsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SalesOrderItemsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SalesOrderItems.
     * @param {SalesOrderItemsUpsertArgs} args - Arguments to update or create a SalesOrderItems.
     * @example
     * // Update or create a SalesOrderItems
     * const salesOrderItems = await prisma.salesOrderItems.upsert({
     *   create: {
     *     // ... data to create a SalesOrderItems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalesOrderItems we want to update
     *   }
     * })
    **/
    upsert<T extends SalesOrderItemsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SalesOrderItemsUpsertArgs<ExtArgs>>
    ): Prisma__SalesOrderItemsClient<$Types.GetResult<SalesOrderItemsPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of SalesOrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrderItemsCountArgs} args - Arguments to filter SalesOrderItems to count.
     * @example
     * // Count the number of SalesOrderItems
     * const count = await prisma.salesOrderItems.count({
     *   where: {
     *     // ... the filter for the SalesOrderItems we want to count
     *   }
     * })
    **/
    count<T extends SalesOrderItemsCountArgs>(
      args?: Subset<T, SalesOrderItemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalesOrderItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SalesOrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrderItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SalesOrderItemsAggregateArgs>(args: Subset<T, SalesOrderItemsAggregateArgs>): Prisma.PrismaPromise<GetSalesOrderItemsAggregateType<T>>

    /**
     * Group by SalesOrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrderItemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SalesOrderItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalesOrderItemsGroupByArgs['orderBy'] }
        : { orderBy?: SalesOrderItemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SalesOrderItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalesOrderItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for SalesOrderItems.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SalesOrderItemsClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * SalesOrderItems base type for findUnique actions
   */
  export type SalesOrderItemsFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderItems
     */
    select?: SalesOrderItemsSelect<ExtArgs> | null
    /**
     * Filter, which SalesOrderItems to fetch.
     */
    where: SalesOrderItemsWhereUniqueInput
  }

  /**
   * SalesOrderItems findUnique
   */
  export interface SalesOrderItemsFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends SalesOrderItemsFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SalesOrderItems findUniqueOrThrow
   */
  export type SalesOrderItemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderItems
     */
    select?: SalesOrderItemsSelect<ExtArgs> | null
    /**
     * Filter, which SalesOrderItems to fetch.
     */
    where: SalesOrderItemsWhereUniqueInput
  }


  /**
   * SalesOrderItems base type for findFirst actions
   */
  export type SalesOrderItemsFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderItems
     */
    select?: SalesOrderItemsSelect<ExtArgs> | null
    /**
     * Filter, which SalesOrderItems to fetch.
     */
    where?: SalesOrderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesOrderItems to fetch.
     */
    orderBy?: Enumerable<SalesOrderItemsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesOrderItems.
     */
    cursor?: SalesOrderItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesOrderItems.
     */
    distinct?: Enumerable<SalesOrderItemsScalarFieldEnum>
  }

  /**
   * SalesOrderItems findFirst
   */
  export interface SalesOrderItemsFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends SalesOrderItemsFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SalesOrderItems findFirstOrThrow
   */
  export type SalesOrderItemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderItems
     */
    select?: SalesOrderItemsSelect<ExtArgs> | null
    /**
     * Filter, which SalesOrderItems to fetch.
     */
    where?: SalesOrderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesOrderItems to fetch.
     */
    orderBy?: Enumerable<SalesOrderItemsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesOrderItems.
     */
    cursor?: SalesOrderItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesOrderItems.
     */
    distinct?: Enumerable<SalesOrderItemsScalarFieldEnum>
  }


  /**
   * SalesOrderItems findMany
   */
  export type SalesOrderItemsFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderItems
     */
    select?: SalesOrderItemsSelect<ExtArgs> | null
    /**
     * Filter, which SalesOrderItems to fetch.
     */
    where?: SalesOrderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesOrderItems to fetch.
     */
    orderBy?: Enumerable<SalesOrderItemsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SalesOrderItems.
     */
    cursor?: SalesOrderItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesOrderItems.
     */
    skip?: number
    distinct?: Enumerable<SalesOrderItemsScalarFieldEnum>
  }


  /**
   * SalesOrderItems create
   */
  export type SalesOrderItemsCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderItems
     */
    select?: SalesOrderItemsSelect<ExtArgs> | null
    /**
     * The data needed to create a SalesOrderItems.
     */
    data: XOR<SalesOrderItemsCreateInput, SalesOrderItemsUncheckedCreateInput>
  }


  /**
   * SalesOrderItems createMany
   */
  export type SalesOrderItemsCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SalesOrderItems.
     */
    data: Enumerable<SalesOrderItemsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * SalesOrderItems update
   */
  export type SalesOrderItemsUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderItems
     */
    select?: SalesOrderItemsSelect<ExtArgs> | null
    /**
     * The data needed to update a SalesOrderItems.
     */
    data: XOR<SalesOrderItemsUpdateInput, SalesOrderItemsUncheckedUpdateInput>
    /**
     * Choose, which SalesOrderItems to update.
     */
    where: SalesOrderItemsWhereUniqueInput
  }


  /**
   * SalesOrderItems updateMany
   */
  export type SalesOrderItemsUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SalesOrderItems.
     */
    data: XOR<SalesOrderItemsUpdateManyMutationInput, SalesOrderItemsUncheckedUpdateManyInput>
    /**
     * Filter which SalesOrderItems to update
     */
    where?: SalesOrderItemsWhereInput
  }


  /**
   * SalesOrderItems upsert
   */
  export type SalesOrderItemsUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderItems
     */
    select?: SalesOrderItemsSelect<ExtArgs> | null
    /**
     * The filter to search for the SalesOrderItems to update in case it exists.
     */
    where: SalesOrderItemsWhereUniqueInput
    /**
     * In case the SalesOrderItems found by the `where` argument doesn't exist, create a new SalesOrderItems with this data.
     */
    create: XOR<SalesOrderItemsCreateInput, SalesOrderItemsUncheckedCreateInput>
    /**
     * In case the SalesOrderItems was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalesOrderItemsUpdateInput, SalesOrderItemsUncheckedUpdateInput>
  }


  /**
   * SalesOrderItems delete
   */
  export type SalesOrderItemsDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderItems
     */
    select?: SalesOrderItemsSelect<ExtArgs> | null
    /**
     * Filter which SalesOrderItems to delete.
     */
    where: SalesOrderItemsWhereUniqueInput
  }


  /**
   * SalesOrderItems deleteMany
   */
  export type SalesOrderItemsDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesOrderItems to delete
     */
    where?: SalesOrderItemsWhereInput
  }


  /**
   * SalesOrderItems without action
   */
  export type SalesOrderItemsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderItems
     */
    select?: SalesOrderItemsSelect<ExtArgs> | null
  }



  /**
   * Model Customers
   */


  export type AggregateCustomers = {
    _count: CustomersCountAggregateOutputType | null
    _avg: CustomersAvgAggregateOutputType | null
    _sum: CustomersSumAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  export type CustomersAvgAggregateOutputType = {
    customer_id: number | null
  }

  export type CustomersSumAggregateOutputType = {
    customer_id: number | null
  }

  export type CustomersMinAggregateOutputType = {
    customer_id: number | null
    customer_name: string | null
    customer_email: string | null
    customer_phone: string | null
  }

  export type CustomersMaxAggregateOutputType = {
    customer_id: number | null
    customer_name: string | null
    customer_email: string | null
    customer_phone: string | null
  }

  export type CustomersCountAggregateOutputType = {
    customer_id: number
    customer_name: number
    customer_email: number
    customer_phone: number
    _all: number
  }


  export type CustomersAvgAggregateInputType = {
    customer_id?: true
  }

  export type CustomersSumAggregateInputType = {
    customer_id?: true
  }

  export type CustomersMinAggregateInputType = {
    customer_id?: true
    customer_name?: true
    customer_email?: true
    customer_phone?: true
  }

  export type CustomersMaxAggregateInputType = {
    customer_id?: true
    customer_name?: true
    customer_email?: true
    customer_phone?: true
  }

  export type CustomersCountAggregateInputType = {
    customer_id?: true
    customer_name?: true
    customer_email?: true
    customer_phone?: true
    _all?: true
  }

  export type CustomersAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to aggregate.
     */
    where?: CustomersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: Enumerable<CustomersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomersMaxAggregateInputType
  }

  export type GetCustomersAggregateType<T extends CustomersAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomers[P]>
      : GetScalarType<T[P], AggregateCustomers[P]>
  }




  export type CustomersGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CustomersWhereInput
    orderBy?: Enumerable<CustomersOrderByWithAggregationInput>
    by: CustomersScalarFieldEnum[]
    having?: CustomersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomersCountAggregateInputType | true
    _avg?: CustomersAvgAggregateInputType
    _sum?: CustomersSumAggregateInputType
    _min?: CustomersMinAggregateInputType
    _max?: CustomersMaxAggregateInputType
  }


  export type CustomersGroupByOutputType = {
    customer_id: number
    customer_name: string
    customer_email: string
    customer_phone: string
    _count: CustomersCountAggregateOutputType | null
    _avg: CustomersAvgAggregateOutputType | null
    _sum: CustomersSumAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  type GetCustomersGroupByPayload<T extends CustomersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CustomersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomersGroupByOutputType[P]>
            : GetScalarType<T[P], CustomersGroupByOutputType[P]>
        }
      >
    >


  export type CustomersSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customer_id?: boolean
    customer_name?: boolean
    customer_email?: boolean
    customer_phone?: boolean
  }, ExtArgs["result"]["customers"]>

  export type CustomersSelectScalar = {
    customer_id?: boolean
    customer_name?: boolean
    customer_email?: boolean
    customer_phone?: boolean
  }


  type CustomersGetPayload<S extends boolean | null | undefined | CustomersArgs> = $Types.GetResult<CustomersPayload, S>

  type CustomersCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<CustomersFindManyArgs, 'select' | 'include'> & {
      select?: CustomersCountAggregateInputType | true
    }

  export interface CustomersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customers'], meta: { name: 'Customers' } }
    /**
     * Find zero or one Customers that matches the filter.
     * @param {CustomersFindUniqueArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CustomersFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CustomersFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Customers'> extends True ? Prisma__CustomersClient<$Types.GetResult<CustomersPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__CustomersClient<$Types.GetResult<CustomersPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Customers that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CustomersFindUniqueOrThrowArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CustomersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CustomersClient<$Types.GetResult<CustomersPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersFindFirstArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CustomersFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CustomersFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Customers'> extends True ? Prisma__CustomersClient<$Types.GetResult<CustomersPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__CustomersClient<$Types.GetResult<CustomersPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Customers that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersFindFirstOrThrowArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CustomersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CustomersClient<$Types.GetResult<CustomersPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customers.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customers.findMany({ take: 10 })
     * 
     * // Only select the `customer_id`
     * const customersWithCustomer_idOnly = await prisma.customers.findMany({ select: { customer_id: true } })
     * 
    **/
    findMany<T extends CustomersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<CustomersPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Customers.
     * @param {CustomersCreateArgs} args - Arguments to create a Customers.
     * @example
     * // Create one Customers
     * const Customers = await prisma.customers.create({
     *   data: {
     *     // ... data to create a Customers
     *   }
     * })
     * 
    **/
    create<T extends CustomersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CustomersCreateArgs<ExtArgs>>
    ): Prisma__CustomersClient<$Types.GetResult<CustomersPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Customers.
     *     @param {CustomersCreateManyArgs} args - Arguments to create many Customers.
     *     @example
     *     // Create many Customers
     *     const customers = await prisma.customers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CustomersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Customers.
     * @param {CustomersDeleteArgs} args - Arguments to delete one Customers.
     * @example
     * // Delete one Customers
     * const Customers = await prisma.customers.delete({
     *   where: {
     *     // ... filter to delete one Customers
     *   }
     * })
     * 
    **/
    delete<T extends CustomersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CustomersDeleteArgs<ExtArgs>>
    ): Prisma__CustomersClient<$Types.GetResult<CustomersPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Customers.
     * @param {CustomersUpdateArgs} args - Arguments to update one Customers.
     * @example
     * // Update one Customers
     * const customers = await prisma.customers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CustomersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CustomersUpdateArgs<ExtArgs>>
    ): Prisma__CustomersClient<$Types.GetResult<CustomersPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Customers.
     * @param {CustomersDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CustomersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customers = await prisma.customers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CustomersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CustomersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customers.
     * @param {CustomersUpsertArgs} args - Arguments to update or create a Customers.
     * @example
     * // Update or create a Customers
     * const customers = await prisma.customers.upsert({
     *   create: {
     *     // ... data to create a Customers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customers we want to update
     *   }
     * })
    **/
    upsert<T extends CustomersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CustomersUpsertArgs<ExtArgs>>
    ): Prisma__CustomersClient<$Types.GetResult<CustomersPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customers.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomersCountArgs>(
      args?: Subset<T, CustomersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomersAggregateArgs>(args: Subset<T, CustomersAggregateArgs>): Prisma.PrismaPromise<GetCustomersAggregateType<T>>

    /**
     * Group by Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomersGroupByArgs['orderBy'] }
        : { orderBy?: CustomersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Customers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CustomersClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Customers base type for findUnique actions
   */
  export type CustomersFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where: CustomersWhereUniqueInput
  }

  /**
   * Customers findUnique
   */
  export interface CustomersFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends CustomersFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Customers findUniqueOrThrow
   */
  export type CustomersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where: CustomersWhereUniqueInput
  }


  /**
   * Customers base type for findFirst actions
   */
  export type CustomersFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: Enumerable<CustomersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: Enumerable<CustomersScalarFieldEnum>
  }

  /**
   * Customers findFirst
   */
  export interface CustomersFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends CustomersFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Customers findFirstOrThrow
   */
  export type CustomersFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: Enumerable<CustomersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: Enumerable<CustomersScalarFieldEnum>
  }


  /**
   * Customers findMany
   */
  export type CustomersFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: Enumerable<CustomersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: Enumerable<CustomersScalarFieldEnum>
  }


  /**
   * Customers create
   */
  export type CustomersCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * The data needed to create a Customers.
     */
    data: XOR<CustomersCreateInput, CustomersUncheckedCreateInput>
  }


  /**
   * Customers createMany
   */
  export type CustomersCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: Enumerable<CustomersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Customers update
   */
  export type CustomersUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * The data needed to update a Customers.
     */
    data: XOR<CustomersUpdateInput, CustomersUncheckedUpdateInput>
    /**
     * Choose, which Customers to update.
     */
    where: CustomersWhereUniqueInput
  }


  /**
   * Customers updateMany
   */
  export type CustomersUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomersUpdateManyMutationInput, CustomersUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomersWhereInput
  }


  /**
   * Customers upsert
   */
  export type CustomersUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * The filter to search for the Customers to update in case it exists.
     */
    where: CustomersWhereUniqueInput
    /**
     * In case the Customers found by the `where` argument doesn't exist, create a new Customers with this data.
     */
    create: XOR<CustomersCreateInput, CustomersUncheckedCreateInput>
    /**
     * In case the Customers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomersUpdateInput, CustomersUncheckedUpdateInput>
  }


  /**
   * Customers delete
   */
  export type CustomersDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
    /**
     * Filter which Customers to delete.
     */
    where: CustomersWhereUniqueInput
  }


  /**
   * Customers deleteMany
   */
  export type CustomersDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomersWhereInput
  }


  /**
   * Customers without action
   */
  export type CustomersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customers
     */
    select?: CustomersSelect<ExtArgs> | null
  }



  /**
   * Model InventoryTransactions
   */


  export type AggregateInventoryTransactions = {
    _count: InventoryTransactionsCountAggregateOutputType | null
    _avg: InventoryTransactionsAvgAggregateOutputType | null
    _sum: InventoryTransactionsSumAggregateOutputType | null
    _min: InventoryTransactionsMinAggregateOutputType | null
    _max: InventoryTransactionsMaxAggregateOutputType | null
  }

  export type InventoryTransactionsAvgAggregateOutputType = {
    transaction_id: number | null
    part_id: number | null
    quantity_change: number | null
    related_order_id: number | null
  }

  export type InventoryTransactionsSumAggregateOutputType = {
    transaction_id: number | null
    part_id: number | null
    quantity_change: number | null
    related_order_id: number | null
  }

  export type InventoryTransactionsMinAggregateOutputType = {
    transaction_id: number | null
    part_id: number | null
    quantity_change: number | null
    transaction_date: Date | null
    transaction_type: string | null
    related_order_id: number | null
  }

  export type InventoryTransactionsMaxAggregateOutputType = {
    transaction_id: number | null
    part_id: number | null
    quantity_change: number | null
    transaction_date: Date | null
    transaction_type: string | null
    related_order_id: number | null
  }

  export type InventoryTransactionsCountAggregateOutputType = {
    transaction_id: number
    part_id: number
    quantity_change: number
    transaction_date: number
    transaction_type: number
    related_order_id: number
    _all: number
  }


  export type InventoryTransactionsAvgAggregateInputType = {
    transaction_id?: true
    part_id?: true
    quantity_change?: true
    related_order_id?: true
  }

  export type InventoryTransactionsSumAggregateInputType = {
    transaction_id?: true
    part_id?: true
    quantity_change?: true
    related_order_id?: true
  }

  export type InventoryTransactionsMinAggregateInputType = {
    transaction_id?: true
    part_id?: true
    quantity_change?: true
    transaction_date?: true
    transaction_type?: true
    related_order_id?: true
  }

  export type InventoryTransactionsMaxAggregateInputType = {
    transaction_id?: true
    part_id?: true
    quantity_change?: true
    transaction_date?: true
    transaction_type?: true
    related_order_id?: true
  }

  export type InventoryTransactionsCountAggregateInputType = {
    transaction_id?: true
    part_id?: true
    quantity_change?: true
    transaction_date?: true
    transaction_type?: true
    related_order_id?: true
    _all?: true
  }

  export type InventoryTransactionsAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryTransactions to aggregate.
     */
    where?: InventoryTransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryTransactions to fetch.
     */
    orderBy?: Enumerable<InventoryTransactionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryTransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventoryTransactions
    **/
    _count?: true | InventoryTransactionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryTransactionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventoryTransactionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryTransactionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryTransactionsMaxAggregateInputType
  }

  export type GetInventoryTransactionsAggregateType<T extends InventoryTransactionsAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryTransactions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryTransactions[P]>
      : GetScalarType<T[P], AggregateInventoryTransactions[P]>
  }




  export type InventoryTransactionsGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: InventoryTransactionsWhereInput
    orderBy?: Enumerable<InventoryTransactionsOrderByWithAggregationInput>
    by: InventoryTransactionsScalarFieldEnum[]
    having?: InventoryTransactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryTransactionsCountAggregateInputType | true
    _avg?: InventoryTransactionsAvgAggregateInputType
    _sum?: InventoryTransactionsSumAggregateInputType
    _min?: InventoryTransactionsMinAggregateInputType
    _max?: InventoryTransactionsMaxAggregateInputType
  }


  export type InventoryTransactionsGroupByOutputType = {
    transaction_id: number
    part_id: number
    quantity_change: number
    transaction_date: Date
    transaction_type: string
    related_order_id: number | null
    _count: InventoryTransactionsCountAggregateOutputType | null
    _avg: InventoryTransactionsAvgAggregateOutputType | null
    _sum: InventoryTransactionsSumAggregateOutputType | null
    _min: InventoryTransactionsMinAggregateOutputType | null
    _max: InventoryTransactionsMaxAggregateOutputType | null
  }

  type GetInventoryTransactionsGroupByPayload<T extends InventoryTransactionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<InventoryTransactionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryTransactionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryTransactionsGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryTransactionsGroupByOutputType[P]>
        }
      >
    >


  export type InventoryTransactionsSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    transaction_id?: boolean
    part_id?: boolean
    quantity_change?: boolean
    transaction_date?: boolean
    transaction_type?: boolean
    related_order_id?: boolean
  }, ExtArgs["result"]["inventoryTransactions"]>

  export type InventoryTransactionsSelectScalar = {
    transaction_id?: boolean
    part_id?: boolean
    quantity_change?: boolean
    transaction_date?: boolean
    transaction_type?: boolean
    related_order_id?: boolean
  }


  type InventoryTransactionsGetPayload<S extends boolean | null | undefined | InventoryTransactionsArgs> = $Types.GetResult<InventoryTransactionsPayload, S>

  type InventoryTransactionsCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<InventoryTransactionsFindManyArgs, 'select' | 'include'> & {
      select?: InventoryTransactionsCountAggregateInputType | true
    }

  export interface InventoryTransactionsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryTransactions'], meta: { name: 'InventoryTransactions' } }
    /**
     * Find zero or one InventoryTransactions that matches the filter.
     * @param {InventoryTransactionsFindUniqueArgs} args - Arguments to find a InventoryTransactions
     * @example
     * // Get one InventoryTransactions
     * const inventoryTransactions = await prisma.inventoryTransactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends InventoryTransactionsFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, InventoryTransactionsFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'InventoryTransactions'> extends True ? Prisma__InventoryTransactionsClient<$Types.GetResult<InventoryTransactionsPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__InventoryTransactionsClient<$Types.GetResult<InventoryTransactionsPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one InventoryTransactions that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {InventoryTransactionsFindUniqueOrThrowArgs} args - Arguments to find a InventoryTransactions
     * @example
     * // Get one InventoryTransactions
     * const inventoryTransactions = await prisma.inventoryTransactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends InventoryTransactionsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InventoryTransactionsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__InventoryTransactionsClient<$Types.GetResult<InventoryTransactionsPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first InventoryTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTransactionsFindFirstArgs} args - Arguments to find a InventoryTransactions
     * @example
     * // Get one InventoryTransactions
     * const inventoryTransactions = await prisma.inventoryTransactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends InventoryTransactionsFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, InventoryTransactionsFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'InventoryTransactions'> extends True ? Prisma__InventoryTransactionsClient<$Types.GetResult<InventoryTransactionsPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__InventoryTransactionsClient<$Types.GetResult<InventoryTransactionsPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first InventoryTransactions that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTransactionsFindFirstOrThrowArgs} args - Arguments to find a InventoryTransactions
     * @example
     * // Get one InventoryTransactions
     * const inventoryTransactions = await prisma.inventoryTransactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends InventoryTransactionsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InventoryTransactionsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__InventoryTransactionsClient<$Types.GetResult<InventoryTransactionsPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more InventoryTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTransactionsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryTransactions
     * const inventoryTransactions = await prisma.inventoryTransactions.findMany()
     * 
     * // Get first 10 InventoryTransactions
     * const inventoryTransactions = await prisma.inventoryTransactions.findMany({ take: 10 })
     * 
     * // Only select the `transaction_id`
     * const inventoryTransactionsWithTransaction_idOnly = await prisma.inventoryTransactions.findMany({ select: { transaction_id: true } })
     * 
    **/
    findMany<T extends InventoryTransactionsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InventoryTransactionsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<InventoryTransactionsPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a InventoryTransactions.
     * @param {InventoryTransactionsCreateArgs} args - Arguments to create a InventoryTransactions.
     * @example
     * // Create one InventoryTransactions
     * const InventoryTransactions = await prisma.inventoryTransactions.create({
     *   data: {
     *     // ... data to create a InventoryTransactions
     *   }
     * })
     * 
    **/
    create<T extends InventoryTransactionsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, InventoryTransactionsCreateArgs<ExtArgs>>
    ): Prisma__InventoryTransactionsClient<$Types.GetResult<InventoryTransactionsPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many InventoryTransactions.
     *     @param {InventoryTransactionsCreateManyArgs} args - Arguments to create many InventoryTransactions.
     *     @example
     *     // Create many InventoryTransactions
     *     const inventoryTransactions = await prisma.inventoryTransactions.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends InventoryTransactionsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InventoryTransactionsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InventoryTransactions.
     * @param {InventoryTransactionsDeleteArgs} args - Arguments to delete one InventoryTransactions.
     * @example
     * // Delete one InventoryTransactions
     * const InventoryTransactions = await prisma.inventoryTransactions.delete({
     *   where: {
     *     // ... filter to delete one InventoryTransactions
     *   }
     * })
     * 
    **/
    delete<T extends InventoryTransactionsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, InventoryTransactionsDeleteArgs<ExtArgs>>
    ): Prisma__InventoryTransactionsClient<$Types.GetResult<InventoryTransactionsPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one InventoryTransactions.
     * @param {InventoryTransactionsUpdateArgs} args - Arguments to update one InventoryTransactions.
     * @example
     * // Update one InventoryTransactions
     * const inventoryTransactions = await prisma.inventoryTransactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends InventoryTransactionsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, InventoryTransactionsUpdateArgs<ExtArgs>>
    ): Prisma__InventoryTransactionsClient<$Types.GetResult<InventoryTransactionsPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more InventoryTransactions.
     * @param {InventoryTransactionsDeleteManyArgs} args - Arguments to filter InventoryTransactions to delete.
     * @example
     * // Delete a few InventoryTransactions
     * const { count } = await prisma.inventoryTransactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends InventoryTransactionsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InventoryTransactionsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTransactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryTransactions
     * const inventoryTransactions = await prisma.inventoryTransactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends InventoryTransactionsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, InventoryTransactionsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InventoryTransactions.
     * @param {InventoryTransactionsUpsertArgs} args - Arguments to update or create a InventoryTransactions.
     * @example
     * // Update or create a InventoryTransactions
     * const inventoryTransactions = await prisma.inventoryTransactions.upsert({
     *   create: {
     *     // ... data to create a InventoryTransactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryTransactions we want to update
     *   }
     * })
    **/
    upsert<T extends InventoryTransactionsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, InventoryTransactionsUpsertArgs<ExtArgs>>
    ): Prisma__InventoryTransactionsClient<$Types.GetResult<InventoryTransactionsPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of InventoryTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTransactionsCountArgs} args - Arguments to filter InventoryTransactions to count.
     * @example
     * // Count the number of InventoryTransactions
     * const count = await prisma.inventoryTransactions.count({
     *   where: {
     *     // ... the filter for the InventoryTransactions we want to count
     *   }
     * })
    **/
    count<T extends InventoryTransactionsCountArgs>(
      args?: Subset<T, InventoryTransactionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryTransactionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTransactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryTransactionsAggregateArgs>(args: Subset<T, InventoryTransactionsAggregateArgs>): Prisma.PrismaPromise<GetInventoryTransactionsAggregateType<T>>

    /**
     * Group by InventoryTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTransactionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventoryTransactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryTransactionsGroupByArgs['orderBy'] }
        : { orderBy?: InventoryTransactionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventoryTransactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryTransactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryTransactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__InventoryTransactionsClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * InventoryTransactions base type for findUnique actions
   */
  export type InventoryTransactionsFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransactions
     */
    select?: InventoryTransactionsSelect<ExtArgs> | null
    /**
     * Filter, which InventoryTransactions to fetch.
     */
    where: InventoryTransactionsWhereUniqueInput
  }

  /**
   * InventoryTransactions findUnique
   */
  export interface InventoryTransactionsFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends InventoryTransactionsFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * InventoryTransactions findUniqueOrThrow
   */
  export type InventoryTransactionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransactions
     */
    select?: InventoryTransactionsSelect<ExtArgs> | null
    /**
     * Filter, which InventoryTransactions to fetch.
     */
    where: InventoryTransactionsWhereUniqueInput
  }


  /**
   * InventoryTransactions base type for findFirst actions
   */
  export type InventoryTransactionsFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransactions
     */
    select?: InventoryTransactionsSelect<ExtArgs> | null
    /**
     * Filter, which InventoryTransactions to fetch.
     */
    where?: InventoryTransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryTransactions to fetch.
     */
    orderBy?: Enumerable<InventoryTransactionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryTransactions.
     */
    cursor?: InventoryTransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryTransactions.
     */
    distinct?: Enumerable<InventoryTransactionsScalarFieldEnum>
  }

  /**
   * InventoryTransactions findFirst
   */
  export interface InventoryTransactionsFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends InventoryTransactionsFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * InventoryTransactions findFirstOrThrow
   */
  export type InventoryTransactionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransactions
     */
    select?: InventoryTransactionsSelect<ExtArgs> | null
    /**
     * Filter, which InventoryTransactions to fetch.
     */
    where?: InventoryTransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryTransactions to fetch.
     */
    orderBy?: Enumerable<InventoryTransactionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryTransactions.
     */
    cursor?: InventoryTransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryTransactions.
     */
    distinct?: Enumerable<InventoryTransactionsScalarFieldEnum>
  }


  /**
   * InventoryTransactions findMany
   */
  export type InventoryTransactionsFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransactions
     */
    select?: InventoryTransactionsSelect<ExtArgs> | null
    /**
     * Filter, which InventoryTransactions to fetch.
     */
    where?: InventoryTransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryTransactions to fetch.
     */
    orderBy?: Enumerable<InventoryTransactionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryTransactions.
     */
    cursor?: InventoryTransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryTransactions.
     */
    skip?: number
    distinct?: Enumerable<InventoryTransactionsScalarFieldEnum>
  }


  /**
   * InventoryTransactions create
   */
  export type InventoryTransactionsCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransactions
     */
    select?: InventoryTransactionsSelect<ExtArgs> | null
    /**
     * The data needed to create a InventoryTransactions.
     */
    data: XOR<InventoryTransactionsCreateInput, InventoryTransactionsUncheckedCreateInput>
  }


  /**
   * InventoryTransactions createMany
   */
  export type InventoryTransactionsCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryTransactions.
     */
    data: Enumerable<InventoryTransactionsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * InventoryTransactions update
   */
  export type InventoryTransactionsUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransactions
     */
    select?: InventoryTransactionsSelect<ExtArgs> | null
    /**
     * The data needed to update a InventoryTransactions.
     */
    data: XOR<InventoryTransactionsUpdateInput, InventoryTransactionsUncheckedUpdateInput>
    /**
     * Choose, which InventoryTransactions to update.
     */
    where: InventoryTransactionsWhereUniqueInput
  }


  /**
   * InventoryTransactions updateMany
   */
  export type InventoryTransactionsUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryTransactions.
     */
    data: XOR<InventoryTransactionsUpdateManyMutationInput, InventoryTransactionsUncheckedUpdateManyInput>
    /**
     * Filter which InventoryTransactions to update
     */
    where?: InventoryTransactionsWhereInput
  }


  /**
   * InventoryTransactions upsert
   */
  export type InventoryTransactionsUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransactions
     */
    select?: InventoryTransactionsSelect<ExtArgs> | null
    /**
     * The filter to search for the InventoryTransactions to update in case it exists.
     */
    where: InventoryTransactionsWhereUniqueInput
    /**
     * In case the InventoryTransactions found by the `where` argument doesn't exist, create a new InventoryTransactions with this data.
     */
    create: XOR<InventoryTransactionsCreateInput, InventoryTransactionsUncheckedCreateInput>
    /**
     * In case the InventoryTransactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryTransactionsUpdateInput, InventoryTransactionsUncheckedUpdateInput>
  }


  /**
   * InventoryTransactions delete
   */
  export type InventoryTransactionsDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransactions
     */
    select?: InventoryTransactionsSelect<ExtArgs> | null
    /**
     * Filter which InventoryTransactions to delete.
     */
    where: InventoryTransactionsWhereUniqueInput
  }


  /**
   * InventoryTransactions deleteMany
   */
  export type InventoryTransactionsDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryTransactions to delete
     */
    where?: InventoryTransactionsWhereInput
  }


  /**
   * InventoryTransactions without action
   */
  export type InventoryTransactionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransactions
     */
    select?: InventoryTransactionsSelect<ExtArgs> | null
  }



  /**
   * Model Adjustments
   */


  export type AggregateAdjustments = {
    _count: AdjustmentsCountAggregateOutputType | null
    _avg: AdjustmentsAvgAggregateOutputType | null
    _sum: AdjustmentsSumAggregateOutputType | null
    _min: AdjustmentsMinAggregateOutputType | null
    _max: AdjustmentsMaxAggregateOutputType | null
  }

  export type AdjustmentsAvgAggregateOutputType = {
    adjustment_id: number | null
    part_id: number | null
    quantity_change: number | null
  }

  export type AdjustmentsSumAggregateOutputType = {
    adjustment_id: number | null
    part_id: number | null
    quantity_change: number | null
  }

  export type AdjustmentsMinAggregateOutputType = {
    adjustment_id: number | null
    part_id: number | null
    adjustment_reason: string | null
    quantity_change: number | null
    adjustment_date: Date | null
  }

  export type AdjustmentsMaxAggregateOutputType = {
    adjustment_id: number | null
    part_id: number | null
    adjustment_reason: string | null
    quantity_change: number | null
    adjustment_date: Date | null
  }

  export type AdjustmentsCountAggregateOutputType = {
    adjustment_id: number
    part_id: number
    adjustment_reason: number
    quantity_change: number
    adjustment_date: number
    _all: number
  }


  export type AdjustmentsAvgAggregateInputType = {
    adjustment_id?: true
    part_id?: true
    quantity_change?: true
  }

  export type AdjustmentsSumAggregateInputType = {
    adjustment_id?: true
    part_id?: true
    quantity_change?: true
  }

  export type AdjustmentsMinAggregateInputType = {
    adjustment_id?: true
    part_id?: true
    adjustment_reason?: true
    quantity_change?: true
    adjustment_date?: true
  }

  export type AdjustmentsMaxAggregateInputType = {
    adjustment_id?: true
    part_id?: true
    adjustment_reason?: true
    quantity_change?: true
    adjustment_date?: true
  }

  export type AdjustmentsCountAggregateInputType = {
    adjustment_id?: true
    part_id?: true
    adjustment_reason?: true
    quantity_change?: true
    adjustment_date?: true
    _all?: true
  }

  export type AdjustmentsAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Adjustments to aggregate.
     */
    where?: AdjustmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adjustments to fetch.
     */
    orderBy?: Enumerable<AdjustmentsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdjustmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adjustments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adjustments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Adjustments
    **/
    _count?: true | AdjustmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdjustmentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdjustmentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdjustmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdjustmentsMaxAggregateInputType
  }

  export type GetAdjustmentsAggregateType<T extends AdjustmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateAdjustments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdjustments[P]>
      : GetScalarType<T[P], AggregateAdjustments[P]>
  }




  export type AdjustmentsGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AdjustmentsWhereInput
    orderBy?: Enumerable<AdjustmentsOrderByWithAggregationInput>
    by: AdjustmentsScalarFieldEnum[]
    having?: AdjustmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdjustmentsCountAggregateInputType | true
    _avg?: AdjustmentsAvgAggregateInputType
    _sum?: AdjustmentsSumAggregateInputType
    _min?: AdjustmentsMinAggregateInputType
    _max?: AdjustmentsMaxAggregateInputType
  }


  export type AdjustmentsGroupByOutputType = {
    adjustment_id: number
    part_id: number
    adjustment_reason: string
    quantity_change: number
    adjustment_date: Date
    _count: AdjustmentsCountAggregateOutputType | null
    _avg: AdjustmentsAvgAggregateOutputType | null
    _sum: AdjustmentsSumAggregateOutputType | null
    _min: AdjustmentsMinAggregateOutputType | null
    _max: AdjustmentsMaxAggregateOutputType | null
  }

  type GetAdjustmentsGroupByPayload<T extends AdjustmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AdjustmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdjustmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdjustmentsGroupByOutputType[P]>
            : GetScalarType<T[P], AdjustmentsGroupByOutputType[P]>
        }
      >
    >


  export type AdjustmentsSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    adjustment_id?: boolean
    part_id?: boolean
    adjustment_reason?: boolean
    quantity_change?: boolean
    adjustment_date?: boolean
  }, ExtArgs["result"]["adjustments"]>

  export type AdjustmentsSelectScalar = {
    adjustment_id?: boolean
    part_id?: boolean
    adjustment_reason?: boolean
    quantity_change?: boolean
    adjustment_date?: boolean
  }


  type AdjustmentsGetPayload<S extends boolean | null | undefined | AdjustmentsArgs> = $Types.GetResult<AdjustmentsPayload, S>

  type AdjustmentsCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<AdjustmentsFindManyArgs, 'select' | 'include'> & {
      select?: AdjustmentsCountAggregateInputType | true
    }

  export interface AdjustmentsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Adjustments'], meta: { name: 'Adjustments' } }
    /**
     * Find zero or one Adjustments that matches the filter.
     * @param {AdjustmentsFindUniqueArgs} args - Arguments to find a Adjustments
     * @example
     * // Get one Adjustments
     * const adjustments = await prisma.adjustments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AdjustmentsFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AdjustmentsFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Adjustments'> extends True ? Prisma__AdjustmentsClient<$Types.GetResult<AdjustmentsPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__AdjustmentsClient<$Types.GetResult<AdjustmentsPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Adjustments that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AdjustmentsFindUniqueOrThrowArgs} args - Arguments to find a Adjustments
     * @example
     * // Get one Adjustments
     * const adjustments = await prisma.adjustments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AdjustmentsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AdjustmentsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AdjustmentsClient<$Types.GetResult<AdjustmentsPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Adjustments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdjustmentsFindFirstArgs} args - Arguments to find a Adjustments
     * @example
     * // Get one Adjustments
     * const adjustments = await prisma.adjustments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AdjustmentsFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AdjustmentsFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Adjustments'> extends True ? Prisma__AdjustmentsClient<$Types.GetResult<AdjustmentsPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__AdjustmentsClient<$Types.GetResult<AdjustmentsPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Adjustments that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdjustmentsFindFirstOrThrowArgs} args - Arguments to find a Adjustments
     * @example
     * // Get one Adjustments
     * const adjustments = await prisma.adjustments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AdjustmentsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AdjustmentsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AdjustmentsClient<$Types.GetResult<AdjustmentsPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Adjustments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdjustmentsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Adjustments
     * const adjustments = await prisma.adjustments.findMany()
     * 
     * // Get first 10 Adjustments
     * const adjustments = await prisma.adjustments.findMany({ take: 10 })
     * 
     * // Only select the `adjustment_id`
     * const adjustmentsWithAdjustment_idOnly = await prisma.adjustments.findMany({ select: { adjustment_id: true } })
     * 
    **/
    findMany<T extends AdjustmentsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdjustmentsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<AdjustmentsPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Adjustments.
     * @param {AdjustmentsCreateArgs} args - Arguments to create a Adjustments.
     * @example
     * // Create one Adjustments
     * const Adjustments = await prisma.adjustments.create({
     *   data: {
     *     // ... data to create a Adjustments
     *   }
     * })
     * 
    **/
    create<T extends AdjustmentsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AdjustmentsCreateArgs<ExtArgs>>
    ): Prisma__AdjustmentsClient<$Types.GetResult<AdjustmentsPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Adjustments.
     *     @param {AdjustmentsCreateManyArgs} args - Arguments to create many Adjustments.
     *     @example
     *     // Create many Adjustments
     *     const adjustments = await prisma.adjustments.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AdjustmentsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdjustmentsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Adjustments.
     * @param {AdjustmentsDeleteArgs} args - Arguments to delete one Adjustments.
     * @example
     * // Delete one Adjustments
     * const Adjustments = await prisma.adjustments.delete({
     *   where: {
     *     // ... filter to delete one Adjustments
     *   }
     * })
     * 
    **/
    delete<T extends AdjustmentsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AdjustmentsDeleteArgs<ExtArgs>>
    ): Prisma__AdjustmentsClient<$Types.GetResult<AdjustmentsPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Adjustments.
     * @param {AdjustmentsUpdateArgs} args - Arguments to update one Adjustments.
     * @example
     * // Update one Adjustments
     * const adjustments = await prisma.adjustments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AdjustmentsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AdjustmentsUpdateArgs<ExtArgs>>
    ): Prisma__AdjustmentsClient<$Types.GetResult<AdjustmentsPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Adjustments.
     * @param {AdjustmentsDeleteManyArgs} args - Arguments to filter Adjustments to delete.
     * @example
     * // Delete a few Adjustments
     * const { count } = await prisma.adjustments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AdjustmentsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdjustmentsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adjustments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdjustmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Adjustments
     * const adjustments = await prisma.adjustments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AdjustmentsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AdjustmentsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Adjustments.
     * @param {AdjustmentsUpsertArgs} args - Arguments to update or create a Adjustments.
     * @example
     * // Update or create a Adjustments
     * const adjustments = await prisma.adjustments.upsert({
     *   create: {
     *     // ... data to create a Adjustments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Adjustments we want to update
     *   }
     * })
    **/
    upsert<T extends AdjustmentsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AdjustmentsUpsertArgs<ExtArgs>>
    ): Prisma__AdjustmentsClient<$Types.GetResult<AdjustmentsPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Adjustments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdjustmentsCountArgs} args - Arguments to filter Adjustments to count.
     * @example
     * // Count the number of Adjustments
     * const count = await prisma.adjustments.count({
     *   where: {
     *     // ... the filter for the Adjustments we want to count
     *   }
     * })
    **/
    count<T extends AdjustmentsCountArgs>(
      args?: Subset<T, AdjustmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdjustmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Adjustments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdjustmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdjustmentsAggregateArgs>(args: Subset<T, AdjustmentsAggregateArgs>): Prisma.PrismaPromise<GetAdjustmentsAggregateType<T>>

    /**
     * Group by Adjustments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdjustmentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdjustmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdjustmentsGroupByArgs['orderBy'] }
        : { orderBy?: AdjustmentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdjustmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdjustmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Adjustments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AdjustmentsClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Adjustments base type for findUnique actions
   */
  export type AdjustmentsFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adjustments
     */
    select?: AdjustmentsSelect<ExtArgs> | null
    /**
     * Filter, which Adjustments to fetch.
     */
    where: AdjustmentsWhereUniqueInput
  }

  /**
   * Adjustments findUnique
   */
  export interface AdjustmentsFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends AdjustmentsFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Adjustments findUniqueOrThrow
   */
  export type AdjustmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adjustments
     */
    select?: AdjustmentsSelect<ExtArgs> | null
    /**
     * Filter, which Adjustments to fetch.
     */
    where: AdjustmentsWhereUniqueInput
  }


  /**
   * Adjustments base type for findFirst actions
   */
  export type AdjustmentsFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adjustments
     */
    select?: AdjustmentsSelect<ExtArgs> | null
    /**
     * Filter, which Adjustments to fetch.
     */
    where?: AdjustmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adjustments to fetch.
     */
    orderBy?: Enumerable<AdjustmentsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Adjustments.
     */
    cursor?: AdjustmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adjustments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adjustments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Adjustments.
     */
    distinct?: Enumerable<AdjustmentsScalarFieldEnum>
  }

  /**
   * Adjustments findFirst
   */
  export interface AdjustmentsFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends AdjustmentsFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Adjustments findFirstOrThrow
   */
  export type AdjustmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adjustments
     */
    select?: AdjustmentsSelect<ExtArgs> | null
    /**
     * Filter, which Adjustments to fetch.
     */
    where?: AdjustmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adjustments to fetch.
     */
    orderBy?: Enumerable<AdjustmentsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Adjustments.
     */
    cursor?: AdjustmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adjustments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adjustments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Adjustments.
     */
    distinct?: Enumerable<AdjustmentsScalarFieldEnum>
  }


  /**
   * Adjustments findMany
   */
  export type AdjustmentsFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adjustments
     */
    select?: AdjustmentsSelect<ExtArgs> | null
    /**
     * Filter, which Adjustments to fetch.
     */
    where?: AdjustmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adjustments to fetch.
     */
    orderBy?: Enumerable<AdjustmentsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Adjustments.
     */
    cursor?: AdjustmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adjustments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adjustments.
     */
    skip?: number
    distinct?: Enumerable<AdjustmentsScalarFieldEnum>
  }


  /**
   * Adjustments create
   */
  export type AdjustmentsCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adjustments
     */
    select?: AdjustmentsSelect<ExtArgs> | null
    /**
     * The data needed to create a Adjustments.
     */
    data: XOR<AdjustmentsCreateInput, AdjustmentsUncheckedCreateInput>
  }


  /**
   * Adjustments createMany
   */
  export type AdjustmentsCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Adjustments.
     */
    data: Enumerable<AdjustmentsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Adjustments update
   */
  export type AdjustmentsUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adjustments
     */
    select?: AdjustmentsSelect<ExtArgs> | null
    /**
     * The data needed to update a Adjustments.
     */
    data: XOR<AdjustmentsUpdateInput, AdjustmentsUncheckedUpdateInput>
    /**
     * Choose, which Adjustments to update.
     */
    where: AdjustmentsWhereUniqueInput
  }


  /**
   * Adjustments updateMany
   */
  export type AdjustmentsUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Adjustments.
     */
    data: XOR<AdjustmentsUpdateManyMutationInput, AdjustmentsUncheckedUpdateManyInput>
    /**
     * Filter which Adjustments to update
     */
    where?: AdjustmentsWhereInput
  }


  /**
   * Adjustments upsert
   */
  export type AdjustmentsUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adjustments
     */
    select?: AdjustmentsSelect<ExtArgs> | null
    /**
     * The filter to search for the Adjustments to update in case it exists.
     */
    where: AdjustmentsWhereUniqueInput
    /**
     * In case the Adjustments found by the `where` argument doesn't exist, create a new Adjustments with this data.
     */
    create: XOR<AdjustmentsCreateInput, AdjustmentsUncheckedCreateInput>
    /**
     * In case the Adjustments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdjustmentsUpdateInput, AdjustmentsUncheckedUpdateInput>
  }


  /**
   * Adjustments delete
   */
  export type AdjustmentsDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adjustments
     */
    select?: AdjustmentsSelect<ExtArgs> | null
    /**
     * Filter which Adjustments to delete.
     */
    where: AdjustmentsWhereUniqueInput
  }


  /**
   * Adjustments deleteMany
   */
  export type AdjustmentsDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Adjustments to delete
     */
    where?: AdjustmentsWhereInput
  }


  /**
   * Adjustments without action
   */
  export type AdjustmentsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adjustments
     */
    select?: AdjustmentsSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    last_name: 'last_name',
    profile_pic: 'profile_pic',
    email: 'email',
    phone: 'phone',
    password_hash: 'password_hash',
    user_role: 'user_role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PartsScalarFieldEnum: {
    part_id: 'part_id',
    part_name: 'part_name',
    part_number: 'part_number',
    description: 'description',
    category: 'category',
    quantity_in_stock: 'quantity_in_stock',
    reorder_threshold: 'reorder_threshold',
    unit_price: 'unit_price'
  };

  export type PartsScalarFieldEnum = (typeof PartsScalarFieldEnum)[keyof typeof PartsScalarFieldEnum]


  export const SuppliersScalarFieldEnum: {
    supplier_id: 'supplier_id',
    supplier_name: 'supplier_name',
    contact_name: 'contact_name',
    contact_email: 'contact_email',
    contact_phone: 'contact_phone'
  };

  export type SuppliersScalarFieldEnum = (typeof SuppliersScalarFieldEnum)[keyof typeof SuppliersScalarFieldEnum]


  export const PurchaseOrdersScalarFieldEnum: {
    order_id: 'order_id',
    supplier_id: 'supplier_id',
    order_date: 'order_date',
    expected_delivery_date: 'expected_delivery_date',
    status: 'status',
    total_cost: 'total_cost'
  };

  export type PurchaseOrdersScalarFieldEnum = (typeof PurchaseOrdersScalarFieldEnum)[keyof typeof PurchaseOrdersScalarFieldEnum]


  export const OrderItemsScalarFieldEnum: {
    order_item_id: 'order_item_id',
    order_id: 'order_id',
    part_id: 'part_id',
    quantity_ordered: 'quantity_ordered',
    unit_price: 'unit_price'
  };

  export type OrderItemsScalarFieldEnum = (typeof OrderItemsScalarFieldEnum)[keyof typeof OrderItemsScalarFieldEnum]


  export const SalesOrdersScalarFieldEnum: {
    order_id: 'order_id',
    customer_name: 'customer_name',
    order_date: 'order_date',
    status: 'status',
    total_price: 'total_price'
  };

  export type SalesOrdersScalarFieldEnum = (typeof SalesOrdersScalarFieldEnum)[keyof typeof SalesOrdersScalarFieldEnum]


  export const SalesOrderItemsScalarFieldEnum: {
    order_item_id: 'order_item_id',
    order_id: 'order_id',
    part_id: 'part_id',
    quantity_sold: 'quantity_sold',
    unit_price: 'unit_price'
  };

  export type SalesOrderItemsScalarFieldEnum = (typeof SalesOrderItemsScalarFieldEnum)[keyof typeof SalesOrderItemsScalarFieldEnum]


  export const CustomersScalarFieldEnum: {
    customer_id: 'customer_id',
    customer_name: 'customer_name',
    customer_email: 'customer_email',
    customer_phone: 'customer_phone'
  };

  export type CustomersScalarFieldEnum = (typeof CustomersScalarFieldEnum)[keyof typeof CustomersScalarFieldEnum]


  export const InventoryTransactionsScalarFieldEnum: {
    transaction_id: 'transaction_id',
    part_id: 'part_id',
    quantity_change: 'quantity_change',
    transaction_date: 'transaction_date',
    transaction_type: 'transaction_type',
    related_order_id: 'related_order_id'
  };

  export type InventoryTransactionsScalarFieldEnum = (typeof InventoryTransactionsScalarFieldEnum)[keyof typeof InventoryTransactionsScalarFieldEnum]


  export const AdjustmentsScalarFieldEnum: {
    adjustment_id: 'adjustment_id',
    part_id: 'part_id',
    adjustment_reason: 'adjustment_reason',
    quantity_change: 'quantity_change',
    adjustment_date: 'adjustment_date'
  };

  export type AdjustmentsScalarFieldEnum = (typeof AdjustmentsScalarFieldEnum)[keyof typeof AdjustmentsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    first_name?: StringNullableFilter | string | null
    last_name?: StringNullableFilter | string | null
    profile_pic?: StringNullableFilter | string | null
    email?: StringFilter | string
    phone?: StringNullableFilter | string | null
    password_hash?: StringFilter | string
    user_role?: EnumUserRoleFilter | UserRole
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    profile_pic?: SortOrderInput | SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password_hash?: SortOrder
    user_role?: SortOrder
  }

  export type UserWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    profile_pic?: SortOrderInput | SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password_hash?: SortOrder
    user_role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    first_name?: StringNullableWithAggregatesFilter | string | null
    last_name?: StringNullableWithAggregatesFilter | string | null
    profile_pic?: StringNullableWithAggregatesFilter | string | null
    email?: StringWithAggregatesFilter | string
    phone?: StringNullableWithAggregatesFilter | string | null
    password_hash?: StringWithAggregatesFilter | string
    user_role?: EnumUserRoleWithAggregatesFilter | UserRole
  }

  export type PartsWhereInput = {
    AND?: Enumerable<PartsWhereInput>
    OR?: Enumerable<PartsWhereInput>
    NOT?: Enumerable<PartsWhereInput>
    part_id?: IntFilter | number
    part_name?: StringFilter | string
    part_number?: StringFilter | string
    description?: StringFilter | string
    category?: StringFilter | string
    quantity_in_stock?: IntFilter | number
    reorder_threshold?: IntFilter | number
    unit_price?: FloatFilter | number
  }

  export type PartsOrderByWithRelationInput = {
    part_id?: SortOrder
    part_name?: SortOrder
    part_number?: SortOrder
    description?: SortOrder
    category?: SortOrder
    quantity_in_stock?: SortOrder
    reorder_threshold?: SortOrder
    unit_price?: SortOrder
  }

  export type PartsWhereUniqueInput = {
    part_id?: number
  }

  export type PartsOrderByWithAggregationInput = {
    part_id?: SortOrder
    part_name?: SortOrder
    part_number?: SortOrder
    description?: SortOrder
    category?: SortOrder
    quantity_in_stock?: SortOrder
    reorder_threshold?: SortOrder
    unit_price?: SortOrder
    _count?: PartsCountOrderByAggregateInput
    _avg?: PartsAvgOrderByAggregateInput
    _max?: PartsMaxOrderByAggregateInput
    _min?: PartsMinOrderByAggregateInput
    _sum?: PartsSumOrderByAggregateInput
  }

  export type PartsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PartsScalarWhereWithAggregatesInput>
    OR?: Enumerable<PartsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PartsScalarWhereWithAggregatesInput>
    part_id?: IntWithAggregatesFilter | number
    part_name?: StringWithAggregatesFilter | string
    part_number?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    category?: StringWithAggregatesFilter | string
    quantity_in_stock?: IntWithAggregatesFilter | number
    reorder_threshold?: IntWithAggregatesFilter | number
    unit_price?: FloatWithAggregatesFilter | number
  }

  export type SuppliersWhereInput = {
    AND?: Enumerable<SuppliersWhereInput>
    OR?: Enumerable<SuppliersWhereInput>
    NOT?: Enumerable<SuppliersWhereInput>
    supplier_id?: IntFilter | number
    supplier_name?: StringFilter | string
    contact_name?: StringFilter | string
    contact_email?: StringFilter | string
    contact_phone?: StringFilter | string
  }

  export type SuppliersOrderByWithRelationInput = {
    supplier_id?: SortOrder
    supplier_name?: SortOrder
    contact_name?: SortOrder
    contact_email?: SortOrder
    contact_phone?: SortOrder
  }

  export type SuppliersWhereUniqueInput = {
    supplier_id?: number
  }

  export type SuppliersOrderByWithAggregationInput = {
    supplier_id?: SortOrder
    supplier_name?: SortOrder
    contact_name?: SortOrder
    contact_email?: SortOrder
    contact_phone?: SortOrder
    _count?: SuppliersCountOrderByAggregateInput
    _avg?: SuppliersAvgOrderByAggregateInput
    _max?: SuppliersMaxOrderByAggregateInput
    _min?: SuppliersMinOrderByAggregateInput
    _sum?: SuppliersSumOrderByAggregateInput
  }

  export type SuppliersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SuppliersScalarWhereWithAggregatesInput>
    OR?: Enumerable<SuppliersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SuppliersScalarWhereWithAggregatesInput>
    supplier_id?: IntWithAggregatesFilter | number
    supplier_name?: StringWithAggregatesFilter | string
    contact_name?: StringWithAggregatesFilter | string
    contact_email?: StringWithAggregatesFilter | string
    contact_phone?: StringWithAggregatesFilter | string
  }

  export type PurchaseOrdersWhereInput = {
    AND?: Enumerable<PurchaseOrdersWhereInput>
    OR?: Enumerable<PurchaseOrdersWhereInput>
    NOT?: Enumerable<PurchaseOrdersWhereInput>
    order_id?: IntFilter | number
    supplier_id?: IntFilter | number
    order_date?: DateTimeFilter | Date | string
    expected_delivery_date?: DateTimeFilter | Date | string
    status?: StringFilter | string
    total_cost?: FloatFilter | number
  }

  export type PurchaseOrdersOrderByWithRelationInput = {
    order_id?: SortOrder
    supplier_id?: SortOrder
    order_date?: SortOrder
    expected_delivery_date?: SortOrder
    status?: SortOrder
    total_cost?: SortOrder
  }

  export type PurchaseOrdersWhereUniqueInput = {
    order_id?: number
  }

  export type PurchaseOrdersOrderByWithAggregationInput = {
    order_id?: SortOrder
    supplier_id?: SortOrder
    order_date?: SortOrder
    expected_delivery_date?: SortOrder
    status?: SortOrder
    total_cost?: SortOrder
    _count?: PurchaseOrdersCountOrderByAggregateInput
    _avg?: PurchaseOrdersAvgOrderByAggregateInput
    _max?: PurchaseOrdersMaxOrderByAggregateInput
    _min?: PurchaseOrdersMinOrderByAggregateInput
    _sum?: PurchaseOrdersSumOrderByAggregateInput
  }

  export type PurchaseOrdersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PurchaseOrdersScalarWhereWithAggregatesInput>
    OR?: Enumerable<PurchaseOrdersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PurchaseOrdersScalarWhereWithAggregatesInput>
    order_id?: IntWithAggregatesFilter | number
    supplier_id?: IntWithAggregatesFilter | number
    order_date?: DateTimeWithAggregatesFilter | Date | string
    expected_delivery_date?: DateTimeWithAggregatesFilter | Date | string
    status?: StringWithAggregatesFilter | string
    total_cost?: FloatWithAggregatesFilter | number
  }

  export type OrderItemsWhereInput = {
    AND?: Enumerable<OrderItemsWhereInput>
    OR?: Enumerable<OrderItemsWhereInput>
    NOT?: Enumerable<OrderItemsWhereInput>
    order_item_id?: IntFilter | number
    order_id?: IntFilter | number
    part_id?: IntFilter | number
    quantity_ordered?: IntFilter | number
    unit_price?: FloatFilter | number
  }

  export type OrderItemsOrderByWithRelationInput = {
    order_item_id?: SortOrder
    order_id?: SortOrder
    part_id?: SortOrder
    quantity_ordered?: SortOrder
    unit_price?: SortOrder
  }

  export type OrderItemsWhereUniqueInput = {
    order_item_id?: number
  }

  export type OrderItemsOrderByWithAggregationInput = {
    order_item_id?: SortOrder
    order_id?: SortOrder
    part_id?: SortOrder
    quantity_ordered?: SortOrder
    unit_price?: SortOrder
    _count?: OrderItemsCountOrderByAggregateInput
    _avg?: OrderItemsAvgOrderByAggregateInput
    _max?: OrderItemsMaxOrderByAggregateInput
    _min?: OrderItemsMinOrderByAggregateInput
    _sum?: OrderItemsSumOrderByAggregateInput
  }

  export type OrderItemsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<OrderItemsScalarWhereWithAggregatesInput>
    OR?: Enumerable<OrderItemsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<OrderItemsScalarWhereWithAggregatesInput>
    order_item_id?: IntWithAggregatesFilter | number
    order_id?: IntWithAggregatesFilter | number
    part_id?: IntWithAggregatesFilter | number
    quantity_ordered?: IntWithAggregatesFilter | number
    unit_price?: FloatWithAggregatesFilter | number
  }

  export type SalesOrdersWhereInput = {
    AND?: Enumerable<SalesOrdersWhereInput>
    OR?: Enumerable<SalesOrdersWhereInput>
    NOT?: Enumerable<SalesOrdersWhereInput>
    order_id?: IntFilter | number
    customer_name?: StringFilter | string
    order_date?: DateTimeFilter | Date | string
    status?: StringFilter | string
    total_price?: FloatFilter | number
  }

  export type SalesOrdersOrderByWithRelationInput = {
    order_id?: SortOrder
    customer_name?: SortOrder
    order_date?: SortOrder
    status?: SortOrder
    total_price?: SortOrder
  }

  export type SalesOrdersWhereUniqueInput = {
    order_id?: number
  }

  export type SalesOrdersOrderByWithAggregationInput = {
    order_id?: SortOrder
    customer_name?: SortOrder
    order_date?: SortOrder
    status?: SortOrder
    total_price?: SortOrder
    _count?: SalesOrdersCountOrderByAggregateInput
    _avg?: SalesOrdersAvgOrderByAggregateInput
    _max?: SalesOrdersMaxOrderByAggregateInput
    _min?: SalesOrdersMinOrderByAggregateInput
    _sum?: SalesOrdersSumOrderByAggregateInput
  }

  export type SalesOrdersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SalesOrdersScalarWhereWithAggregatesInput>
    OR?: Enumerable<SalesOrdersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SalesOrdersScalarWhereWithAggregatesInput>
    order_id?: IntWithAggregatesFilter | number
    customer_name?: StringWithAggregatesFilter | string
    order_date?: DateTimeWithAggregatesFilter | Date | string
    status?: StringWithAggregatesFilter | string
    total_price?: FloatWithAggregatesFilter | number
  }

  export type SalesOrderItemsWhereInput = {
    AND?: Enumerable<SalesOrderItemsWhereInput>
    OR?: Enumerable<SalesOrderItemsWhereInput>
    NOT?: Enumerable<SalesOrderItemsWhereInput>
    order_item_id?: IntFilter | number
    order_id?: IntFilter | number
    part_id?: IntFilter | number
    quantity_sold?: IntFilter | number
    unit_price?: FloatFilter | number
  }

  export type SalesOrderItemsOrderByWithRelationInput = {
    order_item_id?: SortOrder
    order_id?: SortOrder
    part_id?: SortOrder
    quantity_sold?: SortOrder
    unit_price?: SortOrder
  }

  export type SalesOrderItemsWhereUniqueInput = {
    order_item_id?: number
  }

  export type SalesOrderItemsOrderByWithAggregationInput = {
    order_item_id?: SortOrder
    order_id?: SortOrder
    part_id?: SortOrder
    quantity_sold?: SortOrder
    unit_price?: SortOrder
    _count?: SalesOrderItemsCountOrderByAggregateInput
    _avg?: SalesOrderItemsAvgOrderByAggregateInput
    _max?: SalesOrderItemsMaxOrderByAggregateInput
    _min?: SalesOrderItemsMinOrderByAggregateInput
    _sum?: SalesOrderItemsSumOrderByAggregateInput
  }

  export type SalesOrderItemsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SalesOrderItemsScalarWhereWithAggregatesInput>
    OR?: Enumerable<SalesOrderItemsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SalesOrderItemsScalarWhereWithAggregatesInput>
    order_item_id?: IntWithAggregatesFilter | number
    order_id?: IntWithAggregatesFilter | number
    part_id?: IntWithAggregatesFilter | number
    quantity_sold?: IntWithAggregatesFilter | number
    unit_price?: FloatWithAggregatesFilter | number
  }

  export type CustomersWhereInput = {
    AND?: Enumerable<CustomersWhereInput>
    OR?: Enumerable<CustomersWhereInput>
    NOT?: Enumerable<CustomersWhereInput>
    customer_id?: IntFilter | number
    customer_name?: StringFilter | string
    customer_email?: StringFilter | string
    customer_phone?: StringFilter | string
  }

  export type CustomersOrderByWithRelationInput = {
    customer_id?: SortOrder
    customer_name?: SortOrder
    customer_email?: SortOrder
    customer_phone?: SortOrder
  }

  export type CustomersWhereUniqueInput = {
    customer_id?: number
  }

  export type CustomersOrderByWithAggregationInput = {
    customer_id?: SortOrder
    customer_name?: SortOrder
    customer_email?: SortOrder
    customer_phone?: SortOrder
    _count?: CustomersCountOrderByAggregateInput
    _avg?: CustomersAvgOrderByAggregateInput
    _max?: CustomersMaxOrderByAggregateInput
    _min?: CustomersMinOrderByAggregateInput
    _sum?: CustomersSumOrderByAggregateInput
  }

  export type CustomersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CustomersScalarWhereWithAggregatesInput>
    OR?: Enumerable<CustomersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CustomersScalarWhereWithAggregatesInput>
    customer_id?: IntWithAggregatesFilter | number
    customer_name?: StringWithAggregatesFilter | string
    customer_email?: StringWithAggregatesFilter | string
    customer_phone?: StringWithAggregatesFilter | string
  }

  export type InventoryTransactionsWhereInput = {
    AND?: Enumerable<InventoryTransactionsWhereInput>
    OR?: Enumerable<InventoryTransactionsWhereInput>
    NOT?: Enumerable<InventoryTransactionsWhereInput>
    transaction_id?: IntFilter | number
    part_id?: IntFilter | number
    quantity_change?: IntFilter | number
    transaction_date?: DateTimeFilter | Date | string
    transaction_type?: StringFilter | string
    related_order_id?: IntNullableFilter | number | null
  }

  export type InventoryTransactionsOrderByWithRelationInput = {
    transaction_id?: SortOrder
    part_id?: SortOrder
    quantity_change?: SortOrder
    transaction_date?: SortOrder
    transaction_type?: SortOrder
    related_order_id?: SortOrderInput | SortOrder
  }

  export type InventoryTransactionsWhereUniqueInput = {
    transaction_id?: number
  }

  export type InventoryTransactionsOrderByWithAggregationInput = {
    transaction_id?: SortOrder
    part_id?: SortOrder
    quantity_change?: SortOrder
    transaction_date?: SortOrder
    transaction_type?: SortOrder
    related_order_id?: SortOrderInput | SortOrder
    _count?: InventoryTransactionsCountOrderByAggregateInput
    _avg?: InventoryTransactionsAvgOrderByAggregateInput
    _max?: InventoryTransactionsMaxOrderByAggregateInput
    _min?: InventoryTransactionsMinOrderByAggregateInput
    _sum?: InventoryTransactionsSumOrderByAggregateInput
  }

  export type InventoryTransactionsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<InventoryTransactionsScalarWhereWithAggregatesInput>
    OR?: Enumerable<InventoryTransactionsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<InventoryTransactionsScalarWhereWithAggregatesInput>
    transaction_id?: IntWithAggregatesFilter | number
    part_id?: IntWithAggregatesFilter | number
    quantity_change?: IntWithAggregatesFilter | number
    transaction_date?: DateTimeWithAggregatesFilter | Date | string
    transaction_type?: StringWithAggregatesFilter | string
    related_order_id?: IntNullableWithAggregatesFilter | number | null
  }

  export type AdjustmentsWhereInput = {
    AND?: Enumerable<AdjustmentsWhereInput>
    OR?: Enumerable<AdjustmentsWhereInput>
    NOT?: Enumerable<AdjustmentsWhereInput>
    adjustment_id?: IntFilter | number
    part_id?: IntFilter | number
    adjustment_reason?: StringFilter | string
    quantity_change?: IntFilter | number
    adjustment_date?: DateTimeFilter | Date | string
  }

  export type AdjustmentsOrderByWithRelationInput = {
    adjustment_id?: SortOrder
    part_id?: SortOrder
    adjustment_reason?: SortOrder
    quantity_change?: SortOrder
    adjustment_date?: SortOrder
  }

  export type AdjustmentsWhereUniqueInput = {
    adjustment_id?: number
  }

  export type AdjustmentsOrderByWithAggregationInput = {
    adjustment_id?: SortOrder
    part_id?: SortOrder
    adjustment_reason?: SortOrder
    quantity_change?: SortOrder
    adjustment_date?: SortOrder
    _count?: AdjustmentsCountOrderByAggregateInput
    _avg?: AdjustmentsAvgOrderByAggregateInput
    _max?: AdjustmentsMaxOrderByAggregateInput
    _min?: AdjustmentsMinOrderByAggregateInput
    _sum?: AdjustmentsSumOrderByAggregateInput
  }

  export type AdjustmentsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AdjustmentsScalarWhereWithAggregatesInput>
    OR?: Enumerable<AdjustmentsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AdjustmentsScalarWhereWithAggregatesInput>
    adjustment_id?: IntWithAggregatesFilter | number
    part_id?: IntWithAggregatesFilter | number
    adjustment_reason?: StringWithAggregatesFilter | string
    quantity_change?: IntWithAggregatesFilter | number
    adjustment_date?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserCreateInput = {
    first_name?: string | null
    last_name?: string | null
    profile_pic?: string | null
    email: string
    phone?: string | null
    password_hash: string
    user_role?: UserRole
  }

  export type UserUncheckedCreateInput = {
    id?: number
    first_name?: string | null
    last_name?: string | null
    profile_pic?: string | null
    email: string
    phone?: string | null
    password_hash: string
    user_role?: UserRole
  }

  export type UserUpdateInput = {
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    profile_pic?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    user_role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    profile_pic?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    user_role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
  }

  export type UserCreateManyInput = {
    id?: number
    first_name?: string | null
    last_name?: string | null
    profile_pic?: string | null
    email: string
    phone?: string | null
    password_hash: string
    user_role?: UserRole
  }

  export type UserUpdateManyMutationInput = {
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    profile_pic?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    user_role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    profile_pic?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    user_role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
  }

  export type PartsCreateInput = {
    part_name: string
    part_number: string
    description: string
    category: string
    quantity_in_stock: number
    reorder_threshold: number
    unit_price: number
  }

  export type PartsUncheckedCreateInput = {
    part_id?: number
    part_name: string
    part_number: string
    description: string
    category: string
    quantity_in_stock: number
    reorder_threshold: number
    unit_price: number
  }

  export type PartsUpdateInput = {
    part_name?: StringFieldUpdateOperationsInput | string
    part_number?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    quantity_in_stock?: IntFieldUpdateOperationsInput | number
    reorder_threshold?: IntFieldUpdateOperationsInput | number
    unit_price?: FloatFieldUpdateOperationsInput | number
  }

  export type PartsUncheckedUpdateInput = {
    part_id?: IntFieldUpdateOperationsInput | number
    part_name?: StringFieldUpdateOperationsInput | string
    part_number?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    quantity_in_stock?: IntFieldUpdateOperationsInput | number
    reorder_threshold?: IntFieldUpdateOperationsInput | number
    unit_price?: FloatFieldUpdateOperationsInput | number
  }

  export type PartsCreateManyInput = {
    part_id?: number
    part_name: string
    part_number: string
    description: string
    category: string
    quantity_in_stock: number
    reorder_threshold: number
    unit_price: number
  }

  export type PartsUpdateManyMutationInput = {
    part_name?: StringFieldUpdateOperationsInput | string
    part_number?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    quantity_in_stock?: IntFieldUpdateOperationsInput | number
    reorder_threshold?: IntFieldUpdateOperationsInput | number
    unit_price?: FloatFieldUpdateOperationsInput | number
  }

  export type PartsUncheckedUpdateManyInput = {
    part_id?: IntFieldUpdateOperationsInput | number
    part_name?: StringFieldUpdateOperationsInput | string
    part_number?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    quantity_in_stock?: IntFieldUpdateOperationsInput | number
    reorder_threshold?: IntFieldUpdateOperationsInput | number
    unit_price?: FloatFieldUpdateOperationsInput | number
  }

  export type SuppliersCreateInput = {
    supplier_name: string
    contact_name: string
    contact_email: string
    contact_phone: string
  }

  export type SuppliersUncheckedCreateInput = {
    supplier_id?: number
    supplier_name: string
    contact_name: string
    contact_email: string
    contact_phone: string
  }

  export type SuppliersUpdateInput = {
    supplier_name?: StringFieldUpdateOperationsInput | string
    contact_name?: StringFieldUpdateOperationsInput | string
    contact_email?: StringFieldUpdateOperationsInput | string
    contact_phone?: StringFieldUpdateOperationsInput | string
  }

  export type SuppliersUncheckedUpdateInput = {
    supplier_id?: IntFieldUpdateOperationsInput | number
    supplier_name?: StringFieldUpdateOperationsInput | string
    contact_name?: StringFieldUpdateOperationsInput | string
    contact_email?: StringFieldUpdateOperationsInput | string
    contact_phone?: StringFieldUpdateOperationsInput | string
  }

  export type SuppliersCreateManyInput = {
    supplier_id?: number
    supplier_name: string
    contact_name: string
    contact_email: string
    contact_phone: string
  }

  export type SuppliersUpdateManyMutationInput = {
    supplier_name?: StringFieldUpdateOperationsInput | string
    contact_name?: StringFieldUpdateOperationsInput | string
    contact_email?: StringFieldUpdateOperationsInput | string
    contact_phone?: StringFieldUpdateOperationsInput | string
  }

  export type SuppliersUncheckedUpdateManyInput = {
    supplier_id?: IntFieldUpdateOperationsInput | number
    supplier_name?: StringFieldUpdateOperationsInput | string
    contact_name?: StringFieldUpdateOperationsInput | string
    contact_email?: StringFieldUpdateOperationsInput | string
    contact_phone?: StringFieldUpdateOperationsInput | string
  }

  export type PurchaseOrdersCreateInput = {
    supplier_id: number
    order_date: Date | string
    expected_delivery_date: Date | string
    status: string
    total_cost: number
  }

  export type PurchaseOrdersUncheckedCreateInput = {
    order_id?: number
    supplier_id: number
    order_date: Date | string
    expected_delivery_date: Date | string
    status: string
    total_cost: number
  }

  export type PurchaseOrdersUpdateInput = {
    supplier_id?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expected_delivery_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    total_cost?: FloatFieldUpdateOperationsInput | number
  }

  export type PurchaseOrdersUncheckedUpdateInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    supplier_id?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expected_delivery_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    total_cost?: FloatFieldUpdateOperationsInput | number
  }

  export type PurchaseOrdersCreateManyInput = {
    order_id?: number
    supplier_id: number
    order_date: Date | string
    expected_delivery_date: Date | string
    status: string
    total_cost: number
  }

  export type PurchaseOrdersUpdateManyMutationInput = {
    supplier_id?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expected_delivery_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    total_cost?: FloatFieldUpdateOperationsInput | number
  }

  export type PurchaseOrdersUncheckedUpdateManyInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    supplier_id?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    expected_delivery_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    total_cost?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderItemsCreateInput = {
    order_id: number
    part_id: number
    quantity_ordered: number
    unit_price: number
  }

  export type OrderItemsUncheckedCreateInput = {
    order_item_id?: number
    order_id: number
    part_id: number
    quantity_ordered: number
    unit_price: number
  }

  export type OrderItemsUpdateInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    part_id?: IntFieldUpdateOperationsInput | number
    quantity_ordered?: IntFieldUpdateOperationsInput | number
    unit_price?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderItemsUncheckedUpdateInput = {
    order_item_id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    part_id?: IntFieldUpdateOperationsInput | number
    quantity_ordered?: IntFieldUpdateOperationsInput | number
    unit_price?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderItemsCreateManyInput = {
    order_item_id?: number
    order_id: number
    part_id: number
    quantity_ordered: number
    unit_price: number
  }

  export type OrderItemsUpdateManyMutationInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    part_id?: IntFieldUpdateOperationsInput | number
    quantity_ordered?: IntFieldUpdateOperationsInput | number
    unit_price?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderItemsUncheckedUpdateManyInput = {
    order_item_id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    part_id?: IntFieldUpdateOperationsInput | number
    quantity_ordered?: IntFieldUpdateOperationsInput | number
    unit_price?: FloatFieldUpdateOperationsInput | number
  }

  export type SalesOrdersCreateInput = {
    customer_name: string
    order_date: Date | string
    status: string
    total_price: number
  }

  export type SalesOrdersUncheckedCreateInput = {
    order_id?: number
    customer_name: string
    order_date: Date | string
    status: string
    total_price: number
  }

  export type SalesOrdersUpdateInput = {
    customer_name?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    total_price?: FloatFieldUpdateOperationsInput | number
  }

  export type SalesOrdersUncheckedUpdateInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    customer_name?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    total_price?: FloatFieldUpdateOperationsInput | number
  }

  export type SalesOrdersCreateManyInput = {
    order_id?: number
    customer_name: string
    order_date: Date | string
    status: string
    total_price: number
  }

  export type SalesOrdersUpdateManyMutationInput = {
    customer_name?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    total_price?: FloatFieldUpdateOperationsInput | number
  }

  export type SalesOrdersUncheckedUpdateManyInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    customer_name?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    total_price?: FloatFieldUpdateOperationsInput | number
  }

  export type SalesOrderItemsCreateInput = {
    order_id: number
    part_id: number
    quantity_sold: number
    unit_price: number
  }

  export type SalesOrderItemsUncheckedCreateInput = {
    order_item_id?: number
    order_id: number
    part_id: number
    quantity_sold: number
    unit_price: number
  }

  export type SalesOrderItemsUpdateInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    part_id?: IntFieldUpdateOperationsInput | number
    quantity_sold?: IntFieldUpdateOperationsInput | number
    unit_price?: FloatFieldUpdateOperationsInput | number
  }

  export type SalesOrderItemsUncheckedUpdateInput = {
    order_item_id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    part_id?: IntFieldUpdateOperationsInput | number
    quantity_sold?: IntFieldUpdateOperationsInput | number
    unit_price?: FloatFieldUpdateOperationsInput | number
  }

  export type SalesOrderItemsCreateManyInput = {
    order_item_id?: number
    order_id: number
    part_id: number
    quantity_sold: number
    unit_price: number
  }

  export type SalesOrderItemsUpdateManyMutationInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    part_id?: IntFieldUpdateOperationsInput | number
    quantity_sold?: IntFieldUpdateOperationsInput | number
    unit_price?: FloatFieldUpdateOperationsInput | number
  }

  export type SalesOrderItemsUncheckedUpdateManyInput = {
    order_item_id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    part_id?: IntFieldUpdateOperationsInput | number
    quantity_sold?: IntFieldUpdateOperationsInput | number
    unit_price?: FloatFieldUpdateOperationsInput | number
  }

  export type CustomersCreateInput = {
    customer_name: string
    customer_email: string
    customer_phone: string
  }

  export type CustomersUncheckedCreateInput = {
    customer_id?: number
    customer_name: string
    customer_email: string
    customer_phone: string
  }

  export type CustomersUpdateInput = {
    customer_name?: StringFieldUpdateOperationsInput | string
    customer_email?: StringFieldUpdateOperationsInput | string
    customer_phone?: StringFieldUpdateOperationsInput | string
  }

  export type CustomersUncheckedUpdateInput = {
    customer_id?: IntFieldUpdateOperationsInput | number
    customer_name?: StringFieldUpdateOperationsInput | string
    customer_email?: StringFieldUpdateOperationsInput | string
    customer_phone?: StringFieldUpdateOperationsInput | string
  }

  export type CustomersCreateManyInput = {
    customer_id?: number
    customer_name: string
    customer_email: string
    customer_phone: string
  }

  export type CustomersUpdateManyMutationInput = {
    customer_name?: StringFieldUpdateOperationsInput | string
    customer_email?: StringFieldUpdateOperationsInput | string
    customer_phone?: StringFieldUpdateOperationsInput | string
  }

  export type CustomersUncheckedUpdateManyInput = {
    customer_id?: IntFieldUpdateOperationsInput | number
    customer_name?: StringFieldUpdateOperationsInput | string
    customer_email?: StringFieldUpdateOperationsInput | string
    customer_phone?: StringFieldUpdateOperationsInput | string
  }

  export type InventoryTransactionsCreateInput = {
    part_id: number
    quantity_change: number
    transaction_date: Date | string
    transaction_type: string
    related_order_id?: number | null
  }

  export type InventoryTransactionsUncheckedCreateInput = {
    transaction_id?: number
    part_id: number
    quantity_change: number
    transaction_date: Date | string
    transaction_type: string
    related_order_id?: number | null
  }

  export type InventoryTransactionsUpdateInput = {
    part_id?: IntFieldUpdateOperationsInput | number
    quantity_change?: IntFieldUpdateOperationsInput | number
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_type?: StringFieldUpdateOperationsInput | string
    related_order_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InventoryTransactionsUncheckedUpdateInput = {
    transaction_id?: IntFieldUpdateOperationsInput | number
    part_id?: IntFieldUpdateOperationsInput | number
    quantity_change?: IntFieldUpdateOperationsInput | number
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_type?: StringFieldUpdateOperationsInput | string
    related_order_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InventoryTransactionsCreateManyInput = {
    transaction_id?: number
    part_id: number
    quantity_change: number
    transaction_date: Date | string
    transaction_type: string
    related_order_id?: number | null
  }

  export type InventoryTransactionsUpdateManyMutationInput = {
    part_id?: IntFieldUpdateOperationsInput | number
    quantity_change?: IntFieldUpdateOperationsInput | number
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_type?: StringFieldUpdateOperationsInput | string
    related_order_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InventoryTransactionsUncheckedUpdateManyInput = {
    transaction_id?: IntFieldUpdateOperationsInput | number
    part_id?: IntFieldUpdateOperationsInput | number
    quantity_change?: IntFieldUpdateOperationsInput | number
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_type?: StringFieldUpdateOperationsInput | string
    related_order_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AdjustmentsCreateInput = {
    part_id: number
    adjustment_reason: string
    quantity_change: number
    adjustment_date: Date | string
  }

  export type AdjustmentsUncheckedCreateInput = {
    adjustment_id?: number
    part_id: number
    adjustment_reason: string
    quantity_change: number
    adjustment_date: Date | string
  }

  export type AdjustmentsUpdateInput = {
    part_id?: IntFieldUpdateOperationsInput | number
    adjustment_reason?: StringFieldUpdateOperationsInput | string
    quantity_change?: IntFieldUpdateOperationsInput | number
    adjustment_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdjustmentsUncheckedUpdateInput = {
    adjustment_id?: IntFieldUpdateOperationsInput | number
    part_id?: IntFieldUpdateOperationsInput | number
    adjustment_reason?: StringFieldUpdateOperationsInput | string
    quantity_change?: IntFieldUpdateOperationsInput | number
    adjustment_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdjustmentsCreateManyInput = {
    adjustment_id?: number
    part_id: number
    adjustment_reason: string
    quantity_change: number
    adjustment_date: Date | string
  }

  export type AdjustmentsUpdateManyMutationInput = {
    part_id?: IntFieldUpdateOperationsInput | number
    adjustment_reason?: StringFieldUpdateOperationsInput | string
    quantity_change?: IntFieldUpdateOperationsInput | number
    adjustment_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdjustmentsUncheckedUpdateManyInput = {
    adjustment_id?: IntFieldUpdateOperationsInput | number
    part_id?: IntFieldUpdateOperationsInput | number
    adjustment_reason?: StringFieldUpdateOperationsInput | string
    quantity_change?: IntFieldUpdateOperationsInput | number
    adjustment_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type EnumUserRoleFilter = {
    equals?: UserRole
    in?: Enumerable<UserRole>
    notIn?: Enumerable<UserRole>
    not?: NestedEnumUserRoleFilter | UserRole
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    profile_pic?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password_hash?: SortOrder
    user_role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    profile_pic?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password_hash?: SortOrder
    user_role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    profile_pic?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password_hash?: SortOrder
    user_role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type EnumUserRoleWithAggregatesFilter = {
    equals?: UserRole
    in?: Enumerable<UserRole>
    notIn?: Enumerable<UserRole>
    not?: NestedEnumUserRoleWithAggregatesFilter | UserRole
    _count?: NestedIntFilter
    _min?: NestedEnumUserRoleFilter
    _max?: NestedEnumUserRoleFilter
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type PartsCountOrderByAggregateInput = {
    part_id?: SortOrder
    part_name?: SortOrder
    part_number?: SortOrder
    description?: SortOrder
    category?: SortOrder
    quantity_in_stock?: SortOrder
    reorder_threshold?: SortOrder
    unit_price?: SortOrder
  }

  export type PartsAvgOrderByAggregateInput = {
    part_id?: SortOrder
    quantity_in_stock?: SortOrder
    reorder_threshold?: SortOrder
    unit_price?: SortOrder
  }

  export type PartsMaxOrderByAggregateInput = {
    part_id?: SortOrder
    part_name?: SortOrder
    part_number?: SortOrder
    description?: SortOrder
    category?: SortOrder
    quantity_in_stock?: SortOrder
    reorder_threshold?: SortOrder
    unit_price?: SortOrder
  }

  export type PartsMinOrderByAggregateInput = {
    part_id?: SortOrder
    part_name?: SortOrder
    part_number?: SortOrder
    description?: SortOrder
    category?: SortOrder
    quantity_in_stock?: SortOrder
    reorder_threshold?: SortOrder
    unit_price?: SortOrder
  }

  export type PartsSumOrderByAggregateInput = {
    part_id?: SortOrder
    quantity_in_stock?: SortOrder
    reorder_threshold?: SortOrder
    unit_price?: SortOrder
  }

  export type FloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type SuppliersCountOrderByAggregateInput = {
    supplier_id?: SortOrder
    supplier_name?: SortOrder
    contact_name?: SortOrder
    contact_email?: SortOrder
    contact_phone?: SortOrder
  }

  export type SuppliersAvgOrderByAggregateInput = {
    supplier_id?: SortOrder
  }

  export type SuppliersMaxOrderByAggregateInput = {
    supplier_id?: SortOrder
    supplier_name?: SortOrder
    contact_name?: SortOrder
    contact_email?: SortOrder
    contact_phone?: SortOrder
  }

  export type SuppliersMinOrderByAggregateInput = {
    supplier_id?: SortOrder
    supplier_name?: SortOrder
    contact_name?: SortOrder
    contact_email?: SortOrder
    contact_phone?: SortOrder
  }

  export type SuppliersSumOrderByAggregateInput = {
    supplier_id?: SortOrder
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type PurchaseOrdersCountOrderByAggregateInput = {
    order_id?: SortOrder
    supplier_id?: SortOrder
    order_date?: SortOrder
    expected_delivery_date?: SortOrder
    status?: SortOrder
    total_cost?: SortOrder
  }

  export type PurchaseOrdersAvgOrderByAggregateInput = {
    order_id?: SortOrder
    supplier_id?: SortOrder
    total_cost?: SortOrder
  }

  export type PurchaseOrdersMaxOrderByAggregateInput = {
    order_id?: SortOrder
    supplier_id?: SortOrder
    order_date?: SortOrder
    expected_delivery_date?: SortOrder
    status?: SortOrder
    total_cost?: SortOrder
  }

  export type PurchaseOrdersMinOrderByAggregateInput = {
    order_id?: SortOrder
    supplier_id?: SortOrder
    order_date?: SortOrder
    expected_delivery_date?: SortOrder
    status?: SortOrder
    total_cost?: SortOrder
  }

  export type PurchaseOrdersSumOrderByAggregateInput = {
    order_id?: SortOrder
    supplier_id?: SortOrder
    total_cost?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type OrderItemsCountOrderByAggregateInput = {
    order_item_id?: SortOrder
    order_id?: SortOrder
    part_id?: SortOrder
    quantity_ordered?: SortOrder
    unit_price?: SortOrder
  }

  export type OrderItemsAvgOrderByAggregateInput = {
    order_item_id?: SortOrder
    order_id?: SortOrder
    part_id?: SortOrder
    quantity_ordered?: SortOrder
    unit_price?: SortOrder
  }

  export type OrderItemsMaxOrderByAggregateInput = {
    order_item_id?: SortOrder
    order_id?: SortOrder
    part_id?: SortOrder
    quantity_ordered?: SortOrder
    unit_price?: SortOrder
  }

  export type OrderItemsMinOrderByAggregateInput = {
    order_item_id?: SortOrder
    order_id?: SortOrder
    part_id?: SortOrder
    quantity_ordered?: SortOrder
    unit_price?: SortOrder
  }

  export type OrderItemsSumOrderByAggregateInput = {
    order_item_id?: SortOrder
    order_id?: SortOrder
    part_id?: SortOrder
    quantity_ordered?: SortOrder
    unit_price?: SortOrder
  }

  export type SalesOrdersCountOrderByAggregateInput = {
    order_id?: SortOrder
    customer_name?: SortOrder
    order_date?: SortOrder
    status?: SortOrder
    total_price?: SortOrder
  }

  export type SalesOrdersAvgOrderByAggregateInput = {
    order_id?: SortOrder
    total_price?: SortOrder
  }

  export type SalesOrdersMaxOrderByAggregateInput = {
    order_id?: SortOrder
    customer_name?: SortOrder
    order_date?: SortOrder
    status?: SortOrder
    total_price?: SortOrder
  }

  export type SalesOrdersMinOrderByAggregateInput = {
    order_id?: SortOrder
    customer_name?: SortOrder
    order_date?: SortOrder
    status?: SortOrder
    total_price?: SortOrder
  }

  export type SalesOrdersSumOrderByAggregateInput = {
    order_id?: SortOrder
    total_price?: SortOrder
  }

  export type SalesOrderItemsCountOrderByAggregateInput = {
    order_item_id?: SortOrder
    order_id?: SortOrder
    part_id?: SortOrder
    quantity_sold?: SortOrder
    unit_price?: SortOrder
  }

  export type SalesOrderItemsAvgOrderByAggregateInput = {
    order_item_id?: SortOrder
    order_id?: SortOrder
    part_id?: SortOrder
    quantity_sold?: SortOrder
    unit_price?: SortOrder
  }

  export type SalesOrderItemsMaxOrderByAggregateInput = {
    order_item_id?: SortOrder
    order_id?: SortOrder
    part_id?: SortOrder
    quantity_sold?: SortOrder
    unit_price?: SortOrder
  }

  export type SalesOrderItemsMinOrderByAggregateInput = {
    order_item_id?: SortOrder
    order_id?: SortOrder
    part_id?: SortOrder
    quantity_sold?: SortOrder
    unit_price?: SortOrder
  }

  export type SalesOrderItemsSumOrderByAggregateInput = {
    order_item_id?: SortOrder
    order_id?: SortOrder
    part_id?: SortOrder
    quantity_sold?: SortOrder
    unit_price?: SortOrder
  }

  export type CustomersCountOrderByAggregateInput = {
    customer_id?: SortOrder
    customer_name?: SortOrder
    customer_email?: SortOrder
    customer_phone?: SortOrder
  }

  export type CustomersAvgOrderByAggregateInput = {
    customer_id?: SortOrder
  }

  export type CustomersMaxOrderByAggregateInput = {
    customer_id?: SortOrder
    customer_name?: SortOrder
    customer_email?: SortOrder
    customer_phone?: SortOrder
  }

  export type CustomersMinOrderByAggregateInput = {
    customer_id?: SortOrder
    customer_name?: SortOrder
    customer_email?: SortOrder
    customer_phone?: SortOrder
  }

  export type CustomersSumOrderByAggregateInput = {
    customer_id?: SortOrder
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type InventoryTransactionsCountOrderByAggregateInput = {
    transaction_id?: SortOrder
    part_id?: SortOrder
    quantity_change?: SortOrder
    transaction_date?: SortOrder
    transaction_type?: SortOrder
    related_order_id?: SortOrder
  }

  export type InventoryTransactionsAvgOrderByAggregateInput = {
    transaction_id?: SortOrder
    part_id?: SortOrder
    quantity_change?: SortOrder
    related_order_id?: SortOrder
  }

  export type InventoryTransactionsMaxOrderByAggregateInput = {
    transaction_id?: SortOrder
    part_id?: SortOrder
    quantity_change?: SortOrder
    transaction_date?: SortOrder
    transaction_type?: SortOrder
    related_order_id?: SortOrder
  }

  export type InventoryTransactionsMinOrderByAggregateInput = {
    transaction_id?: SortOrder
    part_id?: SortOrder
    quantity_change?: SortOrder
    transaction_date?: SortOrder
    transaction_type?: SortOrder
    related_order_id?: SortOrder
  }

  export type InventoryTransactionsSumOrderByAggregateInput = {
    transaction_id?: SortOrder
    part_id?: SortOrder
    quantity_change?: SortOrder
    related_order_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type AdjustmentsCountOrderByAggregateInput = {
    adjustment_id?: SortOrder
    part_id?: SortOrder
    adjustment_reason?: SortOrder
    quantity_change?: SortOrder
    adjustment_date?: SortOrder
  }

  export type AdjustmentsAvgOrderByAggregateInput = {
    adjustment_id?: SortOrder
    part_id?: SortOrder
    quantity_change?: SortOrder
  }

  export type AdjustmentsMaxOrderByAggregateInput = {
    adjustment_id?: SortOrder
    part_id?: SortOrder
    adjustment_reason?: SortOrder
    quantity_change?: SortOrder
    adjustment_date?: SortOrder
  }

  export type AdjustmentsMinOrderByAggregateInput = {
    adjustment_id?: SortOrder
    part_id?: SortOrder
    adjustment_reason?: SortOrder
    quantity_change?: SortOrder
    adjustment_date?: SortOrder
  }

  export type AdjustmentsSumOrderByAggregateInput = {
    adjustment_id?: SortOrder
    part_id?: SortOrder
    quantity_change?: SortOrder
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: UserRole
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedEnumUserRoleFilter = {
    equals?: UserRole
    in?: Enumerable<UserRole>
    notIn?: Enumerable<UserRole>
    not?: NestedEnumUserRoleFilter | UserRole
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedEnumUserRoleWithAggregatesFilter = {
    equals?: UserRole
    in?: Enumerable<UserRole>
    notIn?: Enumerable<UserRole>
    not?: NestedEnumUserRoleWithAggregatesFilter | UserRole
    _count?: NestedIntFilter
    _min?: NestedEnumUserRoleFilter
    _max?: NestedEnumUserRoleFilter
  }

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}