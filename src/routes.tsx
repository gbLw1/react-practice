import { createBrowserRouter } from "react-router-dom";
import { Home, MultiStepForm } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/form",
    element: <MultiStepForm />,
  },
]);
