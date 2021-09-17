// import { useEffect, useState } from "react";
// import Web3 from "web3";

// export const ConnectButton = () => {
//     const [signedIn, setSignedIn] = useState(false);
//     const [walletAddress, setWalletAddress] = useState(null);
//     const [walletBalance, setWalletBalance] = useState(null);

//     useEffect(()=> {
//         signIn();
//     },[])

//     const signIn = async () => {
//         if (typeof window.web3 !== "undefined") {
//           // Use existing gateway
//           window.web3 = new Web3(window.ethereum);
//         } else {
//           // alert("No Ethereum interface injected into browser. Read-only access");
//         }
    
//         window.ethereum
//           .enable()
//           .then(function (accounts) {
//             window.web3.eth.net
//               .getNetworkType()
//               // checks if connected network is mainnet (change this to rinkeby if you wanna test on testnet)
//               .then((network) => {
//                 console.log(network);
//                 if (network != "main") {
//                   alert(
//                     "You are on " +
//                       network +
//                       " network. Change network to mainnet or you won't be able to do anything here"
//                   );
//                 }
//               });
//             let wallet = accounts[0];
//             setWalletAddress(wallet);
//             setSignedIn(true);
//             callContractData(wallet);
//           })
//           .catch(function (error) {
//             // Handle error. Likely the user rejected the login
//             console.error(error);
//           });
//       }


//       async function callContractData(wallet) {
//         let balance = await web3.eth.getBalance(wallet);
//         setWalletBalance(balance)

//       }

//     return (
//         <div>
//         <div className="flex auth my-8 font-bold justify-center items-center vw2">
//           {!signedIn ? (
//             <button
//               onClick={signIn}
//               className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-ma-green-dark hover:bg-ma-green-light"

//             >
//               Connect Wallet
//             </button>
//           ) : (
//               <div>
//             <button
//             className="items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-ma-green-dark hover:bg-ma-green-light"

//             >
//               Wallet Connected
              
//             </button>
//             </div>
//           )}
//         </div>
//         </div>
//     )
// }

import {
  useEthers,
} from "@usedapp/core";
import { useEffect } from "react";
import { useWallet } from "../lib/walletconnector";
import ConnectedWallet from "./ConnectedWallet";

const ConnectButton = () => {
  const { activateBrowserWallet, account, } = useEthers();
  const { wallets, connectedWallet, connect, } = useWallet();

  useEffect(() => {
    localStorage.clear();
  }, []);
  console.log("Connected wallet: ", connectedWallet)
  return (
    <>
      {account ? <ConnectedWallet/> : (
        <>
        <div className="flex flex-col gap-4">

        
          <button
            onClick={() => activateBrowserWallet()}
            className="relative border border-ma-green py-3 px-2  rounded-lg hover:bg-ma-green-light focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            <div className="flex cursor-pointer items-center ">
              <div className="w-full ">Metamask</div>
              <div className="float-right h-10 w-10 py-1">
                <img
                  src={wallets[0].image.src}
                  alt={wallets[0].name}
                  width={wallets[0].image.w}
                  height={wallets[0].image.h}
                />
              </div>
            </div>
          </button>

            <button
              onClick={() => connect(wallets[1].connector)}
              className="relative border outline border-ma-green-dark py-3 px-2 rounded-lg hover:bg-ma-green-light focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              <div className="flex cursor-pointer items-center">
                 <div className="w-full">WalletConnect</div>
              <div className="float-right w-10 h-10 py-2">
                <img
                  src={wallets[1].image.src}
                  alt={wallets[1].name}
                  width={wallets[1].image.w}
                  height={wallets[1].image.h}
                />
              </div>
              </div>
             
            </button>

          </div>
        </>
      )}
    </>
  );
};

export default ConnectButton;
