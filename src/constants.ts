export const PRECISION_VALUE = 12;
export const DEFAULT_SWAP_VALUE = 0;
export const DEFAULT_ADDRESS = "";

export const wallets = [{ walletName: "metamask" }];

export const networkId = 3;
export const onBoardAPIKey = "c11523ce-9b7c-4bbe-86b2-b9f5f9f2c80a";

export const daiAddress = "0xad6d458402f60fd3bd25163575031acdce07538d";
export const ETHDAIPairAddress = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";

export const ether = "ether";
export const mwei = "mwei";

export const decimalPlaces = "18";
export const daiAddressMainnet = "0xa478c2975ab1ea89e8196811f51a7b7ade33eb11";

export const uniswapSubgraphURL =
  "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2";

export const pairGraphDataQuery = `{
    pairDayDatas(first: 70, orderBy: date, orderDirection: desc,
    where: {
      pairAddress: "${daiAddressMainnet}"
    }) {
      date
      dailyVolumeUSD
    }
  }`;

export const pairInformationQuery = `{
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

export const swapDataQuery = `{
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
