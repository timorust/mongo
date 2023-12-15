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
exports.editBook = void 0;
const zod_1 = require("zod");
const trpc_1 = require("../trpc");
const connect_1 = require("../../connect");
exports.editBook = trpc_1.publicProcedure
    .input(zod_1.z.object({
    id: zod_1.z.string(),
    title: zod_1.z.string(),
    authorId: zod_1.z.string(),
    description: zod_1.z.string(),
}))
    .mutation((opts) => __awaiter(void 0, void 0, void 0, function* () {
    const bookUpdate = yield connect_1.prismaConnection.book.update({
        data: {
            title: opts.input.title,
            description: opts.input.description,
            authorId: opts.input.authorId,
        },
        where: {
            id: opts.input.id,
        },
    });
    return bookUpdate;
}));
