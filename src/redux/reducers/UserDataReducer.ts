import { createSlice } from "@reduxjs/toolkit";

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
  address: "",
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
  reducers: {},
});

export default UserDataReducer;
