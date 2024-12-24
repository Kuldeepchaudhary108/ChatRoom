import { StrictMode } from "react";
import App from "./App.jsx";
import "./index.css";
import ReactDOM from "react-dom/client";

// const router = createBrowserRouter(createRoutesFromElements(<></>));
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
