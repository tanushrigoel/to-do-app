import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "../components/home.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}/>
    // <Route path="/" element={<div className="text-red-500 bg-black">Home Page</div>} />
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
