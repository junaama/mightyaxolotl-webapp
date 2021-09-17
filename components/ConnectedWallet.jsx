

import {
    useEthers,
    shortenAddress,
    useEtherBalance,
    useLookupAddress,
  } from "@usedapp/core";
  import { formatEther } from "ethers/lib/utils";

  
  const ConnectedWallet = () => {
    const { account, deactivate } = useEthers();
    const etherBalance = useEtherBalance(account);
    const ens = useLookupAddress();
  
      return (
            <div className="flex flex-row align-center ">
              <div className="bg-ma-green-dark text-white px-2 py-3 rounded-l-md ">
                {etherBalance && (
                  <p> {parseFloat(formatEther(etherBalance)).toFixed(3)} ETH </p>
                )}
              </div>
              <button
                onClick={() => deactivate()}
                className="relative outline-none border-none bg-ma-green-light text-black px-2 py-3 rounded-r-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
              >
                {ens ?? shortenAddress(account)}
              </button>{" "}
            </div>
          )
  }

  export default ConnectedWallet;