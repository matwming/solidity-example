import { ethers } from "ethers";

import abi from "../utils/Keyboards.json";

const contractAddress = "0xc805BFE47b9752168CFc2E844ecf4427506E18CF";
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
