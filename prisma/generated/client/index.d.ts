
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
 * Model formulario
 * 
 */
export type formulario = $Result.DefaultSelection<Prisma.$formularioPayload>
/**
 * Model artigos
 * 
 */
export type artigos = $Result.DefaultSelection<Prisma.$artigosPayload>
/**
 * Model tags
 * 
 */
export type tags = $Result.DefaultSelection<Prisma.$tagsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Formularios
 * const formularios = await prisma.formulario.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Formularios
   * const formularios = await prisma.formulario.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.formulario`: Exposes CRUD operations for the **formulario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Formularios
    * const formularios = await prisma.formulario.findMany()
    * ```
    */
  get formulario(): Prisma.formularioDelegate<ExtArgs>;

  /**
   * `prisma.artigos`: Exposes CRUD operations for the **artigos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Artigos
    * const artigos = await prisma.artigos.findMany()
    * ```
    */
  get artigos(): Prisma.artigosDelegate<ExtArgs>;

  /**
   * `prisma.tags`: Exposes CRUD operations for the **tags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tags.findMany()
    * ```
    */
  get tags(): Prisma.tagsDelegate<ExtArgs>;
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
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.11.0
   * Query Engine version: efd2449663b3d73d637ea1fd226bafbcf45b3102
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
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
    formulario: 'formulario',
    artigos: 'artigos',
    tags: 'tags'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'formulario' | 'artigos' | 'tags'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      formulario: {
        payload: Prisma.$formularioPayload<ExtArgs>
        fields: Prisma.formularioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.formularioFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$formularioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.formularioFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$formularioPayload>
          }
          findFirst: {
            args: Prisma.formularioFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$formularioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.formularioFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$formularioPayload>
          }
          findMany: {
            args: Prisma.formularioFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$formularioPayload>[]
          }
          create: {
            args: Prisma.formularioCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$formularioPayload>
          }
          createMany: {
            args: Prisma.formularioCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.formularioDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$formularioPayload>
          }
          update: {
            args: Prisma.formularioUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$formularioPayload>
          }
          deleteMany: {
            args: Prisma.formularioDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.formularioUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.formularioUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$formularioPayload>
          }
          aggregate: {
            args: Prisma.FormularioAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFormulario>
          }
          groupBy: {
            args: Prisma.formularioGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FormularioGroupByOutputType>[]
          }
          count: {
            args: Prisma.formularioCountArgs<ExtArgs>,
            result: $Utils.Optional<FormularioCountAggregateOutputType> | number
          }
        }
      }
      artigos: {
        payload: Prisma.$artigosPayload<ExtArgs>
        fields: Prisma.artigosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.artigosFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$artigosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.artigosFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$artigosPayload>
          }
          findFirst: {
            args: Prisma.artigosFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$artigosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.artigosFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$artigosPayload>
          }
          findMany: {
            args: Prisma.artigosFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$artigosPayload>[]
          }
          create: {
            args: Prisma.artigosCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$artigosPayload>
          }
          createMany: {
            args: Prisma.artigosCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.artigosDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$artigosPayload>
          }
          update: {
            args: Prisma.artigosUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$artigosPayload>
          }
          deleteMany: {
            args: Prisma.artigosDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.artigosUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.artigosUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$artigosPayload>
          }
          aggregate: {
            args: Prisma.ArtigosAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateArtigos>
          }
          groupBy: {
            args: Prisma.artigosGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ArtigosGroupByOutputType>[]
          }
          count: {
            args: Prisma.artigosCountArgs<ExtArgs>,
            result: $Utils.Optional<ArtigosCountAggregateOutputType> | number
          }
        }
      }
      tags: {
        payload: Prisma.$tagsPayload<ExtArgs>
        fields: Prisma.tagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tagsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tagsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          findFirst: {
            args: Prisma.tagsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tagsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          findMany: {
            args: Prisma.tagsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>[]
          }
          create: {
            args: Prisma.tagsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          createMany: {
            args: Prisma.tagsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.tagsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          update: {
            args: Prisma.tagsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          deleteMany: {
            args: Prisma.tagsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.tagsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.tagsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          aggregate: {
            args: Prisma.TagsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTags>
          }
          groupBy: {
            args: Prisma.tagsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.tagsCountArgs<ExtArgs>,
            result: $Utils.Optional<TagsCountAggregateOutputType> | number
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
   * Models
   */

  /**
   * Model formulario
   */

  export type AggregateFormulario = {
    _count: FormularioCountAggregateOutputType | null
    _min: FormularioMinAggregateOutputType | null
    _max: FormularioMaxAggregateOutputType | null
  }

  export type FormularioMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    created_at: Date | null
  }

  export type FormularioMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    created_at: Date | null
  }

  export type FormularioCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    created_at: number
    _all: number
  }


  export type FormularioMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    created_at?: true
  }

  export type FormularioMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    created_at?: true
  }

  export type FormularioCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    created_at?: true
    _all?: true
  }

  export type FormularioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which formulario to aggregate.
     */
    where?: formularioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formularios to fetch.
     */
    orderBy?: formularioOrderByWithRelationAndSearchRelevanceInput | formularioOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: formularioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formularios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formularios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned formularios
    **/
    _count?: true | FormularioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormularioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormularioMaxAggregateInputType
  }

  export type GetFormularioAggregateType<T extends FormularioAggregateArgs> = {
        [P in keyof T & keyof AggregateFormulario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormulario[P]>
      : GetScalarType<T[P], AggregateFormulario[P]>
  }




  export type formularioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: formularioWhereInput
    orderBy?: formularioOrderByWithAggregationInput | formularioOrderByWithAggregationInput[]
    by: FormularioScalarFieldEnum[] | FormularioScalarFieldEnum
    having?: formularioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormularioCountAggregateInputType | true
    _min?: FormularioMinAggregateInputType
    _max?: FormularioMaxAggregateInputType
  }

  export type FormularioGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string
    created_at: Date
    _count: FormularioCountAggregateOutputType | null
    _min: FormularioMinAggregateOutputType | null
    _max: FormularioMaxAggregateOutputType | null
  }

  type GetFormularioGroupByPayload<T extends formularioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormularioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormularioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormularioGroupByOutputType[P]>
            : GetScalarType<T[P], FormularioGroupByOutputType[P]>
        }
      >
    >


  export type formularioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["formulario"]>

  export type formularioSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    created_at?: boolean
  }


  export type $formularioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "formulario"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string
      created_at: Date
    }, ExtArgs["result"]["formulario"]>
    composites: {}
  }


  type formularioGetPayload<S extends boolean | null | undefined | formularioDefaultArgs> = $Result.GetResult<Prisma.$formularioPayload, S>

  type formularioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<formularioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FormularioCountAggregateInputType | true
    }

  export interface formularioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['formulario'], meta: { name: 'formulario' } }
    /**
     * Find zero or one Formulario that matches the filter.
     * @param {formularioFindUniqueArgs} args - Arguments to find a Formulario
     * @example
     * // Get one Formulario
     * const formulario = await prisma.formulario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends formularioFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, formularioFindUniqueArgs<ExtArgs>>
    ): Prisma__formularioClient<$Result.GetResult<Prisma.$formularioPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Formulario that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {formularioFindUniqueOrThrowArgs} args - Arguments to find a Formulario
     * @example
     * // Get one Formulario
     * const formulario = await prisma.formulario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends formularioFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, formularioFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__formularioClient<$Result.GetResult<Prisma.$formularioPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Formulario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formularioFindFirstArgs} args - Arguments to find a Formulario
     * @example
     * // Get one Formulario
     * const formulario = await prisma.formulario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends formularioFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, formularioFindFirstArgs<ExtArgs>>
    ): Prisma__formularioClient<$Result.GetResult<Prisma.$formularioPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Formulario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formularioFindFirstOrThrowArgs} args - Arguments to find a Formulario
     * @example
     * // Get one Formulario
     * const formulario = await prisma.formulario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends formularioFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, formularioFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__formularioClient<$Result.GetResult<Prisma.$formularioPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Formularios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formularioFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Formularios
     * const formularios = await prisma.formulario.findMany()
     * 
     * // Get first 10 Formularios
     * const formularios = await prisma.formulario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formularioWithIdOnly = await prisma.formulario.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends formularioFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, formularioFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$formularioPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Formulario.
     * @param {formularioCreateArgs} args - Arguments to create a Formulario.
     * @example
     * // Create one Formulario
     * const Formulario = await prisma.formulario.create({
     *   data: {
     *     // ... data to create a Formulario
     *   }
     * })
     * 
    **/
    create<T extends formularioCreateArgs<ExtArgs>>(
      args: SelectSubset<T, formularioCreateArgs<ExtArgs>>
    ): Prisma__formularioClient<$Result.GetResult<Prisma.$formularioPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Formularios.
     *     @param {formularioCreateManyArgs} args - Arguments to create many Formularios.
     *     @example
     *     // Create many Formularios
     *     const formulario = await prisma.formulario.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends formularioCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, formularioCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Formulario.
     * @param {formularioDeleteArgs} args - Arguments to delete one Formulario.
     * @example
     * // Delete one Formulario
     * const Formulario = await prisma.formulario.delete({
     *   where: {
     *     // ... filter to delete one Formulario
     *   }
     * })
     * 
    **/
    delete<T extends formularioDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, formularioDeleteArgs<ExtArgs>>
    ): Prisma__formularioClient<$Result.GetResult<Prisma.$formularioPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Formulario.
     * @param {formularioUpdateArgs} args - Arguments to update one Formulario.
     * @example
     * // Update one Formulario
     * const formulario = await prisma.formulario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends formularioUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, formularioUpdateArgs<ExtArgs>>
    ): Prisma__formularioClient<$Result.GetResult<Prisma.$formularioPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Formularios.
     * @param {formularioDeleteManyArgs} args - Arguments to filter Formularios to delete.
     * @example
     * // Delete a few Formularios
     * const { count } = await prisma.formulario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends formularioDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, formularioDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Formularios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formularioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Formularios
     * const formulario = await prisma.formulario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends formularioUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, formularioUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Formulario.
     * @param {formularioUpsertArgs} args - Arguments to update or create a Formulario.
     * @example
     * // Update or create a Formulario
     * const formulario = await prisma.formulario.upsert({
     *   create: {
     *     // ... data to create a Formulario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Formulario we want to update
     *   }
     * })
    **/
    upsert<T extends formularioUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, formularioUpsertArgs<ExtArgs>>
    ): Prisma__formularioClient<$Result.GetResult<Prisma.$formularioPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Formularios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formularioCountArgs} args - Arguments to filter Formularios to count.
     * @example
     * // Count the number of Formularios
     * const count = await prisma.formulario.count({
     *   where: {
     *     // ... the filter for the Formularios we want to count
     *   }
     * })
    **/
    count<T extends formularioCountArgs>(
      args?: Subset<T, formularioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormularioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Formulario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormularioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FormularioAggregateArgs>(args: Subset<T, FormularioAggregateArgs>): Prisma.PrismaPromise<GetFormularioAggregateType<T>>

    /**
     * Group by Formulario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formularioGroupByArgs} args - Group by arguments.
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
      T extends formularioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: formularioGroupByArgs['orderBy'] }
        : { orderBy?: formularioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, formularioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormularioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the formulario model
   */
  readonly fields: formularioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for formulario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__formularioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the formulario model
   */ 
  interface formularioFieldRefs {
    readonly id: FieldRef<"formulario", 'String'>
    readonly name: FieldRef<"formulario", 'String'>
    readonly email: FieldRef<"formulario", 'String'>
    readonly phone: FieldRef<"formulario", 'String'>
    readonly created_at: FieldRef<"formulario", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * formulario findUnique
   */
  export type formularioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formulario
     */
    select?: formularioSelect<ExtArgs> | null
    /**
     * Filter, which formulario to fetch.
     */
    where: formularioWhereUniqueInput
  }


  /**
   * formulario findUniqueOrThrow
   */
  export type formularioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formulario
     */
    select?: formularioSelect<ExtArgs> | null
    /**
     * Filter, which formulario to fetch.
     */
    where: formularioWhereUniqueInput
  }


  /**
   * formulario findFirst
   */
  export type formularioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formulario
     */
    select?: formularioSelect<ExtArgs> | null
    /**
     * Filter, which formulario to fetch.
     */
    where?: formularioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formularios to fetch.
     */
    orderBy?: formularioOrderByWithRelationAndSearchRelevanceInput | formularioOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for formularios.
     */
    cursor?: formularioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formularios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formularios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of formularios.
     */
    distinct?: FormularioScalarFieldEnum | FormularioScalarFieldEnum[]
  }


  /**
   * formulario findFirstOrThrow
   */
  export type formularioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formulario
     */
    select?: formularioSelect<ExtArgs> | null
    /**
     * Filter, which formulario to fetch.
     */
    where?: formularioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formularios to fetch.
     */
    orderBy?: formularioOrderByWithRelationAndSearchRelevanceInput | formularioOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for formularios.
     */
    cursor?: formularioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formularios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formularios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of formularios.
     */
    distinct?: FormularioScalarFieldEnum | FormularioScalarFieldEnum[]
  }


  /**
   * formulario findMany
   */
  export type formularioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formulario
     */
    select?: formularioSelect<ExtArgs> | null
    /**
     * Filter, which formularios to fetch.
     */
    where?: formularioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formularios to fetch.
     */
    orderBy?: formularioOrderByWithRelationAndSearchRelevanceInput | formularioOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing formularios.
     */
    cursor?: formularioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formularios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formularios.
     */
    skip?: number
    distinct?: FormularioScalarFieldEnum | FormularioScalarFieldEnum[]
  }


  /**
   * formulario create
   */
  export type formularioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formulario
     */
    select?: formularioSelect<ExtArgs> | null
    /**
     * The data needed to create a formulario.
     */
    data: XOR<formularioCreateInput, formularioUncheckedCreateInput>
  }


  /**
   * formulario createMany
   */
  export type formularioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many formularios.
     */
    data: formularioCreateManyInput | formularioCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * formulario update
   */
  export type formularioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formulario
     */
    select?: formularioSelect<ExtArgs> | null
    /**
     * The data needed to update a formulario.
     */
    data: XOR<formularioUpdateInput, formularioUncheckedUpdateInput>
    /**
     * Choose, which formulario to update.
     */
    where: formularioWhereUniqueInput
  }


  /**
   * formulario updateMany
   */
  export type formularioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update formularios.
     */
    data: XOR<formularioUpdateManyMutationInput, formularioUncheckedUpdateManyInput>
    /**
     * Filter which formularios to update
     */
    where?: formularioWhereInput
  }


  /**
   * formulario upsert
   */
  export type formularioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formulario
     */
    select?: formularioSelect<ExtArgs> | null
    /**
     * The filter to search for the formulario to update in case it exists.
     */
    where: formularioWhereUniqueInput
    /**
     * In case the formulario found by the `where` argument doesn't exist, create a new formulario with this data.
     */
    create: XOR<formularioCreateInput, formularioUncheckedCreateInput>
    /**
     * In case the formulario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<formularioUpdateInput, formularioUncheckedUpdateInput>
  }


  /**
   * formulario delete
   */
  export type formularioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formulario
     */
    select?: formularioSelect<ExtArgs> | null
    /**
     * Filter which formulario to delete.
     */
    where: formularioWhereUniqueInput
  }


  /**
   * formulario deleteMany
   */
  export type formularioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which formularios to delete
     */
    where?: formularioWhereInput
  }


  /**
   * formulario without action
   */
  export type formularioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formulario
     */
    select?: formularioSelect<ExtArgs> | null
  }



  /**
   * Model artigos
   */

  export type AggregateArtigos = {
    _count: ArtigosCountAggregateOutputType | null
    _min: ArtigosMinAggregateOutputType | null
    _max: ArtigosMaxAggregateOutputType | null
  }

  export type ArtigosMinAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    img: string | null
    content: string | null
    created_at: Date | null
  }

  export type ArtigosMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    img: string | null
    content: string | null
    created_at: Date | null
  }

  export type ArtigosCountAggregateOutputType = {
    id: number
    slug: number
    title: number
    img: number
    content: number
    created_at: number
    _all: number
  }


  export type ArtigosMinAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    img?: true
    content?: true
    created_at?: true
  }

  export type ArtigosMaxAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    img?: true
    content?: true
    created_at?: true
  }

  export type ArtigosCountAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    img?: true
    content?: true
    created_at?: true
    _all?: true
  }

  export type ArtigosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which artigos to aggregate.
     */
    where?: artigosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of artigos to fetch.
     */
    orderBy?: artigosOrderByWithRelationAndSearchRelevanceInput | artigosOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: artigosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` artigos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` artigos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned artigos
    **/
    _count?: true | ArtigosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtigosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtigosMaxAggregateInputType
  }

  export type GetArtigosAggregateType<T extends ArtigosAggregateArgs> = {
        [P in keyof T & keyof AggregateArtigos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtigos[P]>
      : GetScalarType<T[P], AggregateArtigos[P]>
  }




  export type artigosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: artigosWhereInput
    orderBy?: artigosOrderByWithAggregationInput | artigosOrderByWithAggregationInput[]
    by: ArtigosScalarFieldEnum[] | ArtigosScalarFieldEnum
    having?: artigosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtigosCountAggregateInputType | true
    _min?: ArtigosMinAggregateInputType
    _max?: ArtigosMaxAggregateInputType
  }

  export type ArtigosGroupByOutputType = {
    id: string
    slug: string
    title: string
    img: string
    content: string
    created_at: Date
    _count: ArtigosCountAggregateOutputType | null
    _min: ArtigosMinAggregateOutputType | null
    _max: ArtigosMaxAggregateOutputType | null
  }

  type GetArtigosGroupByPayload<T extends artigosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtigosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtigosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtigosGroupByOutputType[P]>
            : GetScalarType<T[P], ArtigosGroupByOutputType[P]>
        }
      >
    >


  export type artigosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    img?: boolean
    content?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["artigos"]>

  export type artigosSelectScalar = {
    id?: boolean
    slug?: boolean
    title?: boolean
    img?: boolean
    content?: boolean
    created_at?: boolean
  }


  export type $artigosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "artigos"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      title: string
      img: string
      content: string
      created_at: Date
    }, ExtArgs["result"]["artigos"]>
    composites: {}
  }


  type artigosGetPayload<S extends boolean | null | undefined | artigosDefaultArgs> = $Result.GetResult<Prisma.$artigosPayload, S>

  type artigosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<artigosFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ArtigosCountAggregateInputType | true
    }

  export interface artigosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['artigos'], meta: { name: 'artigos' } }
    /**
     * Find zero or one Artigos that matches the filter.
     * @param {artigosFindUniqueArgs} args - Arguments to find a Artigos
     * @example
     * // Get one Artigos
     * const artigos = await prisma.artigos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends artigosFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, artigosFindUniqueArgs<ExtArgs>>
    ): Prisma__artigosClient<$Result.GetResult<Prisma.$artigosPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Artigos that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {artigosFindUniqueOrThrowArgs} args - Arguments to find a Artigos
     * @example
     * // Get one Artigos
     * const artigos = await prisma.artigos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends artigosFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, artigosFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__artigosClient<$Result.GetResult<Prisma.$artigosPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Artigos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {artigosFindFirstArgs} args - Arguments to find a Artigos
     * @example
     * // Get one Artigos
     * const artigos = await prisma.artigos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends artigosFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, artigosFindFirstArgs<ExtArgs>>
    ): Prisma__artigosClient<$Result.GetResult<Prisma.$artigosPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Artigos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {artigosFindFirstOrThrowArgs} args - Arguments to find a Artigos
     * @example
     * // Get one Artigos
     * const artigos = await prisma.artigos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends artigosFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, artigosFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__artigosClient<$Result.GetResult<Prisma.$artigosPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Artigos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {artigosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artigos
     * const artigos = await prisma.artigos.findMany()
     * 
     * // Get first 10 Artigos
     * const artigos = await prisma.artigos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const artigosWithIdOnly = await prisma.artigos.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends artigosFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, artigosFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$artigosPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Artigos.
     * @param {artigosCreateArgs} args - Arguments to create a Artigos.
     * @example
     * // Create one Artigos
     * const Artigos = await prisma.artigos.create({
     *   data: {
     *     // ... data to create a Artigos
     *   }
     * })
     * 
    **/
    create<T extends artigosCreateArgs<ExtArgs>>(
      args: SelectSubset<T, artigosCreateArgs<ExtArgs>>
    ): Prisma__artigosClient<$Result.GetResult<Prisma.$artigosPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Artigos.
     *     @param {artigosCreateManyArgs} args - Arguments to create many Artigos.
     *     @example
     *     // Create many Artigos
     *     const artigos = await prisma.artigos.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends artigosCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, artigosCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Artigos.
     * @param {artigosDeleteArgs} args - Arguments to delete one Artigos.
     * @example
     * // Delete one Artigos
     * const Artigos = await prisma.artigos.delete({
     *   where: {
     *     // ... filter to delete one Artigos
     *   }
     * })
     * 
    **/
    delete<T extends artigosDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, artigosDeleteArgs<ExtArgs>>
    ): Prisma__artigosClient<$Result.GetResult<Prisma.$artigosPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Artigos.
     * @param {artigosUpdateArgs} args - Arguments to update one Artigos.
     * @example
     * // Update one Artigos
     * const artigos = await prisma.artigos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends artigosUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, artigosUpdateArgs<ExtArgs>>
    ): Prisma__artigosClient<$Result.GetResult<Prisma.$artigosPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Artigos.
     * @param {artigosDeleteManyArgs} args - Arguments to filter Artigos to delete.
     * @example
     * // Delete a few Artigos
     * const { count } = await prisma.artigos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends artigosDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, artigosDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artigos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {artigosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artigos
     * const artigos = await prisma.artigos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends artigosUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, artigosUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Artigos.
     * @param {artigosUpsertArgs} args - Arguments to update or create a Artigos.
     * @example
     * // Update or create a Artigos
     * const artigos = await prisma.artigos.upsert({
     *   create: {
     *     // ... data to create a Artigos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artigos we want to update
     *   }
     * })
    **/
    upsert<T extends artigosUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, artigosUpsertArgs<ExtArgs>>
    ): Prisma__artigosClient<$Result.GetResult<Prisma.$artigosPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Artigos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {artigosCountArgs} args - Arguments to filter Artigos to count.
     * @example
     * // Count the number of Artigos
     * const count = await prisma.artigos.count({
     *   where: {
     *     // ... the filter for the Artigos we want to count
     *   }
     * })
    **/
    count<T extends artigosCountArgs>(
      args?: Subset<T, artigosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtigosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Artigos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtigosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArtigosAggregateArgs>(args: Subset<T, ArtigosAggregateArgs>): Prisma.PrismaPromise<GetArtigosAggregateType<T>>

    /**
     * Group by Artigos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {artigosGroupByArgs} args - Group by arguments.
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
      T extends artigosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: artigosGroupByArgs['orderBy'] }
        : { orderBy?: artigosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, artigosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtigosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the artigos model
   */
  readonly fields: artigosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for artigos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__artigosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the artigos model
   */ 
  interface artigosFieldRefs {
    readonly id: FieldRef<"artigos", 'String'>
    readonly slug: FieldRef<"artigos", 'String'>
    readonly title: FieldRef<"artigos", 'String'>
    readonly img: FieldRef<"artigos", 'String'>
    readonly content: FieldRef<"artigos", 'String'>
    readonly created_at: FieldRef<"artigos", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * artigos findUnique
   */
  export type artigosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artigos
     */
    select?: artigosSelect<ExtArgs> | null
    /**
     * Filter, which artigos to fetch.
     */
    where: artigosWhereUniqueInput
  }


  /**
   * artigos findUniqueOrThrow
   */
  export type artigosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artigos
     */
    select?: artigosSelect<ExtArgs> | null
    /**
     * Filter, which artigos to fetch.
     */
    where: artigosWhereUniqueInput
  }


  /**
   * artigos findFirst
   */
  export type artigosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artigos
     */
    select?: artigosSelect<ExtArgs> | null
    /**
     * Filter, which artigos to fetch.
     */
    where?: artigosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of artigos to fetch.
     */
    orderBy?: artigosOrderByWithRelationAndSearchRelevanceInput | artigosOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for artigos.
     */
    cursor?: artigosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` artigos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` artigos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of artigos.
     */
    distinct?: ArtigosScalarFieldEnum | ArtigosScalarFieldEnum[]
  }


  /**
   * artigos findFirstOrThrow
   */
  export type artigosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artigos
     */
    select?: artigosSelect<ExtArgs> | null
    /**
     * Filter, which artigos to fetch.
     */
    where?: artigosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of artigos to fetch.
     */
    orderBy?: artigosOrderByWithRelationAndSearchRelevanceInput | artigosOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for artigos.
     */
    cursor?: artigosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` artigos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` artigos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of artigos.
     */
    distinct?: ArtigosScalarFieldEnum | ArtigosScalarFieldEnum[]
  }


  /**
   * artigos findMany
   */
  export type artigosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artigos
     */
    select?: artigosSelect<ExtArgs> | null
    /**
     * Filter, which artigos to fetch.
     */
    where?: artigosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of artigos to fetch.
     */
    orderBy?: artigosOrderByWithRelationAndSearchRelevanceInput | artigosOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing artigos.
     */
    cursor?: artigosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` artigos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` artigos.
     */
    skip?: number
    distinct?: ArtigosScalarFieldEnum | ArtigosScalarFieldEnum[]
  }


  /**
   * artigos create
   */
  export type artigosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artigos
     */
    select?: artigosSelect<ExtArgs> | null
    /**
     * The data needed to create a artigos.
     */
    data: XOR<artigosCreateInput, artigosUncheckedCreateInput>
  }


  /**
   * artigos createMany
   */
  export type artigosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many artigos.
     */
    data: artigosCreateManyInput | artigosCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * artigos update
   */
  export type artigosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artigos
     */
    select?: artigosSelect<ExtArgs> | null
    /**
     * The data needed to update a artigos.
     */
    data: XOR<artigosUpdateInput, artigosUncheckedUpdateInput>
    /**
     * Choose, which artigos to update.
     */
    where: artigosWhereUniqueInput
  }


  /**
   * artigos updateMany
   */
  export type artigosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update artigos.
     */
    data: XOR<artigosUpdateManyMutationInput, artigosUncheckedUpdateManyInput>
    /**
     * Filter which artigos to update
     */
    where?: artigosWhereInput
  }


  /**
   * artigos upsert
   */
  export type artigosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artigos
     */
    select?: artigosSelect<ExtArgs> | null
    /**
     * The filter to search for the artigos to update in case it exists.
     */
    where: artigosWhereUniqueInput
    /**
     * In case the artigos found by the `where` argument doesn't exist, create a new artigos with this data.
     */
    create: XOR<artigosCreateInput, artigosUncheckedCreateInput>
    /**
     * In case the artigos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<artigosUpdateInput, artigosUncheckedUpdateInput>
  }


  /**
   * artigos delete
   */
  export type artigosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artigos
     */
    select?: artigosSelect<ExtArgs> | null
    /**
     * Filter which artigos to delete.
     */
    where: artigosWhereUniqueInput
  }


  /**
   * artigos deleteMany
   */
  export type artigosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which artigos to delete
     */
    where?: artigosWhereInput
  }


  /**
   * artigos without action
   */
  export type artigosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artigos
     */
    select?: artigosSelect<ExtArgs> | null
  }



  /**
   * Model tags
   */

  export type AggregateTags = {
    _count: TagsCountAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  export type TagsMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
  }

  export type TagsMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
  }

  export type TagsCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    _all: number
  }


  export type TagsMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
  }

  export type TagsMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
  }

  export type TagsCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    _all?: true
  }

  export type TagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tags to aggregate.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationAndSearchRelevanceInput | tagsOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tags
    **/
    _count?: true | TagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagsMaxAggregateInputType
  }

  export type GetTagsAggregateType<T extends TagsAggregateArgs> = {
        [P in keyof T & keyof AggregateTags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTags[P]>
      : GetScalarType<T[P], AggregateTags[P]>
  }




  export type tagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tagsWhereInput
    orderBy?: tagsOrderByWithAggregationInput | tagsOrderByWithAggregationInput[]
    by: TagsScalarFieldEnum[] | TagsScalarFieldEnum
    having?: tagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagsCountAggregateInputType | true
    _min?: TagsMinAggregateInputType
    _max?: TagsMaxAggregateInputType
  }

  export type TagsGroupByOutputType = {
    id: string
    title: string
    slug: string
    _count: TagsCountAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  type GetTagsGroupByPayload<T extends tagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagsGroupByOutputType[P]>
            : GetScalarType<T[P], TagsGroupByOutputType[P]>
        }
      >
    >


  export type tagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
  }, ExtArgs["result"]["tags"]>

  export type tagsSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
  }


  export type $tagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tags"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
    }, ExtArgs["result"]["tags"]>
    composites: {}
  }


  type tagsGetPayload<S extends boolean | null | undefined | tagsDefaultArgs> = $Result.GetResult<Prisma.$tagsPayload, S>

  type tagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tagsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TagsCountAggregateInputType | true
    }

  export interface tagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tags'], meta: { name: 'tags' } }
    /**
     * Find zero or one Tags that matches the filter.
     * @param {tagsFindUniqueArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends tagsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, tagsFindUniqueArgs<ExtArgs>>
    ): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Tags that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {tagsFindUniqueOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends tagsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tagsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindFirstArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends tagsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, tagsFindFirstArgs<ExtArgs>>
    ): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Tags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindFirstOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends tagsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tagsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tags.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tags.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagsWithIdOnly = await prisma.tags.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends tagsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tagsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Tags.
     * @param {tagsCreateArgs} args - Arguments to create a Tags.
     * @example
     * // Create one Tags
     * const Tags = await prisma.tags.create({
     *   data: {
     *     // ... data to create a Tags
     *   }
     * })
     * 
    **/
    create<T extends tagsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, tagsCreateArgs<ExtArgs>>
    ): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tags.
     *     @param {tagsCreateManyArgs} args - Arguments to create many Tags.
     *     @example
     *     // Create many Tags
     *     const tags = await prisma.tags.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends tagsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tagsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tags.
     * @param {tagsDeleteArgs} args - Arguments to delete one Tags.
     * @example
     * // Delete one Tags
     * const Tags = await prisma.tags.delete({
     *   where: {
     *     // ... filter to delete one Tags
     *   }
     * })
     * 
    **/
    delete<T extends tagsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, tagsDeleteArgs<ExtArgs>>
    ): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Tags.
     * @param {tagsUpdateArgs} args - Arguments to update one Tags.
     * @example
     * // Update one Tags
     * const tags = await prisma.tags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends tagsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, tagsUpdateArgs<ExtArgs>>
    ): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tags.
     * @param {tagsDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends tagsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tagsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tags = await prisma.tags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends tagsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, tagsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tags.
     * @param {tagsUpsertArgs} args - Arguments to update or create a Tags.
     * @example
     * // Update or create a Tags
     * const tags = await prisma.tags.upsert({
     *   create: {
     *     // ... data to create a Tags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tags we want to update
     *   }
     * })
    **/
    upsert<T extends tagsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, tagsUpsertArgs<ExtArgs>>
    ): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tags.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends tagsCountArgs>(
      args?: Subset<T, tagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagsAggregateArgs>(args: Subset<T, TagsAggregateArgs>): Prisma.PrismaPromise<GetTagsAggregateType<T>>

    /**
     * Group by Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsGroupByArgs} args - Group by arguments.
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
      T extends tagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tagsGroupByArgs['orderBy'] }
        : { orderBy?: tagsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tags model
   */
  readonly fields: tagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the tags model
   */ 
  interface tagsFieldRefs {
    readonly id: FieldRef<"tags", 'String'>
    readonly title: FieldRef<"tags", 'String'>
    readonly slug: FieldRef<"tags", 'String'>
  }
    

  // Custom InputTypes

  /**
   * tags findUnique
   */
  export type tagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where: tagsWhereUniqueInput
  }


  /**
   * tags findUniqueOrThrow
   */
  export type tagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where: tagsWhereUniqueInput
  }


  /**
   * tags findFirst
   */
  export type tagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationAndSearchRelevanceInput | tagsOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }


  /**
   * tags findFirstOrThrow
   */
  export type tagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationAndSearchRelevanceInput | tagsOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }


  /**
   * tags findMany
   */
  export type tagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationAndSearchRelevanceInput | tagsOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }


  /**
   * tags create
   */
  export type tagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * The data needed to create a tags.
     */
    data: XOR<tagsCreateInput, tagsUncheckedCreateInput>
  }


  /**
   * tags createMany
   */
  export type tagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tags.
     */
    data: tagsCreateManyInput | tagsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * tags update
   */
  export type tagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * The data needed to update a tags.
     */
    data: XOR<tagsUpdateInput, tagsUncheckedUpdateInput>
    /**
     * Choose, which tags to update.
     */
    where: tagsWhereUniqueInput
  }


  /**
   * tags updateMany
   */
  export type tagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tags.
     */
    data: XOR<tagsUpdateManyMutationInput, tagsUncheckedUpdateManyInput>
    /**
     * Filter which tags to update
     */
    where?: tagsWhereInput
  }


  /**
   * tags upsert
   */
  export type tagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * The filter to search for the tags to update in case it exists.
     */
    where: tagsWhereUniqueInput
    /**
     * In case the tags found by the `where` argument doesn't exist, create a new tags with this data.
     */
    create: XOR<tagsCreateInput, tagsUncheckedCreateInput>
    /**
     * In case the tags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tagsUpdateInput, tagsUncheckedUpdateInput>
  }


  /**
   * tags delete
   */
  export type tagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Filter which tags to delete.
     */
    where: tagsWhereUniqueInput
  }


  /**
   * tags deleteMany
   */
  export type tagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tags to delete
     */
    where?: tagsWhereInput
  }


  /**
   * tags without action
   */
  export type tagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
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


  export const FormularioScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    created_at: 'created_at'
  };

  export type FormularioScalarFieldEnum = (typeof FormularioScalarFieldEnum)[keyof typeof FormularioScalarFieldEnum]


  export const ArtigosScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    title: 'title',
    img: 'img',
    content: 'content',
    created_at: 'created_at'
  };

  export type ArtigosScalarFieldEnum = (typeof ArtigosScalarFieldEnum)[keyof typeof ArtigosScalarFieldEnum]


  export const TagsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug'
  };

  export type TagsScalarFieldEnum = (typeof TagsScalarFieldEnum)[keyof typeof TagsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const formularioOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone'
  };

  export type formularioOrderByRelevanceFieldEnum = (typeof formularioOrderByRelevanceFieldEnum)[keyof typeof formularioOrderByRelevanceFieldEnum]


  export const artigosOrderByRelevanceFieldEnum: {
    id: 'id',
    slug: 'slug',
    title: 'title',
    img: 'img',
    content: 'content'
  };

  export type artigosOrderByRelevanceFieldEnum = (typeof artigosOrderByRelevanceFieldEnum)[keyof typeof artigosOrderByRelevanceFieldEnum]


  export const tagsOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug'
  };

  export type tagsOrderByRelevanceFieldEnum = (typeof tagsOrderByRelevanceFieldEnum)[keyof typeof tagsOrderByRelevanceFieldEnum]


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
   * Deep Input Types
   */


  export type formularioWhereInput = {
    AND?: formularioWhereInput | formularioWhereInput[]
    OR?: formularioWhereInput[]
    NOT?: formularioWhereInput | formularioWhereInput[]
    id?: StringFilter<"formulario"> | string
    name?: StringFilter<"formulario"> | string
    email?: StringFilter<"formulario"> | string
    phone?: StringFilter<"formulario"> | string
    created_at?: DateTimeFilter<"formulario"> | Date | string
  }

  export type formularioOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
    _relevance?: formularioOrderByRelevanceInput
  }

  export type formularioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: formularioWhereInput | formularioWhereInput[]
    OR?: formularioWhereInput[]
    NOT?: formularioWhereInput | formularioWhereInput[]
    name?: StringFilter<"formulario"> | string
    email?: StringFilter<"formulario"> | string
    phone?: StringFilter<"formulario"> | string
    created_at?: DateTimeFilter<"formulario"> | Date | string
  }, "id">

  export type formularioOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
    _count?: formularioCountOrderByAggregateInput
    _max?: formularioMaxOrderByAggregateInput
    _min?: formularioMinOrderByAggregateInput
  }

  export type formularioScalarWhereWithAggregatesInput = {
    AND?: formularioScalarWhereWithAggregatesInput | formularioScalarWhereWithAggregatesInput[]
    OR?: formularioScalarWhereWithAggregatesInput[]
    NOT?: formularioScalarWhereWithAggregatesInput | formularioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"formulario"> | string
    name?: StringWithAggregatesFilter<"formulario"> | string
    email?: StringWithAggregatesFilter<"formulario"> | string
    phone?: StringWithAggregatesFilter<"formulario"> | string
    created_at?: DateTimeWithAggregatesFilter<"formulario"> | Date | string
  }

  export type artigosWhereInput = {
    AND?: artigosWhereInput | artigosWhereInput[]
    OR?: artigosWhereInput[]
    NOT?: artigosWhereInput | artigosWhereInput[]
    id?: StringFilter<"artigos"> | string
    slug?: StringFilter<"artigos"> | string
    title?: StringFilter<"artigos"> | string
    img?: StringFilter<"artigos"> | string
    content?: StringFilter<"artigos"> | string
    created_at?: DateTimeFilter<"artigos"> | Date | string
  }

  export type artigosOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    img?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    _relevance?: artigosOrderByRelevanceInput
  }

  export type artigosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: artigosWhereInput | artigosWhereInput[]
    OR?: artigosWhereInput[]
    NOT?: artigosWhereInput | artigosWhereInput[]
    title?: StringFilter<"artigos"> | string
    img?: StringFilter<"artigos"> | string
    content?: StringFilter<"artigos"> | string
    created_at?: DateTimeFilter<"artigos"> | Date | string
  }, "id" | "slug">

  export type artigosOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    img?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    _count?: artigosCountOrderByAggregateInput
    _max?: artigosMaxOrderByAggregateInput
    _min?: artigosMinOrderByAggregateInput
  }

  export type artigosScalarWhereWithAggregatesInput = {
    AND?: artigosScalarWhereWithAggregatesInput | artigosScalarWhereWithAggregatesInput[]
    OR?: artigosScalarWhereWithAggregatesInput[]
    NOT?: artigosScalarWhereWithAggregatesInput | artigosScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"artigos"> | string
    slug?: StringWithAggregatesFilter<"artigos"> | string
    title?: StringWithAggregatesFilter<"artigos"> | string
    img?: StringWithAggregatesFilter<"artigos"> | string
    content?: StringWithAggregatesFilter<"artigos"> | string
    created_at?: DateTimeWithAggregatesFilter<"artigos"> | Date | string
  }

  export type tagsWhereInput = {
    AND?: tagsWhereInput | tagsWhereInput[]
    OR?: tagsWhereInput[]
    NOT?: tagsWhereInput | tagsWhereInput[]
    id?: StringFilter<"tags"> | string
    title?: StringFilter<"tags"> | string
    slug?: StringFilter<"tags"> | string
  }

  export type tagsOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    _relevance?: tagsOrderByRelevanceInput
  }

  export type tagsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: tagsWhereInput | tagsWhereInput[]
    OR?: tagsWhereInput[]
    NOT?: tagsWhereInput | tagsWhereInput[]
    title?: StringFilter<"tags"> | string
    slug?: StringFilter<"tags"> | string
  }, "id">

  export type tagsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    _count?: tagsCountOrderByAggregateInput
    _max?: tagsMaxOrderByAggregateInput
    _min?: tagsMinOrderByAggregateInput
  }

  export type tagsScalarWhereWithAggregatesInput = {
    AND?: tagsScalarWhereWithAggregatesInput | tagsScalarWhereWithAggregatesInput[]
    OR?: tagsScalarWhereWithAggregatesInput[]
    NOT?: tagsScalarWhereWithAggregatesInput | tagsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"tags"> | string
    title?: StringWithAggregatesFilter<"tags"> | string
    slug?: StringWithAggregatesFilter<"tags"> | string
  }

  export type formularioCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    created_at?: Date | string
  }

  export type formularioUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    created_at?: Date | string
  }

  export type formularioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type formularioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type formularioCreateManyInput = {
    id?: string
    name: string
    email: string
    phone: string
    created_at?: Date | string
  }

  export type formularioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type formularioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type artigosCreateInput = {
    id?: string
    slug: string
    title: string
    img: string
    content: string
    created_at?: Date | string
  }

  export type artigosUncheckedCreateInput = {
    id?: string
    slug: string
    title: string
    img: string
    content: string
    created_at?: Date | string
  }

  export type artigosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type artigosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type artigosCreateManyInput = {
    id?: string
    slug: string
    title: string
    img: string
    content: string
    created_at?: Date | string
  }

  export type artigosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type artigosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tagsCreateInput = {
    id?: string
    title: string
    slug: string
  }

  export type tagsUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
  }

  export type tagsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type tagsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type tagsCreateManyInput = {
    id?: string
    title: string
    slug: string
  }

  export type tagsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type tagsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
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

  export type formularioOrderByRelevanceInput = {
    fields: formularioOrderByRelevanceFieldEnum | formularioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type formularioCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
  }

  export type formularioMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
  }

  export type formularioMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
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

  export type artigosOrderByRelevanceInput = {
    fields: artigosOrderByRelevanceFieldEnum | artigosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type artigosCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    img?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
  }

  export type artigosMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    img?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
  }

  export type artigosMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    img?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
  }

  export type tagsOrderByRelevanceInput = {
    fields: tagsOrderByRelevanceFieldEnum | tagsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tagsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
  }

  export type tagsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
  }

  export type tagsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use formularioDefaultArgs instead
     */
    export type formularioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = formularioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use artigosDefaultArgs instead
     */
    export type artigosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = artigosDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tagsDefaultArgs instead
     */
    export type tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tagsDefaultArgs<ExtArgs>

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