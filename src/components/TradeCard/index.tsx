import React, { useCallback, useRef, useState } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import TextField from "@material-ui/core/TextField";
import TradeDetails from "../TradeDetails";
import { daiAddress, decimalPlaces, DEFAULT_ADDRESS } from "../../constants";
import { AccountDetails, PricingData } from "../../interfaces";
import {
  fetchPricingDetails,
  convertEthToDai,
} from "../../utilities/tradeFunctions";
import { amountValidation } from "../../utilities/validation";
import { getETHAmount, getDAIAmount } from "../../utilities/userBalance";
import { useAppDispatch, useAppSelector } from "../../redux/utilities/hooks";
import { connectWallet } from "../../redux/reducers/UserDataReducer";
import { Route, Trade } from "@uniswap/sdk";
import { useStyles } from "./styles";

const TradeCard: React.FC = () => {
  const styles = useStyles();
  const userData = useAppSelector((state) => state.userData);
  const dispatch = useAppDispatch();

  const [exchangeAmount, setExchangeAmount] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [route, setRoute] = useState<Route>();
  const [trade, setTrade] = useState<Trade>();

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

  const submitHandler = async () => {
    if (exchangeAmount) {
      await convertEthToDai(exchangeAmount, userData.address);
      getEthAndDaiBalance(userData);
    } else {
      setError(true);
      setErrorMessage("Amount cannot be empty");
    }
  };

  const onChangeHandler = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setExchangeAmount(e.target.value);
    const amountError = amountValidation(e.target.value, userData.ethBalance);
    if (amountError) {
      setError(true);
      setErrorMessage(amountError);
    } else {
      setError(false);
      setErrorMessage("");
      const { route, trade }: PricingData = await fetchPricingDetails(
        e.target.value
      );
      setRoute(route);
      setTrade(trade);
    }
  };

  return (
    <Box className={styles.container}>
      <Card variant="outlined" className="bg-tertiary">
        <CardHeader title="Trade Details" />
        <CardContent>
          <Box>
            <TextField
              label="Ethereum To Trade"
              variant="outlined"
              id="outlined-basic"
              type="number"
              fullWidth
              error={error}
              color="secondary"
              helperText={errorMessage}
              inputProps={{ min: 0 }}
              className={styles.textField}
              onChange={(e) => onChangeHandler(e)}
              disabled={userData.address === DEFAULT_ADDRESS}
            />
            <Button
              variant="contained"
              className={"btn-primary " + styles.submitBtn}
              disabled={userData.address === DEFAULT_ADDRESS || error}
              onClick={submitHandler}
            >
              Exchange With DAI
            </Button>
          </Box>
          <TradeDetails route={route} trade={trade} />
        </CardContent>
      </Card>
    </Box>
  );
};

export default TradeCard;
