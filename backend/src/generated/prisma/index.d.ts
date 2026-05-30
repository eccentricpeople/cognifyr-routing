
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model CustomerRequest
 * 
 */
export type CustomerRequest = $Result.DefaultSelection<Prisma.$CustomerRequestPayload>
/**
 * Model AiClassification
 * 
 */
export type AiClassification = $Result.DefaultSelection<Prisma.$AiClassificationPayload>
/**
 * Model RequestEvent
 * 
 */
export type RequestEvent = $Result.DefaultSelection<Prisma.$RequestEventPayload>
/**
 * Model InternalNote
 * 
 */
export type InternalNote = $Result.DefaultSelection<Prisma.$InternalNotePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  AGENT: 'AGENT'
};

export type Role = (typeof Role)[keyof typeof Role]


export const RequestStatus: {
  NEW: 'NEW',
  QUEUED: 'QUEUED',
  CLASSIFYING: 'CLASSIFYING',
  CLASSIFIED: 'CLASSIFIED',
  IN_PROGRESS: 'IN_PROGRESS',
  RESOLVED: 'RESOLVED',
  FAILED: 'FAILED'
};

export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus]


export const Priority: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH'
};

export type Priority = (typeof Priority)[keyof typeof Priority]


export const Category: {
  SALES: 'SALES',
  SUPPORT: 'SUPPORT',
  URGENT: 'URGENT',
  SPAM: 'SPAM',
  OTHER: 'OTHER'
};

export type Category = (typeof Category)[keyof typeof Category]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type RequestStatus = $Enums.RequestStatus

export const RequestStatus: typeof $Enums.RequestStatus

export type Priority = $Enums.Priority

export const Priority: typeof $Enums.Priority

export type Category = $Enums.Category

