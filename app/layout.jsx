import { Inter } from "next/font/google";
import Image from "next/image";
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
        </nav>
        {children}
      </body>
    </html>
  );
}
