import { Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage/HomePage";
import { PostPage } from "./PostPage/PostPage";
import { AuthorPage } from "./AuthorPage/AuthorPage";
import { AuthorDetailsPage } from "./AuthorPage/AuthorDetailsPage/AuthorDetailsPage";
import { BooksPage } from "./BooksPage/BooksPage";
import { BookDetailsPage } from "./BooksPage/BookDetailsPage/BookDetailsPage";
import { HousePage } from "./HousePage/HousePage";

export function RouterComponent() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/author" element={<AuthorPage />} />
        <Route path="/author/:id" element={<AuthorDetailsPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/books/:id" element={<BookDetailsPage />} />
        <Route path="/house" element={<HousePage />} />
      </Routes>
    </>
  );
}
