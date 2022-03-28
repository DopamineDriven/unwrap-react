import Image, { ImageProps } from "next/image";
import { Button, ExpressVpn } from "unwrap";
import Unwrap from "unwrap/unwrap"; // monorepo namespace declaration transpiled as a pkg in node_modules 🚀 
import turboIntellisense from "../public/turbo-ftw.png";

const Web = ({
  button,
  div,
  h1,
  pre,
  span
}: Unwrap.ReactUnwrapped<"h1" | "div" | "pre" | "button" | "span">) => {
  return (
    <div className={div?.className ?? ""} {...div}>
      <Image
        alt={turboIntellisense.src}
        placeholder="blur"
        objectFit="cover"
        layout="responsive"
        src={turboIntellisense.src}
        width={turboIntellisense.width}
        height={turboIntellisense.height}
        blurDataURL={turboIntellisense.blurDataURL}
      />
      <h1 {...h1}>Web</h1>
      <Button
        button={{
          onLoad: e => {
            e.preventDefault();
            // Video Killed the Radio Star
          },
          ...button
        }}
        span={{
          "aria-valuetext":
            span?.["aria-valuetext"]?.includes("Did you a heckin inject")
              ? span?.["aria-valuetext"].replace("Did you a heckin inject", "Such Turbo, Many Repo")
              : undefined,
          ...span
        }}
      />
      <ExpressVpn svg={{width: 24, height: 24}}/>
      <pre lang="typescript" {...pre}>
        {JSON.stringify(
          {
            code: JSON.stringify(
              `
                const ExpressVpn: FC<{
                  a?: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> | undefined;
                  ... 173 more ...;
                  view?: SVGProps<...> | undefined;
                }>
              `,
              null,
              2
            )
          },
          null,
          2
        )}
      </pre>
    </div>
  );
};
export default Web;
