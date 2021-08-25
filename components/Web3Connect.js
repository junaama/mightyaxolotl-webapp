import { useEffect, useState } from "react";
import Web3 from "web3";

export const Web3Connect = () => {
    const [signedIn, setSignedIn] = useState(false);
    const [walletAddress, setWalletAddress] = useState(null);
    const [walletBalance, setWalletBalance] = useState(null);

    useEffect(()=> {
        signIn();
    })

    const signIn = async () => {
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


      async function callContractData(wallet) {
        let balance = await web3.eth.getBalance(wallet);
        setWalletBalance(balance)

        // const inuContract = new window.web3.eth.Contract(ABI, ADDRESS);
        // setInuContract(inuContract);
    
        // const salebool = await inuContract.methods.saleIsActive().call();
        // // console.log("saleisActive" , salebool)
        // setSaleStarted(salebool);
    
        // const totalSupply = await inuContract.methods.totalSupply().call();
        // setTotalSupply(totalSupply);
    
        // const inuPrice = await inuContract.methods.inuPrice().call();
        // setInuPrice(inuPrice);
      }

    return (
        <div>
        <div className="flex auth my-8 font-bold justify-center items-center vw2">
          {!signedIn ? (
            <button
              onClick={signIn}
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-ma-green-dark hover:bg-ma-green-light"

            >
              Connect Wallet with Metamask
            </button>
          ) : (
              <div>
            <button
            className="items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-ma-green-dark hover:bg-ma-green-light"

            >
              Wallet Connected
              
            </button>
            </div>
          )}
        </div>
        </div>
    )
}