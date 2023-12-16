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
      },
    });
    await prismaConnection.home.create({
      data: {
        address: faker.person.jobType() + " " + (i + 5),
        city: faker.person.jobArea(),
        rooms: 5,
        personId: newPerson.id,
      },
    });
  }
}
