import { ethers, BigNumber } from "ethers";

export const amountValidation = (
  amount: string,
  balance: string | undefined
) => {
  let errorsMessage: string = "";
  const tokenAmount = BigNumber.from(
    ethers.utils.parseEther(amount.toString() || "0")
  );
  const userBalance = BigNumber.from(
    ethers.utils.parseEther(balance?.toString() || "0")
  );
  if (!amount) {
    errorsMessage = "Amount cannot be empty";
  }
  if (!(+amount > 0)) {
    errorsMessage = "Amount should be positive";
  }
  if (userBalance && +amount > 0 && userBalance.lt(tokenAmount)) {
    errorsMessage = "Insufficient account balance";
  }

  return errorsMessage;
};
