"use client";

import { createClient, WagmiConfig } from "wagmi";

import { providers } from "ethers";

import { ColonyRpcEndpoint } from "@colony/sdk";

export const config = createClient({
  autoConnect: true,
  provider: new providers.JsonRpcProvider(ColonyRpcEndpoint.Gnosis),
});

export const WagmiProvider = ({ children }: { children: React.ReactNode }) => {
  return <WagmiConfig client={config}>{children}</WagmiConfig>;
};
