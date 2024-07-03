import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ItemProvider } from "./context/ContextApi";
import { createContext } from "react";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ItemProvider>
      <App />
    </ItemProvider>
  </StrictMode>
);
