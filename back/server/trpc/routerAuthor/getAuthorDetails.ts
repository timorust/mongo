import { prismaConnection } from "../../connect";
import { publicProcedure } from "../trpc";
import { z } from "zod";

export const getAuthorDetails = publicProcedure
  .input(z.string())
  .query(async (opts) => {
    const id = opts.input;

    const authorDetails = await prismaConnection.author.findFirst({
      where: {
        id,
      },
    });
    const books = await prismaConnection.book.findMany({
      where: {
        authorId: id,
      },
    });
    return { authorDetails, books };
  });