export const Category: typeof $Enums.Category

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
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
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

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customerRequest`: Exposes CRUD operations for the **CustomerRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomerRequests
    * const customerRequests = await prisma.customerRequest.findMany()
    * ```
    */
  get customerRequest(): Prisma.CustomerRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aiClassification`: Exposes CRUD operations for the **AiClassification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AiClassifications
    * const aiClassifications = await prisma.aiClassification.findMany()
    * ```
    */
  get aiClassification(): Prisma.AiClassificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.requestEvent`: Exposes CRUD operations for the **RequestEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RequestEvents
    * const requestEvents = await prisma.requestEvent.findMany()
    * ```
    */
  get requestEvent(): Prisma.RequestEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.internalNote`: Exposes CRUD operations for the **InternalNote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InternalNotes
    * const internalNotes = await prisma.internalNote.findMany()
    * ```
    */
  get internalNote(): Prisma.InternalNoteDelegate<ExtArgs, ClientOptions>;
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
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.0
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    CustomerRequest: 'CustomerRequest',
    AiClassification: 'AiClassification',
    RequestEvent: 'RequestEvent',
    InternalNote: 'InternalNote'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "customerRequest" | "aiClassification" | "requestEvent" | "internalNote"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      CustomerRequest: {
        payload: Prisma.$CustomerRequestPayload<ExtArgs>
        fields: Prisma.CustomerRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerRequestPayload>
          }
          findFirst: {
            args: Prisma.CustomerRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerRequestPayload>
          }
          findMany: {
            args: Prisma.CustomerRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerRequestPayload>[]
          }
          create: {
            args: Prisma.CustomerRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerRequestPayload>
          }
          createMany: {
            args: Prisma.CustomerRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerRequestPayload>[]
          }
          delete: {
            args: Prisma.CustomerRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerRequestPayload>
          }
          update: {
            args: Prisma.CustomerRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerRequestPayload>
          }
          deleteMany: {
            args: Prisma.CustomerRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerRequestPayload>[]
          }
          upsert: {
            args: Prisma.CustomerRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerRequestPayload>
          }
          aggregate: {
            args: Prisma.CustomerRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomerRequest>
          }
          groupBy: {
            args: Prisma.CustomerRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerRequestCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerRequestCountAggregateOutputType> | number
          }
        }
      }
      AiClassification: {
        payload: Prisma.$AiClassificationPayload<ExtArgs>
        fields: Prisma.AiClassificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AiClassificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiClassificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AiClassificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiClassificationPayload>
          }
          findFirst: {
            args: Prisma.AiClassificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiClassificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AiClassificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiClassificationPayload>
          }
          findMany: {
            args: Prisma.AiClassificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiClassificationPayload>[]
          }
          create: {
            args: Prisma.AiClassificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiClassificationPayload>
          }
          createMany: {
            args: Prisma.AiClassificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AiClassificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiClassificationPayload>[]
          }
          delete: {
            args: Prisma.AiClassificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiClassificationPayload>
          }
          update: {
            args: Prisma.AiClassificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiClassificationPayload>
          }
          deleteMany: {
            args: Prisma.AiClassificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AiClassificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AiClassificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiClassificationPayload>[]
          }
          upsert: {
            args: Prisma.AiClassificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiClassificationPayload>
          }
          aggregate: {
            args: Prisma.AiClassificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAiClassification>
          }
          groupBy: {
            args: Prisma.AiClassificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<AiClassificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.AiClassificationCountArgs<ExtArgs>
            result: $Utils.Optional<AiClassificationCountAggregateOutputType> | number
          }
        }
      }
      RequestEvent: {
        payload: Prisma.$RequestEventPayload<ExtArgs>
        fields: Prisma.RequestEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RequestEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RequestEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestEventPayload>
          }
          findFirst: {
            args: Prisma.RequestEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RequestEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestEventPayload>
          }
          findMany: {
            args: Prisma.RequestEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestEventPayload>[]
          }
          create: {
            args: Prisma.RequestEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestEventPayload>
          }
          createMany: {
            args: Prisma.RequestEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RequestEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestEventPayload>[]
          }
          delete: {
            args: Prisma.RequestEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestEventPayload>
          }
          update: {
            args: Prisma.RequestEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestEventPayload>
          }
          deleteMany: {
            args: Prisma.RequestEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RequestEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RequestEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestEventPayload>[]
          }
          upsert: {
            args: Prisma.RequestEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestEventPayload>
          }
          aggregate: {
            args: Prisma.RequestEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRequestEvent>
          }
          groupBy: {
            args: Prisma.RequestEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<RequestEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.RequestEventCountArgs<ExtArgs>
            result: $Utils.Optional<RequestEventCountAggregateOutputType> | number
          }
        }
      }
      InternalNote: {
        payload: Prisma.$InternalNotePayload<ExtArgs>
        fields: Prisma.InternalNoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InternalNoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalNotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InternalNoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalNotePayload>
          }
          findFirst: {
            args: Prisma.InternalNoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalNotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InternalNoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalNotePayload>
          }
          findMany: {
            args: Prisma.InternalNoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalNotePayload>[]
          }
          create: {
            args: Prisma.InternalNoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalNotePayload>
          }
          createMany: {
            args: Prisma.InternalNoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InternalNoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalNotePayload>[]
          }
          delete: {
            args: Prisma.InternalNoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalNotePayload>
          }
          update: {
            args: Prisma.InternalNoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalNotePayload>
          }
          deleteMany: {
            args: Prisma.InternalNoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InternalNoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InternalNoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalNotePayload>[]
          }
          upsert: {
            args: Prisma.InternalNoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalNotePayload>
          }
          aggregate: {
            args: Prisma.InternalNoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInternalNote>
          }
          groupBy: {
            args: Prisma.InternalNoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<InternalNoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.InternalNoteCountArgs<ExtArgs>
            result: $Utils.Optional<InternalNoteCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    customerRequest?: CustomerRequestOmit
    aiClassification?: AiClassificationOmit
    requestEvent?: RequestEventOmit
    internalNote?: InternalNoteOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    notes: number
    events: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notes?: boolean | UserCountOutputTypeCountNotesArgs
    events?: boolean | UserCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InternalNoteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestEventWhereInput
  }


  /**
   * Count Type CustomerRequestCountOutputType
   */

  export type CustomerRequestCountOutputType = {
    notes: number
    events: number
  }

  export type CustomerRequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notes?: boolean | CustomerRequestCountOutputTypeCountNotesArgs
    events?: boolean | CustomerRequestCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * CustomerRequestCountOutputType without action
   */
  export type CustomerRequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerRequestCountOutputType
     */
    select?: CustomerRequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerRequestCountOutputType without action
   */
  export type CustomerRequestCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InternalNoteWhereInput
  }

  /**
   * CustomerRequestCountOutputType without action
   */
  export type CustomerRequestCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestEventWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    notes?: boolean | User$notesArgs<ExtArgs>
    events?: boolean | User$eventsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "role" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notes?: boolean | User$notesArgs<ExtArgs>
    events?: boolean | User$eventsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      notes: Prisma.$InternalNotePayload<ExtArgs>[]
      events: Prisma.$RequestEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      role: $Enums.Role
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
      ByFields extends MaybeTupleToUnion<T['by']>,
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
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notes<T extends User$notesArgs<ExtArgs> = {}>(args?: Subset<T, User$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InternalNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    events<T extends User$eventsArgs<ExtArgs> = {}>(args?: Subset<T, User$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.notes
   */
  export type User$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalNote
     */
    select?: InternalNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalNote
     */
    omit?: InternalNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalNoteInclude<ExtArgs> | null
    where?: InternalNoteWhereInput
    orderBy?: InternalNoteOrderByWithRelationInput | InternalNoteOrderByWithRelationInput[]
    cursor?: InternalNoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InternalNoteScalarFieldEnum | InternalNoteScalarFieldEnum[]
  }

  /**
   * User.events
   */
  export type User$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestEvent
     */
    select?: RequestEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestEvent
     */
    omit?: RequestEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestEventInclude<ExtArgs> | null
    where?: RequestEventWhereInput
    orderBy?: RequestEventOrderByWithRelationInput | RequestEventOrderByWithRelationInput[]
    cursor?: RequestEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestEventScalarFieldEnum | RequestEventScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model CustomerRequest
   */

  export type AggregateCustomerRequest = {
    _count: CustomerRequestCountAggregateOutputType | null
    _min: CustomerRequestMinAggregateOutputType | null
    _max: CustomerRequestMaxAggregateOutputType | null
  }

  export type CustomerRequestMinAggregateOutputType = {
    id: string | null
    message: string | null
    sourceChannel: string | null
    customerName: string | null
    customerEmail: string | null
    status: $Enums.RequestStatus | null
    categorySnapshot: $Enums.Category | null
    prioritySnapshot: $Enums.Priority | null
    idempotencyKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerRequestMaxAggregateOutputType = {
    id: string | null
    message: string | null
    sourceChannel: string | null
    customerName: string | null
    customerEmail: string | null
    status: $Enums.RequestStatus | null
    categorySnapshot: $Enums.Category | null
    prioritySnapshot: $Enums.Priority | null
    idempotencyKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerRequestCountAggregateOutputType = {
    id: number
    message: number
    sourceChannel: number
    customerName: number
    customerEmail: number
    status: number
    categorySnapshot: number
    prioritySnapshot: number
    idempotencyKey: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerRequestMinAggregateInputType = {
    id?: true
    message?: true
    sourceChannel?: true
    customerName?: true
    customerEmail?: true
    status?: true
    categorySnapshot?: true
    prioritySnapshot?: true
    idempotencyKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerRequestMaxAggregateInputType = {
    id?: true
    message?: true
    sourceChannel?: true
    customerName?: true
    customerEmail?: true
    status?: true
    categorySnapshot?: true
    prioritySnapshot?: true
    idempotencyKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerRequestCountAggregateInputType = {
    id?: true
    message?: true
    sourceChannel?: true
    customerName?: true
    customerEmail?: true
    status?: true
    categorySnapshot?: true
    prioritySnapshot?: true
    idempotencyKey?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerRequest to aggregate.
     */
    where?: CustomerRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerRequests to fetch.
     */
    orderBy?: CustomerRequestOrderByWithRelationInput | CustomerRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomerRequests
    **/
    _count?: true | CustomerRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerRequestMaxAggregateInputType
  }

  export type GetCustomerRequestAggregateType<T extends CustomerRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomerRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomerRequest[P]>
      : GetScalarType<T[P], AggregateCustomerRequest[P]>
  }




  export type CustomerRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerRequestWhereInput
    orderBy?: CustomerRequestOrderByWithAggregationInput | CustomerRequestOrderByWithAggregationInput[]
    by: CustomerRequestScalarFieldEnum[] | CustomerRequestScalarFieldEnum
    having?: CustomerRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerRequestCountAggregateInputType | true
    _min?: CustomerRequestMinAggregateInputType
    _max?: CustomerRequestMaxAggregateInputType
  }

  export type CustomerRequestGroupByOutputType = {
    id: string
    message: string
    sourceChannel: string
    customerName: string | null
    customerEmail: string | null
    status: $Enums.RequestStatus
    categorySnapshot: $Enums.Category | null
    prioritySnapshot: $Enums.Priority | null
    idempotencyKey: string | null
    createdAt: Date
    updatedAt: Date
    _count: CustomerRequestCountAggregateOutputType | null
    _min: CustomerRequestMinAggregateOutputType | null
    _max: CustomerRequestMaxAggregateOutputType | null
  }

  type GetCustomerRequestGroupByPayload<T extends CustomerRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerRequestGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerRequestGroupByOutputType[P]>
        }
      >
    >


  export type CustomerRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    sourceChannel?: boolean
    customerName?: boolean
    customerEmail?: boolean
    status?: boolean
    categorySnapshot?: boolean
    prioritySnapshot?: boolean
    idempotencyKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    classification?: boolean | CustomerRequest$classificationArgs<ExtArgs>
    notes?: boolean | CustomerRequest$notesArgs<ExtArgs>
    events?: boolean | CustomerRequest$eventsArgs<ExtArgs>
    _count?: boolean | CustomerRequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerRequest"]>

  export type CustomerRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    sourceChannel?: boolean
    customerName?: boolean
    customerEmail?: boolean
    status?: boolean
    categorySnapshot?: boolean
    prioritySnapshot?: boolean
    idempotencyKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customerRequest"]>

  export type CustomerRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    sourceChannel?: boolean
    customerName?: boolean
    customerEmail?: boolean
    status?: boolean
    categorySnapshot?: boolean
    prioritySnapshot?: boolean
    idempotencyKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customerRequest"]>

  export type CustomerRequestSelectScalar = {
    id?: boolean
    message?: boolean
    sourceChannel?: boolean
    customerName?: boolean
    customerEmail?: boolean
    status?: boolean
    categorySnapshot?: boolean
    prioritySnapshot?: boolean
    idempotencyKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomerRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "message" | "sourceChannel" | "customerName" | "customerEmail" | "status" | "categorySnapshot" | "prioritySnapshot" | "idempotencyKey" | "createdAt" | "updatedAt", ExtArgs["result"]["customerRequest"]>
  export type CustomerRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classification?: boolean | CustomerRequest$classificationArgs<ExtArgs>
    notes?: boolean | CustomerRequest$notesArgs<ExtArgs>
    events?: boolean | CustomerRequest$eventsArgs<ExtArgs>
    _count?: boolean | CustomerRequestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomerRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomerRequest"
    objects: {
      classification: Prisma.$AiClassificationPayload<ExtArgs> | null
      notes: Prisma.$InternalNotePayload<ExtArgs>[]
      events: Prisma.$RequestEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      message: string
      sourceChannel: string
      customerName: string | null
      customerEmail: string | null
      status: $Enums.RequestStatus
      categorySnapshot: $Enums.Category | null
      prioritySnapshot: $Enums.Priority | null
      idempotencyKey: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customerRequest"]>
    composites: {}
  }

  type CustomerRequestGetPayload<S extends boolean | null | undefined | CustomerRequestDefaultArgs> = $Result.GetResult<Prisma.$CustomerRequestPayload, S>

  type CustomerRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerRequestCountAggregateInputType | true
    }

  export interface CustomerRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomerRequest'], meta: { name: 'CustomerRequest' } }
    /**
     * Find zero or one CustomerRequest that matches the filter.
     * @param {CustomerRequestFindUniqueArgs} args - Arguments to find a CustomerRequest
     * @example
     * // Get one CustomerRequest
     * const customerRequest = await prisma.customerRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerRequestFindUniqueArgs>(args: SelectSubset<T, CustomerRequestFindUniqueArgs<ExtArgs>>): Prisma__CustomerRequestClient<$Result.GetResult<Prisma.$CustomerRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustomerRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerRequestFindUniqueOrThrowArgs} args - Arguments to find a CustomerRequest
     * @example
     * // Get one CustomerRequest
     * const customerRequest = await prisma.customerRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerRequestClient<$Result.GetResult<Prisma.$CustomerRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomerRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerRequestFindFirstArgs} args - Arguments to find a CustomerRequest
     * @example
     * // Get one CustomerRequest
     * const customerRequest = await prisma.customerRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerRequestFindFirstArgs>(args?: SelectSubset<T, CustomerRequestFindFirstArgs<ExtArgs>>): Prisma__CustomerRequestClient<$Result.GetResult<Prisma.$CustomerRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomerRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerRequestFindFirstOrThrowArgs} args - Arguments to find a CustomerRequest
     * @example
     * // Get one CustomerRequest
     * const customerRequest = await prisma.customerRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerRequestClient<$Result.GetResult<Prisma.$CustomerRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustomerRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomerRequests
     * const customerRequests = await prisma.customerRequest.findMany()
     * 
     * // Get first 10 CustomerRequests
     * const customerRequests = await prisma.customerRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerRequestWithIdOnly = await prisma.customerRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerRequestFindManyArgs>(args?: SelectSubset<T, CustomerRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustomerRequest.
     * @param {CustomerRequestCreateArgs} args - Arguments to create a CustomerRequest.
     * @example
     * // Create one CustomerRequest
     * const CustomerRequest = await prisma.customerRequest.create({
     *   data: {
     *     // ... data to create a CustomerRequest
     *   }
     * })
     * 
     */
    create<T extends CustomerRequestCreateArgs>(args: SelectSubset<T, CustomerRequestCreateArgs<ExtArgs>>): Prisma__CustomerRequestClient<$Result.GetResult<Prisma.$CustomerRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustomerRequests.
     * @param {CustomerRequestCreateManyArgs} args - Arguments to create many CustomerRequests.
     * @example
     * // Create many CustomerRequests
     * const customerRequest = await prisma.customerRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerRequestCreateManyArgs>(args?: SelectSubset<T, CustomerRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustomerRequests and returns the data saved in the database.
     * @param {CustomerRequestCreateManyAndReturnArgs} args - Arguments to create many CustomerRequests.
     * @example
     * // Create many CustomerRequests
     * const customerRequest = await prisma.customerRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustomerRequests and only return the `id`
     * const customerRequestWithIdOnly = await prisma.customerRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CustomerRequest.
     * @param {CustomerRequestDeleteArgs} args - Arguments to delete one CustomerRequest.
     * @example
     * // Delete one CustomerRequest
     * const CustomerRequest = await prisma.customerRequest.delete({
     *   where: {
     *     // ... filter to delete one CustomerRequest
     *   }
     * })
     * 
     */
    delete<T extends CustomerRequestDeleteArgs>(args: SelectSubset<T, CustomerRequestDeleteArgs<ExtArgs>>): Prisma__CustomerRequestClient<$Result.GetResult<Prisma.$CustomerRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustomerRequest.
     * @param {CustomerRequestUpdateArgs} args - Arguments to update one CustomerRequest.
     * @example
     * // Update one CustomerRequest
     * const customerRequest = await prisma.customerRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerRequestUpdateArgs>(args: SelectSubset<T, CustomerRequestUpdateArgs<ExtArgs>>): Prisma__CustomerRequestClient<$Result.GetResult<Prisma.$CustomerRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustomerRequests.
     * @param {CustomerRequestDeleteManyArgs} args - Arguments to filter CustomerRequests to delete.
     * @example
     * // Delete a few CustomerRequests
     * const { count } = await prisma.customerRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerRequestDeleteManyArgs>(args?: SelectSubset<T, CustomerRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomerRequests
     * const customerRequest = await prisma.customerRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerRequestUpdateManyArgs>(args: SelectSubset<T, CustomerRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerRequests and returns the data updated in the database.
     * @param {CustomerRequestUpdateManyAndReturnArgs} args - Arguments to update many CustomerRequests.
     * @example
     * // Update many CustomerRequests
     * const customerRequest = await prisma.customerRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CustomerRequests and only return the `id`
     * const customerRequestWithIdOnly = await prisma.customerRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CustomerRequest.
     * @param {CustomerRequestUpsertArgs} args - Arguments to update or create a CustomerRequest.
     * @example
     * // Update or create a CustomerRequest
     * const customerRequest = await prisma.customerRequest.upsert({
     *   create: {
     *     // ... data to create a CustomerRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomerRequest we want to update
     *   }
     * })
     */
    upsert<T extends CustomerRequestUpsertArgs>(args: SelectSubset<T, CustomerRequestUpsertArgs<ExtArgs>>): Prisma__CustomerRequestClient<$Result.GetResult<Prisma.$CustomerRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustomerRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerRequestCountArgs} args - Arguments to filter CustomerRequests to count.
     * @example
     * // Count the number of CustomerRequests
     * const count = await prisma.customerRequest.count({
     *   where: {
     *     // ... the filter for the CustomerRequests we want to count
     *   }
     * })
    **/
    count<T extends CustomerRequestCountArgs>(
      args?: Subset<T, CustomerRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomerRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerRequestAggregateArgs>(args: Subset<T, CustomerRequestAggregateArgs>): Prisma.PrismaPromise<GetCustomerRequestAggregateType<T>>

    /**
     * Group by CustomerRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerRequestGroupByArgs} args - Group by arguments.
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
      T extends CustomerRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerRequestGroupByArgs['orderBy'] }
        : { orderBy?: CustomerRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CustomerRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomerRequest model
   */
  readonly fields: CustomerRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomerRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    classification<T extends CustomerRequest$classificationArgs<ExtArgs> = {}>(args?: Subset<T, CustomerRequest$classificationArgs<ExtArgs>>): Prisma__AiClassificationClient<$Result.GetResult<Prisma.$AiClassificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    notes<T extends CustomerRequest$notesArgs<ExtArgs> = {}>(args?: Subset<T, CustomerRequest$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InternalNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    events<T extends CustomerRequest$eventsArgs<ExtArgs> = {}>(args?: Subset<T, CustomerRequest$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CustomerRequest model
   */
  interface CustomerRequestFieldRefs {
    readonly id: FieldRef<"CustomerRequest", 'String'>
    readonly message: FieldRef<"CustomerRequest", 'String'>
    readonly sourceChannel: FieldRef<"CustomerRequest", 'String'>
    readonly customerName: FieldRef<"CustomerRequest", 'String'>
    readonly customerEmail: FieldRef<"CustomerRequest", 'String'>
    readonly status: FieldRef<"CustomerRequest", 'RequestStatus'>
    readonly categorySnapshot: FieldRef<"CustomerRequest", 'Category'>
    readonly prioritySnapshot: FieldRef<"CustomerRequest", 'Priority'>
    readonly idempotencyKey: FieldRef<"CustomerRequest", 'String'>
    readonly createdAt: FieldRef<"CustomerRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"CustomerRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CustomerRequest findUnique
   */
  export type CustomerRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerRequest
     */
    select?: CustomerRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerRequest
     */
    omit?: CustomerRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerRequestInclude<ExtArgs> | null
    /**
     * Filter, which CustomerRequest to fetch.
     */
    where: CustomerRequestWhereUniqueInput
  }

  /**
   * CustomerRequest findUniqueOrThrow
   */
  export type CustomerRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerRequest
     */
    select?: CustomerRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerRequest
     */
    omit?: CustomerRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerRequestInclude<ExtArgs> | null
    /**
     * Filter, which CustomerRequest to fetch.
     */
    where: CustomerRequestWhereUniqueInput
  }

  /**
   * CustomerRequest findFirst
   */
  export type CustomerRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerRequest
     */
    select?: CustomerRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerRequest
     */
    omit?: CustomerRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerRequestInclude<ExtArgs> | null
    /**
     * Filter, which CustomerRequest to fetch.
     */
    where?: CustomerRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerRequests to fetch.
     */
    orderBy?: CustomerRequestOrderByWithRelationInput | CustomerRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerRequests.
     */
    cursor?: CustomerRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerRequests.
     */
    distinct?: CustomerRequestScalarFieldEnum | CustomerRequestScalarFieldEnum[]
  }

  /**
   * CustomerRequest findFirstOrThrow
   */
  export type CustomerRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerRequest
     */
    select?: CustomerRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerRequest
     */
    omit?: CustomerRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerRequestInclude<ExtArgs> | null
    /**
     * Filter, which CustomerRequest to fetch.
     */
    where?: CustomerRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerRequests to fetch.
     */
    orderBy?: CustomerRequestOrderByWithRelationInput | CustomerRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerRequests.
     */
    cursor?: CustomerRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerRequests.
     */
    distinct?: CustomerRequestScalarFieldEnum | CustomerRequestScalarFieldEnum[]
  }

  /**
   * CustomerRequest findMany
   */
  export type CustomerRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerRequest
     */
    select?: CustomerRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerRequest
     */
    omit?: CustomerRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerRequestInclude<ExtArgs> | null
    /**
     * Filter, which CustomerRequests to fetch.
     */
    where?: CustomerRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerRequests to fetch.
     */
    orderBy?: CustomerRequestOrderByWithRelationInput | CustomerRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomerRequests.
     */
    cursor?: CustomerRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerRequests.
     */
    skip?: number
    distinct?: CustomerRequestScalarFieldEnum | CustomerRequestScalarFieldEnum[]
  }

  /**
   * CustomerRequest create
   */
  export type CustomerRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerRequest
     */
    select?: CustomerRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerRequest
     */
    omit?: CustomerRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a CustomerRequest.
     */
    data: XOR<CustomerRequestCreateInput, CustomerRequestUncheckedCreateInput>
  }

  /**
   * CustomerRequest createMany
   */
  export type CustomerRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomerRequests.
     */
    data: CustomerRequestCreateManyInput | CustomerRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomerRequest createManyAndReturn
   */
  export type CustomerRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerRequest
     */
    select?: CustomerRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerRequest
     */
    omit?: CustomerRequestOmit<ExtArgs> | null
    /**
     * The data used to create many CustomerRequests.
     */
    data: CustomerRequestCreateManyInput | CustomerRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomerRequest update
   */
  export type CustomerRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerRequest
     */
    select?: CustomerRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerRequest
     */
    omit?: CustomerRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a CustomerRequest.
     */
    data: XOR<CustomerRequestUpdateInput, CustomerRequestUncheckedUpdateInput>
    /**
     * Choose, which CustomerRequest to update.
     */
    where: CustomerRequestWhereUniqueInput
  }

  /**
   * CustomerRequest updateMany
   */
  export type CustomerRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomerRequests.
     */
    data: XOR<CustomerRequestUpdateManyMutationInput, CustomerRequestUncheckedUpdateManyInput>
    /**
     * Filter which CustomerRequests to update
     */
    where?: CustomerRequestWhereInput
    /**
     * Limit how many CustomerRequests to update.
     */
    limit?: number
  }

  /**
   * CustomerRequest updateManyAndReturn
   */
  export type CustomerRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerRequest
     */
    select?: CustomerRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerRequest
     */
    omit?: CustomerRequestOmit<ExtArgs> | null
    /**
     * The data used to update CustomerRequests.
     */
    data: XOR<CustomerRequestUpdateManyMutationInput, CustomerRequestUncheckedUpdateManyInput>
    /**
     * Filter which CustomerRequests to update
     */
    where?: CustomerRequestWhereInput
    /**
     * Limit how many CustomerRequests to update.
     */
    limit?: number
  }

  /**
   * CustomerRequest upsert
   */
  export type CustomerRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerRequest
     */
    select?: CustomerRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerRequest
     */
    omit?: CustomerRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the CustomerRequest to update in case it exists.
     */
    where: CustomerRequestWhereUniqueInput
    /**
     * In case the CustomerRequest found by the `where` argument doesn't exist, create a new CustomerRequest with this data.
     */
    create: XOR<CustomerRequestCreateInput, CustomerRequestUncheckedCreateInput>
    /**
     * In case the CustomerRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerRequestUpdateInput, CustomerRequestUncheckedUpdateInput>
  }

  /**
   * CustomerRequest delete
   */
  export type CustomerRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerRequest
     */
    select?: CustomerRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerRequest
     */
    omit?: CustomerRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerRequestInclude<ExtArgs> | null
    /**
     * Filter which CustomerRequest to delete.
     */
    where: CustomerRequestWhereUniqueInput
  }

  /**
   * CustomerRequest deleteMany
   */
  export type CustomerRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerRequests to delete
     */
    where?: CustomerRequestWhereInput
    /**
     * Limit how many CustomerRequests to delete.
     */
    limit?: number
  }

  /**
   * CustomerRequest.classification
   */
  export type CustomerRequest$classificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiClassification
     */
    select?: AiClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiClassification
     */
    omit?: AiClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiClassificationInclude<ExtArgs> | null
    where?: AiClassificationWhereInput
  }

  /**
   * CustomerRequest.notes
   */
  export type CustomerRequest$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalNote
     */
    select?: InternalNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalNote
     */
    omit?: InternalNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalNoteInclude<ExtArgs> | null
    where?: InternalNoteWhereInput
    orderBy?: InternalNoteOrderByWithRelationInput | InternalNoteOrderByWithRelationInput[]
    cursor?: InternalNoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InternalNoteScalarFieldEnum | InternalNoteScalarFieldEnum[]
  }

  /**
   * CustomerRequest.events
   */
  export type CustomerRequest$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestEvent
     */
    select?: RequestEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestEvent
     */
    omit?: RequestEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestEventInclude<ExtArgs> | null
    where?: RequestEventWhereInput
    orderBy?: RequestEventOrderByWithRelationInput | RequestEventOrderByWithRelationInput[]
    cursor?: RequestEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestEventScalarFieldEnum | RequestEventScalarFieldEnum[]
  }

  /**
   * CustomerRequest without action
   */
  export type CustomerRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerRequest
     */
    select?: CustomerRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerRequest
     */
    omit?: CustomerRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerRequestInclude<ExtArgs> | null
  }


  /**
   * Model AiClassification
   */

  export type AggregateAiClassification = {
    _count: AiClassificationCountAggregateOutputType | null
    _avg: AiClassificationAvgAggregateOutputType | null
    _sum: AiClassificationSumAggregateOutputType | null
    _min: AiClassificationMinAggregateOutputType | null
    _max: AiClassificationMaxAggregateOutputType | null
  }

  export type AiClassificationAvgAggregateOutputType = {
    confidence: number | null
  }

  export type AiClassificationSumAggregateOutputType = {
    confidence: number | null
  }

  export type AiClassificationMinAggregateOutputType = {
    id: string | null
    requestId: string | null
    provider: string | null
    category: $Enums.Category | null
    priority: $Enums.Priority | null
    summary: string | null
    confidence: number | null
    reason: string | null
    error: string | null
    createdAt: Date | null
  }

  export type AiClassificationMaxAggregateOutputType = {
    id: string | null
    requestId: string | null
    provider: string | null
    category: $Enums.Category | null
    priority: $Enums.Priority | null
    summary: string | null
    confidence: number | null
    reason: string | null
    error: string | null
    createdAt: Date | null
  }

  export type AiClassificationCountAggregateOutputType = {
    id: number
    requestId: number
    provider: number
    category: number
    priority: number
    summary: number
    confidence: number
    reason: number
    rawOutput: number
    error: number
    createdAt: number
    _all: number
  }


  export type AiClassificationAvgAggregateInputType = {
    confidence?: true
  }

  export type AiClassificationSumAggregateInputType = {
    confidence?: true
  }

  export type AiClassificationMinAggregateInputType = {
    id?: true
    requestId?: true
    provider?: true
    category?: true
    priority?: true
    summary?: true
    confidence?: true
    reason?: true
    error?: true
    createdAt?: true
  }

  export type AiClassificationMaxAggregateInputType = {
    id?: true
    requestId?: true
    provider?: true
    category?: true
    priority?: true
    summary?: true
    confidence?: true
    reason?: true
    error?: true
    createdAt?: true
  }

  export type AiClassificationCountAggregateInputType = {
    id?: true
    requestId?: true
    provider?: true
    category?: true
    priority?: true
    summary?: true
    confidence?: true
    reason?: true
    rawOutput?: true
    error?: true
    createdAt?: true
    _all?: true
  }

  export type AiClassificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiClassification to aggregate.
     */
    where?: AiClassificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiClassifications to fetch.
     */
    orderBy?: AiClassificationOrderByWithRelationInput | AiClassificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AiClassificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiClassifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiClassifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AiClassifications
    **/
    _count?: true | AiClassificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AiClassificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AiClassificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AiClassificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AiClassificationMaxAggregateInputType
  }

  export type GetAiClassificationAggregateType<T extends AiClassificationAggregateArgs> = {
        [P in keyof T & keyof AggregateAiClassification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAiClassification[P]>
      : GetScalarType<T[P], AggregateAiClassification[P]>
  }




  export type AiClassificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiClassificationWhereInput
    orderBy?: AiClassificationOrderByWithAggregationInput | AiClassificationOrderByWithAggregationInput[]
    by: AiClassificationScalarFieldEnum[] | AiClassificationScalarFieldEnum
    having?: AiClassificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AiClassificationCountAggregateInputType | true
    _avg?: AiClassificationAvgAggregateInputType
    _sum?: AiClassificationSumAggregateInputType
    _min?: AiClassificationMinAggregateInputType
    _max?: AiClassificationMaxAggregateInputType
  }

  export type AiClassificationGroupByOutputType = {
    id: string
    requestId: string
    provider: string
    category: $Enums.Category | null
    priority: $Enums.Priority | null
    summary: string | null
    confidence: number | null
    reason: string | null
    rawOutput: JsonValue | null
    error: string | null
    createdAt: Date
    _count: AiClassificationCountAggregateOutputType | null
    _avg: AiClassificationAvgAggregateOutputType | null
    _sum: AiClassificationSumAggregateOutputType | null
    _min: AiClassificationMinAggregateOutputType | null
    _max: AiClassificationMaxAggregateOutputType | null
  }

  type GetAiClassificationGroupByPayload<T extends AiClassificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AiClassificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AiClassificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AiClassificationGroupByOutputType[P]>
            : GetScalarType<T[P], AiClassificationGroupByOutputType[P]>
        }
      >
    >


  export type AiClassificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    provider?: boolean
    category?: boolean
    priority?: boolean
    summary?: boolean
    confidence?: boolean
    reason?: boolean
    rawOutput?: boolean
    error?: boolean
    createdAt?: boolean
    request?: boolean | CustomerRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiClassification"]>

  export type AiClassificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    provider?: boolean
    category?: boolean
    priority?: boolean
    summary?: boolean
    confidence?: boolean
    reason?: boolean
    rawOutput?: boolean
    error?: boolean
    createdAt?: boolean
    request?: boolean | CustomerRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiClassification"]>

  export type AiClassificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    provider?: boolean
    category?: boolean
    priority?: boolean
    summary?: boolean
    confidence?: boolean
    reason?: boolean
    rawOutput?: boolean
    error?: boolean
    createdAt?: boolean
    request?: boolean | CustomerRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiClassification"]>

  export type AiClassificationSelectScalar = {
    id?: boolean
    requestId?: boolean
    provider?: boolean
    category?: boolean
    priority?: boolean
    summary?: boolean
    confidence?: boolean
    reason?: boolean
    rawOutput?: boolean
    error?: boolean
    createdAt?: boolean
  }

  export type AiClassificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "requestId" | "provider" | "category" | "priority" | "summary" | "confidence" | "reason" | "rawOutput" | "error" | "createdAt", ExtArgs["result"]["aiClassification"]>
  export type AiClassificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | CustomerRequestDefaultArgs<ExtArgs>
  }
  export type AiClassificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | CustomerRequestDefaultArgs<ExtArgs>
  }
  export type AiClassificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | CustomerRequestDefaultArgs<ExtArgs>
  }

  export type $AiClassificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AiClassification"
    objects: {
      request: Prisma.$CustomerRequestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      requestId: string
      provider: string
      category: $Enums.Category | null
      priority: $Enums.Priority | null
      summary: string | null
      confidence: number | null
      reason: string | null
      rawOutput: Prisma.JsonValue | null
      error: string | null
      createdAt: Date
    }, ExtArgs["result"]["aiClassification"]>
    composites: {}
  }

  type AiClassificationGetPayload<S extends boolean | null | undefined | AiClassificationDefaultArgs> = $Result.GetResult<Prisma.$AiClassificationPayload, S>

  type AiClassificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AiClassificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AiClassificationCountAggregateInputType | true
    }

  export interface AiClassificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AiClassification'], meta: { name: 'AiClassification' } }
    /**
     * Find zero or one AiClassification that matches the filter.
     * @param {AiClassificationFindUniqueArgs} args - Arguments to find a AiClassification
     * @example
     * // Get one AiClassification
     * const aiClassification = await prisma.aiClassification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AiClassificationFindUniqueArgs>(args: SelectSubset<T, AiClassificationFindUniqueArgs<ExtArgs>>): Prisma__AiClassificationClient<$Result.GetResult<Prisma.$AiClassificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AiClassification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AiClassificationFindUniqueOrThrowArgs} args - Arguments to find a AiClassification
     * @example
     * // Get one AiClassification
     * const aiClassification = await prisma.aiClassification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AiClassificationFindUniqueOrThrowArgs>(args: SelectSubset<T, AiClassificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AiClassificationClient<$Result.GetResult<Prisma.$AiClassificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AiClassification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiClassificationFindFirstArgs} args - Arguments to find a AiClassification
     * @example
     * // Get one AiClassification
     * const aiClassification = await prisma.aiClassification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AiClassificationFindFirstArgs>(args?: SelectSubset<T, AiClassificationFindFirstArgs<ExtArgs>>): Prisma__AiClassificationClient<$Result.GetResult<Prisma.$AiClassificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AiClassification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiClassificationFindFirstOrThrowArgs} args - Arguments to find a AiClassification
     * @example
     * // Get one AiClassification
     * const aiClassification = await prisma.aiClassification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AiClassificationFindFirstOrThrowArgs>(args?: SelectSubset<T, AiClassificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__AiClassificationClient<$Result.GetResult<Prisma.$AiClassificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AiClassifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiClassificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AiClassifications
     * const aiClassifications = await prisma.aiClassification.findMany()
     * 
     * // Get first 10 AiClassifications
     * const aiClassifications = await prisma.aiClassification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aiClassificationWithIdOnly = await prisma.aiClassification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AiClassificationFindManyArgs>(args?: SelectSubset<T, AiClassificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiClassificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AiClassification.
     * @param {AiClassificationCreateArgs} args - Arguments to create a AiClassification.
     * @example
     * // Create one AiClassification
     * const AiClassification = await prisma.aiClassification.create({
     *   data: {
     *     // ... data to create a AiClassification
     *   }
     * })
     * 
     */
    create<T extends AiClassificationCreateArgs>(args: SelectSubset<T, AiClassificationCreateArgs<ExtArgs>>): Prisma__AiClassificationClient<$Result.GetResult<Prisma.$AiClassificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AiClassifications.
     * @param {AiClassificationCreateManyArgs} args - Arguments to create many AiClassifications.
     * @example
     * // Create many AiClassifications
     * const aiClassification = await prisma.aiClassification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AiClassificationCreateManyArgs>(args?: SelectSubset<T, AiClassificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AiClassifications and returns the data saved in the database.
     * @param {AiClassificationCreateManyAndReturnArgs} args - Arguments to create many AiClassifications.
     * @example
     * // Create many AiClassifications
     * const aiClassification = await prisma.aiClassification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AiClassifications and only return the `id`
     * const aiClassificationWithIdOnly = await prisma.aiClassification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AiClassificationCreateManyAndReturnArgs>(args?: SelectSubset<T, AiClassificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiClassificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AiClassification.
     * @param {AiClassificationDeleteArgs} args - Arguments to delete one AiClassification.
     * @example
     * // Delete one AiClassification
     * const AiClassification = await prisma.aiClassification.delete({
     *   where: {
     *     // ... filter to delete one AiClassification
     *   }
     * })
     * 
     */
    delete<T extends AiClassificationDeleteArgs>(args: SelectSubset<T, AiClassificationDeleteArgs<ExtArgs>>): Prisma__AiClassificationClient<$Result.GetResult<Prisma.$AiClassificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AiClassification.
     * @param {AiClassificationUpdateArgs} args - Arguments to update one AiClassification.
     * @example
     * // Update one AiClassification
     * const aiClassification = await prisma.aiClassification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AiClassificationUpdateArgs>(args: SelectSubset<T, AiClassificationUpdateArgs<ExtArgs>>): Prisma__AiClassificationClient<$Result.GetResult<Prisma.$AiClassificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AiClassifications.
     * @param {AiClassificationDeleteManyArgs} args - Arguments to filter AiClassifications to delete.
     * @example
     * // Delete a few AiClassifications
     * const { count } = await prisma.aiClassification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AiClassificationDeleteManyArgs>(args?: SelectSubset<T, AiClassificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiClassifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiClassificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AiClassifications
     * const aiClassification = await prisma.aiClassification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AiClassificationUpdateManyArgs>(args: SelectSubset<T, AiClassificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiClassifications and returns the data updated in the database.
     * @param {AiClassificationUpdateManyAndReturnArgs} args - Arguments to update many AiClassifications.
     * @example
     * // Update many AiClassifications
     * const aiClassification = await prisma.aiClassification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AiClassifications and only return the `id`
     * const aiClassificationWithIdOnly = await prisma.aiClassification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AiClassificationUpdateManyAndReturnArgs>(args: SelectSubset<T, AiClassificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiClassificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AiClassification.
     * @param {AiClassificationUpsertArgs} args - Arguments to update or create a AiClassification.
     * @example
     * // Update or create a AiClassification
     * const aiClassification = await prisma.aiClassification.upsert({
     *   create: {
     *     // ... data to create a AiClassification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AiClassification we want to update
     *   }
     * })
     */
    upsert<T extends AiClassificationUpsertArgs>(args: SelectSubset<T, AiClassificationUpsertArgs<ExtArgs>>): Prisma__AiClassificationClient<$Result.GetResult<Prisma.$AiClassificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AiClassifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiClassificationCountArgs} args - Arguments to filter AiClassifications to count.
     * @example
     * // Count the number of AiClassifications
     * const count = await prisma.aiClassification.count({
     *   where: {
     *     // ... the filter for the AiClassifications we want to count
     *   }
     * })
    **/
    count<T extends AiClassificationCountArgs>(
      args?: Subset<T, AiClassificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AiClassificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AiClassification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiClassificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AiClassificationAggregateArgs>(args: Subset<T, AiClassificationAggregateArgs>): Prisma.PrismaPromise<GetAiClassificationAggregateType<T>>

    /**
     * Group by AiClassification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiClassificationGroupByArgs} args - Group by arguments.
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
      T extends AiClassificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AiClassificationGroupByArgs['orderBy'] }
        : { orderBy?: AiClassificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AiClassificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAiClassificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AiClassification model
   */
  readonly fields: AiClassificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AiClassification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AiClassificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    request<T extends CustomerRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerRequestDefaultArgs<ExtArgs>>): Prisma__CustomerRequestClient<$Result.GetResult<Prisma.$CustomerRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AiClassification model
   */
  interface AiClassificationFieldRefs {
    readonly id: FieldRef<"AiClassification", 'String'>
    readonly requestId: FieldRef<"AiClassification", 'String'>
    readonly provider: FieldRef<"AiClassification", 'String'>
    readonly category: FieldRef<"AiClassification", 'Category'>
    readonly priority: FieldRef<"AiClassification", 'Priority'>
    readonly summary: FieldRef<"AiClassification", 'String'>
    readonly confidence: FieldRef<"AiClassification", 'Float'>
    readonly reason: FieldRef<"AiClassification", 'String'>
    readonly rawOutput: FieldRef<"AiClassification", 'Json'>
    readonly error: FieldRef<"AiClassification", 'String'>
    readonly createdAt: FieldRef<"AiClassification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AiClassification findUnique
   */
  export type AiClassificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiClassification
     */
    select?: AiClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiClassification
     */
    omit?: AiClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiClassificationInclude<ExtArgs> | null
    /**
     * Filter, which AiClassification to fetch.
     */
    where: AiClassificationWhereUniqueInput
  }

  /**
   * AiClassification findUniqueOrThrow
   */
  export type AiClassificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiClassification
     */
    select?: AiClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiClassification
     */
    omit?: AiClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiClassificationInclude<ExtArgs> | null
    /**
     * Filter, which AiClassification to fetch.
     */
    where: AiClassificationWhereUniqueInput
  }

  /**
   * AiClassification findFirst
   */
  export type AiClassificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiClassification
     */
    select?: AiClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiClassification
     */
    omit?: AiClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiClassificationInclude<ExtArgs> | null
    /**
     * Filter, which AiClassification to fetch.
     */
    where?: AiClassificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiClassifications to fetch.
     */
    orderBy?: AiClassificationOrderByWithRelationInput | AiClassificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiClassifications.
     */
    cursor?: AiClassificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiClassifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiClassifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiClassifications.
     */
    distinct?: AiClassificationScalarFieldEnum | AiClassificationScalarFieldEnum[]
  }

  /**
   * AiClassification findFirstOrThrow
   */
  export type AiClassificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiClassification
     */
    select?: AiClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiClassification
     */
    omit?: AiClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiClassificationInclude<ExtArgs> | null
    /**
     * Filter, which AiClassification to fetch.
     */
    where?: AiClassificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiClassifications to fetch.
     */
    orderBy?: AiClassificationOrderByWithRelationInput | AiClassificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiClassifications.
     */
    cursor?: AiClassificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiClassifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiClassifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiClassifications.
     */
    distinct?: AiClassificationScalarFieldEnum | AiClassificationScalarFieldEnum[]
  }

  /**
   * AiClassification findMany
   */
  export type AiClassificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiClassification
     */
    select?: AiClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiClassification
     */
    omit?: AiClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiClassificationInclude<ExtArgs> | null
    /**
     * Filter, which AiClassifications to fetch.
     */
    where?: AiClassificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiClassifications to fetch.
     */
    orderBy?: AiClassificationOrderByWithRelationInput | AiClassificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AiClassifications.
     */
    cursor?: AiClassificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiClassifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiClassifications.
     */
    skip?: number
    distinct?: AiClassificationScalarFieldEnum | AiClassificationScalarFieldEnum[]
  }

  /**
   * AiClassification create
   */
  export type AiClassificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiClassification
     */
    select?: AiClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiClassification
     */
    omit?: AiClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiClassificationInclude<ExtArgs> | null
    /**
     * The data needed to create a AiClassification.
     */
    data: XOR<AiClassificationCreateInput, AiClassificationUncheckedCreateInput>
  }

  /**
   * AiClassification createMany
   */
  export type AiClassificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AiClassifications.
     */
    data: AiClassificationCreateManyInput | AiClassificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AiClassification createManyAndReturn
   */
  export type AiClassificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiClassification
     */
    select?: AiClassificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AiClassification
     */
    omit?: AiClassificationOmit<ExtArgs> | null
    /**
     * The data used to create many AiClassifications.
     */
    data: AiClassificationCreateManyInput | AiClassificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiClassificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AiClassification update
   */
  export type AiClassificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiClassification
     */
    select?: AiClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiClassification
     */
    omit?: AiClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiClassificationInclude<ExtArgs> | null
    /**
     * The data needed to update a AiClassification.
     */
    data: XOR<AiClassificationUpdateInput, AiClassificationUncheckedUpdateInput>
    /**
     * Choose, which AiClassification to update.
     */
    where: AiClassificationWhereUniqueInput
  }

  /**
   * AiClassification updateMany
   */
  export type AiClassificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AiClassifications.
     */
    data: XOR<AiClassificationUpdateManyMutationInput, AiClassificationUncheckedUpdateManyInput>
    /**
     * Filter which AiClassifications to update
     */
    where?: AiClassificationWhereInput
    /**
     * Limit how many AiClassifications to update.
     */
    limit?: number
  }

  /**
   * AiClassification updateManyAndReturn
   */
  export type AiClassificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiClassification
     */
    select?: AiClassificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AiClassification
     */
    omit?: AiClassificationOmit<ExtArgs> | null
    /**
     * The data used to update AiClassifications.
     */
    data: XOR<AiClassificationUpdateManyMutationInput, AiClassificationUncheckedUpdateManyInput>
    /**
     * Filter which AiClassifications to update
     */
    where?: AiClassificationWhereInput
    /**
     * Limit how many AiClassifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiClassificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AiClassification upsert
   */
  export type AiClassificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiClassification
     */
    select?: AiClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiClassification
     */
    omit?: AiClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiClassificationInclude<ExtArgs> | null
    /**
     * The filter to search for the AiClassification to update in case it exists.
     */
    where: AiClassificationWhereUniqueInput
    /**
     * In case the AiClassification found by the `where` argument doesn't exist, create a new AiClassification with this data.
     */
    create: XOR<AiClassificationCreateInput, AiClassificationUncheckedCreateInput>
    /**
     * In case the AiClassification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AiClassificationUpdateInput, AiClassificationUncheckedUpdateInput>
  }

  /**
   * AiClassification delete
   */
  export type AiClassificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiClassification
     */
    select?: AiClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiClassification
     */
    omit?: AiClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiClassificationInclude<ExtArgs> | null
    /**
     * Filter which AiClassification to delete.
     */
    where: AiClassificationWhereUniqueInput
  }

  /**
   * AiClassification deleteMany
   */
  export type AiClassificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiClassifications to delete
     */
    where?: AiClassificationWhereInput
    /**
     * Limit how many AiClassifications to delete.
     */
    limit?: number
  }

  /**
   * AiClassification without action
   */
  export type AiClassificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiClassification
     */
    select?: AiClassificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiClassification
     */
    omit?: AiClassificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiClassificationInclude<ExtArgs> | null
  }


  /**
   * Model RequestEvent
   */

  export type AggregateRequestEvent = {
    _count: RequestEventCountAggregateOutputType | null
    _min: RequestEventMinAggregateOutputType | null
    _max: RequestEventMaxAggregateOutputType | null
  }

  export type RequestEventMinAggregateOutputType = {
    id: string | null
    requestId: string | null
    eventType: string | null
    oldValue: string | null
    newValue: string | null
    actorId: string | null
    createdAt: Date | null
  }

  export type RequestEventMaxAggregateOutputType = {
    id: string | null
    requestId: string | null
    eventType: string | null
    oldValue: string | null
    newValue: string | null
    actorId: string | null
    createdAt: Date | null
  }

  export type RequestEventCountAggregateOutputType = {
    id: number
    requestId: number
    eventType: number
    oldValue: number
    newValue: number
    actorId: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type RequestEventMinAggregateInputType = {
    id?: true
    requestId?: true
    eventType?: true
    oldValue?: true
    newValue?: true
    actorId?: true
    createdAt?: true
  }

  export type RequestEventMaxAggregateInputType = {
    id?: true
    requestId?: true
    eventType?: true
    oldValue?: true
    newValue?: true
    actorId?: true
    createdAt?: true
  }

  export type RequestEventCountAggregateInputType = {
    id?: true
    requestId?: true
    eventType?: true
    oldValue?: true
    newValue?: true
    actorId?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type RequestEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequestEvent to aggregate.
     */
    where?: RequestEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestEvents to fetch.
     */
    orderBy?: RequestEventOrderByWithRelationInput | RequestEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequestEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RequestEvents
    **/
    _count?: true | RequestEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequestEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequestEventMaxAggregateInputType
  }

  export type GetRequestEventAggregateType<T extends RequestEventAggregateArgs> = {
        [P in keyof T & keyof AggregateRequestEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequestEvent[P]>
      : GetScalarType<T[P], AggregateRequestEvent[P]>
  }




  export type RequestEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestEventWhereInput
    orderBy?: RequestEventOrderByWithAggregationInput | RequestEventOrderByWithAggregationInput[]
    by: RequestEventScalarFieldEnum[] | RequestEventScalarFieldEnum
    having?: RequestEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequestEventCountAggregateInputType | true
    _min?: RequestEventMinAggregateInputType
    _max?: RequestEventMaxAggregateInputType
  }

  export type RequestEventGroupByOutputType = {
    id: string
    requestId: string
    eventType: string
    oldValue: string | null
    newValue: string | null
    actorId: string | null
    metadata: JsonValue | null
    createdAt: Date
    _count: RequestEventCountAggregateOutputType | null
    _min: RequestEventMinAggregateOutputType | null
    _max: RequestEventMaxAggregateOutputType | null
  }

  type GetRequestEventGroupByPayload<T extends RequestEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequestEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequestEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequestEventGroupByOutputType[P]>
            : GetScalarType<T[P], RequestEventGroupByOutputType[P]>
        }
      >
    >


  export type RequestEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    eventType?: boolean
    oldValue?: boolean
    newValue?: boolean
    actorId?: boolean
    metadata?: boolean
    createdAt?: boolean
    request?: boolean | CustomerRequestDefaultArgs<ExtArgs>
    actor?: boolean | RequestEvent$actorArgs<ExtArgs>
  }, ExtArgs["result"]["requestEvent"]>

  export type RequestEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    eventType?: boolean
    oldValue?: boolean
    newValue?: boolean
    actorId?: boolean
    metadata?: boolean
    createdAt?: boolean
    request?: boolean | CustomerRequestDefaultArgs<ExtArgs>
    actor?: boolean | RequestEvent$actorArgs<ExtArgs>
  }, ExtArgs["result"]["requestEvent"]>

  export type RequestEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    eventType?: boolean
    oldValue?: boolean
    newValue?: boolean
    actorId?: boolean
    metadata?: boolean
    createdAt?: boolean
    request?: boolean | CustomerRequestDefaultArgs<ExtArgs>
    actor?: boolean | RequestEvent$actorArgs<ExtArgs>
  }, ExtArgs["result"]["requestEvent"]>

  export type RequestEventSelectScalar = {
    id?: boolean
    requestId?: boolean
    eventType?: boolean
    oldValue?: boolean
    newValue?: boolean
    actorId?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type RequestEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "requestId" | "eventType" | "oldValue" | "newValue" | "actorId" | "metadata" | "createdAt", ExtArgs["result"]["requestEvent"]>
  export type RequestEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | CustomerRequestDefaultArgs<ExtArgs>
    actor?: boolean | RequestEvent$actorArgs<ExtArgs>
  }
  export type RequestEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | CustomerRequestDefaultArgs<ExtArgs>
    actor?: boolean | RequestEvent$actorArgs<ExtArgs>
  }
  export type RequestEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | CustomerRequestDefaultArgs<ExtArgs>
    actor?: boolean | RequestEvent$actorArgs<ExtArgs>
  }

  export type $RequestEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RequestEvent"
    objects: {
      request: Prisma.$CustomerRequestPayload<ExtArgs>
      actor: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      requestId: string
      eventType: string
      oldValue: string | null
      newValue: string | null
      actorId: string | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["requestEvent"]>
    composites: {}
  }

  type RequestEventGetPayload<S extends boolean | null | undefined | RequestEventDefaultArgs> = $Result.GetResult<Prisma.$RequestEventPayload, S>

  type RequestEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RequestEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RequestEventCountAggregateInputType | true
    }

  export interface RequestEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RequestEvent'], meta: { name: 'RequestEvent' } }
    /**
     * Find zero or one RequestEvent that matches the filter.
     * @param {RequestEventFindUniqueArgs} args - Arguments to find a RequestEvent
     * @example
     * // Get one RequestEvent
     * const requestEvent = await prisma.requestEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RequestEventFindUniqueArgs>(args: SelectSubset<T, RequestEventFindUniqueArgs<ExtArgs>>): Prisma__RequestEventClient<$Result.GetResult<Prisma.$RequestEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RequestEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RequestEventFindUniqueOrThrowArgs} args - Arguments to find a RequestEvent
     * @example
     * // Get one RequestEvent
     * const requestEvent = await prisma.requestEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RequestEventFindUniqueOrThrowArgs>(args: SelectSubset<T, RequestEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RequestEventClient<$Result.GetResult<Prisma.$RequestEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RequestEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestEventFindFirstArgs} args - Arguments to find a RequestEvent
     * @example
     * // Get one RequestEvent
     * const requestEvent = await prisma.requestEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RequestEventFindFirstArgs>(args?: SelectSubset<T, RequestEventFindFirstArgs<ExtArgs>>): Prisma__RequestEventClient<$Result.GetResult<Prisma.$RequestEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RequestEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestEventFindFirstOrThrowArgs} args - Arguments to find a RequestEvent
     * @example
     * // Get one RequestEvent
     * const requestEvent = await prisma.requestEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RequestEventFindFirstOrThrowArgs>(args?: SelectSubset<T, RequestEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__RequestEventClient<$Result.GetResult<Prisma.$RequestEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RequestEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RequestEvents
     * const requestEvents = await prisma.requestEvent.findMany()
     * 
     * // Get first 10 RequestEvents
     * const requestEvents = await prisma.requestEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requestEventWithIdOnly = await prisma.requestEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RequestEventFindManyArgs>(args?: SelectSubset<T, RequestEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RequestEvent.
     * @param {RequestEventCreateArgs} args - Arguments to create a RequestEvent.
     * @example
     * // Create one RequestEvent
     * const RequestEvent = await prisma.requestEvent.create({
     *   data: {
     *     // ... data to create a RequestEvent
     *   }
     * })
     * 
     */
    create<T extends RequestEventCreateArgs>(args: SelectSubset<T, RequestEventCreateArgs<ExtArgs>>): Prisma__RequestEventClient<$Result.GetResult<Prisma.$RequestEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RequestEvents.
     * @param {RequestEventCreateManyArgs} args - Arguments to create many RequestEvents.
     * @example
     * // Create many RequestEvents
     * const requestEvent = await prisma.requestEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RequestEventCreateManyArgs>(args?: SelectSubset<T, RequestEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RequestEvents and returns the data saved in the database.
     * @param {RequestEventCreateManyAndReturnArgs} args - Arguments to create many RequestEvents.
     * @example
     * // Create many RequestEvents
     * const requestEvent = await prisma.requestEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RequestEvents and only return the `id`
     * const requestEventWithIdOnly = await prisma.requestEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RequestEventCreateManyAndReturnArgs>(args?: SelectSubset<T, RequestEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RequestEvent.
     * @param {RequestEventDeleteArgs} args - Arguments to delete one RequestEvent.
     * @example
     * // Delete one RequestEvent
     * const RequestEvent = await prisma.requestEvent.delete({
     *   where: {
     *     // ... filter to delete one RequestEvent
     *   }
     * })
     * 
     */
    delete<T extends RequestEventDeleteArgs>(args: SelectSubset<T, RequestEventDeleteArgs<ExtArgs>>): Prisma__RequestEventClient<$Result.GetResult<Prisma.$RequestEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RequestEvent.
     * @param {RequestEventUpdateArgs} args - Arguments to update one RequestEvent.
     * @example
     * // Update one RequestEvent
     * const requestEvent = await prisma.requestEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RequestEventUpdateArgs>(args: SelectSubset<T, RequestEventUpdateArgs<ExtArgs>>): Prisma__RequestEventClient<$Result.GetResult<Prisma.$RequestEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RequestEvents.
     * @param {RequestEventDeleteManyArgs} args - Arguments to filter RequestEvents to delete.
     * @example
     * // Delete a few RequestEvents
     * const { count } = await prisma.requestEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RequestEventDeleteManyArgs>(args?: SelectSubset<T, RequestEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RequestEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RequestEvents
     * const requestEvent = await prisma.requestEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RequestEventUpdateManyArgs>(args: SelectSubset<T, RequestEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RequestEvents and returns the data updated in the database.
     * @param {RequestEventUpdateManyAndReturnArgs} args - Arguments to update many RequestEvents.
     * @example
     * // Update many RequestEvents
     * const requestEvent = await prisma.requestEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RequestEvents and only return the `id`
     * const requestEventWithIdOnly = await prisma.requestEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RequestEventUpdateManyAndReturnArgs>(args: SelectSubset<T, RequestEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RequestEvent.
     * @param {RequestEventUpsertArgs} args - Arguments to update or create a RequestEvent.
     * @example
     * // Update or create a RequestEvent
     * const requestEvent = await prisma.requestEvent.upsert({
     *   create: {
     *     // ... data to create a RequestEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RequestEvent we want to update
     *   }
     * })
     */
    upsert<T extends RequestEventUpsertArgs>(args: SelectSubset<T, RequestEventUpsertArgs<ExtArgs>>): Prisma__RequestEventClient<$Result.GetResult<Prisma.$RequestEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RequestEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestEventCountArgs} args - Arguments to filter RequestEvents to count.
     * @example
     * // Count the number of RequestEvents
     * const count = await prisma.requestEvent.count({
     *   where: {
     *     // ... the filter for the RequestEvents we want to count
     *   }
     * })
    **/
    count<T extends RequestEventCountArgs>(
      args?: Subset<T, RequestEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequestEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RequestEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RequestEventAggregateArgs>(args: Subset<T, RequestEventAggregateArgs>): Prisma.PrismaPromise<GetRequestEventAggregateType<T>>

    /**
     * Group by RequestEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestEventGroupByArgs} args - Group by arguments.
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
      T extends RequestEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequestEventGroupByArgs['orderBy'] }
        : { orderBy?: RequestEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, RequestEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequestEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RequestEvent model
   */
  readonly fields: RequestEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RequestEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RequestEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    request<T extends CustomerRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerRequestDefaultArgs<ExtArgs>>): Prisma__CustomerRequestClient<$Result.GetResult<Prisma.$CustomerRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    actor<T extends RequestEvent$actorArgs<ExtArgs> = {}>(args?: Subset<T, RequestEvent$actorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RequestEvent model
   */
  interface RequestEventFieldRefs {
    readonly id: FieldRef<"RequestEvent", 'String'>
    readonly requestId: FieldRef<"RequestEvent", 'String'>
    readonly eventType: FieldRef<"RequestEvent", 'String'>
    readonly oldValue: FieldRef<"RequestEvent", 'String'>
    readonly newValue: FieldRef<"RequestEvent", 'String'>
    readonly actorId: FieldRef<"RequestEvent", 'String'>
    readonly metadata: FieldRef<"RequestEvent", 'Json'>
    readonly createdAt: FieldRef<"RequestEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RequestEvent findUnique
   */
  export type RequestEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestEvent
     */
    select?: RequestEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestEvent
     */
    omit?: RequestEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestEventInclude<ExtArgs> | null
    /**
     * Filter, which RequestEvent to fetch.
     */
    where: RequestEventWhereUniqueInput
  }

  /**
   * RequestEvent findUniqueOrThrow
   */
  export type RequestEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestEvent
     */
    select?: RequestEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestEvent
     */
    omit?: RequestEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestEventInclude<ExtArgs> | null
    /**
     * Filter, which RequestEvent to fetch.
     */
    where: RequestEventWhereUniqueInput
  }

  /**
   * RequestEvent findFirst
   */
  export type RequestEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestEvent
     */
    select?: RequestEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestEvent
     */
    omit?: RequestEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestEventInclude<ExtArgs> | null
    /**
     * Filter, which RequestEvent to fetch.
     */
    where?: RequestEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestEvents to fetch.
     */
    orderBy?: RequestEventOrderByWithRelationInput | RequestEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequestEvents.
     */
    cursor?: RequestEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequestEvents.
     */
    distinct?: RequestEventScalarFieldEnum | RequestEventScalarFieldEnum[]
  }

  /**
   * RequestEvent findFirstOrThrow
   */
  export type RequestEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestEvent
     */
    select?: RequestEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestEvent
     */
    omit?: RequestEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestEventInclude<ExtArgs> | null
    /**
     * Filter, which RequestEvent to fetch.
     */
    where?: RequestEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestEvents to fetch.
     */
    orderBy?: RequestEventOrderByWithRelationInput | RequestEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequestEvents.
     */
    cursor?: RequestEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequestEvents.
     */
    distinct?: RequestEventScalarFieldEnum | RequestEventScalarFieldEnum[]
  }

  /**
   * RequestEvent findMany
   */
  export type RequestEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestEvent
     */
    select?: RequestEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestEvent
     */
    omit?: RequestEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestEventInclude<ExtArgs> | null
    /**
     * Filter, which RequestEvents to fetch.
     */
    where?: RequestEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestEvents to fetch.
     */
    orderBy?: RequestEventOrderByWithRelationInput | RequestEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RequestEvents.
     */
    cursor?: RequestEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestEvents.
     */
    skip?: number
    distinct?: RequestEventScalarFieldEnum | RequestEventScalarFieldEnum[]
  }

  /**
   * RequestEvent create
   */
  export type RequestEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestEvent
     */
    select?: RequestEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestEvent
     */
    omit?: RequestEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestEventInclude<ExtArgs> | null
    /**
     * The data needed to create a RequestEvent.
     */
    data: XOR<RequestEventCreateInput, RequestEventUncheckedCreateInput>
  }

  /**
   * RequestEvent createMany
   */
  export type RequestEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RequestEvents.
     */
    data: RequestEventCreateManyInput | RequestEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RequestEvent createManyAndReturn
   */
  export type RequestEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestEvent
     */
    select?: RequestEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RequestEvent
     */
    omit?: RequestEventOmit<ExtArgs> | null
    /**
     * The data used to create many RequestEvents.
     */
    data: RequestEventCreateManyInput | RequestEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RequestEvent update
   */
  export type RequestEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestEvent
     */
    select?: RequestEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestEvent
     */
    omit?: RequestEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestEventInclude<ExtArgs> | null
    /**
     * The data needed to update a RequestEvent.
     */
    data: XOR<RequestEventUpdateInput, RequestEventUncheckedUpdateInput>
    /**
     * Choose, which RequestEvent to update.
     */
    where: RequestEventWhereUniqueInput
  }

  /**
   * RequestEvent updateMany
   */
  export type RequestEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RequestEvents.
     */
    data: XOR<RequestEventUpdateManyMutationInput, RequestEventUncheckedUpdateManyInput>
    /**
     * Filter which RequestEvents to update
     */
    where?: RequestEventWhereInput
    /**
     * Limit how many RequestEvents to update.
     */
    limit?: number
  }

  /**
   * RequestEvent updateManyAndReturn
   */
  export type RequestEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestEvent
     */
    select?: RequestEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RequestEvent
     */
    omit?: RequestEventOmit<ExtArgs> | null
    /**
     * The data used to update RequestEvents.
     */
    data: XOR<RequestEventUpdateManyMutationInput, RequestEventUncheckedUpdateManyInput>
    /**
     * Filter which RequestEvents to update
     */
    where?: RequestEventWhereInput
    /**
     * Limit how many RequestEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RequestEvent upsert
   */
  export type RequestEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestEvent
     */
    select?: RequestEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestEvent
     */
    omit?: RequestEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestEventInclude<ExtArgs> | null
    /**
     * The filter to search for the RequestEvent to update in case it exists.
     */
    where: RequestEventWhereUniqueInput
    /**
     * In case the RequestEvent found by the `where` argument doesn't exist, create a new RequestEvent with this data.
     */
    create: XOR<RequestEventCreateInput, RequestEventUncheckedCreateInput>
    /**
     * In case the RequestEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequestEventUpdateInput, RequestEventUncheckedUpdateInput>
  }

  /**
   * RequestEvent delete
   */
  export type RequestEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestEvent
     */
    select?: RequestEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestEvent
     */
    omit?: RequestEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestEventInclude<ExtArgs> | null
    /**
     * Filter which RequestEvent to delete.
     */
    where: RequestEventWhereUniqueInput
  }

  /**
   * RequestEvent deleteMany
   */
  export type RequestEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequestEvents to delete
     */
    where?: RequestEventWhereInput
    /**
     * Limit how many RequestEvents to delete.
     */
    limit?: number
  }

  /**
   * RequestEvent.actor
   */
  export type RequestEvent$actorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * RequestEvent without action
   */
  export type RequestEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestEvent
     */
    select?: RequestEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestEvent
     */
    omit?: RequestEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestEventInclude<ExtArgs> | null
  }


  /**
   * Model InternalNote
   */

  export type AggregateInternalNote = {
    _count: InternalNoteCountAggregateOutputType | null
    _min: InternalNoteMinAggregateOutputType | null
    _max: InternalNoteMaxAggregateOutputType | null
  }

  export type InternalNoteMinAggregateOutputType = {
    id: string | null
    requestId: string | null
    authorId: string | null
    body: string | null
    createdAt: Date | null
  }

  export type InternalNoteMaxAggregateOutputType = {
    id: string | null
    requestId: string | null
    authorId: string | null
    body: string | null
    createdAt: Date | null
  }

  export type InternalNoteCountAggregateOutputType = {
    id: number
    requestId: number
    authorId: number
    body: number
    createdAt: number
    _all: number
  }


  export type InternalNoteMinAggregateInputType = {
    id?: true
    requestId?: true
    authorId?: true
    body?: true
    createdAt?: true
  }

  export type InternalNoteMaxAggregateInputType = {
    id?: true
    requestId?: true
    authorId?: true
    body?: true
    createdAt?: true
  }

  export type InternalNoteCountAggregateInputType = {
    id?: true
    requestId?: true
    authorId?: true
    body?: true
    createdAt?: true
    _all?: true
  }

  export type InternalNoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InternalNote to aggregate.
     */
    where?: InternalNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InternalNotes to fetch.
     */
    orderBy?: InternalNoteOrderByWithRelationInput | InternalNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InternalNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InternalNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InternalNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InternalNotes
    **/
    _count?: true | InternalNoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InternalNoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InternalNoteMaxAggregateInputType
  }

  export type GetInternalNoteAggregateType<T extends InternalNoteAggregateArgs> = {
        [P in keyof T & keyof AggregateInternalNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInternalNote[P]>
      : GetScalarType<T[P], AggregateInternalNote[P]>
  }




  export type InternalNoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InternalNoteWhereInput
    orderBy?: InternalNoteOrderByWithAggregationInput | InternalNoteOrderByWithAggregationInput[]
    by: InternalNoteScalarFieldEnum[] | InternalNoteScalarFieldEnum
    having?: InternalNoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InternalNoteCountAggregateInputType | true
    _min?: InternalNoteMinAggregateInputType
    _max?: InternalNoteMaxAggregateInputType
  }

  export type InternalNoteGroupByOutputType = {
    id: string
    requestId: string
    authorId: string
    body: string
    createdAt: Date
    _count: InternalNoteCountAggregateOutputType | null
    _min: InternalNoteMinAggregateOutputType | null
    _max: InternalNoteMaxAggregateOutputType | null
  }

  type GetInternalNoteGroupByPayload<T extends InternalNoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InternalNoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InternalNoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InternalNoteGroupByOutputType[P]>
            : GetScalarType<T[P], InternalNoteGroupByOutputType[P]>
        }
      >
    >


  export type InternalNoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    authorId?: boolean
    body?: boolean
    createdAt?: boolean
    request?: boolean | CustomerRequestDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["internalNote"]>

  export type InternalNoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    authorId?: boolean
    body?: boolean
    createdAt?: boolean
    request?: boolean | CustomerRequestDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["internalNote"]>

  export type InternalNoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    authorId?: boolean
    body?: boolean
    createdAt?: boolean
    request?: boolean | CustomerRequestDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["internalNote"]>

  export type InternalNoteSelectScalar = {
    id?: boolean
    requestId?: boolean
    authorId?: boolean
    body?: boolean
    createdAt?: boolean
  }

  export type InternalNoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "requestId" | "authorId" | "body" | "createdAt", ExtArgs["result"]["internalNote"]>
  export type InternalNoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | CustomerRequestDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InternalNoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | CustomerRequestDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InternalNoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | CustomerRequestDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InternalNotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InternalNote"
    objects: {
      request: Prisma.$CustomerRequestPayload<ExtArgs>
      author: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      requestId: string
      authorId: string
      body: string
      createdAt: Date
    }, ExtArgs["result"]["internalNote"]>
    composites: {}
  }

  type InternalNoteGetPayload<S extends boolean | null | undefined | InternalNoteDefaultArgs> = $Result.GetResult<Prisma.$InternalNotePayload, S>

  type InternalNoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InternalNoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InternalNoteCountAggregateInputType | true
    }

  export interface InternalNoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InternalNote'], meta: { name: 'InternalNote' } }
    /**
     * Find zero or one InternalNote that matches the filter.
     * @param {InternalNoteFindUniqueArgs} args - Arguments to find a InternalNote
     * @example
     * // Get one InternalNote
     * const internalNote = await prisma.internalNote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InternalNoteFindUniqueArgs>(args: SelectSubset<T, InternalNoteFindUniqueArgs<ExtArgs>>): Prisma__InternalNoteClient<$Result.GetResult<Prisma.$InternalNotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InternalNote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InternalNoteFindUniqueOrThrowArgs} args - Arguments to find a InternalNote
     * @example
     * // Get one InternalNote
     * const internalNote = await prisma.internalNote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InternalNoteFindUniqueOrThrowArgs>(args: SelectSubset<T, InternalNoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InternalNoteClient<$Result.GetResult<Prisma.$InternalNotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InternalNote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternalNoteFindFirstArgs} args - Arguments to find a InternalNote
     * @example
     * // Get one InternalNote
     * const internalNote = await prisma.internalNote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InternalNoteFindFirstArgs>(args?: SelectSubset<T, InternalNoteFindFirstArgs<ExtArgs>>): Prisma__InternalNoteClient<$Result.GetResult<Prisma.$InternalNotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InternalNote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternalNoteFindFirstOrThrowArgs} args - Arguments to find a InternalNote
     * @example
     * // Get one InternalNote
     * const internalNote = await prisma.internalNote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InternalNoteFindFirstOrThrowArgs>(args?: SelectSubset<T, InternalNoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__InternalNoteClient<$Result.GetResult<Prisma.$InternalNotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InternalNotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternalNoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InternalNotes
     * const internalNotes = await prisma.internalNote.findMany()
     * 
     * // Get first 10 InternalNotes
     * const internalNotes = await prisma.internalNote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const internalNoteWithIdOnly = await prisma.internalNote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InternalNoteFindManyArgs>(args?: SelectSubset<T, InternalNoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InternalNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InternalNote.
     * @param {InternalNoteCreateArgs} args - Arguments to create a InternalNote.
     * @example
     * // Create one InternalNote
     * const InternalNote = await prisma.internalNote.create({
     *   data: {
     *     // ... data to create a InternalNote
     *   }
     * })
     * 
     */
    create<T extends InternalNoteCreateArgs>(args: SelectSubset<T, InternalNoteCreateArgs<ExtArgs>>): Prisma__InternalNoteClient<$Result.GetResult<Prisma.$InternalNotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InternalNotes.
     * @param {InternalNoteCreateManyArgs} args - Arguments to create many InternalNotes.
     * @example
     * // Create many InternalNotes
     * const internalNote = await prisma.internalNote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InternalNoteCreateManyArgs>(args?: SelectSubset<T, InternalNoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InternalNotes and returns the data saved in the database.
     * @param {InternalNoteCreateManyAndReturnArgs} args - Arguments to create many InternalNotes.
     * @example
     * // Create many InternalNotes
     * const internalNote = await prisma.internalNote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InternalNotes and only return the `id`
     * const internalNoteWithIdOnly = await prisma.internalNote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InternalNoteCreateManyAndReturnArgs>(args?: SelectSubset<T, InternalNoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InternalNotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InternalNote.
     * @param {InternalNoteDeleteArgs} args - Arguments to delete one InternalNote.
     * @example
     * // Delete one InternalNote
     * const InternalNote = await prisma.internalNote.delete({
     *   where: {
     *     // ... filter to delete one InternalNote
     *   }
     * })
     * 
     */
    delete<T extends InternalNoteDeleteArgs>(args: SelectSubset<T, InternalNoteDeleteArgs<ExtArgs>>): Prisma__InternalNoteClient<$Result.GetResult<Prisma.$InternalNotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InternalNote.
     * @param {InternalNoteUpdateArgs} args - Arguments to update one InternalNote.
     * @example
     * // Update one InternalNote
     * const internalNote = await prisma.internalNote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InternalNoteUpdateArgs>(args: SelectSubset<T, InternalNoteUpdateArgs<ExtArgs>>): Prisma__InternalNoteClient<$Result.GetResult<Prisma.$InternalNotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InternalNotes.
     * @param {InternalNoteDeleteManyArgs} args - Arguments to filter InternalNotes to delete.
     * @example
     * // Delete a few InternalNotes
     * const { count } = await prisma.internalNote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InternalNoteDeleteManyArgs>(args?: SelectSubset<T, InternalNoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InternalNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternalNoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InternalNotes
     * const internalNote = await prisma.internalNote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InternalNoteUpdateManyArgs>(args: SelectSubset<T, InternalNoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InternalNotes and returns the data updated in the database.
     * @param {InternalNoteUpdateManyAndReturnArgs} args - Arguments to update many InternalNotes.
     * @example
     * // Update many InternalNotes
     * const internalNote = await prisma.internalNote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InternalNotes and only return the `id`
     * const internalNoteWithIdOnly = await prisma.internalNote.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InternalNoteUpdateManyAndReturnArgs>(args: SelectSubset<T, InternalNoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InternalNotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InternalNote.
     * @param {InternalNoteUpsertArgs} args - Arguments to update or create a InternalNote.
     * @example
     * // Update or create a InternalNote
     * const internalNote = await prisma.internalNote.upsert({
     *   create: {
     *     // ... data to create a InternalNote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InternalNote we want to update
     *   }
     * })
     */
    upsert<T extends InternalNoteUpsertArgs>(args: SelectSubset<T, InternalNoteUpsertArgs<ExtArgs>>): Prisma__InternalNoteClient<$Result.GetResult<Prisma.$InternalNotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InternalNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternalNoteCountArgs} args - Arguments to filter InternalNotes to count.
     * @example
     * // Count the number of InternalNotes
     * const count = await prisma.internalNote.count({
     *   where: {
     *     // ... the filter for the InternalNotes we want to count
     *   }
     * })
    **/
    count<T extends InternalNoteCountArgs>(
      args?: Subset<T, InternalNoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InternalNoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InternalNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternalNoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InternalNoteAggregateArgs>(args: Subset<T, InternalNoteAggregateArgs>): Prisma.PrismaPromise<GetInternalNoteAggregateType<T>>

    /**
     * Group by InternalNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternalNoteGroupByArgs} args - Group by arguments.
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
      T extends InternalNoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InternalNoteGroupByArgs['orderBy'] }
        : { orderBy?: InternalNoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, InternalNoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInternalNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InternalNote model
   */
  readonly fields: InternalNoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InternalNote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InternalNoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    request<T extends CustomerRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerRequestDefaultArgs<ExtArgs>>): Prisma__CustomerRequestClient<$Result.GetResult<Prisma.$CustomerRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InternalNote model
   */
  interface InternalNoteFieldRefs {
    readonly id: FieldRef<"InternalNote", 'String'>
    readonly requestId: FieldRef<"InternalNote", 'String'>
    readonly authorId: FieldRef<"InternalNote", 'String'>
    readonly body: FieldRef<"InternalNote", 'String'>
    readonly createdAt: FieldRef<"InternalNote", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InternalNote findUnique
   */
  export type InternalNoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalNote
     */
    select?: InternalNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalNote
     */
    omit?: InternalNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalNoteInclude<ExtArgs> | null
    /**
     * Filter, which InternalNote to fetch.
     */
    where: InternalNoteWhereUniqueInput
  }

  /**
   * InternalNote findUniqueOrThrow
   */
  export type InternalNoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalNote
     */
    select?: InternalNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalNote
     */
    omit?: InternalNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalNoteInclude<ExtArgs> | null
    /**
     * Filter, which InternalNote to fetch.
     */
    where: InternalNoteWhereUniqueInput
  }

  /**
   * InternalNote findFirst
   */
  export type InternalNoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalNote
     */
    select?: InternalNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalNote
     */
    omit?: InternalNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalNoteInclude<ExtArgs> | null
    /**
     * Filter, which InternalNote to fetch.
     */
    where?: InternalNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InternalNotes to fetch.
     */
    orderBy?: InternalNoteOrderByWithRelationInput | InternalNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InternalNotes.
     */
    cursor?: InternalNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InternalNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InternalNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InternalNotes.
     */
    distinct?: InternalNoteScalarFieldEnum | InternalNoteScalarFieldEnum[]
  }

  /**
   * InternalNote findFirstOrThrow
   */
  export type InternalNoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalNote
     */
    select?: InternalNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalNote
     */
    omit?: InternalNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalNoteInclude<ExtArgs> | null
    /**
     * Filter, which InternalNote to fetch.
     */
    where?: InternalNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InternalNotes to fetch.
     */
    orderBy?: InternalNoteOrderByWithRelationInput | InternalNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InternalNotes.
     */
    cursor?: InternalNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InternalNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InternalNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InternalNotes.
     */
    distinct?: InternalNoteScalarFieldEnum | InternalNoteScalarFieldEnum[]
  }

  /**
   * InternalNote findMany
   */
  export type InternalNoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalNote
     */
    select?: InternalNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalNote
     */
    omit?: InternalNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalNoteInclude<ExtArgs> | null
    /**
     * Filter, which InternalNotes to fetch.
     */
    where?: InternalNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InternalNotes to fetch.
     */
    orderBy?: InternalNoteOrderByWithRelationInput | InternalNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InternalNotes.
     */
    cursor?: InternalNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InternalNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InternalNotes.
     */
    skip?: number
    distinct?: InternalNoteScalarFieldEnum | InternalNoteScalarFieldEnum[]
  }

  /**
   * InternalNote create
   */
  export type InternalNoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalNote
     */
    select?: InternalNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalNote
     */
    omit?: InternalNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalNoteInclude<ExtArgs> | null
    /**
     * The data needed to create a InternalNote.
     */
    data: XOR<InternalNoteCreateInput, InternalNoteUncheckedCreateInput>
  }

  /**
   * InternalNote createMany
   */
  export type InternalNoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InternalNotes.
     */
    data: InternalNoteCreateManyInput | InternalNoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InternalNote createManyAndReturn
   */
  export type InternalNoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalNote
     */
    select?: InternalNoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InternalNote
     */
    omit?: InternalNoteOmit<ExtArgs> | null
    /**
     * The data used to create many InternalNotes.
     */
    data: InternalNoteCreateManyInput | InternalNoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalNoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InternalNote update
   */
  export type InternalNoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalNote
     */
    select?: InternalNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalNote
     */
    omit?: InternalNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalNoteInclude<ExtArgs> | null
    /**
     * The data needed to update a InternalNote.
     */
    data: XOR<InternalNoteUpdateInput, InternalNoteUncheckedUpdateInput>
    /**
     * Choose, which InternalNote to update.
     */
    where: InternalNoteWhereUniqueInput
  }

  /**
   * InternalNote updateMany
   */
  export type InternalNoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InternalNotes.
     */
    data: XOR<InternalNoteUpdateManyMutationInput, InternalNoteUncheckedUpdateManyInput>
    /**
     * Filter which InternalNotes to update
     */
    where?: InternalNoteWhereInput
    /**
     * Limit how many InternalNotes to update.
     */
    limit?: number
  }

  /**
   * InternalNote updateManyAndReturn
   */
  export type InternalNoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalNote
     */
    select?: InternalNoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InternalNote
     */
    omit?: InternalNoteOmit<ExtArgs> | null
    /**
     * The data used to update InternalNotes.
     */
    data: XOR<InternalNoteUpdateManyMutationInput, InternalNoteUncheckedUpdateManyInput>
    /**
     * Filter which InternalNotes to update
     */
    where?: InternalNoteWhereInput
    /**
     * Limit how many InternalNotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalNoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InternalNote upsert
   */
  export type InternalNoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalNote
     */
    select?: InternalNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalNote
     */
    omit?: InternalNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalNoteInclude<ExtArgs> | null
    /**
     * The filter to search for the InternalNote to update in case it exists.
     */
    where: InternalNoteWhereUniqueInput
    /**
     * In case the InternalNote found by the `where` argument doesn't exist, create a new InternalNote with this data.
     */
    create: XOR<InternalNoteCreateInput, InternalNoteUncheckedCreateInput>
    /**
     * In case the InternalNote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InternalNoteUpdateInput, InternalNoteUncheckedUpdateInput>
  }

  /**
   * InternalNote delete
   */
  export type InternalNoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalNote
     */
    select?: InternalNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalNote
     */
    omit?: InternalNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalNoteInclude<ExtArgs> | null
    /**
     * Filter which InternalNote to delete.
     */
    where: InternalNoteWhereUniqueInput
  }

  /**
   * InternalNote deleteMany
   */
  export type InternalNoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InternalNotes to delete
     */
    where?: InternalNoteWhereInput
    /**
     * Limit how many InternalNotes to delete.
     */
    limit?: number
  }

  /**
   * InternalNote without action
   */
  export type InternalNoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalNote
     */
    select?: InternalNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalNote
     */
    omit?: InternalNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalNoteInclude<ExtArgs> | null
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
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CustomerRequestScalarFieldEnum: {
    id: 'id',
    message: 'message',
    sourceChannel: 'sourceChannel',
    customerName: 'customerName',
    customerEmail: 'customerEmail',
    status: 'status',
    categorySnapshot: 'categorySnapshot',
    prioritySnapshot: 'prioritySnapshot',
    idempotencyKey: 'idempotencyKey',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerRequestScalarFieldEnum = (typeof CustomerRequestScalarFieldEnum)[keyof typeof CustomerRequestScalarFieldEnum]


  export const AiClassificationScalarFieldEnum: {
    id: 'id',
    requestId: 'requestId',
    provider: 'provider',
    category: 'category',
    priority: 'priority',
    summary: 'summary',
    confidence: 'confidence',
    reason: 'reason',
    rawOutput: 'rawOutput',
    error: 'error',
    createdAt: 'createdAt'
  };

  export type AiClassificationScalarFieldEnum = (typeof AiClassificationScalarFieldEnum)[keyof typeof AiClassificationScalarFieldEnum]


  export const RequestEventScalarFieldEnum: {
    id: 'id',
    requestId: 'requestId',
    eventType: 'eventType',
    oldValue: 'oldValue',
    newValue: 'newValue',
    actorId: 'actorId',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type RequestEventScalarFieldEnum = (typeof RequestEventScalarFieldEnum)[keyof typeof RequestEventScalarFieldEnum]


  export const InternalNoteScalarFieldEnum: {
    id: 'id',
    requestId: 'requestId',
    authorId: 'authorId',
    body: 'body',
    createdAt: 'createdAt'
  };

  export type InternalNoteScalarFieldEnum = (typeof InternalNoteScalarFieldEnum)[keyof typeof InternalNoteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'RequestStatus'
   */
  export type EnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus'>
    


  /**
   * Reference to a field of type 'RequestStatus[]'
   */
  export type ListEnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus[]'>
    


  /**
   * Reference to a field of type 'Category'
   */
  export type EnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category'>
    


  /**
   * Reference to a field of type 'Category[]'
   */
  export type ListEnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category[]'>
    


  /**
   * Reference to a field of type 'Priority'
   */
  export type EnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority'>
    


  /**
   * Reference to a field of type 'Priority[]'
   */
  export type ListEnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    notes?: InternalNoteListRelationFilter
    events?: RequestEventListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    notes?: InternalNoteOrderByRelationAggregateInput
    events?: RequestEventOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    notes?: InternalNoteListRelationFilter
    events?: RequestEventListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CustomerRequestWhereInput = {
    AND?: CustomerRequestWhereInput | CustomerRequestWhereInput[]
    OR?: CustomerRequestWhereInput[]
    NOT?: CustomerRequestWhereInput | CustomerRequestWhereInput[]
    id?: StringFilter<"CustomerRequest"> | string
    message?: StringFilter<"CustomerRequest"> | string
    sourceChannel?: StringFilter<"CustomerRequest"> | string
    customerName?: StringNullableFilter<"CustomerRequest"> | string | null
    customerEmail?: StringNullableFilter<"CustomerRequest"> | string | null
    status?: EnumRequestStatusFilter<"CustomerRequest"> | $Enums.RequestStatus
    categorySnapshot?: EnumCategoryNullableFilter<"CustomerRequest"> | $Enums.Category | null
    prioritySnapshot?: EnumPriorityNullableFilter<"CustomerRequest"> | $Enums.Priority | null
    idempotencyKey?: StringNullableFilter<"CustomerRequest"> | string | null
    createdAt?: DateTimeFilter<"CustomerRequest"> | Date | string
    updatedAt?: DateTimeFilter<"CustomerRequest"> | Date | string
    classification?: XOR<AiClassificationNullableScalarRelationFilter, AiClassificationWhereInput> | null
    notes?: InternalNoteListRelationFilter
    events?: RequestEventListRelationFilter
  }

  export type CustomerRequestOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    sourceChannel?: SortOrder
    customerName?: SortOrderInput | SortOrder
    customerEmail?: SortOrderInput | SortOrder
    status?: SortOrder
    categorySnapshot?: SortOrderInput | SortOrder
    prioritySnapshot?: SortOrderInput | SortOrder
    idempotencyKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    classification?: AiClassificationOrderByWithRelationInput
    notes?: InternalNoteOrderByRelationAggregateInput
    events?: RequestEventOrderByRelationAggregateInput
  }

  export type CustomerRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    idempotencyKey?: string
    AND?: CustomerRequestWhereInput | CustomerRequestWhereInput[]
    OR?: CustomerRequestWhereInput[]
    NOT?: CustomerRequestWhereInput | CustomerRequestWhereInput[]
    message?: StringFilter<"CustomerRequest"> | string
    sourceChannel?: StringFilter<"CustomerRequest"> | string
    customerName?: StringNullableFilter<"CustomerRequest"> | string | null
    customerEmail?: StringNullableFilter<"CustomerRequest"> | string | null
    status?: EnumRequestStatusFilter<"CustomerRequest"> | $Enums.RequestStatus
    categorySnapshot?: EnumCategoryNullableFilter<"CustomerRequest"> | $Enums.Category | null
    prioritySnapshot?: EnumPriorityNullableFilter<"CustomerRequest"> | $Enums.Priority | null
    createdAt?: DateTimeFilter<"CustomerRequest"> | Date | string
    updatedAt?: DateTimeFilter<"CustomerRequest"> | Date | string
    classification?: XOR<AiClassificationNullableScalarRelationFilter, AiClassificationWhereInput> | null
    notes?: InternalNoteListRelationFilter
    events?: RequestEventListRelationFilter
  }, "id" | "idempotencyKey">

  export type CustomerRequestOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    sourceChannel?: SortOrder
    customerName?: SortOrderInput | SortOrder
    customerEmail?: SortOrderInput | SortOrder
    status?: SortOrder
    categorySnapshot?: SortOrderInput | SortOrder
    prioritySnapshot?: SortOrderInput | SortOrder
    idempotencyKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerRequestCountOrderByAggregateInput
    _max?: CustomerRequestMaxOrderByAggregateInput
    _min?: CustomerRequestMinOrderByAggregateInput
  }

  export type CustomerRequestScalarWhereWithAggregatesInput = {
    AND?: CustomerRequestScalarWhereWithAggregatesInput | CustomerRequestScalarWhereWithAggregatesInput[]
    OR?: CustomerRequestScalarWhereWithAggregatesInput[]
    NOT?: CustomerRequestScalarWhereWithAggregatesInput | CustomerRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CustomerRequest"> | string
    message?: StringWithAggregatesFilter<"CustomerRequest"> | string
    sourceChannel?: StringWithAggregatesFilter<"CustomerRequest"> | string
    customerName?: StringNullableWithAggregatesFilter<"CustomerRequest"> | string | null
    customerEmail?: StringNullableWithAggregatesFilter<"CustomerRequest"> | string | null
    status?: EnumRequestStatusWithAggregatesFilter<"CustomerRequest"> | $Enums.RequestStatus
    categorySnapshot?: EnumCategoryNullableWithAggregatesFilter<"CustomerRequest"> | $Enums.Category | null
    prioritySnapshot?: EnumPriorityNullableWithAggregatesFilter<"CustomerRequest"> | $Enums.Priority | null
    idempotencyKey?: StringNullableWithAggregatesFilter<"CustomerRequest"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CustomerRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CustomerRequest"> | Date | string
  }

  export type AiClassificationWhereInput = {
    AND?: AiClassificationWhereInput | AiClassificationWhereInput[]
    OR?: AiClassificationWhereInput[]
    NOT?: AiClassificationWhereInput | AiClassificationWhereInput[]
    id?: StringFilter<"AiClassification"> | string
    requestId?: StringFilter<"AiClassification"> | string
    provider?: StringFilter<"AiClassification"> | string
    category?: EnumCategoryNullableFilter<"AiClassification"> | $Enums.Category | null
    priority?: EnumPriorityNullableFilter<"AiClassification"> | $Enums.Priority | null
    summary?: StringNullableFilter<"AiClassification"> | string | null
    confidence?: FloatNullableFilter<"AiClassification"> | number | null
    reason?: StringNullableFilter<"AiClassification"> | string | null
    rawOutput?: JsonNullableFilter<"AiClassification">
    error?: StringNullableFilter<"AiClassification"> | string | null
    createdAt?: DateTimeFilter<"AiClassification"> | Date | string
    request?: XOR<CustomerRequestScalarRelationFilter, CustomerRequestWhereInput>
  }

  export type AiClassificationOrderByWithRelationInput = {
    id?: SortOrder
    requestId?: SortOrder
    provider?: SortOrder
    category?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    confidence?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    rawOutput?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    request?: CustomerRequestOrderByWithRelationInput
  }

  export type AiClassificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    requestId?: string
    AND?: AiClassificationWhereInput | AiClassificationWhereInput[]
    OR?: AiClassificationWhereInput[]
    NOT?: AiClassificationWhereInput | AiClassificationWhereInput[]
    provider?: StringFilter<"AiClassification"> | string
    category?: EnumCategoryNullableFilter<"AiClassification"> | $Enums.Category | null
    priority?: EnumPriorityNullableFilter<"AiClassification"> | $Enums.Priority | null
    summary?: StringNullableFilter<"AiClassification"> | string | null
    confidence?: FloatNullableFilter<"AiClassification"> | number | null
    reason?: StringNullableFilter<"AiClassification"> | string | null
    rawOutput?: JsonNullableFilter<"AiClassification">
    error?: StringNullableFilter<"AiClassification"> | string | null
    createdAt?: DateTimeFilter<"AiClassification"> | Date | string
    request?: XOR<CustomerRequestScalarRelationFilter, CustomerRequestWhereInput>
  }, "id" | "requestId">

  export type AiClassificationOrderByWithAggregationInput = {
    id?: SortOrder
    requestId?: SortOrder
    provider?: SortOrder
    category?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    confidence?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    rawOutput?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AiClassificationCountOrderByAggregateInput
    _avg?: AiClassificationAvgOrderByAggregateInput
    _max?: AiClassificationMaxOrderByAggregateInput
    _min?: AiClassificationMinOrderByAggregateInput
    _sum?: AiClassificationSumOrderByAggregateInput
  }

  export type AiClassificationScalarWhereWithAggregatesInput = {
    AND?: AiClassificationScalarWhereWithAggregatesInput | AiClassificationScalarWhereWithAggregatesInput[]
    OR?: AiClassificationScalarWhereWithAggregatesInput[]
    NOT?: AiClassificationScalarWhereWithAggregatesInput | AiClassificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AiClassification"> | string
    requestId?: StringWithAggregatesFilter<"AiClassification"> | string
    provider?: StringWithAggregatesFilter<"AiClassification"> | string
    category?: EnumCategoryNullableWithAggregatesFilter<"AiClassification"> | $Enums.Category | null
    priority?: EnumPriorityNullableWithAggregatesFilter<"AiClassification"> | $Enums.Priority | null
    summary?: StringNullableWithAggregatesFilter<"AiClassification"> | string | null
    confidence?: FloatNullableWithAggregatesFilter<"AiClassification"> | number | null
    reason?: StringNullableWithAggregatesFilter<"AiClassification"> | string | null
    rawOutput?: JsonNullableWithAggregatesFilter<"AiClassification">
    error?: StringNullableWithAggregatesFilter<"AiClassification"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AiClassification"> | Date | string
  }

  export type RequestEventWhereInput = {
    AND?: RequestEventWhereInput | RequestEventWhereInput[]
    OR?: RequestEventWhereInput[]
    NOT?: RequestEventWhereInput | RequestEventWhereInput[]
    id?: StringFilter<"RequestEvent"> | string
    requestId?: StringFilter<"RequestEvent"> | string
    eventType?: StringFilter<"RequestEvent"> | string
    oldValue?: StringNullableFilter<"RequestEvent"> | string | null
    newValue?: StringNullableFilter<"RequestEvent"> | string | null
    actorId?: StringNullableFilter<"RequestEvent"> | string | null
    metadata?: JsonNullableFilter<"RequestEvent">
    createdAt?: DateTimeFilter<"RequestEvent"> | Date | string
    request?: XOR<CustomerRequestScalarRelationFilter, CustomerRequestWhereInput>
    actor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type RequestEventOrderByWithRelationInput = {
    id?: SortOrder
    requestId?: SortOrder
    eventType?: SortOrder
    oldValue?: SortOrderInput | SortOrder
    newValue?: SortOrderInput | SortOrder
    actorId?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    request?: CustomerRequestOrderByWithRelationInput
    actor?: UserOrderByWithRelationInput
  }

  export type RequestEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RequestEventWhereInput | RequestEventWhereInput[]
    OR?: RequestEventWhereInput[]
    NOT?: RequestEventWhereInput | RequestEventWhereInput[]
    requestId?: StringFilter<"RequestEvent"> | string
    eventType?: StringFilter<"RequestEvent"> | string
    oldValue?: StringNullableFilter<"RequestEvent"> | string | null
    newValue?: StringNullableFilter<"RequestEvent"> | string | null
    actorId?: StringNullableFilter<"RequestEvent"> | string | null
    metadata?: JsonNullableFilter<"RequestEvent">
    createdAt?: DateTimeFilter<"RequestEvent"> | Date | string
    request?: XOR<CustomerRequestScalarRelationFilter, CustomerRequestWhereInput>
    actor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type RequestEventOrderByWithAggregationInput = {
    id?: SortOrder
    requestId?: SortOrder
    eventType?: SortOrder
    oldValue?: SortOrderInput | SortOrder
    newValue?: SortOrderInput | SortOrder
    actorId?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: RequestEventCountOrderByAggregateInput
    _max?: RequestEventMaxOrderByAggregateInput
    _min?: RequestEventMinOrderByAggregateInput
  }

  export type RequestEventScalarWhereWithAggregatesInput = {
    AND?: RequestEventScalarWhereWithAggregatesInput | RequestEventScalarWhereWithAggregatesInput[]
    OR?: RequestEventScalarWhereWithAggregatesInput[]
    NOT?: RequestEventScalarWhereWithAggregatesInput | RequestEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RequestEvent"> | string
    requestId?: StringWithAggregatesFilter<"RequestEvent"> | string
    eventType?: StringWithAggregatesFilter<"RequestEvent"> | string
    oldValue?: StringNullableWithAggregatesFilter<"RequestEvent"> | string | null
    newValue?: StringNullableWithAggregatesFilter<"RequestEvent"> | string | null
    actorId?: StringNullableWithAggregatesFilter<"RequestEvent"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"RequestEvent">
    createdAt?: DateTimeWithAggregatesFilter<"RequestEvent"> | Date | string
  }

  export type InternalNoteWhereInput = {
    AND?: InternalNoteWhereInput | InternalNoteWhereInput[]
    OR?: InternalNoteWhereInput[]
    NOT?: InternalNoteWhereInput | InternalNoteWhereInput[]
    id?: StringFilter<"InternalNote"> | string
    requestId?: StringFilter<"InternalNote"> | string
    authorId?: StringFilter<"InternalNote"> | string
    body?: StringFilter<"InternalNote"> | string
    createdAt?: DateTimeFilter<"InternalNote"> | Date | string
    request?: XOR<CustomerRequestScalarRelationFilter, CustomerRequestWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type InternalNoteOrderByWithRelationInput = {
    id?: SortOrder
    requestId?: SortOrder
    authorId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    request?: CustomerRequestOrderByWithRelationInput
    author?: UserOrderByWithRelationInput
  }

  export type InternalNoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InternalNoteWhereInput | InternalNoteWhereInput[]
    OR?: InternalNoteWhereInput[]
    NOT?: InternalNoteWhereInput | InternalNoteWhereInput[]
    requestId?: StringFilter<"InternalNote"> | string
    authorId?: StringFilter<"InternalNote"> | string
    body?: StringFilter<"InternalNote"> | string
    createdAt?: DateTimeFilter<"InternalNote"> | Date | string
    request?: XOR<CustomerRequestScalarRelationFilter, CustomerRequestWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type InternalNoteOrderByWithAggregationInput = {
    id?: SortOrder
    requestId?: SortOrder
    authorId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    _count?: InternalNoteCountOrderByAggregateInput
    _max?: InternalNoteMaxOrderByAggregateInput
    _min?: InternalNoteMinOrderByAggregateInput
  }

  export type InternalNoteScalarWhereWithAggregatesInput = {
    AND?: InternalNoteScalarWhereWithAggregatesInput | InternalNoteScalarWhereWithAggregatesInput[]
    OR?: InternalNoteScalarWhereWithAggregatesInput[]
    NOT?: InternalNoteScalarWhereWithAggregatesInput | InternalNoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InternalNote"> | string
    requestId?: StringWithAggregatesFilter<"InternalNote"> | string
    authorId?: StringWithAggregatesFilter<"InternalNote"> | string
    body?: StringWithAggregatesFilter<"InternalNote"> | string
    createdAt?: DateTimeWithAggregatesFilter<"InternalNote"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    notes?: InternalNoteCreateNestedManyWithoutAuthorInput
    events?: RequestEventCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    notes?: InternalNoteUncheckedCreateNestedManyWithoutAuthorInput
    events?: RequestEventUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: InternalNoteUpdateManyWithoutAuthorNestedInput
    events?: RequestEventUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: InternalNoteUncheckedUpdateManyWithoutAuthorNestedInput
    events?: RequestEventUncheckedUpdateManyWithoutActorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerRequestCreateInput = {
    id?: string
    message: string
    sourceChannel?: string
    customerName?: string | null
    customerEmail?: string | null
    status?: $Enums.RequestStatus
    categorySnapshot?: $Enums.Category | null
    prioritySnapshot?: $Enums.Priority | null
    idempotencyKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    classification?: AiClassificationCreateNestedOneWithoutRequestInput
    notes?: InternalNoteCreateNestedManyWithoutRequestInput
    events?: RequestEventCreateNestedManyWithoutRequestInput
  }

  export type CustomerRequestUncheckedCreateInput = {
    id?: string
    message: string
    sourceChannel?: string
    customerName?: string | null
    customerEmail?: string | null
    status?: $Enums.RequestStatus
    categorySnapshot?: $Enums.Category | null
    prioritySnapshot?: $Enums.Priority | null
    idempotencyKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    classification?: AiClassificationUncheckedCreateNestedOneWithoutRequestInput
    notes?: InternalNoteUncheckedCreateNestedManyWithoutRequestInput
    events?: RequestEventUncheckedCreateNestedManyWithoutRequestInput
  }

  export type CustomerRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sourceChannel?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    categorySnapshot?: NullableEnumCategoryFieldUpdateOperationsInput | $Enums.Category | null
    prioritySnapshot?: NullableEnumPriorityFieldUpdateOperationsInput | $Enums.Priority | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classification?: AiClassificationUpdateOneWithoutRequestNestedInput
    notes?: InternalNoteUpdateManyWithoutRequestNestedInput
    events?: RequestEventUpdateManyWithoutRequestNestedInput
  }

  export type CustomerRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sourceChannel?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    categorySnapshot?: NullableEnumCategoryFieldUpdateOperationsInput | $Enums.Category | null
    prioritySnapshot?: NullableEnumPriorityFieldUpdateOperationsInput | $Enums.Priority | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classification?: AiClassificationUncheckedUpdateOneWithoutRequestNestedInput
    notes?: InternalNoteUncheckedUpdateManyWithoutRequestNestedInput
    events?: RequestEventUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type CustomerRequestCreateManyInput = {
    id?: string
    message: string
    sourceChannel?: string
    customerName?: string | null
    customerEmail?: string | null
    status?: $Enums.RequestStatus
    categorySnapshot?: $Enums.Category | null
    prioritySnapshot?: $Enums.Priority | null
    idempotencyKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sourceChannel?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    categorySnapshot?: NullableEnumCategoryFieldUpdateOperationsInput | $Enums.Category | null
    prioritySnapshot?: NullableEnumPriorityFieldUpdateOperationsInput | $Enums.Priority | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sourceChannel?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    categorySnapshot?: NullableEnumCategoryFieldUpdateOperationsInput | $Enums.Category | null
    prioritySnapshot?: NullableEnumPriorityFieldUpdateOperationsInput | $Enums.Priority | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiClassificationCreateInput = {
    id?: string
    provider?: string
    category?: $Enums.Category | null
    priority?: $Enums.Priority | null
    summary?: string | null
    confidence?: number | null
    reason?: string | null
    rawOutput?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    createdAt?: Date | string
    request: CustomerRequestCreateNestedOneWithoutClassificationInput
  }

  export type AiClassificationUncheckedCreateInput = {
    id?: string
    requestId: string
    provider?: string
    category?: $Enums.Category | null
    priority?: $Enums.Priority | null
    summary?: string | null
    confidence?: number | null
    reason?: string | null
    rawOutput?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    createdAt?: Date | string
  }

  export type AiClassificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    category?: NullableEnumCategoryFieldUpdateOperationsInput | $Enums.Category | null
    priority?: NullableEnumPriorityFieldUpdateOperationsInput | $Enums.Priority | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    rawOutput?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: CustomerRequestUpdateOneRequiredWithoutClassificationNestedInput
  }

  export type AiClassificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    category?: NullableEnumCategoryFieldUpdateOperationsInput | $Enums.Category | null
    priority?: NullableEnumPriorityFieldUpdateOperationsInput | $Enums.Priority | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    rawOutput?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiClassificationCreateManyInput = {
    id?: string
    requestId: string
    provider?: string
    category?: $Enums.Category | null
    priority?: $Enums.Priority | null
    summary?: string | null
    confidence?: number | null
    reason?: string | null
    rawOutput?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    createdAt?: Date | string
  }

  export type AiClassificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    category?: NullableEnumCategoryFieldUpdateOperationsInput | $Enums.Category | null
    priority?: NullableEnumPriorityFieldUpdateOperationsInput | $Enums.Priority | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    rawOutput?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiClassificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    category?: NullableEnumCategoryFieldUpdateOperationsInput | $Enums.Category | null
    priority?: NullableEnumPriorityFieldUpdateOperationsInput | $Enums.Priority | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    rawOutput?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestEventCreateInput = {
    id?: string
    eventType: string
    oldValue?: string | null
    newValue?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    request: CustomerRequestCreateNestedOneWithoutEventsInput
    actor?: UserCreateNestedOneWithoutEventsInput
  }

  export type RequestEventUncheckedCreateInput = {
    id?: string
    requestId: string
    eventType: string
    oldValue?: string | null
    newValue?: string | null
    actorId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type RequestEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: CustomerRequestUpdateOneRequiredWithoutEventsNestedInput
    actor?: UserUpdateOneWithoutEventsNestedInput
  }

  export type RequestEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestEventCreateManyInput = {
    id?: string
    requestId: string
    eventType: string
    oldValue?: string | null
    newValue?: string | null
    actorId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type RequestEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InternalNoteCreateInput = {
    id?: string
    body: string
    createdAt?: Date | string
    request: CustomerRequestCreateNestedOneWithoutNotesInput
    author: UserCreateNestedOneWithoutNotesInput
  }

  export type InternalNoteUncheckedCreateInput = {
    id?: string
    requestId: string
    authorId: string
    body: string
    createdAt?: Date | string
  }

  export type InternalNoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: CustomerRequestUpdateOneRequiredWithoutNotesNestedInput
    author?: UserUpdateOneRequiredWithoutNotesNestedInput
  }

  export type InternalNoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InternalNoteCreateManyInput = {
    id?: string
    requestId: string
    authorId: string
    body: string
    createdAt?: Date | string
  }

  export type InternalNoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InternalNoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type InternalNoteListRelationFilter = {
    every?: InternalNoteWhereInput
    some?: InternalNoteWhereInput
    none?: InternalNoteWhereInput
  }

  export type RequestEventListRelationFilter = {
    every?: RequestEventWhereInput
    some?: RequestEventWhereInput
    none?: RequestEventWhereInput
  }

  export type InternalNoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RequestEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type EnumCategoryNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCategoryNullableFilter<$PrismaModel> | $Enums.Category | null
  }

  export type EnumPriorityNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel> | null
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPriorityNullableFilter<$PrismaModel> | $Enums.Priority | null
  }

  export type AiClassificationNullableScalarRelationFilter = {
    is?: AiClassificationWhereInput | null
    isNot?: AiClassificationWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CustomerRequestCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    sourceChannel?: SortOrder
    customerName?: SortOrder
    customerEmail?: SortOrder
    status?: SortOrder
    categorySnapshot?: SortOrder
    prioritySnapshot?: SortOrder
    idempotencyKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    sourceChannel?: SortOrder
    customerName?: SortOrder
    customerEmail?: SortOrder
    status?: SortOrder
    categorySnapshot?: SortOrder
    prioritySnapshot?: SortOrder
    idempotencyKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerRequestMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    sourceChannel?: SortOrder
    customerName?: SortOrder
    customerEmail?: SortOrder
    status?: SortOrder
    categorySnapshot?: SortOrder
    prioritySnapshot?: SortOrder
    idempotencyKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type EnumCategoryNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCategoryNullableWithAggregatesFilter<$PrismaModel> | $Enums.Category | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCategoryNullableFilter<$PrismaModel>
    _max?: NestedEnumCategoryNullableFilter<$PrismaModel>
  }

  export type EnumPriorityNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel> | null
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPriorityNullableWithAggregatesFilter<$PrismaModel> | $Enums.Priority | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPriorityNullableFilter<$PrismaModel>
    _max?: NestedEnumPriorityNullableFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type CustomerRequestScalarRelationFilter = {
    is?: CustomerRequestWhereInput
    isNot?: CustomerRequestWhereInput
  }

  export type AiClassificationCountOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    provider?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    summary?: SortOrder
    confidence?: SortOrder
    reason?: SortOrder
    rawOutput?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
  }

  export type AiClassificationAvgOrderByAggregateInput = {
    confidence?: SortOrder
  }

  export type AiClassificationMaxOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    provider?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    summary?: SortOrder
    confidence?: SortOrder
    reason?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
  }

  export type AiClassificationMinOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    provider?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    summary?: SortOrder
    confidence?: SortOrder
    reason?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
  }

  export type AiClassificationSumOrderByAggregateInput = {
    confidence?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type RequestEventCountOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    eventType?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    actorId?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type RequestEventMaxOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    eventType?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    actorId?: SortOrder
    createdAt?: SortOrder
  }

  export type RequestEventMinOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    eventType?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    actorId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type InternalNoteCountOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    authorId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
  }

  export type InternalNoteMaxOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    authorId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
  }

  export type InternalNoteMinOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    authorId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
  }

  export type InternalNoteCreateNestedManyWithoutAuthorInput = {
    create?: XOR<InternalNoteCreateWithoutAuthorInput, InternalNoteUncheckedCreateWithoutAuthorInput> | InternalNoteCreateWithoutAuthorInput[] | InternalNoteUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: InternalNoteCreateOrConnectWithoutAuthorInput | InternalNoteCreateOrConnectWithoutAuthorInput[]
    createMany?: InternalNoteCreateManyAuthorInputEnvelope
    connect?: InternalNoteWhereUniqueInput | InternalNoteWhereUniqueInput[]
  }

  export type RequestEventCreateNestedManyWithoutActorInput = {
    create?: XOR<RequestEventCreateWithoutActorInput, RequestEventUncheckedCreateWithoutActorInput> | RequestEventCreateWithoutActorInput[] | RequestEventUncheckedCreateWithoutActorInput[]
    connectOrCreate?: RequestEventCreateOrConnectWithoutActorInput | RequestEventCreateOrConnectWithoutActorInput[]
    createMany?: RequestEventCreateManyActorInputEnvelope
    connect?: RequestEventWhereUniqueInput | RequestEventWhereUniqueInput[]
  }

  export type InternalNoteUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<InternalNoteCreateWithoutAuthorInput, InternalNoteUncheckedCreateWithoutAuthorInput> | InternalNoteCreateWithoutAuthorInput[] | InternalNoteUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: InternalNoteCreateOrConnectWithoutAuthorInput | InternalNoteCreateOrConnectWithoutAuthorInput[]
    createMany?: InternalNoteCreateManyAuthorInputEnvelope
    connect?: InternalNoteWhereUniqueInput | InternalNoteWhereUniqueInput[]
  }

  export type RequestEventUncheckedCreateNestedManyWithoutActorInput = {
    create?: XOR<RequestEventCreateWithoutActorInput, RequestEventUncheckedCreateWithoutActorInput> | RequestEventCreateWithoutActorInput[] | RequestEventUncheckedCreateWithoutActorInput[]
    connectOrCreate?: RequestEventCreateOrConnectWithoutActorInput | RequestEventCreateOrConnectWithoutActorInput[]
    createMany?: RequestEventCreateManyActorInputEnvelope
    connect?: RequestEventWhereUniqueInput | RequestEventWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type InternalNoteUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<InternalNoteCreateWithoutAuthorInput, InternalNoteUncheckedCreateWithoutAuthorInput> | InternalNoteCreateWithoutAuthorInput[] | InternalNoteUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: InternalNoteCreateOrConnectWithoutAuthorInput | InternalNoteCreateOrConnectWithoutAuthorInput[]
    upsert?: InternalNoteUpsertWithWhereUniqueWithoutAuthorInput | InternalNoteUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: InternalNoteCreateManyAuthorInputEnvelope
    set?: InternalNoteWhereUniqueInput | InternalNoteWhereUniqueInput[]
    disconnect?: InternalNoteWhereUniqueInput | InternalNoteWhereUniqueInput[]
    delete?: InternalNoteWhereUniqueInput | InternalNoteWhereUniqueInput[]
    connect?: InternalNoteWhereUniqueInput | InternalNoteWhereUniqueInput[]
    update?: InternalNoteUpdateWithWhereUniqueWithoutAuthorInput | InternalNoteUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: InternalNoteUpdateManyWithWhereWithoutAuthorInput | InternalNoteUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: InternalNoteScalarWhereInput | InternalNoteScalarWhereInput[]
  }

  export type RequestEventUpdateManyWithoutActorNestedInput = {
    create?: XOR<RequestEventCreateWithoutActorInput, RequestEventUncheckedCreateWithoutActorInput> | RequestEventCreateWithoutActorInput[] | RequestEventUncheckedCreateWithoutActorInput[]
    connectOrCreate?: RequestEventCreateOrConnectWithoutActorInput | RequestEventCreateOrConnectWithoutActorInput[]
    upsert?: RequestEventUpsertWithWhereUniqueWithoutActorInput | RequestEventUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: RequestEventCreateManyActorInputEnvelope
    set?: RequestEventWhereUniqueInput | RequestEventWhereUniqueInput[]
    disconnect?: RequestEventWhereUniqueInput | RequestEventWhereUniqueInput[]
    delete?: RequestEventWhereUniqueInput | RequestEventWhereUniqueInput[]
    connect?: RequestEventWhereUniqueInput | RequestEventWhereUniqueInput[]
    update?: RequestEventUpdateWithWhereUniqueWithoutActorInput | RequestEventUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: RequestEventUpdateManyWithWhereWithoutActorInput | RequestEventUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: RequestEventScalarWhereInput | RequestEventScalarWhereInput[]
  }

  export type InternalNoteUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<InternalNoteCreateWithoutAuthorInput, InternalNoteUncheckedCreateWithoutAuthorInput> | InternalNoteCreateWithoutAuthorInput[] | InternalNoteUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: InternalNoteCreateOrConnectWithoutAuthorInput | InternalNoteCreateOrConnectWithoutAuthorInput[]
    upsert?: InternalNoteUpsertWithWhereUniqueWithoutAuthorInput | InternalNoteUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: InternalNoteCreateManyAuthorInputEnvelope
    set?: InternalNoteWhereUniqueInput | InternalNoteWhereUniqueInput[]
    disconnect?: InternalNoteWhereUniqueInput | InternalNoteWhereUniqueInput[]
    delete?: InternalNoteWhereUniqueInput | InternalNoteWhereUniqueInput[]
    connect?: InternalNoteWhereUniqueInput | InternalNoteWhereUniqueInput[]
    update?: InternalNoteUpdateWithWhereUniqueWithoutAuthorInput | InternalNoteUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: InternalNoteUpdateManyWithWhereWithoutAuthorInput | InternalNoteUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: InternalNoteScalarWhereInput | InternalNoteScalarWhereInput[]
  }

  export type RequestEventUncheckedUpdateManyWithoutActorNestedInput = {
    create?: XOR<RequestEventCreateWithoutActorInput, RequestEventUncheckedCreateWithoutActorInput> | RequestEventCreateWithoutActorInput[] | RequestEventUncheckedCreateWithoutActorInput[]
    connectOrCreate?: RequestEventCreateOrConnectWithoutActorInput | RequestEventCreateOrConnectWithoutActorInput[]
    upsert?: RequestEventUpsertWithWhereUniqueWithoutActorInput | RequestEventUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: RequestEventCreateManyActorInputEnvelope
    set?: RequestEventWhereUniqueInput | RequestEventWhereUniqueInput[]
    disconnect?: RequestEventWhereUniqueInput | RequestEventWhereUniqueInput[]
    delete?: RequestEventWhereUniqueInput | RequestEventWhereUniqueInput[]
    connect?: RequestEventWhereUniqueInput | RequestEventWhereUniqueInput[]
    update?: RequestEventUpdateWithWhereUniqueWithoutActorInput | RequestEventUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: RequestEventUpdateManyWithWhereWithoutActorInput | RequestEventUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: RequestEventScalarWhereInput | RequestEventScalarWhereInput[]
  }

  export type AiClassificationCreateNestedOneWithoutRequestInput = {
    create?: XOR<AiClassificationCreateWithoutRequestInput, AiClassificationUncheckedCreateWithoutRequestInput>
    connectOrCreate?: AiClassificationCreateOrConnectWithoutRequestInput
    connect?: AiClassificationWhereUniqueInput
  }

  export type InternalNoteCreateNestedManyWithoutRequestInput = {
    create?: XOR<InternalNoteCreateWithoutRequestInput, InternalNoteUncheckedCreateWithoutRequestInput> | InternalNoteCreateWithoutRequestInput[] | InternalNoteUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: InternalNoteCreateOrConnectWithoutRequestInput | InternalNoteCreateOrConnectWithoutRequestInput[]
    createMany?: InternalNoteCreateManyRequestInputEnvelope
    connect?: InternalNoteWhereUniqueInput | InternalNoteWhereUniqueInput[]
  }

  export type RequestEventCreateNestedManyWithoutRequestInput = {
    create?: XOR<RequestEventCreateWithoutRequestInput, RequestEventUncheckedCreateWithoutRequestInput> | RequestEventCreateWithoutRequestInput[] | RequestEventUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: RequestEventCreateOrConnectWithoutRequestInput | RequestEventCreateOrConnectWithoutRequestInput[]
    createMany?: RequestEventCreateManyRequestInputEnvelope
    connect?: RequestEventWhereUniqueInput | RequestEventWhereUniqueInput[]
  }

  export type AiClassificationUncheckedCreateNestedOneWithoutRequestInput = {
    create?: XOR<AiClassificationCreateWithoutRequestInput, AiClassificationUncheckedCreateWithoutRequestInput>
    connectOrCreate?: AiClassificationCreateOrConnectWithoutRequestInput
    connect?: AiClassificationWhereUniqueInput
  }

  export type InternalNoteUncheckedCreateNestedManyWithoutRequestInput = {
    create?: XOR<InternalNoteCreateWithoutRequestInput, InternalNoteUncheckedCreateWithoutRequestInput> | InternalNoteCreateWithoutRequestInput[] | InternalNoteUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: InternalNoteCreateOrConnectWithoutRequestInput | InternalNoteCreateOrConnectWithoutRequestInput[]
    createMany?: InternalNoteCreateManyRequestInputEnvelope
    connect?: InternalNoteWhereUniqueInput | InternalNoteWhereUniqueInput[]
  }

  export type RequestEventUncheckedCreateNestedManyWithoutRequestInput = {
    create?: XOR<RequestEventCreateWithoutRequestInput, RequestEventUncheckedCreateWithoutRequestInput> | RequestEventCreateWithoutRequestInput[] | RequestEventUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: RequestEventCreateOrConnectWithoutRequestInput | RequestEventCreateOrConnectWithoutRequestInput[]
    createMany?: RequestEventCreateManyRequestInputEnvelope
    connect?: RequestEventWhereUniqueInput | RequestEventWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.RequestStatus
  }

  export type NullableEnumCategoryFieldUpdateOperationsInput = {
    set?: $Enums.Category | null
  }

  export type NullableEnumPriorityFieldUpdateOperationsInput = {
    set?: $Enums.Priority | null
  }

  export type AiClassificationUpdateOneWithoutRequestNestedInput = {
    create?: XOR<AiClassificationCreateWithoutRequestInput, AiClassificationUncheckedCreateWithoutRequestInput>
    connectOrCreate?: AiClassificationCreateOrConnectWithoutRequestInput
    upsert?: AiClassificationUpsertWithoutRequestInput
    disconnect?: AiClassificationWhereInput | boolean
    delete?: AiClassificationWhereInput | boolean
    connect?: AiClassificationWhereUniqueInput
    update?: XOR<XOR<AiClassificationUpdateToOneWithWhereWithoutRequestInput, AiClassificationUpdateWithoutRequestInput>, AiClassificationUncheckedUpdateWithoutRequestInput>
  }

  export type InternalNoteUpdateManyWithoutRequestNestedInput = {
    create?: XOR<InternalNoteCreateWithoutRequestInput, InternalNoteUncheckedCreateWithoutRequestInput> | InternalNoteCreateWithoutRequestInput[] | InternalNoteUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: InternalNoteCreateOrConnectWithoutRequestInput | InternalNoteCreateOrConnectWithoutRequestInput[]
    upsert?: InternalNoteUpsertWithWhereUniqueWithoutRequestInput | InternalNoteUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: InternalNoteCreateManyRequestInputEnvelope
    set?: InternalNoteWhereUniqueInput | InternalNoteWhereUniqueInput[]
    disconnect?: InternalNoteWhereUniqueInput | InternalNoteWhereUniqueInput[]
    delete?: InternalNoteWhereUniqueInput | InternalNoteWhereUniqueInput[]
    connect?: InternalNoteWhereUniqueInput | InternalNoteWhereUniqueInput[]
    update?: InternalNoteUpdateWithWhereUniqueWithoutRequestInput | InternalNoteUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: InternalNoteUpdateManyWithWhereWithoutRequestInput | InternalNoteUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: InternalNoteScalarWhereInput | InternalNoteScalarWhereInput[]
  }

  export type RequestEventUpdateManyWithoutRequestNestedInput = {
    create?: XOR<RequestEventCreateWithoutRequestInput, RequestEventUncheckedCreateWithoutRequestInput> | RequestEventCreateWithoutRequestInput[] | RequestEventUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: RequestEventCreateOrConnectWithoutRequestInput | RequestEventCreateOrConnectWithoutRequestInput[]
    upsert?: RequestEventUpsertWithWhereUniqueWithoutRequestInput | RequestEventUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: RequestEventCreateManyRequestInputEnvelope
    set?: RequestEventWhereUniqueInput | RequestEventWhereUniqueInput[]
    disconnect?: RequestEventWhereUniqueInput | RequestEventWhereUniqueInput[]
    delete?: RequestEventWhereUniqueInput | RequestEventWhereUniqueInput[]
    connect?: RequestEventWhereUniqueInput | RequestEventWhereUniqueInput[]
    update?: RequestEventUpdateWithWhereUniqueWithoutRequestInput | RequestEventUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: RequestEventUpdateManyWithWhereWithoutRequestInput | RequestEventUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: RequestEventScalarWhereInput | RequestEventScalarWhereInput[]
  }

  export type AiClassificationUncheckedUpdateOneWithoutRequestNestedInput = {
    create?: XOR<AiClassificationCreateWithoutRequestInput, AiClassificationUncheckedCreateWithoutRequestInput>
    connectOrCreate?: AiClassificationCreateOrConnectWithoutRequestInput
    upsert?: AiClassificationUpsertWithoutRequestInput
    disconnect?: AiClassificationWhereInput | boolean
    delete?: AiClassificationWhereInput | boolean
    connect?: AiClassificationWhereUniqueInput
    update?: XOR<XOR<AiClassificationUpdateToOneWithWhereWithoutRequestInput, AiClassificationUpdateWithoutRequestInput>, AiClassificationUncheckedUpdateWithoutRequestInput>
  }

  export type InternalNoteUncheckedUpdateManyWithoutRequestNestedInput = {
    create?: XOR<InternalNoteCreateWithoutRequestInput, InternalNoteUncheckedCreateWithoutRequestInput> | InternalNoteCreateWithoutRequestInput[] | InternalNoteUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: InternalNoteCreateOrConnectWithoutRequestInput | InternalNoteCreateOrConnectWithoutRequestInput[]
    upsert?: InternalNoteUpsertWithWhereUniqueWithoutRequestInput | InternalNoteUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: InternalNoteCreateManyRequestInputEnvelope
    set?: InternalNoteWhereUniqueInput | InternalNoteWhereUniqueInput[]
    disconnect?: InternalNoteWhereUniqueInput | InternalNoteWhereUniqueInput[]
    delete?: InternalNoteWhereUniqueInput | InternalNoteWhereUniqueInput[]
    connect?: InternalNoteWhereUniqueInput | InternalNoteWhereUniqueInput[]
    update?: InternalNoteUpdateWithWhereUniqueWithoutRequestInput | InternalNoteUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: InternalNoteUpdateManyWithWhereWithoutRequestInput | InternalNoteUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: InternalNoteScalarWhereInput | InternalNoteScalarWhereInput[]
  }

  export type RequestEventUncheckedUpdateManyWithoutRequestNestedInput = {
    create?: XOR<RequestEventCreateWithoutRequestInput, RequestEventUncheckedCreateWithoutRequestInput> | RequestEventCreateWithoutRequestInput[] | RequestEventUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: RequestEventCreateOrConnectWithoutRequestInput | RequestEventCreateOrConnectWithoutRequestInput[]
    upsert?: RequestEventUpsertWithWhereUniqueWithoutRequestInput | RequestEventUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: RequestEventCreateManyRequestInputEnvelope
    set?: RequestEventWhereUniqueInput | RequestEventWhereUniqueInput[]
    disconnect?: RequestEventWhereUniqueInput | RequestEventWhereUniqueInput[]
    delete?: RequestEventWhereUniqueInput | RequestEventWhereUniqueInput[]
    connect?: RequestEventWhereUniqueInput | RequestEventWhereUniqueInput[]
    update?: RequestEventUpdateWithWhereUniqueWithoutRequestInput | RequestEventUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: RequestEventUpdateManyWithWhereWithoutRequestInput | RequestEventUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: RequestEventScalarWhereInput | RequestEventScalarWhereInput[]
  }

  export type CustomerRequestCreateNestedOneWithoutClassificationInput = {
    create?: XOR<CustomerRequestCreateWithoutClassificationInput, CustomerRequestUncheckedCreateWithoutClassificationInput>
    connectOrCreate?: CustomerRequestCreateOrConnectWithoutClassificationInput
    connect?: CustomerRequestWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CustomerRequestUpdateOneRequiredWithoutClassificationNestedInput = {
    create?: XOR<CustomerRequestCreateWithoutClassificationInput, CustomerRequestUncheckedCreateWithoutClassificationInput>
    connectOrCreate?: CustomerRequestCreateOrConnectWithoutClassificationInput
    upsert?: CustomerRequestUpsertWithoutClassificationInput
    connect?: CustomerRequestWhereUniqueInput
    update?: XOR<XOR<CustomerRequestUpdateToOneWithWhereWithoutClassificationInput, CustomerRequestUpdateWithoutClassificationInput>, CustomerRequestUncheckedUpdateWithoutClassificationInput>
  }

  export type CustomerRequestCreateNestedOneWithoutEventsInput = {
    create?: XOR<CustomerRequestCreateWithoutEventsInput, CustomerRequestUncheckedCreateWithoutEventsInput>
    connectOrCreate?: CustomerRequestCreateOrConnectWithoutEventsInput
    connect?: CustomerRequestWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutEventsInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput
    connect?: UserWhereUniqueInput
  }

  export type CustomerRequestUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<CustomerRequestCreateWithoutEventsInput, CustomerRequestUncheckedCreateWithoutEventsInput>
    connectOrCreate?: CustomerRequestCreateOrConnectWithoutEventsInput
    upsert?: CustomerRequestUpsertWithoutEventsInput
    connect?: CustomerRequestWhereUniqueInput
    update?: XOR<XOR<CustomerRequestUpdateToOneWithWhereWithoutEventsInput, CustomerRequestUpdateWithoutEventsInput>, CustomerRequestUncheckedUpdateWithoutEventsInput>
  }

  export type UserUpdateOneWithoutEventsNestedInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput
    upsert?: UserUpsertWithoutEventsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEventsInput, UserUpdateWithoutEventsInput>, UserUncheckedUpdateWithoutEventsInput>
  }

  export type CustomerRequestCreateNestedOneWithoutNotesInput = {
    create?: XOR<CustomerRequestCreateWithoutNotesInput, CustomerRequestUncheckedCreateWithoutNotesInput>
    connectOrCreate?: CustomerRequestCreateOrConnectWithoutNotesInput
    connect?: CustomerRequestWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutNotesInput = {
    create?: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotesInput
    connect?: UserWhereUniqueInput
  }

  export type CustomerRequestUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<CustomerRequestCreateWithoutNotesInput, CustomerRequestUncheckedCreateWithoutNotesInput>
    connectOrCreate?: CustomerRequestCreateOrConnectWithoutNotesInput
    upsert?: CustomerRequestUpsertWithoutNotesInput
    connect?: CustomerRequestWhereUniqueInput
    update?: XOR<XOR<CustomerRequestUpdateToOneWithWhereWithoutNotesInput, CustomerRequestUpdateWithoutNotesInput>, CustomerRequestUncheckedUpdateWithoutNotesInput>
  }

  export type UserUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotesInput
    upsert?: UserUpsertWithoutNotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotesInput, UserUpdateWithoutNotesInput>, UserUncheckedUpdateWithoutNotesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type NestedEnumCategoryNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCategoryNullableFilter<$PrismaModel> | $Enums.Category | null
  }

  export type NestedEnumPriorityNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel> | null
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPriorityNullableFilter<$PrismaModel> | $Enums.Priority | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type NestedEnumCategoryNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCategoryNullableWithAggregatesFilter<$PrismaModel> | $Enums.Category | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCategoryNullableFilter<$PrismaModel>
    _max?: NestedEnumCategoryNullableFilter<$PrismaModel>
  }

  export type NestedEnumPriorityNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel> | null
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPriorityNullableWithAggregatesFilter<$PrismaModel> | $Enums.Priority | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPriorityNullableFilter<$PrismaModel>
    _max?: NestedEnumPriorityNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type InternalNoteCreateWithoutAuthorInput = {
    id?: string
    body: string
    createdAt?: Date | string
    request: CustomerRequestCreateNestedOneWithoutNotesInput
  }

  export type InternalNoteUncheckedCreateWithoutAuthorInput = {
    id?: string
    requestId: string
    body: string
    createdAt?: Date | string
  }

  export type InternalNoteCreateOrConnectWithoutAuthorInput = {
    where: InternalNoteWhereUniqueInput
    create: XOR<InternalNoteCreateWithoutAuthorInput, InternalNoteUncheckedCreateWithoutAuthorInput>
  }

  export type InternalNoteCreateManyAuthorInputEnvelope = {
    data: InternalNoteCreateManyAuthorInput | InternalNoteCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type RequestEventCreateWithoutActorInput = {
    id?: string
    eventType: string
    oldValue?: string | null
    newValue?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    request: CustomerRequestCreateNestedOneWithoutEventsInput
  }

  export type RequestEventUncheckedCreateWithoutActorInput = {
    id?: string
    requestId: string
    eventType: string
    oldValue?: string | null
    newValue?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type RequestEventCreateOrConnectWithoutActorInput = {
    where: RequestEventWhereUniqueInput
    create: XOR<RequestEventCreateWithoutActorInput, RequestEventUncheckedCreateWithoutActorInput>
  }

  export type RequestEventCreateManyActorInputEnvelope = {
    data: RequestEventCreateManyActorInput | RequestEventCreateManyActorInput[]
    skipDuplicates?: boolean
  }

  export type InternalNoteUpsertWithWhereUniqueWithoutAuthorInput = {
    where: InternalNoteWhereUniqueInput
    update: XOR<InternalNoteUpdateWithoutAuthorInput, InternalNoteUncheckedUpdateWithoutAuthorInput>
    create: XOR<InternalNoteCreateWithoutAuthorInput, InternalNoteUncheckedCreateWithoutAuthorInput>
  }

  export type InternalNoteUpdateWithWhereUniqueWithoutAuthorInput = {
    where: InternalNoteWhereUniqueInput
    data: XOR<InternalNoteUpdateWithoutAuthorInput, InternalNoteUncheckedUpdateWithoutAuthorInput>
  }

  export type InternalNoteUpdateManyWithWhereWithoutAuthorInput = {
    where: InternalNoteScalarWhereInput
    data: XOR<InternalNoteUpdateManyMutationInput, InternalNoteUncheckedUpdateManyWithoutAuthorInput>
  }

  export type InternalNoteScalarWhereInput = {
    AND?: InternalNoteScalarWhereInput | InternalNoteScalarWhereInput[]
    OR?: InternalNoteScalarWhereInput[]
    NOT?: InternalNoteScalarWhereInput | InternalNoteScalarWhereInput[]
    id?: StringFilter<"InternalNote"> | string
    requestId?: StringFilter<"InternalNote"> | string
    authorId?: StringFilter<"InternalNote"> | string
    body?: StringFilter<"InternalNote"> | string
    createdAt?: DateTimeFilter<"InternalNote"> | Date | string
  }

  export type RequestEventUpsertWithWhereUniqueWithoutActorInput = {
    where: RequestEventWhereUniqueInput
    update: XOR<RequestEventUpdateWithoutActorInput, RequestEventUncheckedUpdateWithoutActorInput>
    create: XOR<RequestEventCreateWithoutActorInput, RequestEventUncheckedCreateWithoutActorInput>
  }

  export type RequestEventUpdateWithWhereUniqueWithoutActorInput = {
    where: RequestEventWhereUniqueInput
    data: XOR<RequestEventUpdateWithoutActorInput, RequestEventUncheckedUpdateWithoutActorInput>
  }

  export type RequestEventUpdateManyWithWhereWithoutActorInput = {
    where: RequestEventScalarWhereInput
    data: XOR<RequestEventUpdateManyMutationInput, RequestEventUncheckedUpdateManyWithoutActorInput>
  }

  export type RequestEventScalarWhereInput = {
    AND?: RequestEventScalarWhereInput | RequestEventScalarWhereInput[]
    OR?: RequestEventScalarWhereInput[]
    NOT?: RequestEventScalarWhereInput | RequestEventScalarWhereInput[]
    id?: StringFilter<"RequestEvent"> | string
    requestId?: StringFilter<"RequestEvent"> | string
    eventType?: StringFilter<"RequestEvent"> | string
    oldValue?: StringNullableFilter<"RequestEvent"> | string | null
    newValue?: StringNullableFilter<"RequestEvent"> | string | null
    actorId?: StringNullableFilter<"RequestEvent"> | string | null
    metadata?: JsonNullableFilter<"RequestEvent">
    createdAt?: DateTimeFilter<"RequestEvent"> | Date | string
  }

  export type AiClassificationCreateWithoutRequestInput = {
    id?: string
    provider?: string
    category?: $Enums.Category | null
    priority?: $Enums.Priority | null
    summary?: string | null
    confidence?: number | null
    reason?: string | null
    rawOutput?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    createdAt?: Date | string
  }

  export type AiClassificationUncheckedCreateWithoutRequestInput = {
    id?: string
    provider?: string
    category?: $Enums.Category | null
    priority?: $Enums.Priority | null
    summary?: string | null
    confidence?: number | null
    reason?: string | null
    rawOutput?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    createdAt?: Date | string
  }

  export type AiClassificationCreateOrConnectWithoutRequestInput = {
    where: AiClassificationWhereUniqueInput
    create: XOR<AiClassificationCreateWithoutRequestInput, AiClassificationUncheckedCreateWithoutRequestInput>
  }

  export type InternalNoteCreateWithoutRequestInput = {
    id?: string
    body: string
    createdAt?: Date | string
    author: UserCreateNestedOneWithoutNotesInput
  }

  export type InternalNoteUncheckedCreateWithoutRequestInput = {
    id?: string
    authorId: string
    body: string
    createdAt?: Date | string
  }

  export type InternalNoteCreateOrConnectWithoutRequestInput = {
    where: InternalNoteWhereUniqueInput
    create: XOR<InternalNoteCreateWithoutRequestInput, InternalNoteUncheckedCreateWithoutRequestInput>
  }

  export type InternalNoteCreateManyRequestInputEnvelope = {
    data: InternalNoteCreateManyRequestInput | InternalNoteCreateManyRequestInput[]
    skipDuplicates?: boolean
  }

  export type RequestEventCreateWithoutRequestInput = {
    id?: string
    eventType: string
    oldValue?: string | null
    newValue?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    actor?: UserCreateNestedOneWithoutEventsInput
  }

  export type RequestEventUncheckedCreateWithoutRequestInput = {
    id?: string
    eventType: string
    oldValue?: string | null
    newValue?: string | null
    actorId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type RequestEventCreateOrConnectWithoutRequestInput = {
    where: RequestEventWhereUniqueInput
    create: XOR<RequestEventCreateWithoutRequestInput, RequestEventUncheckedCreateWithoutRequestInput>
  }

  export type RequestEventCreateManyRequestInputEnvelope = {
    data: RequestEventCreateManyRequestInput | RequestEventCreateManyRequestInput[]
    skipDuplicates?: boolean
  }

  export type AiClassificationUpsertWithoutRequestInput = {
    update: XOR<AiClassificationUpdateWithoutRequestInput, AiClassificationUncheckedUpdateWithoutRequestInput>
    create: XOR<AiClassificationCreateWithoutRequestInput, AiClassificationUncheckedCreateWithoutRequestInput>
    where?: AiClassificationWhereInput
  }

  export type AiClassificationUpdateToOneWithWhereWithoutRequestInput = {
    where?: AiClassificationWhereInput
    data: XOR<AiClassificationUpdateWithoutRequestInput, AiClassificationUncheckedUpdateWithoutRequestInput>
  }

  export type AiClassificationUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    category?: NullableEnumCategoryFieldUpdateOperationsInput | $Enums.Category | null
    priority?: NullableEnumPriorityFieldUpdateOperationsInput | $Enums.Priority | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    rawOutput?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiClassificationUncheckedUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    category?: NullableEnumCategoryFieldUpdateOperationsInput | $Enums.Category | null
    priority?: NullableEnumPriorityFieldUpdateOperationsInput | $Enums.Priority | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    rawOutput?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InternalNoteUpsertWithWhereUniqueWithoutRequestInput = {
    where: InternalNoteWhereUniqueInput
    update: XOR<InternalNoteUpdateWithoutRequestInput, InternalNoteUncheckedUpdateWithoutRequestInput>
    create: XOR<InternalNoteCreateWithoutRequestInput, InternalNoteUncheckedCreateWithoutRequestInput>
  }

  export type InternalNoteUpdateWithWhereUniqueWithoutRequestInput = {
    where: InternalNoteWhereUniqueInput
    data: XOR<InternalNoteUpdateWithoutRequestInput, InternalNoteUncheckedUpdateWithoutRequestInput>
  }

  export type InternalNoteUpdateManyWithWhereWithoutRequestInput = {
    where: InternalNoteScalarWhereInput
    data: XOR<InternalNoteUpdateManyMutationInput, InternalNoteUncheckedUpdateManyWithoutRequestInput>
  }

  export type RequestEventUpsertWithWhereUniqueWithoutRequestInput = {
    where: RequestEventWhereUniqueInput
    update: XOR<RequestEventUpdateWithoutRequestInput, RequestEventUncheckedUpdateWithoutRequestInput>
    create: XOR<RequestEventCreateWithoutRequestInput, RequestEventUncheckedCreateWithoutRequestInput>
  }

  export type RequestEventUpdateWithWhereUniqueWithoutRequestInput = {
    where: RequestEventWhereUniqueInput
    data: XOR<RequestEventUpdateWithoutRequestInput, RequestEventUncheckedUpdateWithoutRequestInput>
  }

  export type RequestEventUpdateManyWithWhereWithoutRequestInput = {
    where: RequestEventScalarWhereInput
    data: XOR<RequestEventUpdateManyMutationInput, RequestEventUncheckedUpdateManyWithoutRequestInput>
  }

  export type CustomerRequestCreateWithoutClassificationInput = {
    id?: string
    message: string
    sourceChannel?: string
    customerName?: string | null
    customerEmail?: string | null
    status?: $Enums.RequestStatus
    categorySnapshot?: $Enums.Category | null
    prioritySnapshot?: $Enums.Priority | null
    idempotencyKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: InternalNoteCreateNestedManyWithoutRequestInput
    events?: RequestEventCreateNestedManyWithoutRequestInput
  }

  export type CustomerRequestUncheckedCreateWithoutClassificationInput = {
    id?: string
    message: string
    sourceChannel?: string
    customerName?: string | null
    customerEmail?: string | null
    status?: $Enums.RequestStatus
    categorySnapshot?: $Enums.Category | null
    prioritySnapshot?: $Enums.Priority | null
    idempotencyKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: InternalNoteUncheckedCreateNestedManyWithoutRequestInput
    events?: RequestEventUncheckedCreateNestedManyWithoutRequestInput
  }

  export type CustomerRequestCreateOrConnectWithoutClassificationInput = {
    where: CustomerRequestWhereUniqueInput
    create: XOR<CustomerRequestCreateWithoutClassificationInput, CustomerRequestUncheckedCreateWithoutClassificationInput>
  }

  export type CustomerRequestUpsertWithoutClassificationInput = {
    update: XOR<CustomerRequestUpdateWithoutClassificationInput, CustomerRequestUncheckedUpdateWithoutClassificationInput>
    create: XOR<CustomerRequestCreateWithoutClassificationInput, CustomerRequestUncheckedCreateWithoutClassificationInput>
    where?: CustomerRequestWhereInput
  }

  export type CustomerRequestUpdateToOneWithWhereWithoutClassificationInput = {
    where?: CustomerRequestWhereInput
    data: XOR<CustomerRequestUpdateWithoutClassificationInput, CustomerRequestUncheckedUpdateWithoutClassificationInput>
  }

  export type CustomerRequestUpdateWithoutClassificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sourceChannel?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    categorySnapshot?: NullableEnumCategoryFieldUpdateOperationsInput | $Enums.Category | null
    prioritySnapshot?: NullableEnumPriorityFieldUpdateOperationsInput | $Enums.Priority | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: InternalNoteUpdateManyWithoutRequestNestedInput
    events?: RequestEventUpdateManyWithoutRequestNestedInput
  }

  export type CustomerRequestUncheckedUpdateWithoutClassificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sourceChannel?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    categorySnapshot?: NullableEnumCategoryFieldUpdateOperationsInput | $Enums.Category | null
    prioritySnapshot?: NullableEnumPriorityFieldUpdateOperationsInput | $Enums.Priority | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: InternalNoteUncheckedUpdateManyWithoutRequestNestedInput
    events?: RequestEventUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type CustomerRequestCreateWithoutEventsInput = {
    id?: string
    message: string
    sourceChannel?: string
    customerName?: string | null
    customerEmail?: string | null
    status?: $Enums.RequestStatus
    categorySnapshot?: $Enums.Category | null
    prioritySnapshot?: $Enums.Priority | null
    idempotencyKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    classification?: AiClassificationCreateNestedOneWithoutRequestInput
    notes?: InternalNoteCreateNestedManyWithoutRequestInput
  }

  export type CustomerRequestUncheckedCreateWithoutEventsInput = {
    id?: string
    message: string
    sourceChannel?: string
    customerName?: string | null
    customerEmail?: string | null
    status?: $Enums.RequestStatus
    categorySnapshot?: $Enums.Category | null
    prioritySnapshot?: $Enums.Priority | null
    idempotencyKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    classification?: AiClassificationUncheckedCreateNestedOneWithoutRequestInput
    notes?: InternalNoteUncheckedCreateNestedManyWithoutRequestInput
  }

  export type CustomerRequestCreateOrConnectWithoutEventsInput = {
    where: CustomerRequestWhereUniqueInput
    create: XOR<CustomerRequestCreateWithoutEventsInput, CustomerRequestUncheckedCreateWithoutEventsInput>
  }

  export type UserCreateWithoutEventsInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    notes?: InternalNoteCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutEventsInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    notes?: InternalNoteUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
  }

  export type CustomerRequestUpsertWithoutEventsInput = {
    update: XOR<CustomerRequestUpdateWithoutEventsInput, CustomerRequestUncheckedUpdateWithoutEventsInput>
    create: XOR<CustomerRequestCreateWithoutEventsInput, CustomerRequestUncheckedCreateWithoutEventsInput>
    where?: CustomerRequestWhereInput
  }

  export type CustomerRequestUpdateToOneWithWhereWithoutEventsInput = {
    where?: CustomerRequestWhereInput
    data: XOR<CustomerRequestUpdateWithoutEventsInput, CustomerRequestUncheckedUpdateWithoutEventsInput>
  }

  export type CustomerRequestUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sourceChannel?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    categorySnapshot?: NullableEnumCategoryFieldUpdateOperationsInput | $Enums.Category | null
    prioritySnapshot?: NullableEnumPriorityFieldUpdateOperationsInput | $Enums.Priority | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classification?: AiClassificationUpdateOneWithoutRequestNestedInput
    notes?: InternalNoteUpdateManyWithoutRequestNestedInput
  }

  export type CustomerRequestUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sourceChannel?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    categorySnapshot?: NullableEnumCategoryFieldUpdateOperationsInput | $Enums.Category | null
    prioritySnapshot?: NullableEnumPriorityFieldUpdateOperationsInput | $Enums.Priority | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classification?: AiClassificationUncheckedUpdateOneWithoutRequestNestedInput
    notes?: InternalNoteUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type UserUpsertWithoutEventsInput = {
    update: XOR<UserUpdateWithoutEventsInput, UserUncheckedUpdateWithoutEventsInput>
    create: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEventsInput, UserUncheckedUpdateWithoutEventsInput>
  }

  export type UserUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: InternalNoteUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: InternalNoteUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type CustomerRequestCreateWithoutNotesInput = {
    id?: string
    message: string
    sourceChannel?: string
    customerName?: string | null
    customerEmail?: string | null
    status?: $Enums.RequestStatus
    categorySnapshot?: $Enums.Category | null
    prioritySnapshot?: $Enums.Priority | null
    idempotencyKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    classification?: AiClassificationCreateNestedOneWithoutRequestInput
    events?: RequestEventCreateNestedManyWithoutRequestInput
  }

  export type CustomerRequestUncheckedCreateWithoutNotesInput = {
    id?: string
    message: string
    sourceChannel?: string
    customerName?: string | null
    customerEmail?: string | null
    status?: $Enums.RequestStatus
    categorySnapshot?: $Enums.Category | null
    prioritySnapshot?: $Enums.Priority | null
    idempotencyKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    classification?: AiClassificationUncheckedCreateNestedOneWithoutRequestInput
    events?: RequestEventUncheckedCreateNestedManyWithoutRequestInput
  }

  export type CustomerRequestCreateOrConnectWithoutNotesInput = {
    where: CustomerRequestWhereUniqueInput
    create: XOR<CustomerRequestCreateWithoutNotesInput, CustomerRequestUncheckedCreateWithoutNotesInput>
  }

  export type UserCreateWithoutNotesInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    events?: RequestEventCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutNotesInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    createdAt?: Date | string
    events?: RequestEventUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutNotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
  }

  export type CustomerRequestUpsertWithoutNotesInput = {
    update: XOR<CustomerRequestUpdateWithoutNotesInput, CustomerRequestUncheckedUpdateWithoutNotesInput>
    create: XOR<CustomerRequestCreateWithoutNotesInput, CustomerRequestUncheckedCreateWithoutNotesInput>
    where?: CustomerRequestWhereInput
  }

  export type CustomerRequestUpdateToOneWithWhereWithoutNotesInput = {
    where?: CustomerRequestWhereInput
    data: XOR<CustomerRequestUpdateWithoutNotesInput, CustomerRequestUncheckedUpdateWithoutNotesInput>
  }

  export type CustomerRequestUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sourceChannel?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    categorySnapshot?: NullableEnumCategoryFieldUpdateOperationsInput | $Enums.Category | null
    prioritySnapshot?: NullableEnumPriorityFieldUpdateOperationsInput | $Enums.Priority | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classification?: AiClassificationUpdateOneWithoutRequestNestedInput
    events?: RequestEventUpdateManyWithoutRequestNestedInput
  }

  export type CustomerRequestUncheckedUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sourceChannel?: StringFieldUpdateOperationsInput | string
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    categorySnapshot?: NullableEnumCategoryFieldUpdateOperationsInput | $Enums.Category | null
    prioritySnapshot?: NullableEnumPriorityFieldUpdateOperationsInput | $Enums.Priority | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classification?: AiClassificationUncheckedUpdateOneWithoutRequestNestedInput
    events?: RequestEventUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type UserUpsertWithoutNotesInput = {
    update: XOR<UserUpdateWithoutNotesInput, UserUncheckedUpdateWithoutNotesInput>
    create: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotesInput, UserUncheckedUpdateWithoutNotesInput>
  }

  export type UserUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: RequestEventUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: RequestEventUncheckedUpdateManyWithoutActorNestedInput
  }

  export type InternalNoteCreateManyAuthorInput = {
    id?: string
    requestId: string
    body: string
    createdAt?: Date | string
  }

  export type RequestEventCreateManyActorInput = {
    id?: string
    requestId: string
    eventType: string
    oldValue?: string | null
    newValue?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type InternalNoteUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: CustomerRequestUpdateOneRequiredWithoutNotesNestedInput
  }

  export type InternalNoteUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InternalNoteUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestEventUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: CustomerRequestUpdateOneRequiredWithoutEventsNestedInput
  }

  export type RequestEventUncheckedUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestEventUncheckedUpdateManyWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InternalNoteCreateManyRequestInput = {
    id?: string
    authorId: string
    body: string
    createdAt?: Date | string
  }

  export type RequestEventCreateManyRequestInput = {
    id?: string
    eventType: string
    oldValue?: string | null
    newValue?: string | null
    actorId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type InternalNoteUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutNotesNestedInput
  }

  export type InternalNoteUncheckedUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InternalNoteUncheckedUpdateManyWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestEventUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actor?: UserUpdateOneWithoutEventsNestedInput
  }

  export type RequestEventUncheckedUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestEventUncheckedUpdateManyWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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