import { useSignal } from "@preact/signals";
import colors from "../src/color-list.json" assert { type: "json" };
import { ColorBox } from "../islands/ColorBox";
import { ColorNode } from "../src/types";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-8">
      {colors.map((color: ColorNode) => <ColorBox key={color.id} {...color} />)}
    </div>
  );
}
