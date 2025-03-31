import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./router.tsx";
//@ts-ignore
import Footer from "./component/Footer.jsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRouter />
    <Footer />
  </StrictMode>
);
