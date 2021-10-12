import {
  Token,
  WETH,
  Fetcher,
  Trade,
  Route,
  Percent,
  TokenAmount,
  TradeType,
} from "@uniswap/sdk";
import { ethers } from "ethers";
import { daiAddress, ETHDAIPairAddress, networkId } from "../constants";
import routerABI from "../ABI/UniswapRouter.json";
import { ExternalProvider, JsonRpcFetchFunc } from "@ethersproject/providers";
import { Signer } from "@ethersproject/abstract-signer";

declare global {
  interface Window {
    ethereum: ExternalProvider | JsonRpcFetchFunc;
  }
}

let provider: any;
let DAI: Token;
let signer: Signer;
try {
  provider = new ethers.providers.Web3Provider(window.ethereum);
  signer = provider.getSigner();
  DAI = new Token(networkId, daiAddress, 18);
  document.cookie = "ErrorMetaMask=false; path=/";
} catch (error) {
  console.log(error);
  document.cookie = "ErrorMetaMask=true; path=/";
}

export const fetchPricingDetails = async (amount: string) => {
  const pair = await Fetcher.fetchPairData(DAI, WETH[DAI.chainId]);
  const route = new Route([pair], WETH[DAI.chainId]);
  const trade = new Trade(
    route,
    new TokenAmount(
      WETH[DAI.chainId],
      ethers.utils.parseEther(amount).toString()
    ),
    TradeType.EXACT_INPUT
  );
  return { pair, route, trade };
};

export const convertEthToDai = async (amount: string, userAddress: String) => {
  try {
    const { trade } = await fetchPricingDetails(amount);
    const slippageTolerance = new Percent("50", "10000");
    const amountOutMin = trade
      .minimumAmountOut(slippageTolerance)
      .raw.toString();
    const path = [WETH[DAI.chainId].address, DAI.address];
    const deadline = Math.floor(Date.now() / 1000) + 60 * 20;
    const value = trade.inputAmount.raw.toString();
    const contract = new ethers.Contract(ETHDAIPairAddress, routerABI, signer);
    const tx = await contract.swapExactETHForTokens(
      amountOutMin,
      path,
      userAddress,
      deadline,
      {
        value,
      }
    );
    await tx.wait();
  } catch (error) {
    console.log(error);
  }
};
