import {Navigate, Outlet} from "react-router-dom";
import { useState, useEffect } from "react";
import { GetUser } from "../supaApi/auth";
import Loading from "./Loading";

function ProtectedRoute() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await GetUser();
        setUser(user);
        setLoading(false);
    };
    fetchUser();
  }, []);

  if (loading) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-[#0F172A]">
            <Loading />
        </div>
    );
  }
  if (!user) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
}

export default ProtectedRoute;