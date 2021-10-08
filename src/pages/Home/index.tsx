import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import AccountBalanceCard from "../../components/AccountBalanceCard";
import PairInformationCard from "../../components/PairInformationCard";
import SwapModuleCard from "../../components/TradeCard";
import PublicRoute from "../../components/Templates/PublicRoute";

const HomePage = () => {
  return (
    <PublicRoute pageBackgroundColor="bg-secondary">
      <Box>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <PairInformationCard />
            </Grid>
            <Grid item xs={12} md={4}>
              <AccountBalanceCard />
              <SwapModuleCard />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </PublicRoute>
  );
};

export default HomePage;
