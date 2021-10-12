import { Route, Trade } from "@uniswap/sdk";

export interface GraphData {
  date: number;
  dailyVolumeUSD: string;
}

export interface PricingData {
  route: Route;
  trade: Trade;
}

export interface PastSwap {
  id: string;
  pair: {
    token0: {
      symbol: string;
    };
    token1: {
      symbol: string;
    };
  };
  sender: string;
  to: string;
  amount0In: string;
  amount0Out: string;
  amount1In: string;
  amount1Out: string;
  amountUSD: string;
}

export interface PairData {
  id: string;
  token0: {
    name: string;
    symbol: string;
  };
  token1: {
    name: string;
    symbol: string;
  };
  volumeUSD: string;
  totalSupply: string;
  reserveETH: string;
  reserveUSD: string;
}

export interface AccountDetails {
  address: string;
  appNetworkId: number;
  balance: string;
  daiBalance?: string;
  ethBalance?: string;
  mobileDevice: boolean;
  network: number;
  wallet: object | undefined;
}
