import { INFURA_ADDRESS, ADDRESS, ABI } from "../../config.js";
import Web3 from "web3";

// @DEV Import JSON metadata - switch to different method later
import traits from "../../database/traits.json";

const infuraAddress = INFURA_ADDRESS;

const AXOLOTLApi = async (req, res) => {
  // CONNECT TO SMART CONTRACT
  const provider = new Web3.providers.HttpProvider(infuraAddress);
  const web3infura = new Web3(provider);
  const AXOLOTLContract = new web3infura.eth.Contract(ABI, ADDRESS);

  // IF YOU ARE USING INSTA REVEAL MODEL, USE THIS TO GET HOW MANY NFTS ARE MINTED
  //   const totalSupply = await AXOLOTLContract.methods.totalSupply().call();
  //   console.log(totalSupply)

  // THE ID YOU ASKED IN THE URL
  const query = req.query.id;

  // IF YOU ARE USING INSTA REVEAL MODEL, UNCOMMENT THIS AND COMMENT THE TWO LINES BELOW
  //   if(parseInt(query) < totalSupply) {
  const totalAXOLOTLs = 10000;
  if (parseInt(query) < totalAXOLOTLs) {
    // CALL CUSTOM TOKEN NAME IN THE CONTRACT
    const tokenNameCall = await AXOLOTLContract.methods.AXOLOTLNames(query).call();
    let tokenName = `#${query}${
      tokenNameCall === "" ? "" : ` - ${tokenNameCall}`
    }`;

    // IF YOU ARE NOT USING CUSTOM NAMES, JUST USE THIS
    // let tokenName= `#${query}`

    const signatures = [40, 405, 340];
    const trait = traits[parseInt(query)];
    // const trait = traits[ Math.floor(Math.random() * 8888) ] // for testing on rinkeby

    // CHECK OPENSEA METADATA STANDARD DOCUMENTATION https://docs.opensea.io/docs/metadata-standards
    let metadata = {};
    // IF THE REQUESTED TOKEN IS A SIGNATURE, RETURN THIS METADATA
    if (signatures.includes(parseInt(query))) {
      metadata = {
        name: tokenName,
        description:
          "Mighty Axolotl is a generative NFT collection.",
        tokenId: parseInt(query),
        image: `https://gateway.pinata.cloud/ipfs/${trait["imageIPFS"]}`,
        external_url: "https://www.mightyaxolotl.com/api",
        attributes: [
          {
            trait_type: "Signature Series",
            value: trait["Signature Series"],
          },
        ],
      };
    } else {
      // GENERAL AXOLOTL METADATA
      metadata = {
        name: tokenName,
        description:
          "Mighty Axolotl is a generative NFT collection to follow along with _mintLabs tutorial on how to make a generative NFT.",
        tokenId: parseInt(query),
        image: `https://gateway.pinata.cloud/ipfs/${trait["imageIPFS"]}`,
        external_url: "https://www.mightyaxolotl.com/api",
        attributes: [
        // SCHEMA
        /**
         * <Object>
         * trait_type: "trait_name",
         * value: trait["trait_name"]
         * <Object>
         */
        ],
      };

    }

    res.statusCode = 200;
    res.json(metadata);
  } else {
    res.statuscode = 404;
    res.json({ error: "The AXOLOTL you requested is out of range" });
  }

};

export default nftAPI;
