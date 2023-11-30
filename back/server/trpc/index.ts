import { publicProcedure, router } from "./trpc";
const appRouter = router({
  posts: publicProcedure.query(async () => {
    return [10, 20, 30];
  }),
});

export type AppRouter = typeof appRouter;
