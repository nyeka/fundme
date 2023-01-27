import React from "react";
import { ethers } from "ethers";
import { abi, contractAddress } from "./abi";

declare global {
  interface Window {
    ethereum: any;
  }
}

interface Props {
  amount: number;
}

const Fund = async ({ amount }: Props) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, abi, signer);
  const transactionResponse = await contract.fund({
    value: ethers.utils.parseEther(amount.toString()),
  });
  await transactionResponse.wait();
};

export default Fund;
