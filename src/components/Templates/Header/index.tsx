import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@mui/material/Typography";
import { FaWallet } from "react-icons/fa";

const Header = () => {
  return (
    <AppBar className="bg-secondary navbar">
      <Container>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>
          <Button
            className="btn-primary"
            startIcon={<FaWallet />}
            variant="outlined"
          >
            Connect Wallet
          </Button>
          {/* <button className="btn-primary">
            Disconnect Connect Wallet
          </button> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
