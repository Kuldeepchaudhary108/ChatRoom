import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Signup from "./components/Signup.jsx";
import "./index.css";
import App from "./App.jsx";
import Login from "./components/Login.jsx";
import Container from "./components/Container.jsx";

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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/chat/:user/:id" element={<Container />} />
    </>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
