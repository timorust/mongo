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
exports.listBook = void 0;
const connect_1 = require("../../connect");
const trpc_1 = require("../trpc");
exports.listBook = trpc_1.publicProcedure.query(() => __awaiter(void 0, void 0, void 0, function* () {
    const bookList = yield connect_1.prismaConnection.book.findMany();
    return bookList;
}));
