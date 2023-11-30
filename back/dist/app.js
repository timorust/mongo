"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const insertData_1 = require("./insertData");
(0, insertData_1.generateData)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: ["http://localhost:5173"],
}));
app.get("/", (req, res) => {
    res.send({
        message: "start mongo_pro process",
    });
});
app.listen(3300, () => {
    console.log("listening on 3300!");
});
