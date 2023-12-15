import { prismaConnection } from "../../connect";
import { publicProcedure } from "../trpc";
import { z } from "zod";

export const deleteAuthor = publicProcedure
  .input(z.string())
  .mutation(async (opts) => {
    const id = opts.input;

    const deleteBooks = await prismaConnection.book.deleteMany({
      where: {
        authorId: id,
      },
    });

    await prismaConnection.author.delete({
      where: {
        id: id,
      },
    });

    return {
      count: deleteBooks.count,
      status: "deleted",
    };
  });
