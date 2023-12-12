import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import LayoutDefault from "./layouts/defaultLayout";
import { LandingPage } from "./pages/landing";
import { PersonalBlog } from "./pages/personalBlog";
import { TechBlog } from "./pages/techBlog";
import { BlogPost } from "./pages/blogPost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutDefault />}>
          <Route index element={<LandingPage />} />
        </Route>
        <Route path="/blog" element={<LayoutDefault />}>
          <Route path="personal" index element={<PersonalBlog />} />
          <Route path="tech" index element={<TechBlog />} />
          <Route path="post/:s3Key" index element={<BlogPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
