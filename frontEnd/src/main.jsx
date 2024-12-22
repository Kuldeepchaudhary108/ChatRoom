import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
import "./index.css";
import { Signup, Login, Container, Profile } from "./components/index.js";
import { useAppStore } from "./store/store.js";
import { getCookie } from "./utils/GetCookie.js";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/signup",
//         element: <Signup />,
//       },
//       {
//         path: "/login",
//         element: <Login />,
//       },
//       {
//         path: "/chat",
//         element: <Container />,
//       },
//     ],
//   },
// ]);

const PrivateRoute = ({ children }) => {
  const isAuthenticated = getCookie("accessToken");
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const AuthRoute = ({ children }) => {
  const isAuthenticated = getCookie("accessToken");
  const { userInfo } = useAppStore();
  // console.log(userInfo);
  return isAuthenticated ? <Navigate to="/chat" replace /> : children;
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/signup"
        element={
          <AuthRoute>
            <Signup />
          </AuthRoute>
        }
      />
      <Route
        path="/login"
        element={
          <AuthRoute>
            <Login />
          </AuthRoute>
        }
      />
      <Route
        path="/chat"
        element={
          <PrivateRoute>
            <Container />
          </PrivateRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to="/login" />} />
    </>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
