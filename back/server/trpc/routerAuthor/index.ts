import { router } from "../trpc";
import { getAuthors } from "./getAuthors";

export const routerAuthor = router({
  list: getAuthors,
});
