import { Router } from "express";

import {
  createToDo,
  getAllToDo
} from "../controller/user-answers";

const router = Router();

router.post("/insert", createToDo);
router.get("/retrieve", getAllToDo);

export default router;