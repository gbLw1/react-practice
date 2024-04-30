import ReactDOM from "react-dom/client";
import "./index.css";
import { Toaster } from "react-hot-toast";
import AppRouter from "./routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Toaster position="top-right" />
    <AppRouter />
  </>,
);
