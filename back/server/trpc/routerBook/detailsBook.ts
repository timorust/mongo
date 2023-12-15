import { z } from "zod";
import { publicProcedure } from "../trpc";
import { prismaConnection } from "../../connect";

export const detailsBook = publicProcedure
  .input(z.string())
  .query(async (opts) => {
    const bookDetails = await prismaConnection.book.findFirst({
      where: {
        id: opts.input,
      },
    });
    return bookDetails;
  });
