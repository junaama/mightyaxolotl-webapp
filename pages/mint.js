import Head from "next/head";
import Web3 from "web3";
import { useState, useEffect } from "react";

import { ADDRESS, ABI } from "../config.js";

export default function Mint() {
  // FOR WALLET
  const [signedIn, setSignedIn] = useState(false);

  const [walletAddress, setWalletAddress] = useState(null);

  // FOR MINTING
  const [how_many_AXOLOTLs, set_how_many_AXOLOTLs] = useState(1);

  const [AXOLOTLContract, setAXOLOTLContract] = useState(null);

  // INFO FROM SMART Contract

  const [totalSupply, setTotalSupply] = useState(0);

  const [saleStarted, setSaleStarted] = useState(false);

  const [AXOLOTLPrice, setAXOLOTLPrice] = useState(0);

  useEffect(async () => {
    signIn();
  }, []);

  async function signIn() {
    if (typeof window.web3 !== "undefined") {
      // Use existing gateway
      window.web3 = new Web3(window.ethereum);
    } else {
      alert("No Ethereum interface injected into browser. Read-only access");
    }

    window.ethereum
      .enable()
      .then(function (accounts) {
        window.web3.eth.net
          .getNetworkType()
          // checks if connected network is mainnet (change this to rinkeby if you wanna test on testnet)
          .then((network) => {
            console.log(network);
            if (network != "main") {
              alert(
                "You are on " +
                  network +
                  " network. Change network to mainnet or you won't be able to do anything here"
              );
            }
          });
        let wallet = accounts[0];
        setWalletAddress(wallet);
        setSignedIn(true);
        callContractData(wallet);
      })
      .catch(function (error) {
        // Handle error. Likely the user rejected the login
        console.error(error);
      });
  }

  //

  async function signOut() {
    setSignedIn(false);
  }

  async function callContractData(wallet) {
    // let balance = await web3.eth.getBalance(wallet);
    // setWalletBalance(balance)
    const AXOLOTLContract = new window.web3.eth.Contract(ABI, ADDRESS);
    setAXOLOTLContract(AXOLOTLContract);

    const salebool = await AXOLOTLContract.methods.saleIsActive().call();
    // console.log("saleisActive" , salebool)
    setSaleStarted(salebool);

    const totalSupply = await AXOLOTLContract.methods.totalSupply().call();
    setTotalSupply(totalSupply);

    const AXOLOTLPrice = await AXOLOTLContract.methods.AXOLOTLPrice().call();
    setAXOLOTLPrice(AXOLOTLPrice);
  }

  async function mintAXOLOTL(how_many_AXOLOTLs) {
    if (AXOLOTLContract) {
      const price = Number(AXOLOTLPrice) * how_many_AXOLOTLs;

      const gasAmount = await AXOLOTLContract.methods
        .mintAXOLOTL(how_many_AXOLOTLs)
        .estimateGas({ from: walletAddress, value: price });
      console.log("estimated gas", gasAmount);

      console.log({ from: walletAddress, value: price });

      AXOLOTLContract.methods
        .mintAXOLOTL(how_many_AXOLOTLs)
        .send({ from: walletAddress, value: price, gas: String(gasAmount) })
        .on("transactionHash", function (hash) {
          console.log("transactionHash", hash);
        });
    } else {
      console.log("Wallet not connected");
    }
  }

  return (
    <div className=" m-4">
       <h1 className="text-4xl font font-extrabold sm:text-6xl text-ma-green text-center">
    Coming Soon
  </h1>
    </div>
   
  )

  // return (
  //   <div
  //     id="bodyy"
  //     className="flex flex-col items-center justify-center min-h-screen py-2"
  //   >
  //     <Head>
  //       <link rel="icon" href="/images/favicon.png" />
  //       <meta property="og:title" content="Mighty Axolotl" key="ogtitle" />
  //       <meta
  //         property="og:description"
  //         content="Mighty Axolotl is a generative NFT collection to follow along with _mintLabs tutorial on how to make a generative NFT."
  //         key="ogdesc"
  //       />
  //       <meta property="og:type" content="website" key="ogtype" />
  //       <meta
  //         property="og:url"
  //         content="https://immortalAXOLOTL.com/"
  //         key="ogurl"
  //       />
  //       <meta
  //         property="og:image"
  //         content="https://immortalAXOLOTL.com/images/logo.png"
  //         key="ogimage"
  //       />
  //       <meta
  //         property="og:site_name"
  //         content="https://immortalAXOLOTL.com/"
  //         key="ogsitename"
  //       />
  //       <meta name="twitter:card" content="summary_large_image" key="twcard" />
  //       <meta
  //         property="twitter:domain"
  //         content="https://immortalAXOLOTL.com/"
  //         key="twdomain"
  //       />
  //       <meta
  //         property="twitter:url"
  //         content="https://immortalAXOLOTL.com/"
  //         key="twurl"
  //       />
  //       <meta name="twitter:title" content="Mighty Axolotl's" key="twtitle" />
  //       <meta
  //         name="twitter:description"
  //         content="Mighty Axolotl is a generative NFT collection to follow along with _mintLabs tutorial on how to make a generative NFT."
  //         key="twdesc"
  //       />
  //       <meta
  //         name="twitter:image"
  //         content="https://immortalAXOLOTL.com/images/logo.png"
  //         key="twimage"
  //       />
  //     </Head>

  //     <div>
  //       <div className="flex items-center justify-between w-full border-b-2	pb-6">
  //         <a href="/" className="">
  //           <img
  //             src="images/logo.png"
  //             width="108"
  //             alt=""
  //             className="logo-image"
  //           />
  //         </a>
  //       </div>
  //       <div className="flex auth my-8 font-bold  justify-center items-center vw2">
  //         {!signedIn ? (
  //           <button
  //             onClick={signIn}
  //             className="montserrat inline-block border-2 border-black bg-white border-opacity-100 no-underline hover:text-black py-2 px-4 mx-4 shadow-lg hover:bg-blue-500 hover:text-gray-100"
  //           >
  //             Connect Wallet with Metamask
  //           </button>
  //         ) : (
  //           <p
  //             className="montserrat inline-block border-2 border-black bg-white border-opacity-100 no-underline hover:text-black py-2 px-4 mx-4 shadow-lg hover:bg-blue-500 hover:text-gray-100"
  //           >
  //             Wallet Connected: {walletAddress}
              
  //           </p>
  //         )}
  //       </div>
  //     </div>

  //     <div className="md:w-2/3 w-4/5">
  //       <div className="mt-6 border-b-2 py-6">
  //         <div className="flex flex-col items-center">
  //           <span className="flex PermanentMarker-Regular text-5xl text-white items-center bg-grey-lighter rounded rounded-r-none my-4 ">
  //             TOTAL AXOLOTL'S ADOPTED:{" "}
  //             <span className="text-blau text-6xl">
  //               {" "}
  //               {!signedIn ? <>-</> : <>{totalSupply}</>} / 10000
  //             </span>
  //           </span>

  //           <div id="mint" className="flex justify-around  mt-8 mx-6">
  //             <span className="flex PermanentMarker-Regular text-5xl text-white items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold">
  //               ADOPT
  //             </span>

  //             <input
  //               type="number"
  //               min="1"
  //               max="20"
  //               value={how_many_AXOLOTLs}
  //               onChange={(e) => set_how_many_AXOLOTLs(e.target.value)}
  //               name=""
  //               className="PermanentMarker-Regular pl-4 text-4xl  inline bg-grey-lighter  py-2 font-normal rounded text-grey-darkest  font-bold"
  //             />

  //             <span className="flex PermanentMarker-Regular text-5xl text-white items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold">
  //               AXOLOTL'S!
  //             </span>
  //           </div>
  //           {saleStarted ? (
  //             <button
  //               onClick={() => mintAXOLOTL(how_many_AXOLOTLs)}
  //               className="mt-4 PermanentMarker-Regular text-4xl border-6 bg-blau  text-white hover:text-black p-2 "
  //             >
  //               adopt {how_many_AXOLOTLs} AXOLOTL's for{" "}
  //               {(AXOLOTLPrice * how_many_AXOLOTLs) / 10 ** 18} ETH + GAS
  //             </button>
  //           ) : (
  //             <button className="mt-4 PermanentMarker-Regular text-4xl border-6 bg-blau  text-white hover:text-black p-2 ">
  //               SALE IS NOT ACTIVE OR NO WALLET IS CONNECTED
  //             </button>
  //           )}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}
