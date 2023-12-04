import { prismaConnection } from "../../connect";
import { publicProcedure, router } from "../trpc";

export const GetAuthors = publicProcedure.query(() =>
  prismaConnection.author.findMany()
);
