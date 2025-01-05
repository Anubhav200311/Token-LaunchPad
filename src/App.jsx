import { useState } from 'react'
import './App.css'
import { TokenLaunchpad } from './components/TokenLaunchpad'
import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';

// Default styles that can be overridden by your app
// require('@solana/wallet-adapter-react-ui/styles.css');
function App() {

  return (
    <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
    <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
            <WalletMultiButton />
            <WalletDisconnectButton />
            <TokenLaunchpad></TokenLaunchpad>
        </WalletModalProvider>
    </WalletProvider>
</ConnectionProvider>
  )
}


export default App
