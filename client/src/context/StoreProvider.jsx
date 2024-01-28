/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { useReducer } from "react";
import decoded_Token from "../utils";
import StoreContext from "./storeContext";
import StoreReducer from "./storeReducer";
function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(StoreReducer, {
    userInfo: decoded_Token(localStorage.getItem("newsToken")),
    token: localStorage.getItem("newsToken") || "",
  });
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}

export default StoreProvider;
