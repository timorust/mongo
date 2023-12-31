"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
const trpc_1 = require("./trpc");
const routerAuthor_1 = require("./routerAuthor");
const routerBook_1 = require("./routerBook");
const routerHome_1 = require("./routerHome");
const routerPerson_1 = require("./routerPerson");
exports.appRouter = (0, trpc_1.router)({
    author: routerAuthor_1.routerAuthor,
    book: routerBook_1.routerBook,
    home: routerHome_1.routerHome,
    person: routerPerson_1.routerPerson,
});
