// pages/index.js

import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative h-screen">
      <div className="flex items-center justify-center h-full">
        <ConnectButton />
      </div>
      <button className="absolute top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
        <Link href="/">Go back</Link>
      </button>
    </main>
  );
}
