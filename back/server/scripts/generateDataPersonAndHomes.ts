import { faker } from "@faker-js/faker";
import { prismaConnection } from "../connect";

export async function generateDataPersonAndHomes(interCount: number = 10) {
  for (let i = 0; i < interCount; i++) {
    prismaConnection.home.create({
      data: {
        address: "",
        city: "",
        rooms: 5,
      },
    });
  }
}
