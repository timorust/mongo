"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
const trpc_1 = require("./trpc");
const routerAuthor_1 = require("./routerAuthor");
exports.appRouter = (0, trpc_1.router)({
    author: routerAuthor_1.routerAuthor,
});
