import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "../src/pages/admin/Dashboard";
import ChangePassword from "./pages/ChangePassword";
import CreateJobs from "./pages/admin/CreateJobs";
import ListJobs from "./pages/admin/ListJobs";
import Profile from "./pages/admin/Profile";
import JobsDetails from "./pages/JobsDetails";
import { GlobalProvider } from "./context/GlobalContext";
import PageNotFound from "./pages/PageNotFound";
import Cookies from "js-cookie";

function App() {

  // ===== AUTHORIZATION FUNCTION/CUSTOM ROUTING
  const LoginRoute = (props) => {
    
    if (Cookies.get("token") !== undefined) {
      return <Navigate to={"/"} />
    } else if (Cookies.get("token") === undefined) {
      return props.children;
    }
  };
  // ===== AUTHORIZATION FUNCTION

  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/dashboard/login"
              element={
                <LoginRoute>
                  <Login />
                </LoginRoute>
              }
            />
            <Route
              path="/dashboard/register"
              element={
                <LoginRoute>
                  <Register />
                </LoginRoute>
              }
            />
            <Route
              path="/dashboard/change-password"
              element={
                <LoginRoute>
                  <ChangePassword />
                </LoginRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                Cookies.get("token") ? (
                  <Dashboard />
                ) : (
                  <Navigate to={'/'}/>
                )
              }
            />
            <Route
              path="/dashboard/list-job-vacancy/form"
              element={
                Cookies.get("token") ? (
                  <CreateJobs />
                ) : (
                  <Navigate to={'/'}/>
                )
              }
            />
            <Route
              path="/dashboard/list-job-vacancy"
              element={
                Cookies.get("token") ? (
                  <ListJobs />
                ) : (
                  <Navigate to={'/'}/>
                )
              }
            />
            <Route
              path="/dashboard/profile"
              element={
                Cookies.get("token") ? (
                  <Profile />
                ) : (
                  <Navigate to={'/'}/>
                )
              }
            />
            <Route path="/job-vacancy/:idData" element={<JobsDetails />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
