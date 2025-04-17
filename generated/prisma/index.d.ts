
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
 * Model Movie
 * 
 */
export type Movie = $Result.DefaultSelection<Prisma.$MoviePayload>
/**
 * Model Theater
 * 
 */
export type Theater = $Result.DefaultSelection<Prisma.$TheaterPayload>
/**
 * Model Showtime
 * 
 */
export type Showtime = $Result.DefaultSelection<Prisma.$ShowtimePayload>
/**
 * Model Seat
 * 
 */
export type Seat = $Result.DefaultSelection<Prisma.$SeatPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>

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
   * `prisma.movie`: Exposes CRUD operations for the **Movie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movies
    * const movies = await prisma.movie.findMany()
    * ```
    */
  get movie(): Prisma.MovieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.theater`: Exposes CRUD operations for the **Theater** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Theaters
    * const theaters = await prisma.theater.findMany()
    * ```
    */
  get theater(): Prisma.TheaterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.showtime`: Exposes CRUD operations for the **Showtime** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Showtimes
    * const showtimes = await prisma.showtime.findMany()
    * ```
    */
  get showtime(): Prisma.ShowtimeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seat`: Exposes CRUD operations for the **Seat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Seats
    * const seats = await prisma.seat.findMany()
    * ```
    */
  get seat(): Prisma.SeatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Movie: 'Movie',
    Theater: 'Theater',
    Showtime: 'Showtime',
    Seat: 'Seat',
    Booking: 'Booking'
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
      modelProps: "user" | "movie" | "theater" | "showtime" | "seat" | "booking"
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
      Movie: {
        payload: Prisma.$MoviePayload<ExtArgs>
        fields: Prisma.MovieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          findFirst: {
            args: Prisma.MovieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          findMany: {
            args: Prisma.MovieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>[]
          }
          create: {
            args: Prisma.MovieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          createMany: {
            args: Prisma.MovieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MovieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          update: {
            args: Prisma.MovieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          deleteMany: {
            args: Prisma.MovieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MovieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          aggregate: {
            args: Prisma.MovieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovie>
          }
          groupBy: {
            args: Prisma.MovieGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovieGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovieCountArgs<ExtArgs>
            result: $Utils.Optional<MovieCountAggregateOutputType> | number
          }
        }
      }
      Theater: {
        payload: Prisma.$TheaterPayload<ExtArgs>
        fields: Prisma.TheaterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TheaterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TheaterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TheaterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TheaterPayload>
          }
          findFirst: {
            args: Prisma.TheaterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TheaterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TheaterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TheaterPayload>
          }
          findMany: {
            args: Prisma.TheaterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TheaterPayload>[]
          }
          create: {
            args: Prisma.TheaterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TheaterPayload>
          }
          createMany: {
            args: Prisma.TheaterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TheaterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TheaterPayload>
          }
          update: {
            args: Prisma.TheaterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TheaterPayload>
          }
          deleteMany: {
            args: Prisma.TheaterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TheaterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TheaterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TheaterPayload>
          }
          aggregate: {
            args: Prisma.TheaterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTheater>
          }
          groupBy: {
            args: Prisma.TheaterGroupByArgs<ExtArgs>
            result: $Utils.Optional<TheaterGroupByOutputType>[]
          }
          count: {
            args: Prisma.TheaterCountArgs<ExtArgs>
            result: $Utils.Optional<TheaterCountAggregateOutputType> | number
          }
        }
      }
      Showtime: {
        payload: Prisma.$ShowtimePayload<ExtArgs>
        fields: Prisma.ShowtimeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShowtimeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowtimePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShowtimeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowtimePayload>
          }
          findFirst: {
            args: Prisma.ShowtimeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowtimePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShowtimeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowtimePayload>
          }
          findMany: {
            args: Prisma.ShowtimeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowtimePayload>[]
          }
          create: {
            args: Prisma.ShowtimeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowtimePayload>
          }
          createMany: {
            args: Prisma.ShowtimeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ShowtimeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowtimePayload>
          }
          update: {
            args: Prisma.ShowtimeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowtimePayload>
          }
          deleteMany: {
            args: Prisma.ShowtimeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShowtimeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ShowtimeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowtimePayload>
          }
          aggregate: {
            args: Prisma.ShowtimeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShowtime>
          }
          groupBy: {
            args: Prisma.ShowtimeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShowtimeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShowtimeCountArgs<ExtArgs>
            result: $Utils.Optional<ShowtimeCountAggregateOutputType> | number
          }
        }
      }
      Seat: {
        payload: Prisma.$SeatPayload<ExtArgs>
        fields: Prisma.SeatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          findFirst: {
            args: Prisma.SeatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          findMany: {
            args: Prisma.SeatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>[]
          }
          create: {
            args: Prisma.SeatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          createMany: {
            args: Prisma.SeatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SeatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          update: {
            args: Prisma.SeatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          deleteMany: {
            args: Prisma.SeatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SeatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          aggregate: {
            args: Prisma.SeatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeat>
          }
          groupBy: {
            args: Prisma.SeatGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeatGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeatCountArgs<ExtArgs>
            result: $Utils.Optional<SeatCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
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
    movie?: MovieOmit
    theater?: TheaterOmit
    showtime?: ShowtimeOmit
    seat?: SeatOmit
    booking?: BookingOmit
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
    bookings: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | UserCountOutputTypeCountBookingsArgs
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
  export type UserCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type MovieCountOutputType
   */

  export type MovieCountOutputType = {
    showtimes: number
  }

  export type MovieCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    showtimes?: boolean | MovieCountOutputTypeCountShowtimesArgs
  }

  // Custom InputTypes
  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCountOutputType
     */
    select?: MovieCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountShowtimesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShowtimeWhereInput
  }


  /**
   * Count Type TheaterCountOutputType
   */

  export type TheaterCountOutputType = {
    seats: number
    showtimes: number
  }

  export type TheaterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seats?: boolean | TheaterCountOutputTypeCountSeatsArgs
    showtimes?: boolean | TheaterCountOutputTypeCountShowtimesArgs
  }

  // Custom InputTypes
  /**
   * TheaterCountOutputType without action
   */
  export type TheaterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TheaterCountOutputType
     */
    select?: TheaterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TheaterCountOutputType without action
   */
  export type TheaterCountOutputTypeCountSeatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeatWhereInput
  }

  /**
   * TheaterCountOutputType without action
   */
  export type TheaterCountOutputTypeCountShowtimesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShowtimeWhereInput
  }


  /**
   * Count Type ShowtimeCountOutputType
   */

  export type ShowtimeCountOutputType = {
    bookings: number
  }

  export type ShowtimeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | ShowtimeCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * ShowtimeCountOutputType without action
   */
  export type ShowtimeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowtimeCountOutputType
     */
    select?: ShowtimeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShowtimeCountOutputType without action
   */
  export type ShowtimeCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type SeatCountOutputType
   */

  export type SeatCountOutputType = {
    bookings: number
  }

  export type SeatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | SeatCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * SeatCountOutputType without action
   */
  export type SeatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatCountOutputType
     */
    select?: SeatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SeatCountOutputType without action
   */
  export type SeatCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
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
    password: string | null
    name: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
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
    password: string
    name: string
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
    password?: boolean
    name?: boolean
    createdAt?: boolean
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
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
    bookings<T extends User$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, User$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
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
   * User.bookings
   */
  export type User$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
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
   * Model Movie
   */

  export type AggregateMovie = {
    _count: MovieCountAggregateOutputType | null
    _avg: MovieAvgAggregateOutputType | null
    _sum: MovieSumAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  export type MovieAvgAggregateOutputType = {
    duration: number | null
    rating: number | null
  }

  export type MovieSumAggregateOutputType = {
    duration: number | null
    rating: number | null
  }

  export type MovieMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    posterUrl: string | null
    duration: number | null
    genre: string | null
    rating: number | null
    createdAt: Date | null
  }

  export type MovieMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    posterUrl: string | null
    duration: number | null
    genre: string | null
    rating: number | null
    createdAt: Date | null
  }

  export type MovieCountAggregateOutputType = {
    id: number
    title: number
    description: number
    posterUrl: number
    duration: number
    genre: number
    rating: number
    createdAt: number
    _all: number
  }


  export type MovieAvgAggregateInputType = {
    duration?: true
    rating?: true
  }

  export type MovieSumAggregateInputType = {
    duration?: true
    rating?: true
  }

  export type MovieMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    posterUrl?: true
    duration?: true
    genre?: true
    rating?: true
    createdAt?: true
  }

  export type MovieMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    posterUrl?: true
    duration?: true
    genre?: true
    rating?: true
    createdAt?: true
  }

  export type MovieCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    posterUrl?: true
    duration?: true
    genre?: true
    rating?: true
    createdAt?: true
    _all?: true
  }

  export type MovieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movie to aggregate.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Movies
    **/
    _count?: true | MovieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovieMaxAggregateInputType
  }

  export type GetMovieAggregateType<T extends MovieAggregateArgs> = {
        [P in keyof T & keyof AggregateMovie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovie[P]>
      : GetScalarType<T[P], AggregateMovie[P]>
  }




  export type MovieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieWhereInput
    orderBy?: MovieOrderByWithAggregationInput | MovieOrderByWithAggregationInput[]
    by: MovieScalarFieldEnum[] | MovieScalarFieldEnum
    having?: MovieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovieCountAggregateInputType | true
    _avg?: MovieAvgAggregateInputType
    _sum?: MovieSumAggregateInputType
    _min?: MovieMinAggregateInputType
    _max?: MovieMaxAggregateInputType
  }

  export type MovieGroupByOutputType = {
    id: string
    title: string
    description: string
    posterUrl: string | null
    duration: number
    genre: string
    rating: number | null
    createdAt: Date
    _count: MovieCountAggregateOutputType | null
    _avg: MovieAvgAggregateOutputType | null
    _sum: MovieSumAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  type GetMovieGroupByPayload<T extends MovieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieGroupByOutputType[P]>
            : GetScalarType<T[P], MovieGroupByOutputType[P]>
        }
      >
    >


  export type MovieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    posterUrl?: boolean
    duration?: boolean
    genre?: boolean
    rating?: boolean
    createdAt?: boolean
    showtimes?: boolean | Movie$showtimesArgs<ExtArgs>
    _count?: boolean | MovieCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movie"]>



  export type MovieSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    posterUrl?: boolean
    duration?: boolean
    genre?: boolean
    rating?: boolean
    createdAt?: boolean
  }

  export type MovieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "posterUrl" | "duration" | "genre" | "rating" | "createdAt", ExtArgs["result"]["movie"]>
  export type MovieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    showtimes?: boolean | Movie$showtimesArgs<ExtArgs>
    _count?: boolean | MovieCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MoviePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Movie"
    objects: {
      showtimes: Prisma.$ShowtimePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      posterUrl: string | null
      duration: number
      genre: string
      rating: number | null
      createdAt: Date
    }, ExtArgs["result"]["movie"]>
    composites: {}
  }

  type MovieGetPayload<S extends boolean | null | undefined | MovieDefaultArgs> = $Result.GetResult<Prisma.$MoviePayload, S>

  type MovieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MovieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MovieCountAggregateInputType | true
    }

  export interface MovieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Movie'], meta: { name: 'Movie' } }
    /**
     * Find zero or one Movie that matches the filter.
     * @param {MovieFindUniqueArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovieFindUniqueArgs>(args: SelectSubset<T, MovieFindUniqueArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Movie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovieFindUniqueOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovieFindUniqueOrThrowArgs>(args: SelectSubset<T, MovieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovieFindFirstArgs>(args?: SelectSubset<T, MovieFindFirstArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovieFindFirstOrThrowArgs>(args?: SelectSubset<T, MovieFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movies
     * const movies = await prisma.movie.findMany()
     * 
     * // Get first 10 Movies
     * const movies = await prisma.movie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movieWithIdOnly = await prisma.movie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MovieFindManyArgs>(args?: SelectSubset<T, MovieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Movie.
     * @param {MovieCreateArgs} args - Arguments to create a Movie.
     * @example
     * // Create one Movie
     * const Movie = await prisma.movie.create({
     *   data: {
     *     // ... data to create a Movie
     *   }
     * })
     * 
     */
    create<T extends MovieCreateArgs>(args: SelectSubset<T, MovieCreateArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Movies.
     * @param {MovieCreateManyArgs} args - Arguments to create many Movies.
     * @example
     * // Create many Movies
     * const movie = await prisma.movie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovieCreateManyArgs>(args?: SelectSubset<T, MovieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Movie.
     * @param {MovieDeleteArgs} args - Arguments to delete one Movie.
     * @example
     * // Delete one Movie
     * const Movie = await prisma.movie.delete({
     *   where: {
     *     // ... filter to delete one Movie
     *   }
     * })
     * 
     */
    delete<T extends MovieDeleteArgs>(args: SelectSubset<T, MovieDeleteArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Movie.
     * @param {MovieUpdateArgs} args - Arguments to update one Movie.
     * @example
     * // Update one Movie
     * const movie = await prisma.movie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovieUpdateArgs>(args: SelectSubset<T, MovieUpdateArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Movies.
     * @param {MovieDeleteManyArgs} args - Arguments to filter Movies to delete.
     * @example
     * // Delete a few Movies
     * const { count } = await prisma.movie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovieDeleteManyArgs>(args?: SelectSubset<T, MovieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movies
     * const movie = await prisma.movie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovieUpdateManyArgs>(args: SelectSubset<T, MovieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Movie.
     * @param {MovieUpsertArgs} args - Arguments to update or create a Movie.
     * @example
     * // Update or create a Movie
     * const movie = await prisma.movie.upsert({
     *   create: {
     *     // ... data to create a Movie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movie we want to update
     *   }
     * })
     */
    upsert<T extends MovieUpsertArgs>(args: SelectSubset<T, MovieUpsertArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieCountArgs} args - Arguments to filter Movies to count.
     * @example
     * // Count the number of Movies
     * const count = await prisma.movie.count({
     *   where: {
     *     // ... the filter for the Movies we want to count
     *   }
     * })
    **/
    count<T extends MovieCountArgs>(
      args?: Subset<T, MovieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MovieAggregateArgs>(args: Subset<T, MovieAggregateArgs>): Prisma.PrismaPromise<GetMovieAggregateType<T>>

    /**
     * Group by Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGroupByArgs} args - Group by arguments.
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
      T extends MovieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovieGroupByArgs['orderBy'] }
        : { orderBy?: MovieGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MovieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Movie model
   */
  readonly fields: MovieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Movie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    showtimes<T extends Movie$showtimesArgs<ExtArgs> = {}>(args?: Subset<T, Movie$showtimesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowtimePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Movie model
   */
  interface MovieFieldRefs {
    readonly id: FieldRef<"Movie", 'String'>
    readonly title: FieldRef<"Movie", 'String'>
    readonly description: FieldRef<"Movie", 'String'>
    readonly posterUrl: FieldRef<"Movie", 'String'>
    readonly duration: FieldRef<"Movie", 'Int'>
    readonly genre: FieldRef<"Movie", 'String'>
    readonly rating: FieldRef<"Movie", 'Float'>
    readonly createdAt: FieldRef<"Movie", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Movie findUnique
   */
  export type MovieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie findUniqueOrThrow
   */
  export type MovieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie findFirst
   */
  export type MovieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Movie findFirstOrThrow
   */
  export type MovieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Movie findMany
   */
  export type MovieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Movie create
   */
  export type MovieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The data needed to create a Movie.
     */
    data: XOR<MovieCreateInput, MovieUncheckedCreateInput>
  }

  /**
   * Movie createMany
   */
  export type MovieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Movies.
     */
    data: MovieCreateManyInput | MovieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Movie update
   */
  export type MovieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The data needed to update a Movie.
     */
    data: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>
    /**
     * Choose, which Movie to update.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie updateMany
   */
  export type MovieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Movies.
     */
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyInput>
    /**
     * Filter which Movies to update
     */
    where?: MovieWhereInput
    /**
     * Limit how many Movies to update.
     */
    limit?: number
  }

  /**
   * Movie upsert
   */
  export type MovieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The filter to search for the Movie to update in case it exists.
     */
    where: MovieWhereUniqueInput
    /**
     * In case the Movie found by the `where` argument doesn't exist, create a new Movie with this data.
     */
    create: XOR<MovieCreateInput, MovieUncheckedCreateInput>
    /**
     * In case the Movie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>
  }

  /**
   * Movie delete
   */
  export type MovieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter which Movie to delete.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie deleteMany
   */
  export type MovieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movies to delete
     */
    where?: MovieWhereInput
    /**
     * Limit how many Movies to delete.
     */
    limit?: number
  }

  /**
   * Movie.showtimes
   */
  export type Movie$showtimesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showtime
     */
    select?: ShowtimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Showtime
     */
    omit?: ShowtimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowtimeInclude<ExtArgs> | null
    where?: ShowtimeWhereInput
    orderBy?: ShowtimeOrderByWithRelationInput | ShowtimeOrderByWithRelationInput[]
    cursor?: ShowtimeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShowtimeScalarFieldEnum | ShowtimeScalarFieldEnum[]
  }

  /**
   * Movie without action
   */
  export type MovieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
  }


  /**
   * Model Theater
   */

  export type AggregateTheater = {
    _count: TheaterCountAggregateOutputType | null
    _min: TheaterMinAggregateOutputType | null
    _max: TheaterMaxAggregateOutputType | null
  }

  export type TheaterMinAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
  }

  export type TheaterMaxAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
  }

  export type TheaterCountAggregateOutputType = {
    id: number
    name: number
    location: number
    _all: number
  }


  export type TheaterMinAggregateInputType = {
    id?: true
    name?: true
    location?: true
  }

  export type TheaterMaxAggregateInputType = {
    id?: true
    name?: true
    location?: true
  }

  export type TheaterCountAggregateInputType = {
    id?: true
    name?: true
    location?: true
    _all?: true
  }

  export type TheaterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Theater to aggregate.
     */
    where?: TheaterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Theaters to fetch.
     */
    orderBy?: TheaterOrderByWithRelationInput | TheaterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TheaterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Theaters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Theaters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Theaters
    **/
    _count?: true | TheaterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TheaterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TheaterMaxAggregateInputType
  }

  export type GetTheaterAggregateType<T extends TheaterAggregateArgs> = {
        [P in keyof T & keyof AggregateTheater]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTheater[P]>
      : GetScalarType<T[P], AggregateTheater[P]>
  }




  export type TheaterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TheaterWhereInput
    orderBy?: TheaterOrderByWithAggregationInput | TheaterOrderByWithAggregationInput[]
    by: TheaterScalarFieldEnum[] | TheaterScalarFieldEnum
    having?: TheaterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TheaterCountAggregateInputType | true
    _min?: TheaterMinAggregateInputType
    _max?: TheaterMaxAggregateInputType
  }

  export type TheaterGroupByOutputType = {
    id: string
    name: string
    location: string
    _count: TheaterCountAggregateOutputType | null
    _min: TheaterMinAggregateOutputType | null
    _max: TheaterMaxAggregateOutputType | null
  }

  type GetTheaterGroupByPayload<T extends TheaterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TheaterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TheaterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TheaterGroupByOutputType[P]>
            : GetScalarType<T[P], TheaterGroupByOutputType[P]>
        }
      >
    >


  export type TheaterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    seats?: boolean | Theater$seatsArgs<ExtArgs>
    showtimes?: boolean | Theater$showtimesArgs<ExtArgs>
    _count?: boolean | TheaterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["theater"]>



  export type TheaterSelectScalar = {
    id?: boolean
    name?: boolean
    location?: boolean
  }

  export type TheaterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "location", ExtArgs["result"]["theater"]>
  export type TheaterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seats?: boolean | Theater$seatsArgs<ExtArgs>
    showtimes?: boolean | Theater$showtimesArgs<ExtArgs>
    _count?: boolean | TheaterCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TheaterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Theater"
    objects: {
      seats: Prisma.$SeatPayload<ExtArgs>[]
      showtimes: Prisma.$ShowtimePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      location: string
    }, ExtArgs["result"]["theater"]>
    composites: {}
  }

  type TheaterGetPayload<S extends boolean | null | undefined | TheaterDefaultArgs> = $Result.GetResult<Prisma.$TheaterPayload, S>

  type TheaterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TheaterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TheaterCountAggregateInputType | true
    }

  export interface TheaterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Theater'], meta: { name: 'Theater' } }
    /**
     * Find zero or one Theater that matches the filter.
     * @param {TheaterFindUniqueArgs} args - Arguments to find a Theater
     * @example
     * // Get one Theater
     * const theater = await prisma.theater.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TheaterFindUniqueArgs>(args: SelectSubset<T, TheaterFindUniqueArgs<ExtArgs>>): Prisma__TheaterClient<$Result.GetResult<Prisma.$TheaterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Theater that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TheaterFindUniqueOrThrowArgs} args - Arguments to find a Theater
     * @example
     * // Get one Theater
     * const theater = await prisma.theater.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TheaterFindUniqueOrThrowArgs>(args: SelectSubset<T, TheaterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TheaterClient<$Result.GetResult<Prisma.$TheaterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Theater that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TheaterFindFirstArgs} args - Arguments to find a Theater
     * @example
     * // Get one Theater
     * const theater = await prisma.theater.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TheaterFindFirstArgs>(args?: SelectSubset<T, TheaterFindFirstArgs<ExtArgs>>): Prisma__TheaterClient<$Result.GetResult<Prisma.$TheaterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Theater that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TheaterFindFirstOrThrowArgs} args - Arguments to find a Theater
     * @example
     * // Get one Theater
     * const theater = await prisma.theater.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TheaterFindFirstOrThrowArgs>(args?: SelectSubset<T, TheaterFindFirstOrThrowArgs<ExtArgs>>): Prisma__TheaterClient<$Result.GetResult<Prisma.$TheaterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Theaters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TheaterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Theaters
     * const theaters = await prisma.theater.findMany()
     * 
     * // Get first 10 Theaters
     * const theaters = await prisma.theater.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const theaterWithIdOnly = await prisma.theater.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TheaterFindManyArgs>(args?: SelectSubset<T, TheaterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TheaterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Theater.
     * @param {TheaterCreateArgs} args - Arguments to create a Theater.
     * @example
     * // Create one Theater
     * const Theater = await prisma.theater.create({
     *   data: {
     *     // ... data to create a Theater
     *   }
     * })
     * 
     */
    create<T extends TheaterCreateArgs>(args: SelectSubset<T, TheaterCreateArgs<ExtArgs>>): Prisma__TheaterClient<$Result.GetResult<Prisma.$TheaterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Theaters.
     * @param {TheaterCreateManyArgs} args - Arguments to create many Theaters.
     * @example
     * // Create many Theaters
     * const theater = await prisma.theater.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TheaterCreateManyArgs>(args?: SelectSubset<T, TheaterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Theater.
     * @param {TheaterDeleteArgs} args - Arguments to delete one Theater.
     * @example
     * // Delete one Theater
     * const Theater = await prisma.theater.delete({
     *   where: {
     *     // ... filter to delete one Theater
     *   }
     * })
     * 
     */
    delete<T extends TheaterDeleteArgs>(args: SelectSubset<T, TheaterDeleteArgs<ExtArgs>>): Prisma__TheaterClient<$Result.GetResult<Prisma.$TheaterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Theater.
     * @param {TheaterUpdateArgs} args - Arguments to update one Theater.
     * @example
     * // Update one Theater
     * const theater = await prisma.theater.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TheaterUpdateArgs>(args: SelectSubset<T, TheaterUpdateArgs<ExtArgs>>): Prisma__TheaterClient<$Result.GetResult<Prisma.$TheaterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Theaters.
     * @param {TheaterDeleteManyArgs} args - Arguments to filter Theaters to delete.
     * @example
     * // Delete a few Theaters
     * const { count } = await prisma.theater.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TheaterDeleteManyArgs>(args?: SelectSubset<T, TheaterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Theaters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TheaterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Theaters
     * const theater = await prisma.theater.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TheaterUpdateManyArgs>(args: SelectSubset<T, TheaterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Theater.
     * @param {TheaterUpsertArgs} args - Arguments to update or create a Theater.
     * @example
     * // Update or create a Theater
     * const theater = await prisma.theater.upsert({
     *   create: {
     *     // ... data to create a Theater
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Theater we want to update
     *   }
     * })
     */
    upsert<T extends TheaterUpsertArgs>(args: SelectSubset<T, TheaterUpsertArgs<ExtArgs>>): Prisma__TheaterClient<$Result.GetResult<Prisma.$TheaterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Theaters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TheaterCountArgs} args - Arguments to filter Theaters to count.
     * @example
     * // Count the number of Theaters
     * const count = await prisma.theater.count({
     *   where: {
     *     // ... the filter for the Theaters we want to count
     *   }
     * })
    **/
    count<T extends TheaterCountArgs>(
      args?: Subset<T, TheaterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TheaterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Theater.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TheaterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TheaterAggregateArgs>(args: Subset<T, TheaterAggregateArgs>): Prisma.PrismaPromise<GetTheaterAggregateType<T>>

    /**
     * Group by Theater.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TheaterGroupByArgs} args - Group by arguments.
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
      T extends TheaterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TheaterGroupByArgs['orderBy'] }
        : { orderBy?: TheaterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TheaterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTheaterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Theater model
   */
  readonly fields: TheaterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Theater.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TheaterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    seats<T extends Theater$seatsArgs<ExtArgs> = {}>(args?: Subset<T, Theater$seatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    showtimes<T extends Theater$showtimesArgs<ExtArgs> = {}>(args?: Subset<T, Theater$showtimesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowtimePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Theater model
   */
  interface TheaterFieldRefs {
    readonly id: FieldRef<"Theater", 'String'>
    readonly name: FieldRef<"Theater", 'String'>
    readonly location: FieldRef<"Theater", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Theater findUnique
   */
  export type TheaterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theater
     */
    select?: TheaterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theater
     */
    omit?: TheaterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TheaterInclude<ExtArgs> | null
    /**
     * Filter, which Theater to fetch.
     */
    where: TheaterWhereUniqueInput
  }

  /**
   * Theater findUniqueOrThrow
   */
  export type TheaterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theater
     */
    select?: TheaterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theater
     */
    omit?: TheaterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TheaterInclude<ExtArgs> | null
    /**
     * Filter, which Theater to fetch.
     */
    where: TheaterWhereUniqueInput
  }

  /**
   * Theater findFirst
   */
  export type TheaterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theater
     */
    select?: TheaterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theater
     */
    omit?: TheaterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TheaterInclude<ExtArgs> | null
    /**
     * Filter, which Theater to fetch.
     */
    where?: TheaterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Theaters to fetch.
     */
    orderBy?: TheaterOrderByWithRelationInput | TheaterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Theaters.
     */
    cursor?: TheaterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Theaters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Theaters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Theaters.
     */
    distinct?: TheaterScalarFieldEnum | TheaterScalarFieldEnum[]
  }

  /**
   * Theater findFirstOrThrow
   */
  export type TheaterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theater
     */
    select?: TheaterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theater
     */
    omit?: TheaterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TheaterInclude<ExtArgs> | null
    /**
     * Filter, which Theater to fetch.
     */
    where?: TheaterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Theaters to fetch.
     */
    orderBy?: TheaterOrderByWithRelationInput | TheaterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Theaters.
     */
    cursor?: TheaterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Theaters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Theaters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Theaters.
     */
    distinct?: TheaterScalarFieldEnum | TheaterScalarFieldEnum[]
  }

  /**
   * Theater findMany
   */
  export type TheaterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theater
     */
    select?: TheaterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theater
     */
    omit?: TheaterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TheaterInclude<ExtArgs> | null
    /**
     * Filter, which Theaters to fetch.
     */
    where?: TheaterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Theaters to fetch.
     */
    orderBy?: TheaterOrderByWithRelationInput | TheaterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Theaters.
     */
    cursor?: TheaterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Theaters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Theaters.
     */
    skip?: number
    distinct?: TheaterScalarFieldEnum | TheaterScalarFieldEnum[]
  }

  /**
   * Theater create
   */
  export type TheaterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theater
     */
    select?: TheaterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theater
     */
    omit?: TheaterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TheaterInclude<ExtArgs> | null
    /**
     * The data needed to create a Theater.
     */
    data: XOR<TheaterCreateInput, TheaterUncheckedCreateInput>
  }

  /**
   * Theater createMany
   */
  export type TheaterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Theaters.
     */
    data: TheaterCreateManyInput | TheaterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Theater update
   */
  export type TheaterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theater
     */
    select?: TheaterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theater
     */
    omit?: TheaterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TheaterInclude<ExtArgs> | null
    /**
     * The data needed to update a Theater.
     */
    data: XOR<TheaterUpdateInput, TheaterUncheckedUpdateInput>
    /**
     * Choose, which Theater to update.
     */
    where: TheaterWhereUniqueInput
  }

  /**
   * Theater updateMany
   */
  export type TheaterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Theaters.
     */
    data: XOR<TheaterUpdateManyMutationInput, TheaterUncheckedUpdateManyInput>
    /**
     * Filter which Theaters to update
     */
    where?: TheaterWhereInput
    /**
     * Limit how many Theaters to update.
     */
    limit?: number
  }

  /**
   * Theater upsert
   */
  export type TheaterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theater
     */
    select?: TheaterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theater
     */
    omit?: TheaterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TheaterInclude<ExtArgs> | null
    /**
     * The filter to search for the Theater to update in case it exists.
     */
    where: TheaterWhereUniqueInput
    /**
     * In case the Theater found by the `where` argument doesn't exist, create a new Theater with this data.
     */
    create: XOR<TheaterCreateInput, TheaterUncheckedCreateInput>
    /**
     * In case the Theater was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TheaterUpdateInput, TheaterUncheckedUpdateInput>
  }

  /**
   * Theater delete
   */
  export type TheaterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theater
     */
    select?: TheaterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theater
     */
    omit?: TheaterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TheaterInclude<ExtArgs> | null
    /**
     * Filter which Theater to delete.
     */
    where: TheaterWhereUniqueInput
  }

  /**
   * Theater deleteMany
   */
  export type TheaterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Theaters to delete
     */
    where?: TheaterWhereInput
    /**
     * Limit how many Theaters to delete.
     */
    limit?: number
  }

  /**
   * Theater.seats
   */
  export type Theater$seatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    where?: SeatWhereInput
    orderBy?: SeatOrderByWithRelationInput | SeatOrderByWithRelationInput[]
    cursor?: SeatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeatScalarFieldEnum | SeatScalarFieldEnum[]
  }

  /**
   * Theater.showtimes
   */
  export type Theater$showtimesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showtime
     */
    select?: ShowtimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Showtime
     */
    omit?: ShowtimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowtimeInclude<ExtArgs> | null
    where?: ShowtimeWhereInput
    orderBy?: ShowtimeOrderByWithRelationInput | ShowtimeOrderByWithRelationInput[]
    cursor?: ShowtimeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShowtimeScalarFieldEnum | ShowtimeScalarFieldEnum[]
  }

  /**
   * Theater without action
   */
  export type TheaterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theater
     */
    select?: TheaterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theater
     */
    omit?: TheaterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TheaterInclude<ExtArgs> | null
  }


  /**
   * Model Showtime
   */

  export type AggregateShowtime = {
    _count: ShowtimeCountAggregateOutputType | null
    _min: ShowtimeMinAggregateOutputType | null
    _max: ShowtimeMaxAggregateOutputType | null
  }

  export type ShowtimeMinAggregateOutputType = {
    id: string | null
    time: Date | null
    movieId: string | null
    theaterId: string | null
  }

  export type ShowtimeMaxAggregateOutputType = {
    id: string | null
    time: Date | null
    movieId: string | null
    theaterId: string | null
  }

  export type ShowtimeCountAggregateOutputType = {
    id: number
    time: number
    movieId: number
    theaterId: number
    _all: number
  }


  export type ShowtimeMinAggregateInputType = {
    id?: true
    time?: true
    movieId?: true
    theaterId?: true
  }

  export type ShowtimeMaxAggregateInputType = {
    id?: true
    time?: true
    movieId?: true
    theaterId?: true
  }

  export type ShowtimeCountAggregateInputType = {
    id?: true
    time?: true
    movieId?: true
    theaterId?: true
    _all?: true
  }

  export type ShowtimeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Showtime to aggregate.
     */
    where?: ShowtimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Showtimes to fetch.
     */
    orderBy?: ShowtimeOrderByWithRelationInput | ShowtimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShowtimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Showtimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Showtimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Showtimes
    **/
    _count?: true | ShowtimeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShowtimeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShowtimeMaxAggregateInputType
  }

  export type GetShowtimeAggregateType<T extends ShowtimeAggregateArgs> = {
        [P in keyof T & keyof AggregateShowtime]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShowtime[P]>
      : GetScalarType<T[P], AggregateShowtime[P]>
  }




  export type ShowtimeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShowtimeWhereInput
    orderBy?: ShowtimeOrderByWithAggregationInput | ShowtimeOrderByWithAggregationInput[]
    by: ShowtimeScalarFieldEnum[] | ShowtimeScalarFieldEnum
    having?: ShowtimeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShowtimeCountAggregateInputType | true
    _min?: ShowtimeMinAggregateInputType
    _max?: ShowtimeMaxAggregateInputType
  }

  export type ShowtimeGroupByOutputType = {
    id: string
    time: Date
    movieId: string
    theaterId: string
    _count: ShowtimeCountAggregateOutputType | null
    _min: ShowtimeMinAggregateOutputType | null
    _max: ShowtimeMaxAggregateOutputType | null
  }

  type GetShowtimeGroupByPayload<T extends ShowtimeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShowtimeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShowtimeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShowtimeGroupByOutputType[P]>
            : GetScalarType<T[P], ShowtimeGroupByOutputType[P]>
        }
      >
    >


  export type ShowtimeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    time?: boolean
    movieId?: boolean
    theaterId?: boolean
    bookings?: boolean | Showtime$bookingsArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    theater?: boolean | TheaterDefaultArgs<ExtArgs>
    _count?: boolean | ShowtimeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["showtime"]>



  export type ShowtimeSelectScalar = {
    id?: boolean
    time?: boolean
    movieId?: boolean
    theaterId?: boolean
  }

  export type ShowtimeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "time" | "movieId" | "theaterId", ExtArgs["result"]["showtime"]>
  export type ShowtimeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | Showtime$bookingsArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    theater?: boolean | TheaterDefaultArgs<ExtArgs>
    _count?: boolean | ShowtimeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ShowtimePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Showtime"
    objects: {
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      movie: Prisma.$MoviePayload<ExtArgs>
      theater: Prisma.$TheaterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      time: Date
      movieId: string
      theaterId: string
    }, ExtArgs["result"]["showtime"]>
    composites: {}
  }

  type ShowtimeGetPayload<S extends boolean | null | undefined | ShowtimeDefaultArgs> = $Result.GetResult<Prisma.$ShowtimePayload, S>

  type ShowtimeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShowtimeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShowtimeCountAggregateInputType | true
    }

  export interface ShowtimeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Showtime'], meta: { name: 'Showtime' } }
    /**
     * Find zero or one Showtime that matches the filter.
     * @param {ShowtimeFindUniqueArgs} args - Arguments to find a Showtime
     * @example
     * // Get one Showtime
     * const showtime = await prisma.showtime.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShowtimeFindUniqueArgs>(args: SelectSubset<T, ShowtimeFindUniqueArgs<ExtArgs>>): Prisma__ShowtimeClient<$Result.GetResult<Prisma.$ShowtimePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Showtime that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShowtimeFindUniqueOrThrowArgs} args - Arguments to find a Showtime
     * @example
     * // Get one Showtime
     * const showtime = await prisma.showtime.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShowtimeFindUniqueOrThrowArgs>(args: SelectSubset<T, ShowtimeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShowtimeClient<$Result.GetResult<Prisma.$ShowtimePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Showtime that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowtimeFindFirstArgs} args - Arguments to find a Showtime
     * @example
     * // Get one Showtime
     * const showtime = await prisma.showtime.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShowtimeFindFirstArgs>(args?: SelectSubset<T, ShowtimeFindFirstArgs<ExtArgs>>): Prisma__ShowtimeClient<$Result.GetResult<Prisma.$ShowtimePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Showtime that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowtimeFindFirstOrThrowArgs} args - Arguments to find a Showtime
     * @example
     * // Get one Showtime
     * const showtime = await prisma.showtime.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShowtimeFindFirstOrThrowArgs>(args?: SelectSubset<T, ShowtimeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShowtimeClient<$Result.GetResult<Prisma.$ShowtimePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Showtimes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowtimeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Showtimes
     * const showtimes = await prisma.showtime.findMany()
     * 
     * // Get first 10 Showtimes
     * const showtimes = await prisma.showtime.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const showtimeWithIdOnly = await prisma.showtime.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShowtimeFindManyArgs>(args?: SelectSubset<T, ShowtimeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowtimePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Showtime.
     * @param {ShowtimeCreateArgs} args - Arguments to create a Showtime.
     * @example
     * // Create one Showtime
     * const Showtime = await prisma.showtime.create({
     *   data: {
     *     // ... data to create a Showtime
     *   }
     * })
     * 
     */
    create<T extends ShowtimeCreateArgs>(args: SelectSubset<T, ShowtimeCreateArgs<ExtArgs>>): Prisma__ShowtimeClient<$Result.GetResult<Prisma.$ShowtimePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Showtimes.
     * @param {ShowtimeCreateManyArgs} args - Arguments to create many Showtimes.
     * @example
     * // Create many Showtimes
     * const showtime = await prisma.showtime.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShowtimeCreateManyArgs>(args?: SelectSubset<T, ShowtimeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Showtime.
     * @param {ShowtimeDeleteArgs} args - Arguments to delete one Showtime.
     * @example
     * // Delete one Showtime
     * const Showtime = await prisma.showtime.delete({
     *   where: {
     *     // ... filter to delete one Showtime
     *   }
     * })
     * 
     */
    delete<T extends ShowtimeDeleteArgs>(args: SelectSubset<T, ShowtimeDeleteArgs<ExtArgs>>): Prisma__ShowtimeClient<$Result.GetResult<Prisma.$ShowtimePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Showtime.
     * @param {ShowtimeUpdateArgs} args - Arguments to update one Showtime.
     * @example
     * // Update one Showtime
     * const showtime = await prisma.showtime.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShowtimeUpdateArgs>(args: SelectSubset<T, ShowtimeUpdateArgs<ExtArgs>>): Prisma__ShowtimeClient<$Result.GetResult<Prisma.$ShowtimePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Showtimes.
     * @param {ShowtimeDeleteManyArgs} args - Arguments to filter Showtimes to delete.
     * @example
     * // Delete a few Showtimes
     * const { count } = await prisma.showtime.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShowtimeDeleteManyArgs>(args?: SelectSubset<T, ShowtimeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Showtimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowtimeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Showtimes
     * const showtime = await prisma.showtime.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShowtimeUpdateManyArgs>(args: SelectSubset<T, ShowtimeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Showtime.
     * @param {ShowtimeUpsertArgs} args - Arguments to update or create a Showtime.
     * @example
     * // Update or create a Showtime
     * const showtime = await prisma.showtime.upsert({
     *   create: {
     *     // ... data to create a Showtime
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Showtime we want to update
     *   }
     * })
     */
    upsert<T extends ShowtimeUpsertArgs>(args: SelectSubset<T, ShowtimeUpsertArgs<ExtArgs>>): Prisma__ShowtimeClient<$Result.GetResult<Prisma.$ShowtimePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Showtimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowtimeCountArgs} args - Arguments to filter Showtimes to count.
     * @example
     * // Count the number of Showtimes
     * const count = await prisma.showtime.count({
     *   where: {
     *     // ... the filter for the Showtimes we want to count
     *   }
     * })
    **/
    count<T extends ShowtimeCountArgs>(
      args?: Subset<T, ShowtimeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShowtimeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Showtime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowtimeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShowtimeAggregateArgs>(args: Subset<T, ShowtimeAggregateArgs>): Prisma.PrismaPromise<GetShowtimeAggregateType<T>>

    /**
     * Group by Showtime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowtimeGroupByArgs} args - Group by arguments.
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
      T extends ShowtimeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShowtimeGroupByArgs['orderBy'] }
        : { orderBy?: ShowtimeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShowtimeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShowtimeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Showtime model
   */
  readonly fields: ShowtimeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Showtime.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShowtimeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends Showtime$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Showtime$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    movie<T extends MovieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MovieDefaultArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    theater<T extends TheaterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TheaterDefaultArgs<ExtArgs>>): Prisma__TheaterClient<$Result.GetResult<Prisma.$TheaterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Showtime model
   */
  interface ShowtimeFieldRefs {
    readonly id: FieldRef<"Showtime", 'String'>
    readonly time: FieldRef<"Showtime", 'DateTime'>
    readonly movieId: FieldRef<"Showtime", 'String'>
    readonly theaterId: FieldRef<"Showtime", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Showtime findUnique
   */
  export type ShowtimeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showtime
     */
    select?: ShowtimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Showtime
     */
    omit?: ShowtimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowtimeInclude<ExtArgs> | null
    /**
     * Filter, which Showtime to fetch.
     */
    where: ShowtimeWhereUniqueInput
  }

  /**
   * Showtime findUniqueOrThrow
   */
  export type ShowtimeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showtime
     */
    select?: ShowtimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Showtime
     */
    omit?: ShowtimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowtimeInclude<ExtArgs> | null
    /**
     * Filter, which Showtime to fetch.
     */
    where: ShowtimeWhereUniqueInput
  }

  /**
   * Showtime findFirst
   */
  export type ShowtimeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showtime
     */
    select?: ShowtimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Showtime
     */
    omit?: ShowtimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowtimeInclude<ExtArgs> | null
    /**
     * Filter, which Showtime to fetch.
     */
    where?: ShowtimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Showtimes to fetch.
     */
    orderBy?: ShowtimeOrderByWithRelationInput | ShowtimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Showtimes.
     */
    cursor?: ShowtimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Showtimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Showtimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Showtimes.
     */
    distinct?: ShowtimeScalarFieldEnum | ShowtimeScalarFieldEnum[]
  }

  /**
   * Showtime findFirstOrThrow
   */
  export type ShowtimeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showtime
     */
    select?: ShowtimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Showtime
     */
    omit?: ShowtimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowtimeInclude<ExtArgs> | null
    /**
     * Filter, which Showtime to fetch.
     */
    where?: ShowtimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Showtimes to fetch.
     */
    orderBy?: ShowtimeOrderByWithRelationInput | ShowtimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Showtimes.
     */
    cursor?: ShowtimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Showtimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Showtimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Showtimes.
     */
    distinct?: ShowtimeScalarFieldEnum | ShowtimeScalarFieldEnum[]
  }

  /**
   * Showtime findMany
   */
  export type ShowtimeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showtime
     */
    select?: ShowtimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Showtime
     */
    omit?: ShowtimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowtimeInclude<ExtArgs> | null
    /**
     * Filter, which Showtimes to fetch.
     */
    where?: ShowtimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Showtimes to fetch.
     */
    orderBy?: ShowtimeOrderByWithRelationInput | ShowtimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Showtimes.
     */
    cursor?: ShowtimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Showtimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Showtimes.
     */
    skip?: number
    distinct?: ShowtimeScalarFieldEnum | ShowtimeScalarFieldEnum[]
  }

  /**
   * Showtime create
   */
  export type ShowtimeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showtime
     */
    select?: ShowtimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Showtime
     */
    omit?: ShowtimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowtimeInclude<ExtArgs> | null
    /**
     * The data needed to create a Showtime.
     */
    data: XOR<ShowtimeCreateInput, ShowtimeUncheckedCreateInput>
  }

  /**
   * Showtime createMany
   */
  export type ShowtimeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Showtimes.
     */
    data: ShowtimeCreateManyInput | ShowtimeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Showtime update
   */
  export type ShowtimeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showtime
     */
    select?: ShowtimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Showtime
     */
    omit?: ShowtimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowtimeInclude<ExtArgs> | null
    /**
     * The data needed to update a Showtime.
     */
    data: XOR<ShowtimeUpdateInput, ShowtimeUncheckedUpdateInput>
    /**
     * Choose, which Showtime to update.
     */
    where: ShowtimeWhereUniqueInput
  }

  /**
   * Showtime updateMany
   */
  export type ShowtimeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Showtimes.
     */
    data: XOR<ShowtimeUpdateManyMutationInput, ShowtimeUncheckedUpdateManyInput>
    /**
     * Filter which Showtimes to update
     */
    where?: ShowtimeWhereInput
    /**
     * Limit how many Showtimes to update.
     */
    limit?: number
  }

  /**
   * Showtime upsert
   */
  export type ShowtimeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showtime
     */
    select?: ShowtimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Showtime
     */
    omit?: ShowtimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowtimeInclude<ExtArgs> | null
    /**
     * The filter to search for the Showtime to update in case it exists.
     */
    where: ShowtimeWhereUniqueInput
    /**
     * In case the Showtime found by the `where` argument doesn't exist, create a new Showtime with this data.
     */
    create: XOR<ShowtimeCreateInput, ShowtimeUncheckedCreateInput>
    /**
     * In case the Showtime was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShowtimeUpdateInput, ShowtimeUncheckedUpdateInput>
  }

  /**
   * Showtime delete
   */
  export type ShowtimeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showtime
     */
    select?: ShowtimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Showtime
     */
    omit?: ShowtimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowtimeInclude<ExtArgs> | null
    /**
     * Filter which Showtime to delete.
     */
    where: ShowtimeWhereUniqueInput
  }

  /**
   * Showtime deleteMany
   */
  export type ShowtimeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Showtimes to delete
     */
    where?: ShowtimeWhereInput
    /**
     * Limit how many Showtimes to delete.
     */
    limit?: number
  }

  /**
   * Showtime.bookings
   */
  export type Showtime$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Showtime without action
   */
  export type ShowtimeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showtime
     */
    select?: ShowtimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Showtime
     */
    omit?: ShowtimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowtimeInclude<ExtArgs> | null
  }


  /**
   * Model Seat
   */

  export type AggregateSeat = {
    _count: SeatCountAggregateOutputType | null
    _min: SeatMinAggregateOutputType | null
    _max: SeatMaxAggregateOutputType | null
  }

  export type SeatMinAggregateOutputType = {
    id: string | null
    number: string | null
    theaterId: string | null
  }

  export type SeatMaxAggregateOutputType = {
    id: string | null
    number: string | null
    theaterId: string | null
  }

  export type SeatCountAggregateOutputType = {
    id: number
    number: number
    theaterId: number
    _all: number
  }


  export type SeatMinAggregateInputType = {
    id?: true
    number?: true
    theaterId?: true
  }

  export type SeatMaxAggregateInputType = {
    id?: true
    number?: true
    theaterId?: true
  }

  export type SeatCountAggregateInputType = {
    id?: true
    number?: true
    theaterId?: true
    _all?: true
  }

  export type SeatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seat to aggregate.
     */
    where?: SeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seats to fetch.
     */
    orderBy?: SeatOrderByWithRelationInput | SeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Seats
    **/
    _count?: true | SeatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeatMaxAggregateInputType
  }

  export type GetSeatAggregateType<T extends SeatAggregateArgs> = {
        [P in keyof T & keyof AggregateSeat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeat[P]>
      : GetScalarType<T[P], AggregateSeat[P]>
  }




  export type SeatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeatWhereInput
    orderBy?: SeatOrderByWithAggregationInput | SeatOrderByWithAggregationInput[]
    by: SeatScalarFieldEnum[] | SeatScalarFieldEnum
    having?: SeatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeatCountAggregateInputType | true
    _min?: SeatMinAggregateInputType
    _max?: SeatMaxAggregateInputType
  }

  export type SeatGroupByOutputType = {
    id: string
    number: string
    theaterId: string
    _count: SeatCountAggregateOutputType | null
    _min: SeatMinAggregateOutputType | null
    _max: SeatMaxAggregateOutputType | null
  }

  type GetSeatGroupByPayload<T extends SeatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeatGroupByOutputType[P]>
            : GetScalarType<T[P], SeatGroupByOutputType[P]>
        }
      >
    >


  export type SeatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    theaterId?: boolean
    bookings?: boolean | Seat$bookingsArgs<ExtArgs>
    theater?: boolean | TheaterDefaultArgs<ExtArgs>
    _count?: boolean | SeatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seat"]>



  export type SeatSelectScalar = {
    id?: boolean
    number?: boolean
    theaterId?: boolean
  }

  export type SeatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "number" | "theaterId", ExtArgs["result"]["seat"]>
  export type SeatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | Seat$bookingsArgs<ExtArgs>
    theater?: boolean | TheaterDefaultArgs<ExtArgs>
    _count?: boolean | SeatCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SeatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Seat"
    objects: {
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      theater: Prisma.$TheaterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      number: string
      theaterId: string
    }, ExtArgs["result"]["seat"]>
    composites: {}
  }

  type SeatGetPayload<S extends boolean | null | undefined | SeatDefaultArgs> = $Result.GetResult<Prisma.$SeatPayload, S>

  type SeatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeatCountAggregateInputType | true
    }

  export interface SeatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Seat'], meta: { name: 'Seat' } }
    /**
     * Find zero or one Seat that matches the filter.
     * @param {SeatFindUniqueArgs} args - Arguments to find a Seat
     * @example
     * // Get one Seat
     * const seat = await prisma.seat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeatFindUniqueArgs>(args: SelectSubset<T, SeatFindUniqueArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Seat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeatFindUniqueOrThrowArgs} args - Arguments to find a Seat
     * @example
     * // Get one Seat
     * const seat = await prisma.seat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeatFindUniqueOrThrowArgs>(args: SelectSubset<T, SeatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatFindFirstArgs} args - Arguments to find a Seat
     * @example
     * // Get one Seat
     * const seat = await prisma.seat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeatFindFirstArgs>(args?: SelectSubset<T, SeatFindFirstArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatFindFirstOrThrowArgs} args - Arguments to find a Seat
     * @example
     * // Get one Seat
     * const seat = await prisma.seat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeatFindFirstOrThrowArgs>(args?: SelectSubset<T, SeatFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Seats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Seats
     * const seats = await prisma.seat.findMany()
     * 
     * // Get first 10 Seats
     * const seats = await prisma.seat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seatWithIdOnly = await prisma.seat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeatFindManyArgs>(args?: SelectSubset<T, SeatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Seat.
     * @param {SeatCreateArgs} args - Arguments to create a Seat.
     * @example
     * // Create one Seat
     * const Seat = await prisma.seat.create({
     *   data: {
     *     // ... data to create a Seat
     *   }
     * })
     * 
     */
    create<T extends SeatCreateArgs>(args: SelectSubset<T, SeatCreateArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Seats.
     * @param {SeatCreateManyArgs} args - Arguments to create many Seats.
     * @example
     * // Create many Seats
     * const seat = await prisma.seat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeatCreateManyArgs>(args?: SelectSubset<T, SeatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Seat.
     * @param {SeatDeleteArgs} args - Arguments to delete one Seat.
     * @example
     * // Delete one Seat
     * const Seat = await prisma.seat.delete({
     *   where: {
     *     // ... filter to delete one Seat
     *   }
     * })
     * 
     */
    delete<T extends SeatDeleteArgs>(args: SelectSubset<T, SeatDeleteArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Seat.
     * @param {SeatUpdateArgs} args - Arguments to update one Seat.
     * @example
     * // Update one Seat
     * const seat = await prisma.seat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeatUpdateArgs>(args: SelectSubset<T, SeatUpdateArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Seats.
     * @param {SeatDeleteManyArgs} args - Arguments to filter Seats to delete.
     * @example
     * // Delete a few Seats
     * const { count } = await prisma.seat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeatDeleteManyArgs>(args?: SelectSubset<T, SeatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Seats
     * const seat = await prisma.seat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeatUpdateManyArgs>(args: SelectSubset<T, SeatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Seat.
     * @param {SeatUpsertArgs} args - Arguments to update or create a Seat.
     * @example
     * // Update or create a Seat
     * const seat = await prisma.seat.upsert({
     *   create: {
     *     // ... data to create a Seat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Seat we want to update
     *   }
     * })
     */
    upsert<T extends SeatUpsertArgs>(args: SelectSubset<T, SeatUpsertArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Seats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatCountArgs} args - Arguments to filter Seats to count.
     * @example
     * // Count the number of Seats
     * const count = await prisma.seat.count({
     *   where: {
     *     // ... the filter for the Seats we want to count
     *   }
     * })
    **/
    count<T extends SeatCountArgs>(
      args?: Subset<T, SeatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Seat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SeatAggregateArgs>(args: Subset<T, SeatAggregateArgs>): Prisma.PrismaPromise<GetSeatAggregateType<T>>

    /**
     * Group by Seat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatGroupByArgs} args - Group by arguments.
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
      T extends SeatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeatGroupByArgs['orderBy'] }
        : { orderBy?: SeatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SeatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Seat model
   */
  readonly fields: SeatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Seat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends Seat$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Seat$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    theater<T extends TheaterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TheaterDefaultArgs<ExtArgs>>): Prisma__TheaterClient<$Result.GetResult<Prisma.$TheaterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Seat model
   */
  interface SeatFieldRefs {
    readonly id: FieldRef<"Seat", 'String'>
    readonly number: FieldRef<"Seat", 'String'>
    readonly theaterId: FieldRef<"Seat", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Seat findUnique
   */
  export type SeatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter, which Seat to fetch.
     */
    where: SeatWhereUniqueInput
  }

  /**
   * Seat findUniqueOrThrow
   */
  export type SeatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter, which Seat to fetch.
     */
    where: SeatWhereUniqueInput
  }

  /**
   * Seat findFirst
   */
  export type SeatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter, which Seat to fetch.
     */
    where?: SeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seats to fetch.
     */
    orderBy?: SeatOrderByWithRelationInput | SeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seats.
     */
    cursor?: SeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seats.
     */
    distinct?: SeatScalarFieldEnum | SeatScalarFieldEnum[]
  }

  /**
   * Seat findFirstOrThrow
   */
  export type SeatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter, which Seat to fetch.
     */
    where?: SeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seats to fetch.
     */
    orderBy?: SeatOrderByWithRelationInput | SeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seats.
     */
    cursor?: SeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seats.
     */
    distinct?: SeatScalarFieldEnum | SeatScalarFieldEnum[]
  }

  /**
   * Seat findMany
   */
  export type SeatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter, which Seats to fetch.
     */
    where?: SeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seats to fetch.
     */
    orderBy?: SeatOrderByWithRelationInput | SeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Seats.
     */
    cursor?: SeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seats.
     */
    skip?: number
    distinct?: SeatScalarFieldEnum | SeatScalarFieldEnum[]
  }

  /**
   * Seat create
   */
  export type SeatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * The data needed to create a Seat.
     */
    data: XOR<SeatCreateInput, SeatUncheckedCreateInput>
  }

  /**
   * Seat createMany
   */
  export type SeatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Seats.
     */
    data: SeatCreateManyInput | SeatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Seat update
   */
  export type SeatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * The data needed to update a Seat.
     */
    data: XOR<SeatUpdateInput, SeatUncheckedUpdateInput>
    /**
     * Choose, which Seat to update.
     */
    where: SeatWhereUniqueInput
  }

  /**
   * Seat updateMany
   */
  export type SeatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Seats.
     */
    data: XOR<SeatUpdateManyMutationInput, SeatUncheckedUpdateManyInput>
    /**
     * Filter which Seats to update
     */
    where?: SeatWhereInput
    /**
     * Limit how many Seats to update.
     */
    limit?: number
  }

  /**
   * Seat upsert
   */
  export type SeatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * The filter to search for the Seat to update in case it exists.
     */
    where: SeatWhereUniqueInput
    /**
     * In case the Seat found by the `where` argument doesn't exist, create a new Seat with this data.
     */
    create: XOR<SeatCreateInput, SeatUncheckedCreateInput>
    /**
     * In case the Seat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeatUpdateInput, SeatUncheckedUpdateInput>
  }

  /**
   * Seat delete
   */
  export type SeatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter which Seat to delete.
     */
    where: SeatWhereUniqueInput
  }

  /**
   * Seat deleteMany
   */
  export type SeatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seats to delete
     */
    where?: SeatWhereInput
    /**
     * Limit how many Seats to delete.
     */
    limit?: number
  }

  /**
   * Seat.bookings
   */
  export type Seat$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Seat without action
   */
  export type SeatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    userId: string | null
    showtimeId: string | null
    seatId: string | null
    createdAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    showtimeId: string | null
    seatId: string | null
    createdAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    userId: number
    showtimeId: number
    seatId: number
    createdAt: number
    _all: number
  }


  export type BookingMinAggregateInputType = {
    id?: true
    userId?: true
    showtimeId?: true
    seatId?: true
    createdAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    userId?: true
    showtimeId?: true
    seatId?: true
    createdAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    userId?: true
    showtimeId?: true
    seatId?: true
    createdAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    userId: string
    showtimeId: string
    seatId: string
    createdAt: Date
    _count: BookingCountAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    showtimeId?: boolean
    seatId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    showtime?: boolean | ShowtimeDefaultArgs<ExtArgs>
    seat?: boolean | SeatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>



  export type BookingSelectScalar = {
    id?: boolean
    userId?: boolean
    showtimeId?: boolean
    seatId?: boolean
    createdAt?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "showtimeId" | "seatId" | "createdAt", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    showtime?: boolean | ShowtimeDefaultArgs<ExtArgs>
    seat?: boolean | SeatDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      showtime: Prisma.$ShowtimePayload<ExtArgs>
      seat: Prisma.$SeatPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      showtimeId: string
      seatId: string
      createdAt: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
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
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    showtime<T extends ShowtimeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShowtimeDefaultArgs<ExtArgs>>): Prisma__ShowtimeClient<$Result.GetResult<Prisma.$ShowtimePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    seat<T extends SeatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SeatDefaultArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'String'>
    readonly userId: FieldRef<"Booking", 'String'>
    readonly showtimeId: FieldRef<"Booking", 'String'>
    readonly seatId: FieldRef<"Booking", 'String'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
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
    password: 'password',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MovieScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    posterUrl: 'posterUrl',
    duration: 'duration',
    genre: 'genre',
    rating: 'rating',
    createdAt: 'createdAt'
  };

  export type MovieScalarFieldEnum = (typeof MovieScalarFieldEnum)[keyof typeof MovieScalarFieldEnum]


  export const TheaterScalarFieldEnum: {
    id: 'id',
    name: 'name',
    location: 'location'
  };

  export type TheaterScalarFieldEnum = (typeof TheaterScalarFieldEnum)[keyof typeof TheaterScalarFieldEnum]


  export const ShowtimeScalarFieldEnum: {
    id: 'id',
    time: 'time',
    movieId: 'movieId',
    theaterId: 'theaterId'
  };

  export type ShowtimeScalarFieldEnum = (typeof ShowtimeScalarFieldEnum)[keyof typeof ShowtimeScalarFieldEnum]


  export const SeatScalarFieldEnum: {
    id: 'id',
    number: 'number',
    theaterId: 'theaterId'
  };

  export type SeatScalarFieldEnum = (typeof SeatScalarFieldEnum)[keyof typeof SeatScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    showtimeId: 'showtimeId',
    seatId: 'seatId',
    createdAt: 'createdAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const MovieOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    posterUrl: 'posterUrl',
    genre: 'genre'
  };

  export type MovieOrderByRelevanceFieldEnum = (typeof MovieOrderByRelevanceFieldEnum)[keyof typeof MovieOrderByRelevanceFieldEnum]


  export const TheaterOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    location: 'location'
  };

  export type TheaterOrderByRelevanceFieldEnum = (typeof TheaterOrderByRelevanceFieldEnum)[keyof typeof TheaterOrderByRelevanceFieldEnum]


  export const ShowtimeOrderByRelevanceFieldEnum: {
    id: 'id',
    movieId: 'movieId',
    theaterId: 'theaterId'
  };

  export type ShowtimeOrderByRelevanceFieldEnum = (typeof ShowtimeOrderByRelevanceFieldEnum)[keyof typeof ShowtimeOrderByRelevanceFieldEnum]


  export const SeatOrderByRelevanceFieldEnum: {
    id: 'id',
    number: 'number',
    theaterId: 'theaterId'
  };

  export type SeatOrderByRelevanceFieldEnum = (typeof SeatOrderByRelevanceFieldEnum)[keyof typeof SeatOrderByRelevanceFieldEnum]


  export const BookingOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    showtimeId: 'showtimeId',
    seatId: 'seatId'
  };

  export type BookingOrderByRelevanceFieldEnum = (typeof BookingOrderByRelevanceFieldEnum)[keyof typeof BookingOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    bookings?: BookingListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    bookings?: BookingOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    bookings?: BookingListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
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
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type MovieWhereInput = {
    AND?: MovieWhereInput | MovieWhereInput[]
    OR?: MovieWhereInput[]
    NOT?: MovieWhereInput | MovieWhereInput[]
    id?: StringFilter<"Movie"> | string
    title?: StringFilter<"Movie"> | string
    description?: StringFilter<"Movie"> | string
    posterUrl?: StringNullableFilter<"Movie"> | string | null
    duration?: IntFilter<"Movie"> | number
    genre?: StringFilter<"Movie"> | string
    rating?: FloatNullableFilter<"Movie"> | number | null
    createdAt?: DateTimeFilter<"Movie"> | Date | string
    showtimes?: ShowtimeListRelationFilter
  }

  export type MovieOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    posterUrl?: SortOrderInput | SortOrder
    duration?: SortOrder
    genre?: SortOrder
    rating?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    showtimes?: ShowtimeOrderByRelationAggregateInput
    _relevance?: MovieOrderByRelevanceInput
  }

  export type MovieWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MovieWhereInput | MovieWhereInput[]
    OR?: MovieWhereInput[]
    NOT?: MovieWhereInput | MovieWhereInput[]
    title?: StringFilter<"Movie"> | string
    description?: StringFilter<"Movie"> | string
    posterUrl?: StringNullableFilter<"Movie"> | string | null
    duration?: IntFilter<"Movie"> | number
    genre?: StringFilter<"Movie"> | string
    rating?: FloatNullableFilter<"Movie"> | number | null
    createdAt?: DateTimeFilter<"Movie"> | Date | string
    showtimes?: ShowtimeListRelationFilter
  }, "id">

  export type MovieOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    posterUrl?: SortOrderInput | SortOrder
    duration?: SortOrder
    genre?: SortOrder
    rating?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MovieCountOrderByAggregateInput
    _avg?: MovieAvgOrderByAggregateInput
    _max?: MovieMaxOrderByAggregateInput
    _min?: MovieMinOrderByAggregateInput
    _sum?: MovieSumOrderByAggregateInput
  }

  export type MovieScalarWhereWithAggregatesInput = {
    AND?: MovieScalarWhereWithAggregatesInput | MovieScalarWhereWithAggregatesInput[]
    OR?: MovieScalarWhereWithAggregatesInput[]
    NOT?: MovieScalarWhereWithAggregatesInput | MovieScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Movie"> | string
    title?: StringWithAggregatesFilter<"Movie"> | string
    description?: StringWithAggregatesFilter<"Movie"> | string
    posterUrl?: StringNullableWithAggregatesFilter<"Movie"> | string | null
    duration?: IntWithAggregatesFilter<"Movie"> | number
    genre?: StringWithAggregatesFilter<"Movie"> | string
    rating?: FloatNullableWithAggregatesFilter<"Movie"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Movie"> | Date | string
  }

  export type TheaterWhereInput = {
    AND?: TheaterWhereInput | TheaterWhereInput[]
    OR?: TheaterWhereInput[]
    NOT?: TheaterWhereInput | TheaterWhereInput[]
    id?: StringFilter<"Theater"> | string
    name?: StringFilter<"Theater"> | string
    location?: StringFilter<"Theater"> | string
    seats?: SeatListRelationFilter
    showtimes?: ShowtimeListRelationFilter
  }

  export type TheaterOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    seats?: SeatOrderByRelationAggregateInput
    showtimes?: ShowtimeOrderByRelationAggregateInput
    _relevance?: TheaterOrderByRelevanceInput
  }

  export type TheaterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TheaterWhereInput | TheaterWhereInput[]
    OR?: TheaterWhereInput[]
    NOT?: TheaterWhereInput | TheaterWhereInput[]
    name?: StringFilter<"Theater"> | string
    location?: StringFilter<"Theater"> | string
    seats?: SeatListRelationFilter
    showtimes?: ShowtimeListRelationFilter
  }, "id">

  export type TheaterOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    _count?: TheaterCountOrderByAggregateInput
    _max?: TheaterMaxOrderByAggregateInput
    _min?: TheaterMinOrderByAggregateInput
  }

  export type TheaterScalarWhereWithAggregatesInput = {
    AND?: TheaterScalarWhereWithAggregatesInput | TheaterScalarWhereWithAggregatesInput[]
    OR?: TheaterScalarWhereWithAggregatesInput[]
    NOT?: TheaterScalarWhereWithAggregatesInput | TheaterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Theater"> | string
    name?: StringWithAggregatesFilter<"Theater"> | string
    location?: StringWithAggregatesFilter<"Theater"> | string
  }

  export type ShowtimeWhereInput = {
    AND?: ShowtimeWhereInput | ShowtimeWhereInput[]
    OR?: ShowtimeWhereInput[]
    NOT?: ShowtimeWhereInput | ShowtimeWhereInput[]
    id?: StringFilter<"Showtime"> | string
    time?: DateTimeFilter<"Showtime"> | Date | string
    movieId?: StringFilter<"Showtime"> | string
    theaterId?: StringFilter<"Showtime"> | string
    bookings?: BookingListRelationFilter
    movie?: XOR<MovieScalarRelationFilter, MovieWhereInput>
    theater?: XOR<TheaterScalarRelationFilter, TheaterWhereInput>
  }

  export type ShowtimeOrderByWithRelationInput = {
    id?: SortOrder
    time?: SortOrder
    movieId?: SortOrder
    theaterId?: SortOrder
    bookings?: BookingOrderByRelationAggregateInput
    movie?: MovieOrderByWithRelationInput
    theater?: TheaterOrderByWithRelationInput
    _relevance?: ShowtimeOrderByRelevanceInput
  }

  export type ShowtimeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShowtimeWhereInput | ShowtimeWhereInput[]
    OR?: ShowtimeWhereInput[]
    NOT?: ShowtimeWhereInput | ShowtimeWhereInput[]
    time?: DateTimeFilter<"Showtime"> | Date | string
    movieId?: StringFilter<"Showtime"> | string
    theaterId?: StringFilter<"Showtime"> | string
    bookings?: BookingListRelationFilter
    movie?: XOR<MovieScalarRelationFilter, MovieWhereInput>
    theater?: XOR<TheaterScalarRelationFilter, TheaterWhereInput>
  }, "id">

  export type ShowtimeOrderByWithAggregationInput = {
    id?: SortOrder
    time?: SortOrder
    movieId?: SortOrder
    theaterId?: SortOrder
    _count?: ShowtimeCountOrderByAggregateInput
    _max?: ShowtimeMaxOrderByAggregateInput
    _min?: ShowtimeMinOrderByAggregateInput
  }

  export type ShowtimeScalarWhereWithAggregatesInput = {
    AND?: ShowtimeScalarWhereWithAggregatesInput | ShowtimeScalarWhereWithAggregatesInput[]
    OR?: ShowtimeScalarWhereWithAggregatesInput[]
    NOT?: ShowtimeScalarWhereWithAggregatesInput | ShowtimeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Showtime"> | string
    time?: DateTimeWithAggregatesFilter<"Showtime"> | Date | string
    movieId?: StringWithAggregatesFilter<"Showtime"> | string
    theaterId?: StringWithAggregatesFilter<"Showtime"> | string
  }

  export type SeatWhereInput = {
    AND?: SeatWhereInput | SeatWhereInput[]
    OR?: SeatWhereInput[]
    NOT?: SeatWhereInput | SeatWhereInput[]
    id?: StringFilter<"Seat"> | string
    number?: StringFilter<"Seat"> | string
    theaterId?: StringFilter<"Seat"> | string
    bookings?: BookingListRelationFilter
    theater?: XOR<TheaterScalarRelationFilter, TheaterWhereInput>
  }

  export type SeatOrderByWithRelationInput = {
    id?: SortOrder
    number?: SortOrder
    theaterId?: SortOrder
    bookings?: BookingOrderByRelationAggregateInput
    theater?: TheaterOrderByWithRelationInput
    _relevance?: SeatOrderByRelevanceInput
  }

  export type SeatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SeatWhereInput | SeatWhereInput[]
    OR?: SeatWhereInput[]
    NOT?: SeatWhereInput | SeatWhereInput[]
    number?: StringFilter<"Seat"> | string
    theaterId?: StringFilter<"Seat"> | string
    bookings?: BookingListRelationFilter
    theater?: XOR<TheaterScalarRelationFilter, TheaterWhereInput>
  }, "id">

  export type SeatOrderByWithAggregationInput = {
    id?: SortOrder
    number?: SortOrder
    theaterId?: SortOrder
    _count?: SeatCountOrderByAggregateInput
    _max?: SeatMaxOrderByAggregateInput
    _min?: SeatMinOrderByAggregateInput
  }

  export type SeatScalarWhereWithAggregatesInput = {
    AND?: SeatScalarWhereWithAggregatesInput | SeatScalarWhereWithAggregatesInput[]
    OR?: SeatScalarWhereWithAggregatesInput[]
    NOT?: SeatScalarWhereWithAggregatesInput | SeatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Seat"> | string
    number?: StringWithAggregatesFilter<"Seat"> | string
    theaterId?: StringWithAggregatesFilter<"Seat"> | string
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: StringFilter<"Booking"> | string
    userId?: StringFilter<"Booking"> | string
    showtimeId?: StringFilter<"Booking"> | string
    seatId?: StringFilter<"Booking"> | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    showtime?: XOR<ShowtimeScalarRelationFilter, ShowtimeWhereInput>
    seat?: XOR<SeatScalarRelationFilter, SeatWhereInput>
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    showtimeId?: SortOrder
    seatId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    showtime?: ShowtimeOrderByWithRelationInput
    seat?: SeatOrderByWithRelationInput
    _relevance?: BookingOrderByRelevanceInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    userId?: StringFilter<"Booking"> | string
    showtimeId?: StringFilter<"Booking"> | string
    seatId?: StringFilter<"Booking"> | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    showtime?: XOR<ShowtimeScalarRelationFilter, ShowtimeWhereInput>
    seat?: XOR<SeatScalarRelationFilter, SeatWhereInput>
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    showtimeId?: SortOrder
    seatId?: SortOrder
    createdAt?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Booking"> | string
    userId?: StringWithAggregatesFilter<"Booking"> | string
    showtimeId?: StringWithAggregatesFilter<"Booking"> | string
    seatId?: StringWithAggregatesFilter<"Booking"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    createdAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    createdAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieCreateInput = {
    id?: string
    title: string
    description: string
    posterUrl?: string | null
    duration: number
    genre: string
    rating?: number | null
    createdAt?: Date | string
    showtimes?: ShowtimeCreateNestedManyWithoutMovieInput
  }

  export type MovieUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    posterUrl?: string | null
    duration: number
    genre: string
    rating?: number | null
    createdAt?: Date | string
    showtimes?: ShowtimeUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MovieUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    showtimes?: ShowtimeUpdateManyWithoutMovieNestedInput
  }

  export type MovieUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    showtimes?: ShowtimeUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type MovieCreateManyInput = {
    id?: string
    title: string
    description: string
    posterUrl?: string | null
    duration: number
    genre: string
    rating?: number | null
    createdAt?: Date | string
  }

  export type MovieUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TheaterCreateInput = {
    id?: string
    name: string
    location: string
    seats?: SeatCreateNestedManyWithoutTheaterInput
    showtimes?: ShowtimeCreateNestedManyWithoutTheaterInput
  }

  export type TheaterUncheckedCreateInput = {
    id?: string
    name: string
    location: string
    seats?: SeatUncheckedCreateNestedManyWithoutTheaterInput
    showtimes?: ShowtimeUncheckedCreateNestedManyWithoutTheaterInput
  }

  export type TheaterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    seats?: SeatUpdateManyWithoutTheaterNestedInput
    showtimes?: ShowtimeUpdateManyWithoutTheaterNestedInput
  }

  export type TheaterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    seats?: SeatUncheckedUpdateManyWithoutTheaterNestedInput
    showtimes?: ShowtimeUncheckedUpdateManyWithoutTheaterNestedInput
  }

  export type TheaterCreateManyInput = {
    id?: string
    name: string
    location: string
  }

  export type TheaterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
  }

  export type TheaterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
  }

  export type ShowtimeCreateInput = {
    id?: string
    time: Date | string
    bookings?: BookingCreateNestedManyWithoutShowtimeInput
    movie: MovieCreateNestedOneWithoutShowtimesInput
    theater: TheaterCreateNestedOneWithoutShowtimesInput
  }

  export type ShowtimeUncheckedCreateInput = {
    id?: string
    time: Date | string
    movieId: string
    theaterId: string
    bookings?: BookingUncheckedCreateNestedManyWithoutShowtimeInput
  }

  export type ShowtimeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutShowtimeNestedInput
    movie?: MovieUpdateOneRequiredWithoutShowtimesNestedInput
    theater?: TheaterUpdateOneRequiredWithoutShowtimesNestedInput
  }

  export type ShowtimeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    movieId?: StringFieldUpdateOperationsInput | string
    theaterId?: StringFieldUpdateOperationsInput | string
    bookings?: BookingUncheckedUpdateManyWithoutShowtimeNestedInput
  }

  export type ShowtimeCreateManyInput = {
    id?: string
    time: Date | string
    movieId: string
    theaterId: string
  }

  export type ShowtimeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowtimeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    movieId?: StringFieldUpdateOperationsInput | string
    theaterId?: StringFieldUpdateOperationsInput | string
  }

  export type SeatCreateInput = {
    id?: string
    number: string
    bookings?: BookingCreateNestedManyWithoutSeatInput
    theater: TheaterCreateNestedOneWithoutSeatsInput
  }

  export type SeatUncheckedCreateInput = {
    id?: string
    number: string
    theaterId: string
    bookings?: BookingUncheckedCreateNestedManyWithoutSeatInput
  }

  export type SeatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    bookings?: BookingUpdateManyWithoutSeatNestedInput
    theater?: TheaterUpdateOneRequiredWithoutSeatsNestedInput
  }

  export type SeatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    theaterId?: StringFieldUpdateOperationsInput | string
    bookings?: BookingUncheckedUpdateManyWithoutSeatNestedInput
  }

  export type SeatCreateManyInput = {
    id?: string
    number: string
    theaterId: string
  }

  export type SeatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
  }

  export type SeatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    theaterId?: StringFieldUpdateOperationsInput | string
  }

  export type BookingCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    showtime: ShowtimeCreateNestedOneWithoutBookingsInput
    seat: SeatCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateInput = {
    id?: string
    userId: string
    showtimeId: string
    seatId: string
    createdAt?: Date | string
  }

  export type BookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    showtime?: ShowtimeUpdateOneRequiredWithoutBookingsNestedInput
    seat?: SeatUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    showtimeId?: StringFieldUpdateOperationsInput | string
    seatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyInput = {
    id?: string
    userId: string
    showtimeId: string
    seatId: string
    createdAt?: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    showtimeId?: StringFieldUpdateOperationsInput | string
    seatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
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
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ShowtimeListRelationFilter = {
    every?: ShowtimeWhereInput
    some?: ShowtimeWhereInput
    none?: ShowtimeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ShowtimeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MovieOrderByRelevanceInput = {
    fields: MovieOrderByRelevanceFieldEnum | MovieOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MovieCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    posterUrl?: SortOrder
    duration?: SortOrder
    genre?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type MovieAvgOrderByAggregateInput = {
    duration?: SortOrder
    rating?: SortOrder
  }

  export type MovieMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    posterUrl?: SortOrder
    duration?: SortOrder
    genre?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type MovieMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    posterUrl?: SortOrder
    duration?: SortOrder
    genre?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type MovieSumOrderByAggregateInput = {
    duration?: SortOrder
    rating?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type SeatListRelationFilter = {
    every?: SeatWhereInput
    some?: SeatWhereInput
    none?: SeatWhereInput
  }

  export type SeatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TheaterOrderByRelevanceInput = {
    fields: TheaterOrderByRelevanceFieldEnum | TheaterOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TheaterCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
  }

  export type TheaterMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
  }

  export type TheaterMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
  }

  export type MovieScalarRelationFilter = {
    is?: MovieWhereInput
    isNot?: MovieWhereInput
  }

  export type TheaterScalarRelationFilter = {
    is?: TheaterWhereInput
    isNot?: TheaterWhereInput
  }

  export type ShowtimeOrderByRelevanceInput = {
    fields: ShowtimeOrderByRelevanceFieldEnum | ShowtimeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ShowtimeCountOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    movieId?: SortOrder
    theaterId?: SortOrder
  }

  export type ShowtimeMaxOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    movieId?: SortOrder
    theaterId?: SortOrder
  }

  export type ShowtimeMinOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    movieId?: SortOrder
    theaterId?: SortOrder
  }

  export type SeatOrderByRelevanceInput = {
    fields: SeatOrderByRelevanceFieldEnum | SeatOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SeatCountOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    theaterId?: SortOrder
  }

  export type SeatMaxOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    theaterId?: SortOrder
  }

  export type SeatMinOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    theaterId?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ShowtimeScalarRelationFilter = {
    is?: ShowtimeWhereInput
    isNot?: ShowtimeWhereInput
  }

  export type SeatScalarRelationFilter = {
    is?: SeatWhereInput
    isNot?: SeatWhereInput
  }

  export type BookingOrderByRelevanceInput = {
    fields: BookingOrderByRelevanceFieldEnum | BookingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    showtimeId?: SortOrder
    seatId?: SortOrder
    createdAt?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    showtimeId?: SortOrder
    seatId?: SortOrder
    createdAt?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    showtimeId?: SortOrder
    seatId?: SortOrder
    createdAt?: SortOrder
  }

  export type BookingCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BookingUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ShowtimeCreateNestedManyWithoutMovieInput = {
    create?: XOR<ShowtimeCreateWithoutMovieInput, ShowtimeUncheckedCreateWithoutMovieInput> | ShowtimeCreateWithoutMovieInput[] | ShowtimeUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: ShowtimeCreateOrConnectWithoutMovieInput | ShowtimeCreateOrConnectWithoutMovieInput[]
    createMany?: ShowtimeCreateManyMovieInputEnvelope
    connect?: ShowtimeWhereUniqueInput | ShowtimeWhereUniqueInput[]
  }

  export type ShowtimeUncheckedCreateNestedManyWithoutMovieInput = {
    create?: XOR<ShowtimeCreateWithoutMovieInput, ShowtimeUncheckedCreateWithoutMovieInput> | ShowtimeCreateWithoutMovieInput[] | ShowtimeUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: ShowtimeCreateOrConnectWithoutMovieInput | ShowtimeCreateOrConnectWithoutMovieInput[]
    createMany?: ShowtimeCreateManyMovieInputEnvelope
    connect?: ShowtimeWhereUniqueInput | ShowtimeWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ShowtimeUpdateManyWithoutMovieNestedInput = {
    create?: XOR<ShowtimeCreateWithoutMovieInput, ShowtimeUncheckedCreateWithoutMovieInput> | ShowtimeCreateWithoutMovieInput[] | ShowtimeUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: ShowtimeCreateOrConnectWithoutMovieInput | ShowtimeCreateOrConnectWithoutMovieInput[]
    upsert?: ShowtimeUpsertWithWhereUniqueWithoutMovieInput | ShowtimeUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: ShowtimeCreateManyMovieInputEnvelope
    set?: ShowtimeWhereUniqueInput | ShowtimeWhereUniqueInput[]
    disconnect?: ShowtimeWhereUniqueInput | ShowtimeWhereUniqueInput[]
    delete?: ShowtimeWhereUniqueInput | ShowtimeWhereUniqueInput[]
    connect?: ShowtimeWhereUniqueInput | ShowtimeWhereUniqueInput[]
    update?: ShowtimeUpdateWithWhereUniqueWithoutMovieInput | ShowtimeUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: ShowtimeUpdateManyWithWhereWithoutMovieInput | ShowtimeUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: ShowtimeScalarWhereInput | ShowtimeScalarWhereInput[]
  }

  export type ShowtimeUncheckedUpdateManyWithoutMovieNestedInput = {
    create?: XOR<ShowtimeCreateWithoutMovieInput, ShowtimeUncheckedCreateWithoutMovieInput> | ShowtimeCreateWithoutMovieInput[] | ShowtimeUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: ShowtimeCreateOrConnectWithoutMovieInput | ShowtimeCreateOrConnectWithoutMovieInput[]
    upsert?: ShowtimeUpsertWithWhereUniqueWithoutMovieInput | ShowtimeUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: ShowtimeCreateManyMovieInputEnvelope
    set?: ShowtimeWhereUniqueInput | ShowtimeWhereUniqueInput[]
    disconnect?: ShowtimeWhereUniqueInput | ShowtimeWhereUniqueInput[]
    delete?: ShowtimeWhereUniqueInput | ShowtimeWhereUniqueInput[]
    connect?: ShowtimeWhereUniqueInput | ShowtimeWhereUniqueInput[]
    update?: ShowtimeUpdateWithWhereUniqueWithoutMovieInput | ShowtimeUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: ShowtimeUpdateManyWithWhereWithoutMovieInput | ShowtimeUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: ShowtimeScalarWhereInput | ShowtimeScalarWhereInput[]
  }

  export type SeatCreateNestedManyWithoutTheaterInput = {
    create?: XOR<SeatCreateWithoutTheaterInput, SeatUncheckedCreateWithoutTheaterInput> | SeatCreateWithoutTheaterInput[] | SeatUncheckedCreateWithoutTheaterInput[]
    connectOrCreate?: SeatCreateOrConnectWithoutTheaterInput | SeatCreateOrConnectWithoutTheaterInput[]
    createMany?: SeatCreateManyTheaterInputEnvelope
    connect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
  }

  export type ShowtimeCreateNestedManyWithoutTheaterInput = {
    create?: XOR<ShowtimeCreateWithoutTheaterInput, ShowtimeUncheckedCreateWithoutTheaterInput> | ShowtimeCreateWithoutTheaterInput[] | ShowtimeUncheckedCreateWithoutTheaterInput[]
    connectOrCreate?: ShowtimeCreateOrConnectWithoutTheaterInput | ShowtimeCreateOrConnectWithoutTheaterInput[]
    createMany?: ShowtimeCreateManyTheaterInputEnvelope
    connect?: ShowtimeWhereUniqueInput | ShowtimeWhereUniqueInput[]
  }

  export type SeatUncheckedCreateNestedManyWithoutTheaterInput = {
    create?: XOR<SeatCreateWithoutTheaterInput, SeatUncheckedCreateWithoutTheaterInput> | SeatCreateWithoutTheaterInput[] | SeatUncheckedCreateWithoutTheaterInput[]
    connectOrCreate?: SeatCreateOrConnectWithoutTheaterInput | SeatCreateOrConnectWithoutTheaterInput[]
    createMany?: SeatCreateManyTheaterInputEnvelope
    connect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
  }

  export type ShowtimeUncheckedCreateNestedManyWithoutTheaterInput = {
    create?: XOR<ShowtimeCreateWithoutTheaterInput, ShowtimeUncheckedCreateWithoutTheaterInput> | ShowtimeCreateWithoutTheaterInput[] | ShowtimeUncheckedCreateWithoutTheaterInput[]
    connectOrCreate?: ShowtimeCreateOrConnectWithoutTheaterInput | ShowtimeCreateOrConnectWithoutTheaterInput[]
    createMany?: ShowtimeCreateManyTheaterInputEnvelope
    connect?: ShowtimeWhereUniqueInput | ShowtimeWhereUniqueInput[]
  }

  export type SeatUpdateManyWithoutTheaterNestedInput = {
    create?: XOR<SeatCreateWithoutTheaterInput, SeatUncheckedCreateWithoutTheaterInput> | SeatCreateWithoutTheaterInput[] | SeatUncheckedCreateWithoutTheaterInput[]
    connectOrCreate?: SeatCreateOrConnectWithoutTheaterInput | SeatCreateOrConnectWithoutTheaterInput[]
    upsert?: SeatUpsertWithWhereUniqueWithoutTheaterInput | SeatUpsertWithWhereUniqueWithoutTheaterInput[]
    createMany?: SeatCreateManyTheaterInputEnvelope
    set?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    disconnect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    delete?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    connect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    update?: SeatUpdateWithWhereUniqueWithoutTheaterInput | SeatUpdateWithWhereUniqueWithoutTheaterInput[]
    updateMany?: SeatUpdateManyWithWhereWithoutTheaterInput | SeatUpdateManyWithWhereWithoutTheaterInput[]
    deleteMany?: SeatScalarWhereInput | SeatScalarWhereInput[]
  }

  export type ShowtimeUpdateManyWithoutTheaterNestedInput = {
    create?: XOR<ShowtimeCreateWithoutTheaterInput, ShowtimeUncheckedCreateWithoutTheaterInput> | ShowtimeCreateWithoutTheaterInput[] | ShowtimeUncheckedCreateWithoutTheaterInput[]
    connectOrCreate?: ShowtimeCreateOrConnectWithoutTheaterInput | ShowtimeCreateOrConnectWithoutTheaterInput[]
    upsert?: ShowtimeUpsertWithWhereUniqueWithoutTheaterInput | ShowtimeUpsertWithWhereUniqueWithoutTheaterInput[]
    createMany?: ShowtimeCreateManyTheaterInputEnvelope
    set?: ShowtimeWhereUniqueInput | ShowtimeWhereUniqueInput[]
    disconnect?: ShowtimeWhereUniqueInput | ShowtimeWhereUniqueInput[]
    delete?: ShowtimeWhereUniqueInput | ShowtimeWhereUniqueInput[]
    connect?: ShowtimeWhereUniqueInput | ShowtimeWhereUniqueInput[]
    update?: ShowtimeUpdateWithWhereUniqueWithoutTheaterInput | ShowtimeUpdateWithWhereUniqueWithoutTheaterInput[]
    updateMany?: ShowtimeUpdateManyWithWhereWithoutTheaterInput | ShowtimeUpdateManyWithWhereWithoutTheaterInput[]
    deleteMany?: ShowtimeScalarWhereInput | ShowtimeScalarWhereInput[]
  }

  export type SeatUncheckedUpdateManyWithoutTheaterNestedInput = {
    create?: XOR<SeatCreateWithoutTheaterInput, SeatUncheckedCreateWithoutTheaterInput> | SeatCreateWithoutTheaterInput[] | SeatUncheckedCreateWithoutTheaterInput[]
    connectOrCreate?: SeatCreateOrConnectWithoutTheaterInput | SeatCreateOrConnectWithoutTheaterInput[]
    upsert?: SeatUpsertWithWhereUniqueWithoutTheaterInput | SeatUpsertWithWhereUniqueWithoutTheaterInput[]
    createMany?: SeatCreateManyTheaterInputEnvelope
    set?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    disconnect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    delete?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    connect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    update?: SeatUpdateWithWhereUniqueWithoutTheaterInput | SeatUpdateWithWhereUniqueWithoutTheaterInput[]
    updateMany?: SeatUpdateManyWithWhereWithoutTheaterInput | SeatUpdateManyWithWhereWithoutTheaterInput[]
    deleteMany?: SeatScalarWhereInput | SeatScalarWhereInput[]
  }

  export type ShowtimeUncheckedUpdateManyWithoutTheaterNestedInput = {
    create?: XOR<ShowtimeCreateWithoutTheaterInput, ShowtimeUncheckedCreateWithoutTheaterInput> | ShowtimeCreateWithoutTheaterInput[] | ShowtimeUncheckedCreateWithoutTheaterInput[]
    connectOrCreate?: ShowtimeCreateOrConnectWithoutTheaterInput | ShowtimeCreateOrConnectWithoutTheaterInput[]
    upsert?: ShowtimeUpsertWithWhereUniqueWithoutTheaterInput | ShowtimeUpsertWithWhereUniqueWithoutTheaterInput[]
    createMany?: ShowtimeCreateManyTheaterInputEnvelope
    set?: ShowtimeWhereUniqueInput | ShowtimeWhereUniqueInput[]
    disconnect?: ShowtimeWhereUniqueInput | ShowtimeWhereUniqueInput[]
    delete?: ShowtimeWhereUniqueInput | ShowtimeWhereUniqueInput[]
    connect?: ShowtimeWhereUniqueInput | ShowtimeWhereUniqueInput[]
    update?: ShowtimeUpdateWithWhereUniqueWithoutTheaterInput | ShowtimeUpdateWithWhereUniqueWithoutTheaterInput[]
    updateMany?: ShowtimeUpdateManyWithWhereWithoutTheaterInput | ShowtimeUpdateManyWithWhereWithoutTheaterInput[]
    deleteMany?: ShowtimeScalarWhereInput | ShowtimeScalarWhereInput[]
  }

  export type BookingCreateNestedManyWithoutShowtimeInput = {
    create?: XOR<BookingCreateWithoutShowtimeInput, BookingUncheckedCreateWithoutShowtimeInput> | BookingCreateWithoutShowtimeInput[] | BookingUncheckedCreateWithoutShowtimeInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutShowtimeInput | BookingCreateOrConnectWithoutShowtimeInput[]
    createMany?: BookingCreateManyShowtimeInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type MovieCreateNestedOneWithoutShowtimesInput = {
    create?: XOR<MovieCreateWithoutShowtimesInput, MovieUncheckedCreateWithoutShowtimesInput>
    connectOrCreate?: MovieCreateOrConnectWithoutShowtimesInput
    connect?: MovieWhereUniqueInput
  }

  export type TheaterCreateNestedOneWithoutShowtimesInput = {
    create?: XOR<TheaterCreateWithoutShowtimesInput, TheaterUncheckedCreateWithoutShowtimesInput>
    connectOrCreate?: TheaterCreateOrConnectWithoutShowtimesInput
    connect?: TheaterWhereUniqueInput
  }

  export type BookingUncheckedCreateNestedManyWithoutShowtimeInput = {
    create?: XOR<BookingCreateWithoutShowtimeInput, BookingUncheckedCreateWithoutShowtimeInput> | BookingCreateWithoutShowtimeInput[] | BookingUncheckedCreateWithoutShowtimeInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutShowtimeInput | BookingCreateOrConnectWithoutShowtimeInput[]
    createMany?: BookingCreateManyShowtimeInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUpdateManyWithoutShowtimeNestedInput = {
    create?: XOR<BookingCreateWithoutShowtimeInput, BookingUncheckedCreateWithoutShowtimeInput> | BookingCreateWithoutShowtimeInput[] | BookingUncheckedCreateWithoutShowtimeInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutShowtimeInput | BookingCreateOrConnectWithoutShowtimeInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutShowtimeInput | BookingUpsertWithWhereUniqueWithoutShowtimeInput[]
    createMany?: BookingCreateManyShowtimeInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutShowtimeInput | BookingUpdateWithWhereUniqueWithoutShowtimeInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutShowtimeInput | BookingUpdateManyWithWhereWithoutShowtimeInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type MovieUpdateOneRequiredWithoutShowtimesNestedInput = {
    create?: XOR<MovieCreateWithoutShowtimesInput, MovieUncheckedCreateWithoutShowtimesInput>
    connectOrCreate?: MovieCreateOrConnectWithoutShowtimesInput
    upsert?: MovieUpsertWithoutShowtimesInput
    connect?: MovieWhereUniqueInput
    update?: XOR<XOR<MovieUpdateToOneWithWhereWithoutShowtimesInput, MovieUpdateWithoutShowtimesInput>, MovieUncheckedUpdateWithoutShowtimesInput>
  }

  export type TheaterUpdateOneRequiredWithoutShowtimesNestedInput = {
    create?: XOR<TheaterCreateWithoutShowtimesInput, TheaterUncheckedCreateWithoutShowtimesInput>
    connectOrCreate?: TheaterCreateOrConnectWithoutShowtimesInput
    upsert?: TheaterUpsertWithoutShowtimesInput
    connect?: TheaterWhereUniqueInput
    update?: XOR<XOR<TheaterUpdateToOneWithWhereWithoutShowtimesInput, TheaterUpdateWithoutShowtimesInput>, TheaterUncheckedUpdateWithoutShowtimesInput>
  }

  export type BookingUncheckedUpdateManyWithoutShowtimeNestedInput = {
    create?: XOR<BookingCreateWithoutShowtimeInput, BookingUncheckedCreateWithoutShowtimeInput> | BookingCreateWithoutShowtimeInput[] | BookingUncheckedCreateWithoutShowtimeInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutShowtimeInput | BookingCreateOrConnectWithoutShowtimeInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutShowtimeInput | BookingUpsertWithWhereUniqueWithoutShowtimeInput[]
    createMany?: BookingCreateManyShowtimeInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutShowtimeInput | BookingUpdateWithWhereUniqueWithoutShowtimeInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutShowtimeInput | BookingUpdateManyWithWhereWithoutShowtimeInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingCreateNestedManyWithoutSeatInput = {
    create?: XOR<BookingCreateWithoutSeatInput, BookingUncheckedCreateWithoutSeatInput> | BookingCreateWithoutSeatInput[] | BookingUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutSeatInput | BookingCreateOrConnectWithoutSeatInput[]
    createMany?: BookingCreateManySeatInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type TheaterCreateNestedOneWithoutSeatsInput = {
    create?: XOR<TheaterCreateWithoutSeatsInput, TheaterUncheckedCreateWithoutSeatsInput>
    connectOrCreate?: TheaterCreateOrConnectWithoutSeatsInput
    connect?: TheaterWhereUniqueInput
  }

  export type BookingUncheckedCreateNestedManyWithoutSeatInput = {
    create?: XOR<BookingCreateWithoutSeatInput, BookingUncheckedCreateWithoutSeatInput> | BookingCreateWithoutSeatInput[] | BookingUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutSeatInput | BookingCreateOrConnectWithoutSeatInput[]
    createMany?: BookingCreateManySeatInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUpdateManyWithoutSeatNestedInput = {
    create?: XOR<BookingCreateWithoutSeatInput, BookingUncheckedCreateWithoutSeatInput> | BookingCreateWithoutSeatInput[] | BookingUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutSeatInput | BookingCreateOrConnectWithoutSeatInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutSeatInput | BookingUpsertWithWhereUniqueWithoutSeatInput[]
    createMany?: BookingCreateManySeatInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutSeatInput | BookingUpdateWithWhereUniqueWithoutSeatInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutSeatInput | BookingUpdateManyWithWhereWithoutSeatInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type TheaterUpdateOneRequiredWithoutSeatsNestedInput = {
    create?: XOR<TheaterCreateWithoutSeatsInput, TheaterUncheckedCreateWithoutSeatsInput>
    connectOrCreate?: TheaterCreateOrConnectWithoutSeatsInput
    upsert?: TheaterUpsertWithoutSeatsInput
    connect?: TheaterWhereUniqueInput
    update?: XOR<XOR<TheaterUpdateToOneWithWhereWithoutSeatsInput, TheaterUpdateWithoutSeatsInput>, TheaterUncheckedUpdateWithoutSeatsInput>
  }

  export type BookingUncheckedUpdateManyWithoutSeatNestedInput = {
    create?: XOR<BookingCreateWithoutSeatInput, BookingUncheckedCreateWithoutSeatInput> | BookingCreateWithoutSeatInput[] | BookingUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutSeatInput | BookingCreateOrConnectWithoutSeatInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutSeatInput | BookingUpsertWithWhereUniqueWithoutSeatInput[]
    createMany?: BookingCreateManySeatInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutSeatInput | BookingUpdateWithWhereUniqueWithoutSeatInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutSeatInput | BookingUpdateManyWithWhereWithoutSeatInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBookingsInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    connect?: UserWhereUniqueInput
  }

  export type ShowtimeCreateNestedOneWithoutBookingsInput = {
    create?: XOR<ShowtimeCreateWithoutBookingsInput, ShowtimeUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ShowtimeCreateOrConnectWithoutBookingsInput
    connect?: ShowtimeWhereUniqueInput
  }

  export type SeatCreateNestedOneWithoutBookingsInput = {
    create?: XOR<SeatCreateWithoutBookingsInput, SeatUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: SeatCreateOrConnectWithoutBookingsInput
    connect?: SeatWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    upsert?: UserUpsertWithoutBookingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingsInput, UserUpdateWithoutBookingsInput>, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type ShowtimeUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<ShowtimeCreateWithoutBookingsInput, ShowtimeUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ShowtimeCreateOrConnectWithoutBookingsInput
    upsert?: ShowtimeUpsertWithoutBookingsInput
    connect?: ShowtimeWhereUniqueInput
    update?: XOR<XOR<ShowtimeUpdateToOneWithWhereWithoutBookingsInput, ShowtimeUpdateWithoutBookingsInput>, ShowtimeUncheckedUpdateWithoutBookingsInput>
  }

  export type SeatUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<SeatCreateWithoutBookingsInput, SeatUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: SeatCreateOrConnectWithoutBookingsInput
    upsert?: SeatUpsertWithoutBookingsInput
    connect?: SeatWhereUniqueInput
    update?: XOR<XOR<SeatUpdateToOneWithWhereWithoutBookingsInput, SeatUpdateWithoutBookingsInput>, SeatUncheckedUpdateWithoutBookingsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
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
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type BookingCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    showtime: ShowtimeCreateNestedOneWithoutBookingsInput
    seat: SeatCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutUserInput = {
    id?: string
    showtimeId: string
    seatId: string
    createdAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutUserInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingCreateManyUserInputEnvelope = {
    data: BookingCreateManyUserInput | BookingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BookingUpsertWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
  }

  export type BookingUpdateManyWithWhereWithoutUserInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutUserInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: StringFilter<"Booking"> | string
    userId?: StringFilter<"Booking"> | string
    showtimeId?: StringFilter<"Booking"> | string
    seatId?: StringFilter<"Booking"> | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
  }

  export type ShowtimeCreateWithoutMovieInput = {
    id?: string
    time: Date | string
    bookings?: BookingCreateNestedManyWithoutShowtimeInput
    theater: TheaterCreateNestedOneWithoutShowtimesInput
  }

  export type ShowtimeUncheckedCreateWithoutMovieInput = {
    id?: string
    time: Date | string
    theaterId: string
    bookings?: BookingUncheckedCreateNestedManyWithoutShowtimeInput
  }

  export type ShowtimeCreateOrConnectWithoutMovieInput = {
    where: ShowtimeWhereUniqueInput
    create: XOR<ShowtimeCreateWithoutMovieInput, ShowtimeUncheckedCreateWithoutMovieInput>
  }

  export type ShowtimeCreateManyMovieInputEnvelope = {
    data: ShowtimeCreateManyMovieInput | ShowtimeCreateManyMovieInput[]
    skipDuplicates?: boolean
  }

  export type ShowtimeUpsertWithWhereUniqueWithoutMovieInput = {
    where: ShowtimeWhereUniqueInput
    update: XOR<ShowtimeUpdateWithoutMovieInput, ShowtimeUncheckedUpdateWithoutMovieInput>
    create: XOR<ShowtimeCreateWithoutMovieInput, ShowtimeUncheckedCreateWithoutMovieInput>
  }

  export type ShowtimeUpdateWithWhereUniqueWithoutMovieInput = {
    where: ShowtimeWhereUniqueInput
    data: XOR<ShowtimeUpdateWithoutMovieInput, ShowtimeUncheckedUpdateWithoutMovieInput>
  }

  export type ShowtimeUpdateManyWithWhereWithoutMovieInput = {
    where: ShowtimeScalarWhereInput
    data: XOR<ShowtimeUpdateManyMutationInput, ShowtimeUncheckedUpdateManyWithoutMovieInput>
  }

  export type ShowtimeScalarWhereInput = {
    AND?: ShowtimeScalarWhereInput | ShowtimeScalarWhereInput[]
    OR?: ShowtimeScalarWhereInput[]
    NOT?: ShowtimeScalarWhereInput | ShowtimeScalarWhereInput[]
    id?: StringFilter<"Showtime"> | string
    time?: DateTimeFilter<"Showtime"> | Date | string
    movieId?: StringFilter<"Showtime"> | string
    theaterId?: StringFilter<"Showtime"> | string
  }

  export type SeatCreateWithoutTheaterInput = {
    id?: string
    number: string
    bookings?: BookingCreateNestedManyWithoutSeatInput
  }

  export type SeatUncheckedCreateWithoutTheaterInput = {
    id?: string
    number: string
    bookings?: BookingUncheckedCreateNestedManyWithoutSeatInput
  }

  export type SeatCreateOrConnectWithoutTheaterInput = {
    where: SeatWhereUniqueInput
    create: XOR<SeatCreateWithoutTheaterInput, SeatUncheckedCreateWithoutTheaterInput>
  }

  export type SeatCreateManyTheaterInputEnvelope = {
    data: SeatCreateManyTheaterInput | SeatCreateManyTheaterInput[]
    skipDuplicates?: boolean
  }

  export type ShowtimeCreateWithoutTheaterInput = {
    id?: string
    time: Date | string
    bookings?: BookingCreateNestedManyWithoutShowtimeInput
    movie: MovieCreateNestedOneWithoutShowtimesInput
  }

  export type ShowtimeUncheckedCreateWithoutTheaterInput = {
    id?: string
    time: Date | string
    movieId: string
    bookings?: BookingUncheckedCreateNestedManyWithoutShowtimeInput
  }

  export type ShowtimeCreateOrConnectWithoutTheaterInput = {
    where: ShowtimeWhereUniqueInput
    create: XOR<ShowtimeCreateWithoutTheaterInput, ShowtimeUncheckedCreateWithoutTheaterInput>
  }

  export type ShowtimeCreateManyTheaterInputEnvelope = {
    data: ShowtimeCreateManyTheaterInput | ShowtimeCreateManyTheaterInput[]
    skipDuplicates?: boolean
  }

  export type SeatUpsertWithWhereUniqueWithoutTheaterInput = {
    where: SeatWhereUniqueInput
    update: XOR<SeatUpdateWithoutTheaterInput, SeatUncheckedUpdateWithoutTheaterInput>
    create: XOR<SeatCreateWithoutTheaterInput, SeatUncheckedCreateWithoutTheaterInput>
  }

  export type SeatUpdateWithWhereUniqueWithoutTheaterInput = {
    where: SeatWhereUniqueInput
    data: XOR<SeatUpdateWithoutTheaterInput, SeatUncheckedUpdateWithoutTheaterInput>
  }

  export type SeatUpdateManyWithWhereWithoutTheaterInput = {
    where: SeatScalarWhereInput
    data: XOR<SeatUpdateManyMutationInput, SeatUncheckedUpdateManyWithoutTheaterInput>
  }

  export type SeatScalarWhereInput = {
    AND?: SeatScalarWhereInput | SeatScalarWhereInput[]
    OR?: SeatScalarWhereInput[]
    NOT?: SeatScalarWhereInput | SeatScalarWhereInput[]
    id?: StringFilter<"Seat"> | string
    number?: StringFilter<"Seat"> | string
    theaterId?: StringFilter<"Seat"> | string
  }

  export type ShowtimeUpsertWithWhereUniqueWithoutTheaterInput = {
    where: ShowtimeWhereUniqueInput
    update: XOR<ShowtimeUpdateWithoutTheaterInput, ShowtimeUncheckedUpdateWithoutTheaterInput>
    create: XOR<ShowtimeCreateWithoutTheaterInput, ShowtimeUncheckedCreateWithoutTheaterInput>
  }

  export type ShowtimeUpdateWithWhereUniqueWithoutTheaterInput = {
    where: ShowtimeWhereUniqueInput
    data: XOR<ShowtimeUpdateWithoutTheaterInput, ShowtimeUncheckedUpdateWithoutTheaterInput>
  }

  export type ShowtimeUpdateManyWithWhereWithoutTheaterInput = {
    where: ShowtimeScalarWhereInput
    data: XOR<ShowtimeUpdateManyMutationInput, ShowtimeUncheckedUpdateManyWithoutTheaterInput>
  }

  export type BookingCreateWithoutShowtimeInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    seat: SeatCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutShowtimeInput = {
    id?: string
    userId: string
    seatId: string
    createdAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutShowtimeInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutShowtimeInput, BookingUncheckedCreateWithoutShowtimeInput>
  }

  export type BookingCreateManyShowtimeInputEnvelope = {
    data: BookingCreateManyShowtimeInput | BookingCreateManyShowtimeInput[]
    skipDuplicates?: boolean
  }

  export type MovieCreateWithoutShowtimesInput = {
    id?: string
    title: string
    description: string
    posterUrl?: string | null
    duration: number
    genre: string
    rating?: number | null
    createdAt?: Date | string
  }

  export type MovieUncheckedCreateWithoutShowtimesInput = {
    id?: string
    title: string
    description: string
    posterUrl?: string | null
    duration: number
    genre: string
    rating?: number | null
    createdAt?: Date | string
  }

  export type MovieCreateOrConnectWithoutShowtimesInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutShowtimesInput, MovieUncheckedCreateWithoutShowtimesInput>
  }

  export type TheaterCreateWithoutShowtimesInput = {
    id?: string
    name: string
    location: string
    seats?: SeatCreateNestedManyWithoutTheaterInput
  }

  export type TheaterUncheckedCreateWithoutShowtimesInput = {
    id?: string
    name: string
    location: string
    seats?: SeatUncheckedCreateNestedManyWithoutTheaterInput
  }

  export type TheaterCreateOrConnectWithoutShowtimesInput = {
    where: TheaterWhereUniqueInput
    create: XOR<TheaterCreateWithoutShowtimesInput, TheaterUncheckedCreateWithoutShowtimesInput>
  }

  export type BookingUpsertWithWhereUniqueWithoutShowtimeInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutShowtimeInput, BookingUncheckedUpdateWithoutShowtimeInput>
    create: XOR<BookingCreateWithoutShowtimeInput, BookingUncheckedCreateWithoutShowtimeInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutShowtimeInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutShowtimeInput, BookingUncheckedUpdateWithoutShowtimeInput>
  }

  export type BookingUpdateManyWithWhereWithoutShowtimeInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutShowtimeInput>
  }

  export type MovieUpsertWithoutShowtimesInput = {
    update: XOR<MovieUpdateWithoutShowtimesInput, MovieUncheckedUpdateWithoutShowtimesInput>
    create: XOR<MovieCreateWithoutShowtimesInput, MovieUncheckedCreateWithoutShowtimesInput>
    where?: MovieWhereInput
  }

  export type MovieUpdateToOneWithWhereWithoutShowtimesInput = {
    where?: MovieWhereInput
    data: XOR<MovieUpdateWithoutShowtimesInput, MovieUncheckedUpdateWithoutShowtimesInput>
  }

  export type MovieUpdateWithoutShowtimesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieUncheckedUpdateWithoutShowtimesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TheaterUpsertWithoutShowtimesInput = {
    update: XOR<TheaterUpdateWithoutShowtimesInput, TheaterUncheckedUpdateWithoutShowtimesInput>
    create: XOR<TheaterCreateWithoutShowtimesInput, TheaterUncheckedCreateWithoutShowtimesInput>
    where?: TheaterWhereInput
  }

  export type TheaterUpdateToOneWithWhereWithoutShowtimesInput = {
    where?: TheaterWhereInput
    data: XOR<TheaterUpdateWithoutShowtimesInput, TheaterUncheckedUpdateWithoutShowtimesInput>
  }

  export type TheaterUpdateWithoutShowtimesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    seats?: SeatUpdateManyWithoutTheaterNestedInput
  }

  export type TheaterUncheckedUpdateWithoutShowtimesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    seats?: SeatUncheckedUpdateManyWithoutTheaterNestedInput
  }

  export type BookingCreateWithoutSeatInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    showtime: ShowtimeCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutSeatInput = {
    id?: string
    userId: string
    showtimeId: string
    createdAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutSeatInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutSeatInput, BookingUncheckedCreateWithoutSeatInput>
  }

  export type BookingCreateManySeatInputEnvelope = {
    data: BookingCreateManySeatInput | BookingCreateManySeatInput[]
    skipDuplicates?: boolean
  }

  export type TheaterCreateWithoutSeatsInput = {
    id?: string
    name: string
    location: string
    showtimes?: ShowtimeCreateNestedManyWithoutTheaterInput
  }

  export type TheaterUncheckedCreateWithoutSeatsInput = {
    id?: string
    name: string
    location: string
    showtimes?: ShowtimeUncheckedCreateNestedManyWithoutTheaterInput
  }

  export type TheaterCreateOrConnectWithoutSeatsInput = {
    where: TheaterWhereUniqueInput
    create: XOR<TheaterCreateWithoutSeatsInput, TheaterUncheckedCreateWithoutSeatsInput>
  }

  export type BookingUpsertWithWhereUniqueWithoutSeatInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutSeatInput, BookingUncheckedUpdateWithoutSeatInput>
    create: XOR<BookingCreateWithoutSeatInput, BookingUncheckedCreateWithoutSeatInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutSeatInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutSeatInput, BookingUncheckedUpdateWithoutSeatInput>
  }

  export type BookingUpdateManyWithWhereWithoutSeatInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutSeatInput>
  }

  export type TheaterUpsertWithoutSeatsInput = {
    update: XOR<TheaterUpdateWithoutSeatsInput, TheaterUncheckedUpdateWithoutSeatsInput>
    create: XOR<TheaterCreateWithoutSeatsInput, TheaterUncheckedCreateWithoutSeatsInput>
    where?: TheaterWhereInput
  }

  export type TheaterUpdateToOneWithWhereWithoutSeatsInput = {
    where?: TheaterWhereInput
    data: XOR<TheaterUpdateWithoutSeatsInput, TheaterUncheckedUpdateWithoutSeatsInput>
  }

  export type TheaterUpdateWithoutSeatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    showtimes?: ShowtimeUpdateManyWithoutTheaterNestedInput
  }

  export type TheaterUncheckedUpdateWithoutSeatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    showtimes?: ShowtimeUncheckedUpdateManyWithoutTheaterNestedInput
  }

  export type UserCreateWithoutBookingsInput = {
    id?: string
    email: string
    password: string
    name: string
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutBookingsInput = {
    id?: string
    email: string
    password: string
    name: string
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutBookingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
  }

  export type ShowtimeCreateWithoutBookingsInput = {
    id?: string
    time: Date | string
    movie: MovieCreateNestedOneWithoutShowtimesInput
    theater: TheaterCreateNestedOneWithoutShowtimesInput
  }

  export type ShowtimeUncheckedCreateWithoutBookingsInput = {
    id?: string
    time: Date | string
    movieId: string
    theaterId: string
  }

  export type ShowtimeCreateOrConnectWithoutBookingsInput = {
    where: ShowtimeWhereUniqueInput
    create: XOR<ShowtimeCreateWithoutBookingsInput, ShowtimeUncheckedCreateWithoutBookingsInput>
  }

  export type SeatCreateWithoutBookingsInput = {
    id?: string
    number: string
    theater: TheaterCreateNestedOneWithoutSeatsInput
  }

  export type SeatUncheckedCreateWithoutBookingsInput = {
    id?: string
    number: string
    theaterId: string
  }

  export type SeatCreateOrConnectWithoutBookingsInput = {
    where: SeatWhereUniqueInput
    create: XOR<SeatCreateWithoutBookingsInput, SeatUncheckedCreateWithoutBookingsInput>
  }

  export type UserUpsertWithoutBookingsInput = {
    update: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowtimeUpsertWithoutBookingsInput = {
    update: XOR<ShowtimeUpdateWithoutBookingsInput, ShowtimeUncheckedUpdateWithoutBookingsInput>
    create: XOR<ShowtimeCreateWithoutBookingsInput, ShowtimeUncheckedCreateWithoutBookingsInput>
    where?: ShowtimeWhereInput
  }

  export type ShowtimeUpdateToOneWithWhereWithoutBookingsInput = {
    where?: ShowtimeWhereInput
    data: XOR<ShowtimeUpdateWithoutBookingsInput, ShowtimeUncheckedUpdateWithoutBookingsInput>
  }

  export type ShowtimeUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    movie?: MovieUpdateOneRequiredWithoutShowtimesNestedInput
    theater?: TheaterUpdateOneRequiredWithoutShowtimesNestedInput
  }

  export type ShowtimeUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    movieId?: StringFieldUpdateOperationsInput | string
    theaterId?: StringFieldUpdateOperationsInput | string
  }

  export type SeatUpsertWithoutBookingsInput = {
    update: XOR<SeatUpdateWithoutBookingsInput, SeatUncheckedUpdateWithoutBookingsInput>
    create: XOR<SeatCreateWithoutBookingsInput, SeatUncheckedCreateWithoutBookingsInput>
    where?: SeatWhereInput
  }

  export type SeatUpdateToOneWithWhereWithoutBookingsInput = {
    where?: SeatWhereInput
    data: XOR<SeatUpdateWithoutBookingsInput, SeatUncheckedUpdateWithoutBookingsInput>
  }

  export type SeatUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    theater?: TheaterUpdateOneRequiredWithoutSeatsNestedInput
  }

  export type SeatUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    theaterId?: StringFieldUpdateOperationsInput | string
  }

  export type BookingCreateManyUserInput = {
    id?: string
    showtimeId: string
    seatId: string
    createdAt?: Date | string
  }

  export type BookingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    showtime?: ShowtimeUpdateOneRequiredWithoutBookingsNestedInput
    seat?: SeatUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    showtimeId?: StringFieldUpdateOperationsInput | string
    seatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    showtimeId?: StringFieldUpdateOperationsInput | string
    seatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowtimeCreateManyMovieInput = {
    id?: string
    time: Date | string
    theaterId: string
  }

  export type ShowtimeUpdateWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutShowtimeNestedInput
    theater?: TheaterUpdateOneRequiredWithoutShowtimesNestedInput
  }

  export type ShowtimeUncheckedUpdateWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    theaterId?: StringFieldUpdateOperationsInput | string
    bookings?: BookingUncheckedUpdateManyWithoutShowtimeNestedInput
  }

  export type ShowtimeUncheckedUpdateManyWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    theaterId?: StringFieldUpdateOperationsInput | string
  }

  export type SeatCreateManyTheaterInput = {
    id?: string
    number: string
  }

  export type ShowtimeCreateManyTheaterInput = {
    id?: string
    time: Date | string
    movieId: string
  }

  export type SeatUpdateWithoutTheaterInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    bookings?: BookingUpdateManyWithoutSeatNestedInput
  }

  export type SeatUncheckedUpdateWithoutTheaterInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    bookings?: BookingUncheckedUpdateManyWithoutSeatNestedInput
  }

  export type SeatUncheckedUpdateManyWithoutTheaterInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
  }

  export type ShowtimeUpdateWithoutTheaterInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutShowtimeNestedInput
    movie?: MovieUpdateOneRequiredWithoutShowtimesNestedInput
  }

  export type ShowtimeUncheckedUpdateWithoutTheaterInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    movieId?: StringFieldUpdateOperationsInput | string
    bookings?: BookingUncheckedUpdateManyWithoutShowtimeNestedInput
  }

  export type ShowtimeUncheckedUpdateManyWithoutTheaterInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    movieId?: StringFieldUpdateOperationsInput | string
  }

  export type BookingCreateManyShowtimeInput = {
    id?: string
    userId: string
    seatId: string
    createdAt?: Date | string
  }

  export type BookingUpdateWithoutShowtimeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    seat?: SeatUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutShowtimeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    seatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutShowtimeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    seatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManySeatInput = {
    id?: string
    userId: string
    showtimeId: string
    createdAt?: Date | string
  }

  export type BookingUpdateWithoutSeatInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    showtime?: ShowtimeUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutSeatInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    showtimeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutSeatInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    showtimeId?: StringFieldUpdateOperationsInput | string
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