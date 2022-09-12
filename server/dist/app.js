"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_answers_1 = __importDefault(require("./router/user-answers"));
const config_1 = __importDefault(require("./database/config"));
const body_parser_1 = require("body-parser");
const path_1 = __importDefault(require("path"));
const website = (0, express_1.default)();
website.use(express_1.default.static(path_1.default.join(__dirname, '../../screening-questions/build')));
website.use((0, body_parser_1.json)());
website.use((0, body_parser_1.urlencoded)({ extended: true }));
website.use("/answers", user_answers_1.default);
website.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
config_1.default
    .sync()
    .then(() => {
    console.log("Database successfully connected");
})
    .catch((err) => {
    console.log("Error", err);
});
website.listen(5000, () => {
    console.log("Server started on port 5000");
});
