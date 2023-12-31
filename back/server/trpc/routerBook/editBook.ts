import { z } from "zod";
import { publicProcedure } from "../trpc";
import { prismaConnection } from "../../connect";

export const editBook = publicProcedure
  .input(
    z.object({
      id: z.string(),
      title: z.string(),
      authorId: z.string(),
      description: z.string(),
    })
  )
  .mutation(async (opts) => {
    const bookUpdate = await prismaConnection.book.update({
      data: {
        title: opts.input.title,
        description: opts.input.description,
        authorId: opts.input.authorId,
      },
      where: {
        id: opts.input.id,
      },
    });
    return bookUpdate;
  });
