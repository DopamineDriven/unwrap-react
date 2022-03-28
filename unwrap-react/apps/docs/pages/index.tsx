import { Button } from "unwrap";
import * as Unwrap from "unwrap/unwrap";

export default function Docs({
  div,
  h1,
  button,
  span
}: Unwrap.ReactUnwrapped<"div" | "h1" | "button" | "span">) {
  return (
    <div {...div}>
      <h1 className={"" ?? h1?.className} {...h1}>
        Docs
      </h1>
      <Button
        button={{ "aria-valuetext": "my button!", ...button }}
        span={{ defaultValue: "default value has never felt so 🐙", ...span }}
      />
    </div>
  );
}
