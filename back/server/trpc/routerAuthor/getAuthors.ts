import { prismaConnection } from "../../connect";
import { publicProcedure } from "../trpc";

export const getAuthors = publicProcedure.query(() =>
  prismaConnection.author.findMany()
);
