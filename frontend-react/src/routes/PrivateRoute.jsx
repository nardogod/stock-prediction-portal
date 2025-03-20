import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const isAuthenticated = localStorage.getItem("accessToken") !== null;

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
