/// <reference types="react" />
/// <reference types="unwrap" />
// tslint:disable-next-line:export-just-namespace

// @ts-ignore:export-just-namespace
export = Unwrap;
export as namespace Unwrap;
export declare namespace Unwrap {
 export type Enumerable<T> = T | Array<T>;
  
 export type RecursiveOptional<T> = { [P in keyof T]?: RecursiveOptional<T[P]> };

 export type OmitRecursiveOptionalRecursionAgent<T> = T extends RecursiveOptional<
    infer U
  >
    ? U
    : T;
  
 export interface UnwrapInterface {
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

  export declare type RectUnwrapped<
    T extends keyof ReturnType<Unwrap.UnwrapInterface["ReactRecursiveUnwrapped"]>
  > = { [P in T]?: ReturnType<Unwrap.UnwrapInterface["ReactRecursiveUnwrapped"]>[P] };

export declare  type ImplementUnwrapReact<
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
  > = T;
}

export default namespace= Unwrap;