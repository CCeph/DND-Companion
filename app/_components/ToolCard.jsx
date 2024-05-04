import Image from "next/image";

export default function ToolCard({ toolName }) {
  return (
    <div className="relative overflow-hidden rounded-lg text-gray-300 hover:text-white">
      <Image
        className="transition-transform duration-300 hover:scale-110"
        src="/npc-merchants.jpeg"
        alt="DND Companion App logo"
        width={350}
        height={350}
      />
      <h2 className="absolute bottom-0 flex h-28 w-full items-center justify-center bg-gray-dark bg-opacity-75 p-4 text-center text-3xl font-bold lg:h-auto">
        {toolName}
      </h2>
    </div>
  );
}
