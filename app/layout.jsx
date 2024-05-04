import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "D&D Companion Tool",
  description: "A tool to help geenrate NPCs, quests, and stories for DND",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex items-center justify-center gap-10 border-b-2 border-red-600 bg-black p-3">
          <Link href="/" className="flex items-center justify-center gap-10">
            <div className="flex flex-col items-center">
              <h1 className="font-dndTitle text-4xl text-red-600">Dungeons</h1>
              <h1 className="font-dndTitle text-4xl text-red-600">&</h1>
              <h1 className="font-dndTitle text-4xl text-red-600">Dragons</h1>
            </div>
            <Image
              src="/appLogoMini.png"
              alt="DND Companion App logo"
              width={125}
              height={125}
              unoptimized={true}
            />
            <h1 className="font-dndTitle text-4xl text-white">Companion</h1>
          </Link>
        </nav>
        <nav className="flex justify-around bg-gray-dark">
          <Link
            className="flex flex-1 justify-center text-gray-300 hover:bg-black"
            href="/npc-generator"
          >
            NPC Generator
          </Link>
          <Link
            className="flex flex-1 justify-center text-gray-300 hover:bg-black"
            href="/quest-generator"
          >
            Quest Generator
          </Link>
          <Link
            className="flex flex-1 justify-center text-gray-300 hover:bg-black"
            href="/encounter-generator"
          >
            Encounter Generator
          </Link>
          <Link
            className="flex flex-1 justify-center text-gray-300 hover:bg-black"
            href="/story-generator"
          >
            Story Generator
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
