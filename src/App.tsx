import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import LayoutDefault from "./layouts/defaultLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutDefault />}>
          <Route index element={<h1>bb</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
