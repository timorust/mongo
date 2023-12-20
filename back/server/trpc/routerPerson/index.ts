import { z } from "zod";
import { prismaConnection } from "../../connect";
import { publicProcedure, router } from "../trpc";

export const routerPerson = router({
  personList: publicProcedure.query(async () => {
    const persons = await prismaConnection.person.findMany({
      select: {
        id: true,
        name: true,
        bio: true,
      },
    });
    return persons;
  }),

  personDetails: publicProcedure.input(z.string()).query(async (opts) => {
    const person = prismaConnection.person.findUnique({
      where: {
        id: opts.input,
      },
    });
    return person ?? undefined;
  }),

  personListNames: publicProcedure.query(async () => {
    const personsName = await prismaConnection.person.findMany({
      select: {
        id: true,
        name: true,
      },
    });
    return personsName;
  }),
});
