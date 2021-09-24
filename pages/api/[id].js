import { INFURA_ADDRESS, ADDRESS, ABI } from "../../config.js";
import Web3 from "web3";

import features from "../../traits/features.json";

const infuraAddress = INFURA_ADDRESS;
// const totalAxo = 10000;

const AXOLOTLApi = async (req, res) => {
  const provider = new Web3.providers.HttpProvider(infuraAddress);
  const web3infura = new Web3(provider);
  const AXOLOTLContract = new web3infura.eth.Contract(ABI, ADDRESS);

  const totalSupply = await AXOLOTLContract.methods.totalSupply().call();
  
  const query = req.query.id;

  if (parseInt(query) < totalSupply) {
    
    let tokenName = `Mighty Axolotl #${query}`;
    const feature = features[parseInt(query)];

  
    let featureAttribute = [
      {
        trait_type: "Background",
        value: feature["Backgrounds"]
      },
      {
        trait_type: "Skin",
        value: feature["Skins"]
      },
      {
        trait_type: "Eyes",
        value: feature["Eyes"]
      },
      {
        trait_type: "Mouth",
        value: feature["Mouths"]
      }
    ];

    if (feature.hasOwnProperty("Headwears")) {
      featureAttribute.push({
        trait_type: "Headwear",
        value: feature["Headwears"],
      });
    }
    if (feature.hasOwnProperty("Drapery")) {
      featureAttribute.push({
        trait_type: "Drapery",
        value: feature["Drapery"],
      });
    }
    if (feature.hasOwnProperty("Vest")) {
      featureAttribute.push({
        trait_type: "Vest",
        value: feature["Vest"],
      });
    }
    if (feature.hasOwnProperty("Smudges")) {
      featureAttribute.push({
        trait_type: "Smudges",
        value: feature["Smudges"],
      });
    }
   
    let metadata = {
      name: tokenName,
      description: "Your cute yet mighty axolotl - ready to guard the species!",
      tokenId: parseInt(query),
      image: `https://gateway.pinata.cloud/ipfs/${feature["imageIPFS"]}`,
      external_url: "https://www.mightyaxolotl.com/api/" + query,
      attributes: featureAttribute
    };

    res.statusCode = 200;
    res.json(metadata);
  } else {
    res.statuscode = 404;
    res.json({ error: "The AXOLOTL you requested is out of range" });
  }
};

export default AXOLOTLApi;
