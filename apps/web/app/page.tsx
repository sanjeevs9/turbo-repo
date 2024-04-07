import Image from "next/image";
import { Card } from "@repo/ui/card";
import { Code } from "@repo/ui/code";
import styles from "./page.module.css";
import { Button } from "@repo/ui/button";
import { Admin } from "@repo/ui/admin";

function Gradient({
  conic,
  className,
  small,
}: {
  small?: boolean;
  conic?: boolean;
  className?: string;
}): JSX.Element {
  return (
    <span
      className={[
        styles.gradient,
        conic ? styles.glowConic : undefined,
        small ? styles.gradientSmall : styles.gradientLarge,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
}


export default function Page(): JSX.Element {
  return (
    <>
      <Button appName="web" className={styles.button}>
        Click me!
      </Button>
      <Admin admin="helloooooooo brooooooooooo"></Admin>
      </>

  
  );
}
