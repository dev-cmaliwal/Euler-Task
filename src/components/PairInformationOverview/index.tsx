import React from "react";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { PairData } from "../../interfaces";
import { PRECISION_VALUE } from "../../constants";
import { useStyles } from "./styles";

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
            <TableContainer component={Paper} className={styles.tableContainer}>
              <Table aria-label="Pair Information Table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Token No</TableCell>
                    <TableCell align="center">Token Name</TableCell>
                    <TableCell align="center">Token Symbol</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" align="center">
                      1
                    </TableCell>
                    <TableCell align="center">{data?.token0?.name}</TableCell>
                    <TableCell align="center">{data?.token0?.symbol}</TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" align="center">
                      2
                    </TableCell>
                    <TableCell align="center">{data?.token1?.name}</TableCell>
                    <TableCell align="center">{data?.token1?.symbol}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </ListItem>
          <ListItem className={styles.listContainer}>
            <TableContainer component={Paper} className={styles.tableContainer}>
              <Table aria-label="Pair Information Table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Reserved In ETH:</TableCell>
                    <TableCell align="left">
                      {parseFloat(data.reserveETH).toFixed(PRECISION_VALUE)}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">Reserved In USD:</TableCell>
                    <TableCell align="left">
                      {parseFloat(data.reserveUSD).toFixed(PRECISION_VALUE)}
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">Total Supply:</TableCell>
                    <TableCell align="left">
                      {parseFloat(data.totalSupply).toFixed(PRECISION_VALUE)}
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">Total Volume in USD:</TableCell>
                    <TableCell align="left">
                      {parseFloat(data.volumeUSD).toFixed(PRECISION_VALUE)}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
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
