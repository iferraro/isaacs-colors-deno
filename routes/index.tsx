import { useSignal } from "@preact/signals";
import colors from "../src/color-list.json" assert { type: "json" };
import { ColorBox } from "../islands/ColorBox";
import { ColorNode } from "../src/types";

export default function Home() {
  console.log(colors, "<- colors");
  return (
    <div className="text-white">
      {colors.map((c: ColorNode) => (
        <ColorBox id={c.id} name={c.name} hex={c.hex} />
      ))}
    </div>
  );
}
