import { prismaConnection } from "../../connect";
import { publicProcedure } from "../trpc";
import { z } from "zod";

export const getAuthorDetails = publicProcedure
  .input(z.string())
  .query(async (opts) => {
    const id = opts.input;

    const [books, authorDetails] = await Promise.all([
      prismaConnection.book.findMany({
        where: {
          authorId: id,
        },
      }),
      prismaConnection.author.findFirst({
        where: {
          id,
        },
      }),
    ]);
    return { books, authorDetails };
  });
