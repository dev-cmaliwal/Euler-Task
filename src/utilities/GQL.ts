import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import {
  graphDataQuery,
  pairDetailsQuery,
  pastSwapsQuery,
  apolloClientURL,
} from "../constants";

export const apolloClientInstance = new ApolloClient({
  uri: `${apolloClientURL}`,
  cache: new InMemoryCache(),
});

export const getRecentSwapDetails = async () => {
  try {
    const { data } = await apolloClientInstance.query({
      query: gql(pastSwapsQuery),
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
      query: gql(graphDataQuery),
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
      query: gql(pairDetailsQuery),
    });
    return data.pair;
  } catch (e) {
    console.log(e);
    return [];
  }
};
