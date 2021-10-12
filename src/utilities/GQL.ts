import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import {
  pairGraphDataQuery,
  pairInformationQuery,
  swapDataQuery,
  uniswapSubgraphURL,
} from "../constants";

export const apolloClientInstance = new ApolloClient({
  uri: `${uniswapSubgraphURL}`,
  cache: new InMemoryCache(),
});

export const getRecentSwapDetails = async () => {
  try {
    const { data } = await apolloClientInstance.query({
      query: gql(swapDataQuery),
    });
    return data.swaps;
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const getUniswapStatisctics = async () => {
  try {
    const { data } = await apolloClientInstance.query({
      query: gql(pairGraphDataQuery),
    });
    return data.pairDayDatas;
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const getPairData = async () => {
  try {
    const { data } = await apolloClientInstance.query({
      query: gql(pairInformationQuery),
    });
    return data.pair;
  } catch (e) {
    console.log(e);
    return [];
  }
};
