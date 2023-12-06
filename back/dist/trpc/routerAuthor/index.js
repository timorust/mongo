"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerAuthor = void 0;
const trpc_1 = require("../trpc");
const getAuthorDetails_1 = require("./getAuthorDetails");
const getAuthors_1 = require("./getAuthors");
exports.routerAuthor = (0, trpc_1.router)({
    list: getAuthors_1.getAuthors,
    details: getAuthorDetails_1.getAuthorDetails,
});
