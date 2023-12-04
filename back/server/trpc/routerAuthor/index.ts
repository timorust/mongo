import { router } from "../trpc";
import { GetAuthors } from "./getAuthors";

export const RouterAuthor = router({
  list: GetAuthors,
});
