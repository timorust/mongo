import { Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage/HomePage";
import { PostPage } from "./PostPage/PostPage";
import { AuthorPage } from "./AuthorPage/AuthorPage";
import { AuthorDetailsPage } from "./AuthorPage/AuthorDetailsPage/AuthorDetailsPage";
import { BooksPage } from "./BooksPage/BooksPage";
import { BookDetailsPage } from "./BooksPage/BookDetailsPage/BookDetailsPage";
import { HousePage } from "./HousePage/HousePage";
import { HouseDetails } from "./HousePage/HouseDetails";
import { PersonPage } from "./PersonPage/PersonPage";
import { PersonDetails } from "./PersonPage/PersonDetails";

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
        <Route path="/house/:id" element={<HouseDetails />} />
        <Route path="/persons/" element={<PersonPage />} />
        <Route path="/persons/:id" element={<PersonDetails />} />
      </Routes>
    </>
  );
}
