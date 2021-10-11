import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DEFAULT_ADDRESS } from "../../constants";

interface UserInitialState {
  address: string;
  appNetworkId: number;
  balance: string;
  daiBalance: string;
  ethBalance: string;
  mobileDevice: boolean;
  network: number;
  wallet: any;
}

const initialState = {
  address: DEFAULT_ADDRESS,
  appNetworkId: 0,
  balance: "0",
  daiBalance: "0",
  ethBalance: "0",
  mobileDevice: false,
  network: 0,
  wallet: {},
} as UserInitialState;

const UserDataReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    connectWallet: (state, action: PayloadAction<UserInitialState>) => {
      state.address = action.payload.address;
      state.appNetworkId = action.payload.appNetworkId;
      state.balance = action.payload.balance;
      state.daiBalance = action.payload.daiBalance;
      state.ethBalance = action.payload.ethBalance;
      state.mobileDevice = action.payload.mobileDevice;
      state.network = action.payload.network;
      state.wallet = action.payload.wallet;
    },
    disconnectWallet: (state) => {
      state.address = DEFAULT_ADDRESS;
      state.appNetworkId = 0;
      state.balance = "0";
      state.daiBalance = "0";
      state.ethBalance = "0";
      state.mobileDevice = false;
      state.network = 0;
      state.wallet = {};
    },
  },
});

export const { connectWallet, disconnectWallet } = UserDataReducer.actions;
export default UserDataReducer;
