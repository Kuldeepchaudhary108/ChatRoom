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
import { Signup, Login, Container } from "./components/index.js";
import { useAppStore } from "./store/store.js";
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
  const { userInfo } = useAppStore();
  const isAuthenticated = !userInfo;

  return isAuthenticated ? children : <Navigate to="/login" />;
};

const AuthRoute = ({ children }) => {
  const { userInfo } = useAppStore();
  const isAuthenticated = !userInfo;

  return isAuthenticated ? <Navigate to="/login" /> : children;
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/chat/:user/:id"
        element={
          <PrivateRoute>
            <Container />
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
