import { RequestHandler } from "express";

import { answers } from "../models/user-answers";

export const createToDo: RequestHandler = async (req, res, next) => {
  var todos = await answers.create({ ...req.body });
  return res
    .status(200)
    .json({ message: "Answers inserted successfully", data: todos });
};
export const getAllToDo: RequestHandler = async (req, res, next) => {
  const allTodos: answers[] = await answers.findAll();
  console.log(allTodos)
  return res
    .status(200)
    .json({ message: "table data fetched successfully", data: allTodos });
};