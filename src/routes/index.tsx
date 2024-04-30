import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import MultiStepForm from "../pages/multi-step-form";
import PrivateRoute from "./private-route";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Home />} />
        <Route
          path="/form"
          element={
            <PrivateRoute>
              <MultiStepForm />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}
