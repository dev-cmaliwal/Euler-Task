import Onboard from "bnc-onboard";
import Web3 from "web3";
import { onBoardAPIKey, networkId, wallets } from "../constants";

const connectUserWallet = () => {
  try {
    let web3;
    const onboard = Onboard({
      dappId: onBoardAPIKey,
      networkId,
      walletSelect: {
        wallets,
      },
      subscriptions: {
        wallet: (wallet: { provider: any }) => {
          web3 = new Web3(wallet.provider);
        },
      },
    });
    return onboard;
  } catch (error) {
    console.log(error);
  }
};

export default connectUserWallet;
