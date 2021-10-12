import { ethers, BigNumber } from "ethers";

export const amountValidation = (
  inputAmount: string,
  balance: string | undefined
) => {
  let errorsText: string = "";
  const tokenAmount = BigNumber.from(
    ethers.utils.parseEther(inputAmount.toString() || "0")
  );
  const userBalance = BigNumber.from(
    ethers.utils.parseEther(balance?.toString() || "0")
  );
  if (!inputAmount) {
    errorsText = "Amount cannot be empty";
  }
  if (!(+inputAmount > 0)) {
    errorsText = "Amount should be positive";
  }
  if (userBalance && +inputAmount > 0 && userBalance.lt(tokenAmount)) {
    errorsText = "Insufficient account balance";
  }

  return errorsText;
};
