/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import StoreContext from "../context/storeContext";
const ProtectRole = ({ role }) => {
  const { state } = useContext(StoreContext);
  console.log(state.userInfo?.role);
  console.log(role);

  if (state.userInfo?.role === role) {
    return <Outlet />;
  } else {
    return <Navigate to="/dashboard/not-access" />;
  }
};

export default ProtectRole;
