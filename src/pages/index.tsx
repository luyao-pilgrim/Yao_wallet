// pages/index.js

import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Home() {
  return (
    <main className="relative h-screen p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
        <Link href="/connect-wallet">
          <div className="block p-6 bg-white rounded-lg shadow-md hover:bg-gray-100">
            <h2 className="text-2xl font-bold mb-2">Connect Wallet</h2>
            <p>Go to Connect Wallet</p>
          </div>
        </Link>
      </div>
    </main>
  );
}

