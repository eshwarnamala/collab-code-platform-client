
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) return <p>Loading...</p>; 

  return user ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;


