/// <reference path="index.d.ts" />
export declare module Unwrap { type Enumerable<T> = T | Array<T>;
  
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
   reactRecursiveReturnTypeInferred: ReturnType<Unwrap.UnwrapInterface['ReactRecursiveUnwrapped']>;
 
   UnwrapReactWrapperFunction: (
      props: OmitRecursiveOptionalRecursionAgent<
        RecursiveOptional<Unwrap.UnwrapInterface["ReactRecursiveUnwrapped"]>
      >
    ) => ReturnType<typeof props>;
  }
 
  type RectUnwrapped<
    T extends keyof ReturnType<Unwrap.UnwrapInterface["ReactRecursiveUnwrapped"]>
  > = { [P in T]?: ReturnType<Unwrap.UnwrapInterface["ReactRecursiveUnwrapped"]>[P] };
 
 declare  type ImplementUnwrapReact<
    T extends keyof ReturnType<Unwrap.UnwrapInterface["ReactRecursiveUnwrapped"]>,
    _implements = ({
      ...props
    }: Partial<
      OmitRecursiveOptionalRecursionAgent<
        RecursiveOptional<JSX.IntrinsicElements>
      >
    >) => T extends Record<keyof T, infer U>
      ? Record<keyof U, U>
      : Record<keyof T, T>
  > = T;};

 
export default namespace = Unwrap;