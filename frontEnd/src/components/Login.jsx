import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { apiCLient, LOGIN_ROUTE } from "../service/api";
import { useAppStore } from "../store/store.js";

const Login = () => {
  const navigate = useNavigate();
  const { setUserInfo, userInfo } = useAppStore();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      console.log("its working");

      const res = await apiCLient.post(LOGIN_ROUTE, { email, password });
      if (res.status === 201) {
        // console.log(res.data.user);

        navigate("/profile");
        const user = res.data.user;

        setUserInfo(user);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return (
    <div>
      <Box
        sx={{
          width: 400,
          p: 4,
          borderRadius: 3,
          background: "rgba(255, 255, 255, 0.1)",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(10px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            background: "linear-gradient(to right, #6A11CB, #2575FC)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 1,
          }}
        >
          Welcome back!!
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#d1d5db",
            fontWeight: 500,
            mb: 4,
          }}
        >
          Explore the World
        </Typography>
        <form style={{ width: "100%" }} noValidate>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              mb: 2,
              "& .MuiInputLabel-root": { color: "#d1d5db" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#6A11CB",
                },
                "&:hover fieldset": {
                  borderColor: "#2575FC",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#2575FC",
                },
                "& .MuiOutlinedInput-input": {
                  color: "#d1d5db", // Input text color
                },
              },
            }}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            sx={{
              mb: 2,
              "& .MuiInputLabel-root": { color: "#d1d5db" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#6A11CB",
                },
                "&:hover fieldset": {
                  borderColor: "#2575FC",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#2575FC",
                },
                "& .MuiOutlinedInput-input": {
                  color: "#d1d5db", // Input text color
                },
              },
            }}
          />

          <Button
            fullWidth
            variant="contained"
            onClick={() => handleLogin()}
            sx={{
              py: 1.5,
              background: "linear-gradient(to right, #6A11CB, #2575FC)",
              "&:hover": {
                background: "linear-gradient(to right, #2575FC, #6A11CB)",
              },
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            Login
          </Button>
        </form>
        <Typography
          variant="body2"
          sx={{ mt: 2, color: "#d1d5db", fontWeight: 500 }}
        >
          Don't have an account?{" "}
          <Link
            to="/signup"
            style={{
              color: "#6A11CB",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            SignUp
          </Link>
        </Typography>
      </Box>
    </div>
  );
};

export default Login;
