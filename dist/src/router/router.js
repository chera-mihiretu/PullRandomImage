"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = require("../controller/index");
const telegramRouter = (0, express_1.default)();
telegramRouter.post("/myphoto", index_1.postHandler);
telegramRouter.get("/myphoto", index_1.getHandler);
exports.default = telegramRouter;
