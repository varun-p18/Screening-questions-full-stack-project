import { Sequelize } from "sequelize-typescript";
import { answers } from "../models/user-answers";

const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "1234",
  database: "user-answers",
  logging: false,
  models: [answers],
});

export default connection;