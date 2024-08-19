import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const authContext = useAuth();

    // Ensure authContext is not undefined
    if (!authContext) {
        return <Navigate to="/login" />;
    }

    return authContext.currentUser ? <>{children}</> : <Navigate to="/login" />;
};

export default ProtectedRoute;
