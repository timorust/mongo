import { router } from "../trpc";
import { getAuthorDetails } from "./getAuthorDetails";
import { getAuthors } from "./getAuthors";

export const routerAuthor = router({
  list: getAuthors,
  details: getAuthorDetails,
});
