import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import { Route, Trade } from "@uniswap/sdk";
import { useStyles } from "./styles";
import {
  DEFAULT_ADDRESS,
  DEFAULT_SWAP_VALUE,
  PRECISION_VALUE,
} from "../../constants";
import { useAppSelector } from "../../redux/utilities/hooks";

interface Props {
  route?: Route | undefined;
  trade?: Trade | undefined;
}

const TradeDetails: React.FC<Props> = ({ route, trade }) => {
  const styles = useStyles();
  const userData = useAppSelector((state) => state.userData);

  return userData.address !== DEFAULT_ADDRESS ? (
    <List>
      <ListItem className={styles.listItem}>
        <Typography>Mid Price:</Typography>{" "}
        {route?.midPrice
          ? route?.midPrice?.toSignificant(PRECISION_VALUE)
          : DEFAULT_SWAP_VALUE}
      </ListItem>
      <ListItem className={styles.listItem}>
        <Typography>Mid Invert:</Typography>{" "}
        {route?.midPrice
          ? route?.midPrice?.invert().toSignificant(PRECISION_VALUE)
          : DEFAULT_SWAP_VALUE}
      </ListItem>
      <ListItem className={styles.listItem}>
        <Typography>Trade Execution Price:</Typography>{" "}
        {trade?.executionPrice
          ? trade.executionPrice?.toSignificant(PRECISION_VALUE)
          : DEFAULT_SWAP_VALUE}
      </ListItem>
      <ListItem className={styles.listItem}>
        <Typography>Trade Mid Price:</Typography>{" "}
        {trade?.nextMidPrice
          ? trade.nextMidPrice.toSignificant(PRECISION_VALUE)
          : DEFAULT_SWAP_VALUE}
      </ListItem>
    </List>
  ) : (
    <Typography className={styles.container}>Please connect wallet</Typography>
  );
};

export default TradeDetails;
