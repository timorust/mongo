"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDataPersonAndHomes = void 0;
const faker_1 = require("@faker-js/faker");
const connect_1 = require("../connect");
function generateDataPersonAndHomes(interCount = 1) {
    return __awaiter(this, void 0, void 0, function* () {
        const minAge = 20;
        for (let i = 0; i < interCount; i++) {
            const newPerson = yield connect_1.prismaConnection.person.create({
                data: {
                    name: faker_1.faker.person.firstName(),
                    bio: faker_1.faker.person.bio(),
                    age: minAge + i,
                },
            });
            yield connect_1.prismaConnection.home.create({
                data: {
                    address: faker_1.faker.person.jobType() + " " + (i + 5),
                    city: faker_1.faker.person.jobArea(),
                    rooms: 5,
                    personId: newPerson.id,
                },
            });
        }
    });
}
exports.generateDataPersonAndHomes = generateDataPersonAndHomes;
