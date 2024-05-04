import Image from "next/image";
import ToolCard from "./_components/ToolCard";

export default function Home() {
  return (
    <div className="m-5 flex flex-1 items-center justify-center">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
        <ToolCard
          toolName={"NPC Generator"}
          imageLink={"/npc-merchants.jpeg"}
        />
        <ToolCard toolName={"Quest Generator"} imageLink={"/dragon.png"} />
        <ToolCard
          toolName={"Story Generator"}
          imageLink={"/story.png"}
          odd={true}
        />
      </div>
      {/* If there is an odd number of items, place the last one in the flex div below */}
      <div className="oddItem flex justify-center"></div>
    </div>
  );
}
