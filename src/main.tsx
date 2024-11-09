import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./router.tsx";
import { PageProvider } from "./context/PageProvider.tsx";
import { SlideProvider } from "./context/SlideProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PageProvider>
      <SlideProvider>
        <Router />
      </SlideProvider>
    </PageProvider>
  </StrictMode>
);
