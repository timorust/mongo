import { router } from "./trpc";
import { routerAuthor } from "./routerAuthor";
import { routerBook } from "./routerBook";
import { routerHome } from "./routerHome";
import { routerPerson } from "./routerPerson";

export const appRouter = router({
  author: routerAuthor,
  book: routerBook,
  home: routerHome,
  person: routerPerson,
});

export type AppRouter = typeof appRouter;
