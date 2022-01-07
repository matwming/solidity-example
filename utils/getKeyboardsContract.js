import { ethers } from "ethers";

import abi from "../utils/Keyboards.json";

const contractAddress = "0x75024FeA05aCAd9Eb359f85Ef3Dd81cFF096767d";
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if (ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}
