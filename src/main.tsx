import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactQueryWrapper from "./util/hook/ReactQueryWrapper.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <ReactQueryWrapper>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ReactQueryWrapper>
);
