import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Assets
import "@/assets/styles/index.scss";

// Root
import App from "./app/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
