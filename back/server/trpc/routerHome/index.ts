import { z } from "zod";
import { prismaConnection } from "../../connect";
import { publicProcedure, router } from "../trpc";

export const routerHome = router({
  homeList: publicProcedure.query(async () => {
    const homes = await prismaConnection.home.findMany();
    return homes;
  }),

  homeDetails: publicProcedure.input(z.string()).query(async (opts) => {
    const home = prismaConnection.home.findUnique({
      where: {
        id: opts.input,
      },
    });
    return home ?? undefined;
  }),
  addPerson: publicProcedure
    .input(
      z.object({
        home_id: z.string(),
        name: z.string(),
        person_id: z.string(),
      })
    )
    .mutation(async (opts) => {
      const updateHome = await prismaConnection.home.update({
        where: {
          id: opts.input.home_id,
        },
        data: {
          persons: {
            push: { id: opts.input.person_id, name: opts.input.name },
          },
        },
      });

      const updatePerson = await prismaConnection.person.update({
        where: {
          id: opts.input.person_id,
        },
        data: {
          homes: {
            push: {
              id: opts.input.home_id,
              address: updateHome.address,
              rooms: updateHome.rooms,
              person: [],
            },
          },
        },
      });
      return { updatePerson, updateHome };
    }),

  createHouse: publicProcedure
    .input(
      z.object({
        address: z.string(),
        city: z.string(),
        rooms: z.number(),
        persons: z.array(
          z.object({
            id: z.string(),
            name: z.string(),
          })
        ),
      })
    )
    .mutation(async (opts) => {
      const newHouse = await prismaConnection.home.create({
        data: opts.input,
      });
      return newHouse;
    }),
});
