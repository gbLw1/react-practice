import { createBrowserRouter } from "react-router-dom";
import { Products } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Products />,
  },
]);
