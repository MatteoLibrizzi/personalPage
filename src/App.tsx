import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LayoutDefault from "./layouts/defaultLayout";
import { BlogPost } from "./pages/blogPost";
import { LandingPage } from "./pages/landing";
import { PersonalBlog } from "./pages/personalBlog";
import { Redirect } from "./pages/redirect";
import { TechBlog } from "./pages/techBlog";
import { WorkWithMe } from "./pages/workWithMe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutDefault />}>
          <Route index element={<LandingPage />} />
          <Route path="workWithMe" element={<WorkWithMe />} />
        </Route>

        <Route path="blog" element={<LayoutDefault />}>
          <Route path="personal" index element={<PersonalBlog />} />
          <Route path="tech" index element={<TechBlog />} />
          <Route path="post/:s3Key" index element={<BlogPost />} />
        </Route>
        <Route path="*" element={<Redirect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
