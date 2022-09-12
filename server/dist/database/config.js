"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const user_answers_1 = require("../models/user-answers");
const connection = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "1234",
    database: "user-answers",
    logging: false,
    models: [user_answers_1.answers],
});
exports.default = connection;
