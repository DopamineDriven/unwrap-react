import * as React from "react";
import * as Unwrap from "./unwrap";
export * from "./Button";

// export namespace Unwrap{ };


//   export type RecursiveOptional<T> = {
//     [P in keyof T]?: RecursiveOptional<T[P]>;
//   };

//   export type OmitRecursiveOptionalRecursionAgent<T> =
//     T extends RecursiveOptional<infer U> ? U : T;

//   export interface UnwrapInterface {
//     ReactRecursiveUnwrapped: <
//       T extends keyof JSX.IntrinsicElements extends Record<keyof T, infer U>
//         ? Record<keyof U, U>
//         : Record<keyof T, T>
//     >({
//       ...jsxProps
//     }: Partial<
//       OmitRecursiveOptionalRecursionAgent<
//         RecursiveOptional<JSX.IntrinsicElements>
//       >
//     >) => typeof jsxProps;
//     reactRecursiveReturnTypeInferred: ReturnType<
//       Unwrap<UnwrapInterface['ReactRecursiveUnwrapped']>
//     >;

//     UnwrapReactWrapperFunction: (
//       props: OmitRecursiveOptionalRecursionAgent<
//         RecursiveOptional<Unwrap.UnwrapInterface["ReactRecursiveUnwrapped"]>
//       >
//     ) => ReturnType<typeof props>;
//   }

//   export type RectUnwrapped<
//     T extends keyof ReturnType<
//       Unwrap.UnwrapInterface["ReactRecursiveUnwrapped"]
//     >
//   > = {
//     [P in T]?: ReturnType<Unwrap.UnwrapInterface["ReactRecursiveUnwrapped"]>[P];
//   };

//   export type ImplementUnwrapReact<
//     T extends keyof ReturnType<
//       Unwrap.UnwrapInterface["ReactRecursiveUnwrapped"]
//     >,
//     _implements = ({
//       ...props
//     }: Partial<
//       OmitRecursiveOptionalRecursionAgent<
//         RecursiveOptional<JSX.IntrinsicElements>
//       >
//     >) => T extends Record<keyof T, infer U>
//       ? Record<keyof U, U>
//       : Record<keyof T, T>
//   > = T;
