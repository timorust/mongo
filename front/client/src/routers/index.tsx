import { Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage/HomePage";
import { PostPage } from "./PostPage/PostPage";
import { AuthorPage } from "./AuthorPage/AuthorPage";
import { AuthorDetailsPage } from "./AuthorPage/AuthorDetailsPage/AuthorDetailsPage";

export function RouterComponent() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/author" element={<AuthorPage />} />
        <Route path="/author/:id" element={<AuthorDetailsPage />} />
      </Routes>
    </>
  );
}
