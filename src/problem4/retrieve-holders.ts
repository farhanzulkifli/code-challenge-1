import { JsonRpcProvider } from "@ethersproject/providers";
import { BigNumber, Contract, ethers } from "ethers";

const addresses: string[] = [
  `0x123d475e13aa54a43a7421d94caa4459da021c77`,
  `0x0020c5222a24e4a96b720c06b803fb8d34adc0af`,
  `0xfe808b079187cc460f47374580f5fb47c82b87a5`,
];
const tokenAddress: string = `0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c`;
const abi: string = require(`./abi.json`);
const provider: JsonRpcProvider = new ethers.providers.JsonRpcProvider(
  `https://bsc-dataseed.binance.org/`
);
const contract: Contract = new ethers.Contract(tokenAddress, abi, provider);
let results: string[] = [];

const retrieveHolders = async (): Promise<void> => {
  for (let i = 0; i < addresses.length; i++) {
    try {
      const getBalance: BigNumber = await contract.balanceOf(addresses[i]);
      const resultsString: string = `${addresses[i]} ${ethers.utils.formatUnits(
        getBalance,
        8
      )}`;
      results.push(resultsString); //stored in array for future use/reference
      console.log(resultsString)
    } catch (err) {
      console.log(err);
    }
  }
};

retrieveHolders()
