import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "styled-components";
import { theme } from "./constants/theme.js";
import { GlobalStyle } from "./assets/styles/globalStyles.js";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrollToTop.js";

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
            background: "#FFFFFF",
            color: "#7B68EE",
            textAlign: "left",
            justifyContent: "flex-start",
          },
        },
        error: {
          style: {
            background: "#FFFFFF",
            color: "#7B68EE",
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
        <ScrollToTop/>
        <App />
        <Analytics />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
