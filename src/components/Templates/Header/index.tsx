import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@mui/material/Typography";
import { FaWallet } from "react-icons/fa";
import { TiCancel } from "react-icons/ti";
import { DEFAULT_ADDRESS } from "../../../constants";
import {
  connectWallet,
  disconnectWallet,
} from "../../../redux/reducers/UserDataReducer";
import { useAppDispatch, useAppSelector } from "../../../redux/utilities/hooks";

const Header = () => {
  const userData = useAppSelector((state) => state.userData);
  const dispatch = useAppDispatch();

  const handleConnectWallet = () => {
    const newState = {
      address: "dasdasddwr3234345efsxe5t6",
      appNetworkId: 0,
      balance: "0",
      daiBalance: "10",
      ethBalance: "10",
      mobileDevice: false,
      network: 0,
      wallet: {},
    };
    dispatch(connectWallet(newState));
  };

  const handledisconnectWallet = () => {
    dispatch(disconnectWallet());
  };

  return (
    <AppBar className="bg-secondary navbar">
      <Container>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>
          {userData.address === DEFAULT_ADDRESS ? (
            <Button
              className="btn-primary"
              startIcon={<FaWallet />}
              variant="outlined"
              onClick={handleConnectWallet}
            >
              Connect Wallet
            </Button>
          ) : (
            <Button
              className="btn-primary"
              startIcon={<TiCancel />}
              variant="outlined"
              onClick={handledisconnectWallet}
            >
              Disconnect Wallet
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
