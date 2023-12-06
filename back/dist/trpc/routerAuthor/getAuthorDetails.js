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
exports.getAuthorDetails = void 0;
const connect_1 = require("../../connect");
const trpc_1 = require("../trpc");
const zod_1 = require("zod");
exports.getAuthorDetails = trpc_1.publicProcedure
    .input(zod_1.z.string())
    .query((opts) => __awaiter(void 0, void 0, void 0, function* () {
    const id = opts.input;
    const [books, authorDetails] = yield Promise.all([
        connect_1.prismaConnection.author.findFirst({
            where: {
                id,
            },
        }),
        connect_1.prismaConnection.book.findMany({
            where: {
                authorId: id,
            },
        }),
    ]);
    return { authorDetails, books };
}));
