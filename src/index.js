import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./providers/AuthContext";
import DataProvider from "./providers/DataContext";
import { Toaster } from "react-hot-toast";
import App from "./App";
import { ThemeProvider as ThemeControler } from "./providers/ThemeContext";

ReactDOM.render(
  <BrowserRouter>
    <DataProvider>
      <AuthProvider>
        <ThemeControler>
          <Toaster />
          <App />
        </ThemeControler>
      </AuthProvider>
    </DataProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
