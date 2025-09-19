import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import "./index.css";
import { ColorModeProvider } from "./components/ui/color-mode";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider defaultTheme="light" enableSystem={false}>
        <App />
      </ColorModeProvider>
    </ChakraProvider>
  </React.StrictMode>
);