import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../utils/auth";
import { JSX } from "react";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  return isLoggedIn() ? children : <Navigate to="/login" />;
};