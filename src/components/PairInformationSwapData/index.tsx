import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CircularProgress from "@material-ui/core/CircularProgress";
import { PastSwap } from "../../interfaces";
import { useStyles } from "./styles";
import { PRECISION_VALUE } from "../../constants";

interface Props {
  data: Array<PastSwap>;
}

const PastSwaps: React.FC<Props> = ({ data }) => {
  const styles = useStyles();
  const totalSwapData = data ? [...data] : [];
  const swapData = totalSwapData.splice(0, 50);
  return (
    <Box className={styles.pastSwapsContainer}>
      {swapData.length > 0 ? (
        swapData.map((item, index) => (
          <React.Fragment key={item.id}>
            <Box className={styles.listContainer}>
              <Box className={styles.listContent}>
                <Typography className={styles.listContentTitle}>
                  Sender:
                </Typography>
                <Typography className={styles.listContentDesc}>
                  {item.sender}
                </Typography>
              </Box>
              <Box className={styles.listContent}>
                <Typography
                  className={styles.listContentTitle}
                  variant="subtitle2"
                >
                  Reciever:
                </Typography>
                <Typography className={styles.listContentDesc}>
                  {item.to}
                </Typography>
              </Box>
              <Box className={styles.listContent}>
                <Typography
                  className={styles.listContentTitle}
                  variant="subtitle2"
                >
                  Amount In:
                </Typography>
                <Typography className={styles.listContentDesc}>
                  {!item.amount1In
                    ? parseFloat(item.amount0In).toFixed(PRECISION_VALUE)
                    : parseFloat(item.amount1In).toFixed(PRECISION_VALUE)}
                </Typography>
              </Box>
              <Box className={styles.listContent}>
                <Typography
                  className={styles.listContentTitle}
                  variant="subtitle2"
                >
                  Amount Out:
                </Typography>
                <Typography className={styles.listContentDesc}>
                  {!item.amount1Out
                    ? parseFloat(item.amount0Out).toFixed(PRECISION_VALUE)
                    : parseFloat(item.amount1Out).toFixed(PRECISION_VALUE)}
                </Typography>
              </Box>
            </Box>
            <Divider />
          </React.Fragment>
        ))
      ) : (
        <Box className={styles.loadingContainer}>
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
};

export default PastSwaps;
