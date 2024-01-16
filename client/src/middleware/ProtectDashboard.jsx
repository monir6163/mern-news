import { Navigate, Outlet } from "react-router-dom";

const ProtectDashboard = () => {
  const userInfo = {
    name: "Monir",
    role: "admin",
  };

  if (!userInfo) {
    return <Navigate to="/login" />;
  } else {
    return <Outlet />;
  }
};

export default ProtectDashboard;
