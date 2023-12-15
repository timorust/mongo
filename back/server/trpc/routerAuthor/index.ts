import { router } from "../trpc";
import { deleteAuthor } from "./deleteAuthor";
import { getAuthorDetails } from "./getAuthorDetails";
import { getAuthors } from "./getAuthors";

export const routerAuthor = router({
  list: getAuthors,
  details: getAuthorDetails,
  delete: deleteAuthor,
});
