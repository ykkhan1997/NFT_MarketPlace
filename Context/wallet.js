import React from 'react';
//Import 
import {
    getDefaultWallets,
    RainbowKitProvider,
  } from '@rainbow-me/rainbowkit';
import { configureChains,createConfig,WagmiConfig } from 'wagmi';
import { polygonMumbai,mainnet,hardhat,goerli,polygon } from 'viem/chains';
import {alchemyProvider} from "wagmi/providers/alchemy";
import { publicProvider } from 'wagmi/providers/public';
//Configure
const {chains,publicClient}=configureChains([mainnet,polygon,polygonMumbai,hardhat],
    [publicProvider()]
    );
const {connectors}=getDefaultWallets({
    appName:"Nft MarketPlace",
    projectId:"f880097d97713804b25b9332323d903d",
    chains
});
const wagmiConfig=createConfig({
    autoConnect:true,
    connectors,
    publicClient
});
const WalletConnection = ({children}) => {
  return (
    <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains} modalSize='compact' coolMode>
            {children}
        </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default WalletConnection