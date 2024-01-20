import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import "./App.css";
import MainLayout from "./dashboard/layout/MainLayout";
import { AddWriter } from "./dashboard/pages/AddWriter";
import AdminIndex from "./dashboard/pages/AdminIndex";
import CreateNews from "./dashboard/pages/CreateNews";
import Login from "./dashboard/pages/Login";
import News from "./dashboard/pages/News";
import { Profile } from "./dashboard/pages/Profile";
import Unable from "./dashboard/pages/Unable";
import { Writers } from "./dashboard/pages/Writers";
import WritersIndex from "./dashboard/pages/WritersIndex";
import ProtectDashboard from "./middleware/ProtectDashboard";
import ProtectRole from "./middleware/ProtectRole";

function App() {
  let userInfo = {
    role: "writer",
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ProtectDashboard />}>
          <Route path="" element={<MainLayout />}>
            <Route
              path=""
              element={
                userInfo.role === "writer" ? (
                  <Navigate to="/dashboard/writer" />
                ) : (
                  <Navigate to="/dashboard/admin" />
                )
              }
            />
            <Route path="not-access" element={<Unable />} />
            <Route path="news" element={<News />} />
            <Route path="profile" element={<Profile />} />

            <Route path="" element={<ProtectRole role={"admin"} />}>
              <Route path="admin" element={<AdminIndex />} />
              <Route path="addwriter" element={<AddWriter />} />
              <Route path="writers" element={<Writers />} />
            </Route>

            <Route path="" element={<ProtectRole role={"writer"} />}>
              <Route path="writer" element={<WritersIndex />} />
              <Route path="create/news" element={<CreateNews />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
