"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const trpc_1 = require("./trpc");
const trpcExpress = __importStar(require("@trpc/server/adapters/express"));
// import { generateDataPersonAndHomes } from "./scripts/generateDataPersonAndHomes";
// generateDataPersonAndHomes(10);
// import { generateData } from "./insertData";
// generateData();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: ["http://localhost:5173"],
}));
app.use("/trpc", trpcExpress.createExpressMiddleware({
    router: trpc_1.appRouter,
}));
// app.get("/", (req, res) => {
//   res.send({
//     message: "start mongo_pro process",
//   });
// });
console.log(__dirname);
app.use(express_1.default.static(path_1.default.join(__dirname, "../static-client")));
app.get("*", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "../static-client/index.html"));
});
app.listen((_b = (_a = process === null || process === void 0 ? void 0 : process.env) === null || _a === void 0 ? void 0 : _a.PORT) !== null && _b !== void 0 ? _b : 3300, () => {
    var _a, _b;
    console.log((_b = "listening on " + ((_a = process === null || process === void 0 ? void 0 : process.env) === null || _a === void 0 ? void 0 : _a.PORT)) !== null && _b !== void 0 ? _b : 3300);
});
