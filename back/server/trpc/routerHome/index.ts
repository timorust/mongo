import { z } from "zod";
import { prismaConnection } from "../../connect";
import { publicProcedure, router } from "../trpc";

export const routerHome = router({
  homeList: publicProcedure.query(async () => {
    const homes = await prismaConnection.home.findMany();
    return homes;
  }),

  homeDetails: publicProcedure.input(z.string()).query(async (opts) => {
    const home = prismaConnection.home.findUnique({
      where: {
        id: opts.input,
      },
    });
    return home;
  }),
});
