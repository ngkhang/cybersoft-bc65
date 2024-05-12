import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormComponent from "./pages/FormComponent";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<FormComponent />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
