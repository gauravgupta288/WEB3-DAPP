import React, { FC, useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";

// Default styles that can be overridden by your app
import "@solana/wallet-adapter-react-ui/styles.css";
import { RequestAirdrop } from "./Components/RequestAirdrop";
import { ShowBalance } from "./Components/ShowBalance";
import { SendTokens } from "./Components/SendTokens";

function App() {
  return (
    <ConnectionProvider endpoint="https://api.devnet.solana.com">
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div style={{width:"100vw", display : "flex", justifyContent : "center"}}>
            <WalletMultiButton />
            {/* <RequestAirdrop></RequestAirdrop> */}
            {/* <ShowBalance /> */}
            <SendTokens></SendTokens>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
