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
exports.getAllToDo = exports.createToDo = void 0;
const user_answers_1 = require("../models/user-answers");
const createToDo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var todos = yield user_answers_1.answers.create(Object.assign({}, req.body));
    return res
        .status(200)
        .json({ message: "Answers inserted successfully", data: todos });
});
exports.createToDo = createToDo;
const getAllToDo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const allTodos = yield user_answers_1.answers.findAll();
    console.log(allTodos);
    return res
        .status(200)
        .json({ message: "table data fetched successfully", data: allTodos });
});
exports.getAllToDo = getAllToDo;
