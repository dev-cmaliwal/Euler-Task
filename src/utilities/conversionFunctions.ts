import { BigNumber } from "@ethersproject/bignumber";
import { ethers } from "ethers";
import { ether, mwei } from "../constants";

export const convertWeiToNumber = (
  wei: number | BigNumber,
  decimalPlaces: string
) => {
  let weiToNumber;
  switch (decimalPlaces) {
    case "18":
      weiToNumber = ethers.utils.formatUnits(wei, ether).toString();
      break;

    case "6":
      weiToNumber = ethers.utils.formatUnits(wei, mwei).toString();
      break;

    default:
      break;
  }
  return weiToNumber;
};
