import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./private-route";
import Home from "../pages/home";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";
import MultiStepForm from "../pages/multi-step-form";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
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
