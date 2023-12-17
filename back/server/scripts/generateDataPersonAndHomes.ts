import { faker } from "@faker-js/faker";
import { prismaConnection } from "../connect";

export async function generateDataPersonAndHomes(interCount: number = 1) {
  const minAge = 20;
  for (let i = 0; i < interCount; i++) {
    const newPerson = await prismaConnection.person.create({
      data: {
        name: faker.person.firstName(),
        bio: faker.person.bio(),
        age: minAge + i,
        homes: [],
      },
    });
    const newHome = await prismaConnection.home.create({
      data: {
        address: faker.person.jobType() + " " + (i + 5),
        city: faker.person.jobArea(),
        rooms: 5,
        persons: [
          {
            id: newPerson.id,
            name: newPerson.name,
          },
        ],
      },
    });

    prismaConnection.person.update({
      where: {
        id: newPerson.id,
      },
      data: {
        ...newPerson,
        homes: [
          {
            id: newHome.id,
            address: newHome.address,
            rooms: newHome.rooms,
          },
        ],
      },
    });
  }
}
