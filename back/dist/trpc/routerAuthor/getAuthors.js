"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAuthors = void 0;
const connect_1 = require("../../connect");
const trpc_1 = require("../trpc");
exports.getAuthors = trpc_1.publicProcedure.query(() => connect_1.prismaConnection.author.findMany());
