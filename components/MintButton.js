import { useState, useEffect } from "react";
import { utils } from "ethers";
import { Contract } from "@ethersproject/contracts";
import {
  useContractFunction,
  useEthers,
  connectContractToSigner,
} from "@usedapp/core";
import ABI from "../lib/ABI.json";

const contractAddress = "0x0641e7993caF7108077322C654E5d65682e7f477";
const IContract = new utils.Interface(ABI);

const contract = new Contract(contractAddress, IContract);

export default function MintButton() {
  const { account, library, chainId } = useEthers();
  const [selectedAmount, setSelectedAmount] = useState(1);
  const base = 0.02;

const [error, setError] = useState("")
  const [ethPrice, updateEthPrice] = useState(base);
  
  useEffect(() => {
    updateEthPrice(selectedAmount * base);
  }, [selectedAmount]);

  const { state, send } = useContractFunction(contract, "femaleSaleMint", {
    transactionName: "femaleSaleMint",
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
  }, [chainId]);
  let gasLimit;

  const handleMint = async () => {
    if (account === undefined) {
      alert("Connect to your wallet!");
      return;
    }
    if (chainId !== 1) {
      alert("Connect to the Ethereum mainnet!");
      return;
    }
    const signedContract = await connectContractToSigner(
      contract,
      undefined,
      library
    );

    try {
      gasLimit = await signedContract.estimateGas.femaleSaleMint(
        selectedAmount,
        { from: account }
      );
    } catch (error) {
      console.error(error);
    }

    send(selectedAmount, {
      value: utils.parseEther(String(base)),
      gasLimit: gasLimit.add(10_000),
    });
  };

  const handleNoSale = () => {
      alert("Minting hasn't started yet")
  }
  const isDisabled = state.status === "Mining";

  return (
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
        onClick={handleNoSale}
        className="relative border-none outline-none bg-ma-green-dark py-3 px-2 text-white rounded-lg"
        disabled={isDisabled}
      >
        {" "}
        Mint {selectedAmount} - {ethPrice}ETH
      </button>
    </div>
  );
}
