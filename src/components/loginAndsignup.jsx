import Logo from "../assets/ExpenseLogo.png";
import GoogleLogo from "../assets/google-svgrepo-com.svg";
import { useState, useEffect } from "react";
import {
  GoogleOAuth,
  LoginWithEmail,
  SignUpwithEmail,
  GetUser,
} from "../supaApi/auth";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";

function LoginAndSignup({ setLoginStatus }) {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      const user = await GetUser();
      setUser(user);
      setLoginStatus(user);
    
    };
    fetchUser();
  }, [status]);
  useEffect(() => {
    if (user) {
    
      navigate("/dashboard");
    } else {
      console.log("No user is logged in.");
    }
  }, [user]);
  const IsAllValid =
    email.length > 0 &&
    password.length >= 6 &&
    (isLogin || username.length >= 3);
  async function handleLogin() {
    setLoading(true);
    await LoginWithEmail(email, password, setMessage, setStatus);
    setLoading(false);
    if (status.includes("successful")) {
      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    }
  }

  async function handleSignUp() {
    try {
      setLoading(true);
      await SignUpwithEmail(email, password, username, setMessage, setStatus);
    } catch (error) {
      console.error("Error signing up:", error);
    } finally {
      setLoading(false);
    }
  }
  function handleGoogleLogin() {
    setLoading(true);
    try {
      GoogleOAuth(setMessage, setStatus);
    } catch (error) {
      console.error("Error with Google login:", error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <div className="flex w-full justify-center">
        <div className="w-1/2 hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white relative overflow-hidden">
          {/* Logo */}
          <img src={Logo} alt="logo" className="w-24 mb-1" />
          <h1 className="text-3xl font-bold text-emerald-400">
            ExpenseFlow
          </h1>
          {/* Heading */}
          <h1 className="text-5xl font-bold text-center leading-tight">
            Track Every Rupee.
            <br />
            <span className="text-emerald-400">Master Your Money.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-center mt-6 max-w-md">
            Visualize spending habits, track expenses, and make smarter
            financial decisions with real-time insights.
          </p>

          {/* Floating Cards */}
          <div className="absolute top-20 left-20 bg-slate-800/70 backdrop-blur-md p-4 rounded-2xl shadow-xl">
            <p className="text-sm text-slate-400">Total Balance</p>
            <h3 className="text-2xl font-bold text-emerald-400">₹54,230</h3>
          </div>

          <div className="absolute bottom-28 left-24 bg-slate-800/70 backdrop-blur-md p-4 rounded-2xl shadow-xl">
            <p className="text-sm text-slate-400">This Month</p>
            <h3 className="text-xl font-bold">₹8,420</h3>
          </div>

          <div className="absolute top-40 right-16 bg-slate-800/70 backdrop-blur-md p-4 rounded-2xl shadow-xl">
            <p className="text-sm text-slate-400">Savings</p>
            <h3 className="text-xl font-bold text-emerald-400">+12.5%</h3>
          </div>
        </div>
        <div className="p-7 w-full md:w-1/2 h-screen flex items-center justify-center">
          {loading && (
            <div className="absolute flex justify-center items-center mb-4 h-screen bg-black bg-opacity-50 rounded">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Loading />
              </div>
            </div>
          )}
          <div className="bg-white p-6 md:p-8 w-full md:w-[600px] rounded-lg shadow-md">
            <div className="flex justify-start mb-4 md:hidden">
              <img src={Logo} alt="Logo" className="w-20 h-20 " />
              <h1 className="text-2xl font-bold  self-center">
                Expense Tracker
              </h1>
            </div>
            <div className="flex items-center justify-center mb-6">
              <div>
                <h2 className="text-xl font-bold">
                  {isLogin ? (
                    <div>
                      <p>Welcome Back 👋</p>
                      <p>Please login to your account to continue.</p>
                    </div>
                  ) : (
                    "Sign Up"
                  )}
                </h2>
                <hr className="bg-emerald-400  h-1 text-emerald-400" />
              </div>
            </div>

            <form className="w-full max-w-sm">
              {message.includes("successful") ? (
                <p className="text-green-500 text-sm mb-4">{message}</p>
              ) : message ? (
                <p className="text-red-500 text-sm mb-4">{message}</p>
              ) : null}

              {!isLogin && (
                <div className="mb-4">
                  <label
                    htmlFor="username"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {username.length < 3 && username.length > 0 && (
                    <p className="text-red-500 text-sm mt-1">
                      Username must be at least 3 characters long.
                    </p>
                  )}
                </div>
              )}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {email.length > 0 &&
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email) && (
                    <p className="text-red-500 text-sm mt-1">
                      Please enter a valid email address.
                    </p>
                  )}
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {password.length < 6 && password.length > 0 && (
                  <p className="text-red-500 text-sm mt-1">
                    Password must be at least 6 characters long.
                  </p>
                )}
              </div>
              {isLogin ? (
                <div className="flex-col justify-center gap-4 items-center">
                  <button
                    disabled={!IsAllValid}
                    type="button"
                    onClick={handleLogin}
                    className="bg-green-500  hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Login
                  </button>
                </div>
              ) : (
                <div className="flex-col justify-center gap-4 items-center">
                  <button
                    disabled={!IsAllValid}
                    type="button"
                    onClick={handleSignUp}
                    className="bg-emerald-400  hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </form>
            <p className="text-center text-gray-600 mt-4">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-emerald-400 hover:text-emerald-500 font-bold"
              >
                {isLogin ? "Sign Up" : "Login"}
              </button>
            </p>
            <div className="flex items-center justify-center mt-4 mb-4">
              <hr className="w-full border-gray-300" />
              <span className="mx-2 text-gray-500">OR</span>
              <hr className="w-full border-gray-300" />
            </div>
            <div className="flex w-full justify-center gap-4 items-center">
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="text-emerald-400 hover:text-emerald-500 border border-emerald-400 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-auto"
              >
                <img
                  src={GoogleLogo}
                  alt="Google Logo"
                  className="w-5 h-5 inline-block mr-2"
                />
                Sign in with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default LoginAndSignup;
