import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import { Signup, Login, Container, Profile } from "./components/index.js";
import { getCookie } from "./utils/GetCookie.js";
import { useAppStore } from "./store/store.js";
import { apiCLient, USER_ROUTE } from "./service/api.js"; 



const PrivateRoute = ({ children }) => {
  // const isAuthenticated = getCookie("accessToken");
  // const { userInfo } = useAppStore();
  // const isAuthenticated = !!userInfo;
  const { userInfo } = useAppStore();
  const isAuthenticated = !!userInfo;
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const AuthRoute = ({ children }) => {
  // const isAuthenticated = getCookie("accessToken");
  // console.log(userInfo);
  const { userInfo } = useAppStore();
  const isAuthenticated = !!userInfo;
  return isAuthenticated ? <Navigate to="/chat" /> : children;
};
export default function App() {
  const { userInfo, setUserInfo } = useAppStore();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await apiCLient.get(USER_ROUTE);
        console.log(data);
        if (data.status === 200) {
          setUserInfo(data);
        }
      } catch (error) {
        console.log("error while geting user data ");
      }
    };
    if (!userInfo) {
      getUserData();
    }
  }, [userInfo, setUserInfo]);

  return (
    <BrowserRouter>
      <Routes>
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
            <>
              <Profile />
            </>
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}
