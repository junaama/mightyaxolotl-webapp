import { useEffect, useState } from "react";
import Web3 from "web3";
import { INFURA_ADDRESS, ADDRESS, ABI } from "../config.js";
const infuraAddress = INFURA_ADDRESS;

const provider = new Web3.providers.HttpProvider(infuraAddress);
const web3infura = new Web3(provider);
const AXOLOTLContract = new web3infura.eth.Contract(ABI, ADDRESS);

const MintCounter = () => {
  const [total, setTotal] = useState();
  useEffect(() => {
    const getTotalSupply = async () => {
      try {
        let totalSupply = await AXOLOTLContract.methods.totalSupply().call();
        console.log(totalSupply);
        setTotal(totalSupply);
      } catch (error) {
        console.error(error);
      }
    };
    getTotalSupply();
  }, []);
  return (
    <div className=" text-left text-white text-xl m-4">
      <p>{total} / 10000 Minted</p>
    </div>
  );
};

export default MintCounter;
