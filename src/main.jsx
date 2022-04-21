import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthContextProvider } from "./Context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
