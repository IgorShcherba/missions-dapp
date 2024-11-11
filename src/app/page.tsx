"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

export default function Home() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  const { disconnect } = useDisconnect();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {!isConnected ? (
        <button
          className="text-black bg-white hover:bg-gray-100 active:bg-gray-200 px-4 py-2 rounded-lg font-medium transition-colors duration-200"
          onClick={() => connect()}
        >
          Connect Wallet
        </button>
      ) : (
        <div>
          <p>Connected to {address}</p>
          <button
            className="text-black bg-white hover:bg-gray-100 active:bg-gray-200 px-4 py-2 rounded-lg font-medium transition-colors duration-200"
            onClick={() => disconnect()}
          >
            Disconnect
          </button>
        </div>
      )}
    </div>
  );
}
