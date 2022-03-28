export declare module Unwrap {
  /**
   * @type ExciseEnumerble<T> = T extends Array<infer U> ? U : T;
   * @description if T encounters a configuration of the Array variety then and only then will
   * it extend the Array (T in Array<infer U> ) infer the child type U within;
   * if no array is present T is returned unchanged
   */
  type ExciseEnumerble<T> = T extends Array<infer U> ? U : T;

  type Enumerable<T> = T extends Array<infer U> | infer U
    ? Array<U> | U
    : Array<T> | T;

  type RecursiveOptional<T> = { [P in keyof T]?: RecursiveOptional<T[P]> };

  type OmitRecursiveOptionalRecursionAgent<T> = T extends RecursiveOptional<
    infer U
  >
    ? U
    : T;
  interface UnwrapInterface {
    ReactRecursiveUnwrapped: <
      T extends keyof JSX.IntrinsicElements extends Record<keyof T, infer U>
        ? Record<keyof U, U>
        : Record<keyof T, T>
    >({
      ...jsxProps
    }: Partial<
      OmitRecursiveOptionalRecursionAgent<
        RecursiveOptional<JSX.IntrinsicElements>
      >
    >) => typeof jsxProps;
    reactRecursiveReturnTypeInferred: ReturnType<
      Unwrap.UnwrapInterface["ReactRecursiveUnwrapped"]
    >;

    UnwrapReactWrapperFunction: (
      props: OmitRecursiveOptionalRecursionAgent<
        RecursiveOptional<Unwrap.UnwrapInterface["ReactRecursiveUnwrapped"]>
      >
    ) => ReturnType<typeof props>;
  }

  type ReactUnwrapped<
    T extends keyof ReturnType<
      Unwrap.UnwrapInterface["ReactRecursiveUnwrapped"]
    >
  > = {
    [P in T]?: ReturnType<Unwrap.UnwrapInterface["ReactRecursiveUnwrapped"]>[P];
  };

  type ImplementUnwrapReact<
    T extends keyof ReturnType<
      Unwrap.UnwrapInterface["ReactRecursiveUnwrapped"]
    >,
    _implements = ({
      ...props
    }: Partial<
      OmitRecursiveOptionalRecursionAgent<
        RecursiveOptional<JSX.IntrinsicElements>
      >
    >) => typeof props
  > = T;

  /* interface with all optional values to accept ONLY one of them */
  type ConditionalSansOne<T, Keys extends keyof T = keyof T> = Pick<
    T,
    Exclude<keyof T, Keys>
  > &
    {
      [K in Keys]-?: Required<Pick<T, K>> &
        Partial<Record<Exclude<Keys, K>, undefined>>;
    }[Keys];
}
// map out the children props of each recursed JSX.IntrinsicElement via
// an additional round of conditional recursion for type deepening
// @ts-ignore:export-just-namespace
export = Unwrap;
export as namespace Unwrap;
export default namespace = Unwrap;
