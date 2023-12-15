import { prismaConnection } from "../../connect";
import { publicProcedure } from "../trpc";
import { router } from "../trpc";
import { string, z } from "zod";

export const routerBook = router({
  bookDetails: publicProcedure.input(z.string()).query(async (opts) => {
    const bookDetails = await prismaConnection.book.findFirst({
      where: {
        id: opts.input,
      },
    });
    return bookDetails;
  }),

  bookList: publicProcedure.query(async () => {
    const bookList = await prismaConnection.book.findMany();
    return bookList;
  }),

  createBook: publicProcedure
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
    }),
  bookEdit: publicProcedure
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
    }),
});
