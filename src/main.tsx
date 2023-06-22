import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider
      theme={createTheme({
        components: {
          MuiButton: { styleOverrides: { root: { textTransform: "none" } } },
          MuiTextField: {
            styleOverrides: {
              root: {
                "& .MuiOutlinedInput-root": {
                  "& input": {
                    color: "white",
                  },
                  "& fieldset": { borderColor: "white" },
                },
              },
            },
          },
        },

        palette: {
          primary: { main: "#393355" },
          secondary: { main: "#eddffc" },
        },
      })}
    >
      <App />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </ThemeProvider>
  </React.StrictMode>
);
