import React, { useCallback, useRef, useState } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { DEFAULT_ADDRESS } from "../../constants";
import { useAppSelector } from "../../redux/utilities/hooks";
import TradeDetails from "../TradeDetails";
import { amountValidation } from "../../utilities/validation";
import { useStyles } from "./styles";

const SwapModuleCard = () => {
  const styles = useStyles();
  const userData = useAppSelector((state) => state.userData);
  const [exchangeAmount, setExchangeAmount] = useState("" as string);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const submitHandler = () => {
    console.log(exchangeAmount);
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
          <TradeDetails />
          <Typography component="span">
            Note: Slipage is considered to be @0.5%
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SwapModuleCard;
