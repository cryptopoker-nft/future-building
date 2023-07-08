import { Homepage } from "./Homepage";

import { EthereumClient, modalConnectors, walletConnectProvider } from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";
  
const chains = [arbitrum, mainnet, polygon];
let wcProjectID = "ac7d670d228dfe2e6e2dda56b4c7082d";
  
// Wagmi client
const { provider } = configureChains(chains, [
walletConnectProvider({ projectId: wcProjectID }),
]);
const wagmiClient = createClient({
autoConnect: true,
connectors: modalConnectors({
    projectId: wcProjectID,
    version: "1", // or "2"
    appName: "web3Modal",
    chains,
}),
provider,
});

const ethereumClient = new EthereumClient(wagmiClient, chains);

export function SetupHome() {
    return (
      <>
        <WagmiConfig client={wagmiClient}>
          <Homepage />
        </WagmiConfig>
  
        <Web3Modal
          projectId={wcProjectID}
          ethereumClient={ethereumClient}
        />
      </>
    );
  }