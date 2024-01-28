import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import StoreContext from "../context/storeContext";

const ProtectDashboard = () => {
  const { state } = useContext(StoreContext);

  if (state.userInfo) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectDashboard;
