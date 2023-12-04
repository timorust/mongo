import { prismaConnection } from "../../connect";
import { publicProcedure, router } from "../trpc";

export const getAuthors = publicProcedure.query(() =>
  prismaConnection.author.findMany()
);
