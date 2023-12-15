"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerBook = void 0;
const trpc_1 = require("../trpc");
const createBook_1 = require("./createBook");
const listBook_1 = require("./listBook");
const editBook_1 = require("./editBook");
const detailsBook_1 = require("./detailsBook");
exports.routerBook = (0, trpc_1.router)({
    bookDetails: detailsBook_1.detailsBook,
    bookList: listBook_1.listBook,
    createBook: createBook_1.createBook,
    bookEdit: editBook_1.editBook,
});
