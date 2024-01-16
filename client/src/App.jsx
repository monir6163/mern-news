import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import "./App.css";
import MainLayout from "./dashboard/layout/MainLayout";
import { AddWriter } from "./dashboard/pages/AddWriter";
import AdminIndex from "./dashboard/pages/AdminIndex";
import Login from "./dashboard/pages/Login";
import News from "./dashboard/pages/News";
import { Profile } from "./dashboard/pages/Profile";
import Unable from "./dashboard/pages/Unable";
import { Writers } from "./dashboard/pages/Writers";
import ProtectDashboard from "./middleware/ProtectDashboard";
import ProtectRole from "./middleware/ProtectRole";

function App() {
  let role = "admin";
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ProtectDashboard />}>
          <Route path="" element={<MainLayout />}>
            <Route path="" element={<Navigate to="/dashboard/admin" />} />
            <Route path="not-access" element={<Unable />} />
            <Route path="news" element={<News />} />
            <Route path="profile" element={<Profile />} />
            <Route path="" element={<ProtectRole role={role} />}>
              <Route path="admin" element={<AdminIndex />} />
              <Route path="addwriter" element={<AddWriter />} />
              <Route path="writers" element={<Writers />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
