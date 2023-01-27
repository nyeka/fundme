import React from "react";
import { ethers } from "ethers";
import { abi, contractAddress } from "./abi";

const Withdraw = async () => {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    const transactionResponse = await contract.withdraw();
    await transactionResponse.wait();
  } catch (error: any) {
    console.log(error);
  }
};

export default Withdraw;
