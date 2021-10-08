import React from "react";
import Home from "./pages/Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import { store } from "./store";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={darkTheme}>
          <Home />
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default App;
