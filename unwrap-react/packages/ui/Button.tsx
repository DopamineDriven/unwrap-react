import * as React from "react";
export const Button = ({
  button,
  span
}: Unwrap.ReactUnwrapped<"button" | "span">) => {
  return (
    <button {...button}>
      Boop{" "}
      <span {...span} className="sr-only">
        Did you a heckin inject
      </span>
      
    </button>
  );
};
