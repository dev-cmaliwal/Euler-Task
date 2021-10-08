import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { PairData } from "../../interfaces";
import { useStyles } from "./styles";
import { PRECISION_VALUE } from "../../constants";

interface Props {
  data: PairData | undefined;
}

const PairOverview: React.FC<Props> = ({ data }) => {
  const styles = useStyles();
  return (
    <Box className={styles.container}>
      {data ? (
        <List>
          <ListItem className={styles.listContainer}>
            <Typography className={styles.listTitle}>Token 1 Name:</Typography>
            <Typography className={styles.listDesc}>
              {data?.token0?.name}
            </Typography>
          </ListItem>
          <ListItem className={styles.listContainer}>
            <Typography className={styles.listTitle}>
              Token 1 symbol:
            </Typography>
            <Typography className={styles.listDesc}>
              {data?.token0?.symbol}
            </Typography>
          </ListItem>
          <ListItem className={styles.listContainer}>
            <Typography className={styles.listTitle}>Token 2 Name:</Typography>
            <Typography className={styles.listDesc}>
              {data.token1.name}
            </Typography>
          </ListItem>
          <ListItem className={styles.listContainer}>
            <Typography className={styles.listTitle}>
              Token 2 Symbol:
            </Typography>
            <Typography className={styles.listDesc}>
              {data.token1.symbol}
            </Typography>
          </ListItem>
          <ListItem className={styles.listContainer}>
            <Typography className={styles.listTitle}>
              Reserved In ETH:
            </Typography>
            <Typography className={styles.listDesc}>
              {parseFloat(data.reserveETH).toFixed(PRECISION_VALUE)}
            </Typography>
          </ListItem>
          <ListItem className={styles.listContainer}>
            <Typography className={styles.listTitle}>
              Reserved in USD:
            </Typography>
            <Typography className={styles.listDesc}>
              {parseFloat(data.reserveUSD).toFixed(PRECISION_VALUE)}
            </Typography>
          </ListItem>
          <ListItem className={styles.listContainer}>
            <Typography className={styles.listTitle}>Total Supply:</Typography>
            <Typography className={styles.listDesc}>
              {parseFloat(data.totalSupply).toFixed(PRECISION_VALUE)}
            </Typography>
          </ListItem>
          <ListItem className={styles.listContainer}>
            <Typography className={styles.listTitle}>
              Total Volume in USD:
            </Typography>
            <Typography className={styles.listDesc}>
              {parseFloat(data.volumeUSD).toFixed(PRECISION_VALUE)}
            </Typography>
          </ListItem>
        </List>
      ) : (
        <Box className={styles.loadingWrapper}>
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
};

export default PairOverview;
