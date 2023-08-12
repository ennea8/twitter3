import React from "react";
import {
  WagmiConfig,
  configureChains,
  createClient,
} from "wagmi";
import { publicProvider } from 'wagmi/providers/public'
import { polygonMumbai, baseGoerli } from 'wagmi/chains'
import { connectorsForWallets, RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit'
import {
  // googleWallet,
  // facebookWallet,
  // githubWallet,
  // discordWallet,
  // twitchWallet,
  twitterWallet,
} from '@zerodevapp/wagmi/rainbowkit'

const projectId ={
  baseGoerlri:'65ee46d6-a508-47aa-a90c-4b2ee6ed28e1'
}

//const defaultProjectId = process.env.REACT_APP_ZERODEV_PROJECT_ID || 'b5486fa4-e3d9-450b-8428-646e757c10f6'
const defaultProjectId = projectId.baseGoerlri


const { chains, provider, webSocketProvider } = configureChains(
  // [polygonMumbai],
  [baseGoerli],
  [publicProvider()],
)

const connectors = connectorsForWallets([
  {
    groupName: 'Social',
      wallets: [
        // googleWallet({options: { projectId: defaultProjectId}}),
        // facebookWallet({options: { projectId: defaultProjectId}}),
        // githubWallet({options: { projectId: defaultProjectId }}),
        // discordWallet({options: { projectId: defaultProjectId }}),
        // twitchWallet({options: { projectId: defaultProjectId }}),
        twitterWallet({options: { projectId: defaultProjectId }}),
    ],
  }
]);

const client = createClient({
  autoConnect: false,
  connectors,
  provider,
  webSocketProvider,
})

function ZeroDevWrapper({children}: {children: React.ReactNode}) {
  return (
    <WagmiConfig client={client}>
      <RainbowKitProvider theme={darkTheme()} chains={chains} modalSize="compact">
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default ZeroDevWrapper
