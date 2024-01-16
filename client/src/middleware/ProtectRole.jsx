/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";
const ProtectRole = ({ role }) => {
  const userInfo = {
    name: "Monir",
    role: "admin",
  };

  if (userInfo.role === role) {
    return <Outlet />;
  } else {
    return <Navigate to="/dashboard/not-access" />;
  }
};

export default ProtectRole;
