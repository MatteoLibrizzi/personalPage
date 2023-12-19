import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./webkit.css"
import { ErrorMessage } from "./components/error";
import LayoutDefault from "./layouts/defaultLayout";
import { BlogPostPersonal, BlogPostTech } from "./pages/blogPost";
import { LandingPage } from "./pages/landing";
import { PersonalBlog } from "./pages/personalBlog";
import { TechBlog } from "./pages/techBlog";
import { WorkWithMe } from "./pages/workWithMe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutDefault />}>
          <Route index element={<LandingPage />} />
          <Route path="workWithMe" element={<WorkWithMe />} />
          <Route path="/blog">
            <Route path="personal" index element={<PersonalBlog />} />
            <Route
              path="post/personal/:s3Key"
              index
              element={<BlogPostPersonal />}
            />
            <Route path="tech" index element={<TechBlog />} />
            <Route path="post/tech/:s3Key" index element={<BlogPostTech />} />
          </Route>
          <Route path="*" element={<ErrorMessage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
