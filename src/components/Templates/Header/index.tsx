import React from "react";
import { FaWallet } from "react-icons/fa";
import { TiCancel } from "react-icons/ti";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@mui/material/Typography";
import connectUserWallet from "../../../utilities/userLogin";
import { getETHAmount, getDAIAmount } from "../../../utilities/userBalance";
import { AccountDetails } from "../../../interfaces";
import { daiAddress, decimalPlaces, DEFAULT_ADDRESS } from "../../../constants";
import {
  connectWallet,
  disconnectWallet,
} from "../../../redux/reducers/UserDataReducer";
import { useAppDispatch, useAppSelector } from "../../../redux/utilities/hooks";

const Header: React.FC = () => {
  const userData = useAppSelector((state) => state.userData);
  const dispatch = useAppDispatch();
  const userWallet = connectUserWallet();

  const handleConnectWallet = async () => {
    const getEthAndDaiBalance = async (userAccountDetails: AccountDetails) => {
      const ethBalance = await getETHAmount();
      const daiBalance = await getDAIAmount(
        userAccountDetails.address,
        daiAddress,
        decimalPlaces
      );
      const detail = { ...userAccountDetails, ethBalance, daiBalance };
      dispatch(connectWallet(detail));
    };

    if (userWallet) {
      await userWallet.walletSelect();
      if (!userWallet.getState().address && userWallet.getState().wallet.name) {
        await userWallet.walletCheck();
      }
      if (userWallet.getState().address) {
        const accountDetails = await userWallet.getState();
        await getEthAndDaiBalance(accountDetails);
      }
    }
  };

  const handledisconnectWallet = () => {
    userWallet?.walletReset();
    dispatch(disconnectWallet());
  };

  return (
    <AppBar className="bg-secondary navbar">
      <Container>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>
          {userData.address === DEFAULT_ADDRESS ? (
            <Button
              className="btn-primary"
              startIcon={<FaWallet />}
              variant="outlined"
              onClick={handleConnectWallet}
            >
              Connect Wallet
            </Button>
          ) : (
            <Button
              className="btn-primary"
              startIcon={<TiCancel />}
              variant="outlined"
              onClick={handledisconnectWallet}
            >
              Disconnect Wallet
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
