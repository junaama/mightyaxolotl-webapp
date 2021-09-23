import { useState, useEffect } from "react";
import { utils } from "ethers";
import { Contract } from "@ethersproject/contracts";
import {
  useContractFunction,
  useEthers,
  connectContractToSigner,
} from "@usedapp/core";
import ABI from "../lib/ABI.json";
import ErrorModal from "./ErrorModal";
const contractAddress = "0x027DB5D422A898E342bC0Af63Fba8C5Eeb437A8E";
const IContract = new utils.Interface(ABI);

const contract = new Contract(contractAddress, IContract);

export default function MintButton() {
  const { account, library, chainId } = useEthers();
  const [selectedAmount, setSelectedAmount] = useState(1);
  const base = 0.02;
  const [isOpen, setIsOpen] = useState(false)
  const [errorMsg, setError] = useState("")
  const [ethPrice, updateEthPrice] = useState(base);

  useEffect(() => {
    updateEthPrice(selectedAmount * base);
  }, [selectedAmount]);

  const { state, send } = useContractFunction(contract, "mint", {
    transactionName: "Mighty Mint",
  });

  useEffect(() => {
    if (state.errorMessage) {
      alert(state.errorMessage);
    }
  }, [state]);

  useEffect(() => {
    if (account !== undefined && chainId !== 1) {
      alert("Connect to the Ethereum mainnet!");
    }
  }, []);

  let gasLimit;

  const handleMint = async () => {
    if (account === undefined) {
      setError("Connect to your wallet!");
      setIsOpen(true)
      // alert("Connect to your wallet!");
      return;
    }
    if (chainId !== 1) {
      setError("Connect to the Ethereum mainnet!");
      setIsOpen(true)
      return;
    }
    const signedContract = await connectContractToSigner(
      contract,
      undefined,
      library
    );
    try {
      gasLimit = await signedContract.estimateGas.mint(selectedAmount, {
        value: utils.parseEther(String(ethPrice)),
        from: account,
      });
    } catch (error) {
      setError(error.error.message);
      setIsOpen(true)
      return;
      //console.error(error);
    }
    send(selectedAmount, {
      value: utils.parseEther(String(ethPrice)),
      gasLimit: gasLimit.add(5_000),
    });
  };
 
  const handlePreSaleMint = async () => {
    
    if (account === undefined) {
      setError("Connect to your wallet!");
      setIsOpen(true)
      // alert("Connect to your wallet!");
      return;
    }
    if (chainId !== 1) {
      setError("Connect to the Ethereum mainnet!");
      setIsOpen(true)
      // alert("Connect to the Ethereum mainnet!");
      return;
    }
    const signedContract = await connectContractToSigner(
      contract,
      undefined,
      library
    );

    try {
      gasLimit = await signedContract.estimateGas.mint(selectedAmount, {
        value: utils.parseEther(String(ethPrice)),
        from: account,
      });
     

    } catch (error) {
      setError(error.error.message);
      setIsOpen(true)
      return;
    }
    
    send(selectedAmount, {
      value: utils.parseEther(String(ethPrice)),
      gasLimit: gasLimit.add(5_000),
    });
  };

  const handleNoSale = () => {
    setError("Minting period is closed");
      setIsOpen(true)
      return;
  };
  const isDisabled = state.status === "Mining";

  return (
    <>
        {isOpen ? (<ErrorModal errorMessage={errorMsg} isOpen={isOpen} setIsOpen={setIsOpen}/>) : ""}

    <div className="flex flex-row items-baseline mb-4">
      <select
        className="border border-white py-2 px-8 rounded-lg bg-transparent text-white outline-0 appearance-none bg-no-repeat mr-3"
        style={{
          backgroundImage: "url(chevrondown.svg)",
          backgroundPositionX: "95%",
          backgroundPositionY: "center",
        }}
        onChange={(e) => setSelectedAmount(e.target.value)}
        defaultValue={selectedAmount}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
      </select>
      <button
        onClick={handleMint}
        className="relative border-none outline-none bg-ma-green-dark py-3 px-2 text-white rounded-lg"
        disabled={isDisabled}
      >
        {" "}
        Mint {selectedAmount} - {ethPrice}ETH
      </button>
    </div>
    </>
  );
}
