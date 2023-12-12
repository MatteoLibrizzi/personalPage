import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import LayoutDefault from "./layouts/defaultLayout";
import { LandingPage } from "./pages/landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutDefault />}>
          <Route index element={<LandingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
