import { z } from "zod";
import { publicProcedure } from "../trpc";
import { prismaConnection } from "../../connect";

export const createBook = publicProcedure
  .input(
    z.object({
      title: z.string(),
      description: z.string(),
      authorId: z.string(),
    })
  )
  .mutation(async (opts) => {
    const newBook = await prismaConnection.book.create({
      data: opts.input,
    });
    return newBook;
  });
