import { useEthers } from "@usedapp/core";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useEffect, useState } from "react";
import { INFURA_ADDRESS, RINKEBY_INFURA_ADDRESS } from "../config";

let activeChain = parseInt(process.env.NEXT_PUBLIC_ACTIVE_CHAINID ?? "1");

const walletconnect = new WalletConnectConnector({
  rpc: { 1: INFURA_ADDRESS, 4: RINKEBY_INFURA_ADDRESS },
});
const injected = new InjectedConnector({ supportedChainIds: [activeChain] });

const wallets = [
  {
    name: "Metamask",
    connector: injected,
    image: {
      w: 377,
      h: 345,
      src: "/logo-metamask.png",
    },
  },
  
  {
    name: "WalletConnect",
    connector: walletconnect,
    image: {
      w: 300,
      h: 300,
      src: "/logo-walletconnect.svg",
    },
  },
];

export function useWallet(){
  const { activate, chainId } = useEthers();
  const [error, setError] = useState();
  const [connectedWallet, setConnectedWallet] = useState();

  useEffect(() => {
    setError(undefined);
  }, [chainId]);

  function onError(e) {
    setError(e);
  }

  useEffect(() => {
    void injected.isAuthorized().then((isAuthorized) => {
      if (isAuthorized) {
        connect(injected);
      }
    });
  }, []);

  function connect(wallet) {
    void activate(wallet, onError);
    const w = wallets.find((w) => w.connector === wallet);
    setConnectedWallet(w);
  }

  return { wallets, connectedWallet, connect, error };
}