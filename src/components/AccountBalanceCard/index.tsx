import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { PRECISION_VALUE } from "../../constants";
import { useStyles } from "./styles";

const AccountBalanceCard = () => {
  const styles = useStyles();
  const userData = {
    address: null,
    ethBalance: null,
    daiBalance: null,
  };
  return (
    <>
      <Box>
        <Card variant="outlined" className={styles.card + " bg-tertiary"}>
          <CardHeader title="Account Details" />
          {userData.address ? (
            <CardContent>
              <Box>
                <span>Address: </span>
                <p>{userData.address}</p>
              </Box>
              <Box alignItems="center" className={styles.imageIconContainer}>
                <img
                  src={`${process.env.PUBLIC_URL}ethereum.png`}
                  className={styles.imageIcon}
                  alt="Etherium"
                />
                <Box component="span">
                  {userData.ethBalance &&
                    parseFloat(userData.ethBalance).toFixed(
                      PRECISION_VALUE
                    )}{" "}
                  ETH
                </Box>
              </Box>
              <Box alignItems="center" className={styles.imageIconContainer}>
                <img
                  src={`${process.env.PUBLIC_URL}dai.png`}
                  className={styles.imageIcon}
                  alt="DAI"
                />
                <Box component="span">
                  {userData.daiBalance &&
                    parseFloat(userData.daiBalance).toFixed(
                      PRECISION_VALUE
                    )}{" "}
                  DAI
                </Box>
              </Box>
            </CardContent>
          ) : (
            <Box>
              <Typography className={styles.centerContainer}>
                {" "}
                Please connect wallet
              </Typography>
            </Box>
          )}
        </Card>
      </Box>
    </>
  );
};

export default AccountBalanceCard;