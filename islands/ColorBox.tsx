import type { ColorNode } from "../src/types";

type ColorBoxProps = Omit<ColorNode, "rgb">;

export function ColorBox({ id, name, hex }: ColorBoxProps) {
  return (
    <section className="p-4">
      <div className="w-60 h-32 border-2 border-white">
        <h1 className="-mt-4 text-white text-center bg-black">{name}</h1>
        <div className="w-16 h-8" style={{ backgroundColor: hex }} />
      </div>
    </section>
  );
}
