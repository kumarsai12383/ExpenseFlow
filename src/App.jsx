import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/landingPage";
import { useState, useEffect } from "react";
import { GetUser,Logout } from "./supaApi/auth";
import LoginAndSignup from "./components/loginAndsignup";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/DashboardLayout";
import LogoutPage from "./components/DashBoardComponents/Logout";
import DashboardHome from "./components/DashBoardComponents/dashBoardHome";
import ExpensesPage from "./components/DashBoardComponents/expenses/ExpensePage";
import IncomePage from "./components/DashBoardComponents/income/IncomePage";
import ProfileForm from "./components/DashBoardComponents/ProfileForm";
import Analytics from "./components/DashBoardComponents/Analysis/analysis";
import Settings from "./components/DashBoardComponents/Settings";
function App() {
  const[loginStatus, setLoginStatus] = useState(null);
  const [user, setUserInApp] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      const user = await GetUser();
      setUserInApp(user);
      
    };
    fetchUser();
  }, [loginStatus]);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<LoginAndSignup setLoginStatus={setLoginStatus} />} />
          <Route path="/dashboard" element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard user={user} />}>
              <Route index element={<DashboardHome user={user} />} />
              <Route path="logout" element={<LogoutPage />} />
              <Route path="expenses" element={<ExpensesPage user={user}/>} />
              <Route path="income" element={<IncomePage user={user}/>} />
              <Route path="profile" element={<ProfileForm user={user} />} />
              <Route path="analytics" element={<Analytics user={user} />} />
              <Route path="settings" element={<Settings user={user} />} />
            </Route>

          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
