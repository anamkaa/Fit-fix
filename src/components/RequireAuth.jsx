import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth-context";

export const RequireAuth = ({ children }) => {
  const location = useLocation();

  const {
    user: { isLogged },
  } = useAuth();

  return isLogged ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
