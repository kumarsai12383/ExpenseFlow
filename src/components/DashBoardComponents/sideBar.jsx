import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/ExpenseLogo.png";

function SideBar({ isOpen, setIsOpen }) {
  const location = useLocation();
  if (location.pathname === "/auth" || location.pathname === "/") {
    return null;
  }
  console.log(isOpen);
  return (
    <>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-[55] md:hidden"
            onClick={() => {
              console.log("Overlay clicked");
              setIsOpen(false);
            }}
          ></div>
          <aside className="fixed block md:hidden top-0 left-0 z-[60] h-full w-auto bg-[#080b13] text-white transition-transform duration-300 ease-in-out transform ">
            <nav className="flex flex-col h-full p-4 mt-16">
              <div className="flex items-center justify-center">
                <img src={Logo} alt="ExpenseFlow Logo" className="w-17 h-17 " />
                <h1 className="text-2xl font-bold">ExpenseFlow</h1>
              </div>
              <hr className="border-gray-600 mb-8" />
              <div className="flex-1 w-full px-15 py-6 rounded-lg shadow-lg">
                <ul className="space-y-8 w-full">
                  <li className="flex items-center gap-2">
                    <NavLink
                      to="/dashboard"
                      className={({ isActive }) =>
                        isActive ? "bg-blue-500 text-white" : "text-gray-100"
                      }
                      className="hover:text-emerald-400 flex items-center gap-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#1adb64"
                        stroke-width="1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-layout-dashboard-icon lucide-layout-dashboard"
                      >
                        <rect width="7" height="9" x="3" y="3" rx="1" />
                        <rect width="7" height="5" x="14" y="3" rx="1" />
                        <rect width="7" height="9" x="14" y="12" rx="1" />
                        <rect width="7" height="5" x="3" y="16" rx="1" />
                      </svg>
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "bg-blue-500 text-white" : "text-gray-100"
                      }
                      to="/dashboard/expenses"
                      className="hover:text-emerald-400 flex items-center gap-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#1adb64"
                        stroke-width="1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-banknote-arrow-down-icon lucide-banknote-arrow-down"
                      >
                        <path d="M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" />
                        <path d="m16 19 3 3 3-3" />
                        <path d="M18 12h.01" />
                        <path d="M19 16v6" />
                        <path d="M6 12h.01" />
                        <circle cx="12" cy="12" r="2" />
                      </svg>
                      Expenses
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "bg-blue-500 text-white" : "text-gray-100"
                      }
                      to="/dashboard/income"
                      className="hover:text-emerald-400  flex items-center gap-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#1adb64"
                        stroke-width="1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-coins-icon lucide-coins"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 8v8" />
                        <path d="M8 12h8" />
                      </svg>
                      Income
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "bg-blue-500 text-white" : "text-gray-100"
                      }
                      to="/dashboard/analytics"
                      className="hover:text-emerald-400 flex items-center gap-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#1adb64"
                        stroke-width="1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-chart-line-icon lucide-chart-line"
                      >
                        <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                        <path d="m19 9-5 5-4-4-3 3" />
                      </svg>
                      Analytics
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "bg-blue-500 text-white" : "text-gray-100"
                      }
                      to="/dashboard/profile"
                      className="hover:text-emerald-400 flex items-center gap-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#1adb64"
                        stroke-width="1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-user-pen-icon lucide-user-pen"
                      >
                        <path d="M11.5 15H7a4 4 0 0 0-4 4v2" />
                        <path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
                        <circle cx="10" cy="7" r="4" />
                      </svg>
                      profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "bg-blue-500 text-white" : "text-gray-100"
                      }
                      to="/dashboard/settings"
                      className="hover:text-emerald-400 flex items-center gap-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#1adb64"
                        stroke-width="1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-settings-icon lucide-settings"
                      >
                        <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                      Settings
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "bg-blue-500 text-white" : "text-gray-100"
                      }
                      to="/dashboard/logout"
                      className="hover:text-emerald-400 flex items-center gap-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#1adb64"
                        stroke-width="1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-log-out-icon lucide-log-out"
                      >
                        <path d="m16 17 5-5-5-5" />
                        <path d="M21 12H9" />
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                      </svg>
                      Logout
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </aside>
        </>
      )}
      <aside
        className={`fixed hidden md:block top-0 left-0 z-30 h-full w-73 bg-[#080b13] text-white transition-transform duration-300 ease-in-out transform `}
      >
        <nav className="flex flex-col h-full p-2">
          <div className="flex items-center justify-center">
            <img src={Logo} alt="ExpenseFlow Logo" className="w-17 h-17 " />
            <h1 className="text-2xl font-bold">ExpenseFlow</h1>
          </div>
          <hr className="border-gray-600 mb-8" />
          <div className="flex-1 w-full px-15 py-6 rounded-lg shadow-lg">
            <ul className="space-y-8 w-full">
              <li className="flex items-center gap-2">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "bg-blue-500 text-white" : "text-gray-100"
                  }
                  to="/dashboard"
                  className="hover:text-emerald-400 flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1adb64"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-layout-dashboard-icon lucide-layout-dashboard"
                  >
                    <rect width="7" height="9" x="3" y="3" rx="1" />
                    <rect width="7" height="5" x="14" y="3" rx="1" />
                    <rect width="7" height="9" x="14" y="12" rx="1" />
                    <rect width="7" height="5" x="3" y="16" rx="1" />
                  </svg>
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-2 border border-emerald-700 p-2 rounded-md text-white hover:text-emerald-400"
                      : "flex items-center gap-2 text-gray-100 p-2 rounded-md hover:text-emerald-400"
                  }
                  to="/dashboard/expenses"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1adb64"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-banknote-arrow-down-icon lucide-banknote-arrow-down"
                  >
                    <path d="M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" />
                    <path d="m16 19 3 3 3-3" />
                    <path d="M18 12h.01" />
                    <path d="M19 16v6" />
                    <path d="M6 12h.01" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                  Expenses
                </NavLink>
              </li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-2 border border-emerald-700 p-2 rounded-md text-white hover:text-emerald-400"
                    : "flex items-center gap-2 text-gray-100 p-2 rounded-md hover:text-emerald-400"
                }
                to="/dashboard/income"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1adb64"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-coins-icon lucide-coins"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v8" />
                  <path d="M8 12h8" />
                </svg>
                Income
              </NavLink>
              <li>
                <NavLink
                 
                  to="/dashboard/analytics"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-2 border border-emerald-700 p-2 rounded-md text-white hover:text-emerald-400"
                      : "flex items-center gap-2 text-gray-100 p-2 rounded-md hover:text-emerald-400"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1adb64"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide  lucide-chart-line-icon lucide-chart-line"
                  >
                    <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                    <path d="m19 9-5 5-4-4-3 3" />
                  </svg>
                  Analytics
                </NavLink>
              </li>
              <li>
                <NavLink
                   className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-2 border border-emerald-700 p-2 rounded-md text-white hover:text-emerald-400"
                      : "flex items-center gap-2 text-gray-100 p-2 rounded-md hover:text-emerald-400"
                  }
                  to="/dashboard/profile"
                  
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1adb64"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-user-pen-icon lucide-user-pen"
                  >
                    <path d="M11.5 15H7a4 4 0 0 0-4 4v2" />
                    <path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
                    <circle cx="10" cy="7" r="4" />
                  </svg>
                  profile
                </NavLink>
              </li>
              <li>
                <NavLink
                 
                  to="/dashboard/settings"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-2 border border-emerald-700 p-2 rounded-md text-white hover:text-emerald-400"
                      : "flex items-center gap-2 text-gray-100 p-2 rounded-md hover:text-emerald-400"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1adb64"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-settings-icon lucide-settings"
                  >
                    <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  Settings
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-2 border border-emerald-700 p-2 rounded-md text-white hover:text-emerald-400"
                      : "flex items-center gap-2 text-gray-100 p-2 rounded-md hover:text-emerald-400"
                  }
                  to="/dashboard/logout"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1adb64"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-log-out-icon lucide-log-out"
                  >
                    <path d="m16 17 5-5-5-5" />
                    <path d="M21 12H9" />
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  </svg>
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
    </>
  );
}
export default SideBar;
