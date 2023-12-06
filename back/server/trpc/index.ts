import { router } from "./trpc";
import { routerAuthor } from "./routerAuthor";
import { routerBook } from "./routerBook";

export const appRouter = router({
  author: routerAuthor,
  book: routerBook,
});

export type AppRouter = typeof appRouter;
