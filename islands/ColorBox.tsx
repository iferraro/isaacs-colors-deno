import type { ColorNode } from "../src/types";

type ColorBoxProps = Omit<ColorNode, "rgb">;

export function ColorBox({ id, name, hex }: ColorBoxProps) {
  return <div className={`bg-[${hex}]`}>{name}</div>;
}
