import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./constants/theme.js";
import { GlobalStyle } from "./assets/styles/globalStyles.js";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster
      containerStyle={{
        display: "flex",
        justifyContent: "flex-start",
        margin: 0,
        padding: 0,
        borderRadius: "10px",
      }}
      toastOptions={{
        className: "toastt",
        duration: 6000,
        zIndex: 9999,
        style: {
          padding: "10px",
          color: "#000",
          fontSize: "14px",
          fontWeight: "600",
          borderRadius: "10px",
          margin: 0,
          minHeight: "50px",
          minWidth: "300px",
        },
        success: {
          style: {
            background: "#18181B",
            color: "#FAFAFA",
            textAlign: "left",
            justifyContent: "flex-start",
          },
        },
        error: {
          style: {
            background: "#18181B",
            color: "#FAFAFA",
            textAlign: "left",
            justifyContent: "flex-start",
          },
        },
      }}
      position="top-center"
    />
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
