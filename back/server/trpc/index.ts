import { router } from "./trpc";
import { RouterAuthor } from "./routerAuthor";

export const appRouter = router({
  author: RouterAuthor,

  // posts: publicProcedure.query(async () => {
  //   return prismaConnection.post.findMany();
  // }),
});

export type AppRouter = typeof appRouter;
