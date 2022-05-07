import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
// import { store } from "./app/store";
import store from "./redux/index";
import reportWebVitals from "./reportWebVitals";
import "./assets/index.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import { createTheme, ThemeProvider } from "@mui/material";

export const themeOptions = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#112cb7",
    },
    secondary: {
      main: "#f50057",
    },
  },
});
const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={themeOptions}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
