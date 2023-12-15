import { router } from "../trpc";
import { createBook } from "./createBook";
import { listBook } from "./listBook";
import { editBook } from "./editBook";
import { detailsBook } from "./detailsBook";

export const routerBook = router({
  bookDetails: detailsBook,

  bookList: listBook,

  createBook: createBook,

  bookEdit: editBook,
});
