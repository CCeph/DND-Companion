import Image from "next/image";
import ToolCard from "./_components/ToolCard";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="m-5 grid grid-cols-1 gap-16 lg:grid-cols-2">
        <ToolCard
          toolName={"NPC Generator"}
          imageLink={"/npc-merchants.jpeg"}
          odd={true}
          link={"/npc-generator"}
        />
        <ToolCard
          toolName={"Quest Generator"}
          imageLink={"/dragon.png"}
          link={"/quest-generator"}
        />
        <ToolCard
          toolName={"Story Generator"}
          imageLink={"/story.png"}
          link={"/story-generator"}
        />
      </div>
    </div>
  );
}
