import React from "react";
import Box from "@material-ui/core/Box";
import Divider from "@mui/material/Divider";
import CircularProgress from "@material-ui/core/CircularProgress";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { PastSwap } from "../../interfaces";
import { PRECISION_VALUE } from "../../constants";
import { useStyles } from "./styles";

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
        swapData.map((swap, index) => (
          <React.Fragment key={swap.id}>
            <TableContainer
              component={Paper}
              className={styles.tableContainer + " cursor-pointer"}
              onClick={() =>
                window.open(
                  `https://etherscan.io/tx/${swap.id.split("-")[0]}`,
                  `_blank`
                )
              }
            >
              <Table aria-label="Pair Information Table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Sender:</TableCell>
                    <TableCell align="left">{swap.sender}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">Reciever:</TableCell>
                    <TableCell align="left">{swap.to}</TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">Amount In:</TableCell>
                    <TableCell align="left">
                      {!swap.amount1In
                        ? parseFloat(swap.amount0In).toFixed(PRECISION_VALUE)
                        : parseFloat(swap.amount1In).toFixed(PRECISION_VALUE)}
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">Amount Out:</TableCell>
                    <TableCell align="left">
                      {!swap.amount1Out
                        ? parseFloat(swap.amount0Out).toFixed(PRECISION_VALUE)
                        : parseFloat(swap.amount1Out).toFixed(PRECISION_VALUE)}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
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
