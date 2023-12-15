import { prismaConnection } from "../../connect";
import { publicProcedure } from "../trpc";

export const listBook = publicProcedure.query(async () => {
  const bookList = await prismaConnection.book.findMany();
  return bookList;
});
