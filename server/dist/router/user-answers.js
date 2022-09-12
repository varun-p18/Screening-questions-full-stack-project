"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_answers_1 = require("../controller/user-answers");
const router = (0, express_1.Router)();
router.post("/insert", user_answers_1.createToDo);
router.get("/retrieve", user_answers_1.getAllToDo);
exports.default = router;
