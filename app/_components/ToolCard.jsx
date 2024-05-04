import Image from "next/image";
import Link from "next/link";

export default function ToolCard({ toolName, imageLink, odd, link }) {
  return (
    <Link
      className={
        "relative overflow-hidden rounded-lg text-gray-300 hover:text-white " +
        (odd && " lg:col-start-1 lg:col-end-3 lg:justify-self-center ")
      }
      href={link}
    >
      <Image
        className="object-cover transition-transform duration-300 hover:scale-110"
        src={imageLink}
        alt="DND Companion App logo"
        width={350}
        height={350}
      />
      <h2 className="absolute bottom-0 flex h-28 w-full items-center justify-center bg-gray-dark bg-opacity-75 p-4 text-center text-3xl font-bold lg:h-auto">
        {toolName}
      </h2>
    </Link>
  );
}
