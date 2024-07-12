import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import RootLayout from "../Layouts/RootLayout";
import Blogs from "../pages/Blogs";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import PrivateRoute from "../components/auth/PrivateRoute";

// The inferred type of 'router' cannot be named without a reference to '.pnpm/@remix-run+router@1.17.1/node_modules/@remix-run/router'. This is likely not portable. A type annotation is necessary.
// @remix-run/router
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      //RootLayout
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route
          path="dashboard"
          element={
            <PrivateRoute redirectPath="/Login" isAuthenticated={false}>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </>,
  ),
);
export default router;
