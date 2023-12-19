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
exports.routerPerson = void 0;
const zod_1 = require("zod");
const connect_1 = require("../../connect");
const trpc_1 = require("../trpc");
exports.routerPerson = (0, trpc_1.router)({
    personList: trpc_1.publicProcedure.query(() => __awaiter(void 0, void 0, void 0, function* () {
        const persons = yield connect_1.prismaConnection.person.findMany({
            select: {
                id: true,
                name: true,
                bio: true,
            },
        });
        return persons;
    })),
    personDetails: trpc_1.publicProcedure.input(zod_1.z.string()).query((opts) => __awaiter(void 0, void 0, void 0, function* () {
        const person = connect_1.prismaConnection.person.findUnique({
            where: {
                id: opts.input,
            },
        });
        return person !== null && person !== void 0 ? person : undefined;
    })),
});
