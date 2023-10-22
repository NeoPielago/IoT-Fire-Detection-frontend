import "./App.css";
import LoginPage from "./pages/Login/LoginPage";
import SignUp from "./pages/Signup/SignUp";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Resident Dashboard/Dashboard";
import ForgotPassword from "./pages/Forgot Password/ForgotPassword";
import AdminDashboard from "./pages/Admin Dashboard/AdminDashboard";

function App() {
  return (
    <div className="h-screen">
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/Admin-dashboard" element={<AdminDashboard />}></Route>
        <Route
          path="/forgot-password"
          element={<ForgotPassword></ForgotPassword>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
