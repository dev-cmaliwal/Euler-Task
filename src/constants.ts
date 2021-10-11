export const PRECISION_VALUE = 12;
export const DEFAULT_SWAP_VALUE = 0;
export const DEFAULT_ADDRESS = "";

export const wallets = [{ walletName: "metamask" }];

export const networkId = 3;
export const apiKey = "d44f7633-cf88-4e9d-867b-25d07d06ee12";

export const daiAddressMainnet = "0xa478c2975ab1ea89e8196811f51a7b7ade33eb11";

export const apolloClientURL =
  "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2";

export const graphDataQuery = `{
    pairDayDatas(first: 70, orderBy: date, orderDirection: desc,
    where: {
      pairAddress: "${daiAddressMainnet}"
    }) {
      date
      dailyVolumeUSD
    }
  }`;

export const pairDetailsQuery = `{
    pair(id: "${daiAddressMainnet}"){
    id,
    token0 {
      name,
      symbol
    },
    token1 {
      name,
      symbol
    },
    volumeUSD,
    totalSupply,
    reserveETH,
    reserveUSD,
  }}`;

export const pastSwapsQuery = `{
    swaps(where : {
      pair: "${daiAddressMainnet}"}
      orderBy: timestamp,
      orderDirection: desc) {
    id,      
    pair {
      token0 {
        symbol
      },
      token1 {
        symbol
      }
    },
    sender,
    to,
    amount0In,
    amount0Out,
    amount1In,
    amount1Out,
    amountUSD
  }}`;
