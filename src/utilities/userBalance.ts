import { ethers } from "ethers";
import ERC20ABI from "../ABI/ERC20.json";
import { convertWeiToNumber } from "./conversionFunctions";

let provider: any;
try {
  provider = new ethers.providers.Web3Provider(window.ethereum);
  document.cookie = "ErrorMetaMask=false; path=/";
} catch (error) {
  console.log(error);
  document.cookie = "ErrorMetaMask=true; path=/";
}

export const getDAIAmount = async (
  userAddress: string,
  tokenAddress: string,
  tokenDecimals: string
) => {
  const contract = new ethers.Contract(tokenAddress, ERC20ABI, provider);

  const tokenBalanceInWei = await contract.balanceOf(userAddress);
  const tokenBalance = convertWeiToNumber(tokenBalanceInWei, tokenDecimals);

  return tokenBalance;
};

export const getETHAmount = async () => {
  let ethBalance = "0";

  if (provider !== null) {
    try {
      const signer = provider.getSigner();
      ethBalance = ethers.utils.formatEther(await signer.getBalance());
    } catch (error) {
      console.log(error);
      ethBalance = "0";
    }
  }

  return ethBalance;
};
