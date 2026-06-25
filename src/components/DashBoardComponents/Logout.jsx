import { useState } from "react";
import {Logout} from "../../supaApi/auth";
import { Navigate } from "react-router-dom";
function LogoutPage({ setLogout }) {
  const [loggedOut, setLoggedOut] = useState(false);
  const handleLogout = async () => {
    await Logout();
    setLoggedOut(true);
    setLogout(true);
  };
  if (loggedOut) {
    return <Navigate to="/auth" />;
  }
  return (
    <>
    <div className="h-150 flex items-center justify-center">
        <div className="p-8 rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Logout</h2>
            <p className="text-gray-600 mb-6">Are you sure you want to logout?</p>
            <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Logout
            </button>
        </div>
    </div>
    </>
  );
}
export default LogoutPage;