import React from "react";
import { TextField, Button, Typography, Box } from "@mui/material";

const Login = () => {
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
            label="Username"
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
              },
            }}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
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
              },
            }}
          />

          <Button
            fullWidth
            variant="contained"
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
      </Box>
    </div>
  );
};

export default Login;
