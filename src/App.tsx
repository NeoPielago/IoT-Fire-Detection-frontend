import "./App.css";
import LoginPage from "./pages/Login/LoginPage";
import SignUp from "./pages/Signup/SignUp";
import { Route, Routes, Link, BrowserRouter } from "react-router-dom";

import Dashboard from "./pages/Resident Dashboard/Dashboard";
import ForgotPassword from "./pages/Forgot Password/ForgotPassword";
import AdminDashboard from "./pages/Admin Dashboard/AdminDashboard";
import AlarmHistory from "./pages/Resident Dashboard/AlarmHistory";
import Devices from "./pages/Resident Dashboard/Devices";
import Profile from "./pages/Resident Dashboard/Profile";

import { useEffect } from "react";
import { getToken } from "./utils/getToken";
import { getSession } from "./utils/getSession";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-[bg-[#00274F]]">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-md bg-[#00274F] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#003E7D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003E7D]"
          >
            Go back home
          </Link>
          <a
            href="mailto:neopielagjo123@gmail.com?subject=404 page not found"
            className="text-sm font-semibold text-gray-900"
          >
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
};

function App() {
  const navigate = useNavigate();
  let session;
  useEffect(() => {
    const fetchSession = async () => {
      try {
        const token = getToken();
        const sessionData = await getSession(token);
        session = sessionData;
        if (!sessionData) {
          navigate("/login");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchSession();
  }, []);

  return (
    <div className="h-screen">
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/Admin-dashboard" element={<AdminDashboard />}></Route>
        <Route
          path="/forgotpassword"
          element={<ForgotPassword></ForgotPassword>}
        ></Route>
        <Route path="/alarmHistory" element={<AlarmHistory />}></Route>
        <Route path="/devices" element={<Devices />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
