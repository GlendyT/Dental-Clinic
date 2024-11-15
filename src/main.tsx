import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./router.tsx";
import { PageProvider } from "./context/PageProvider.tsx";
import { SlideProvider } from "./context/SlideProvider.tsx";
import { FloatingButtonProvider } from "./context/FloatingButtonProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PageProvider>
      <SlideProvider>
        <FloatingButtonProvider
          notification={false}
          phoneNumber={"56126256"}
          accountName={"Clinica Dental"}
        >
          <Router />
        </FloatingButtonProvider>
      </SlideProvider>
    </PageProvider>
  </StrictMode>
);
