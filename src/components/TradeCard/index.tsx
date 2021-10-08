import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import TradeDetails from "../TradeDetails";
import { useStyles } from "./styles";

const SwapModuleCard = () => {
  const styles = useStyles();
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
              color="secondary"
              inputProps={{ min: 0 }}
              className={styles.textField}
            />
            <Button
              variant="contained"
              className={"btn-primary " + styles.submitBtn}
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
