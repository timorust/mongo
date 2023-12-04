import { router } from "./trpc";
import { routerAuthor } from "./routerAuthor";

export const appRouter = router({
  author: routerAuthor,
});

export type AppRouter = typeof appRouter;
