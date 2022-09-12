import express from "express";
import todoRoutes from "./router/user-answers";
import connection from "./database/config";
import { json, urlencoded } from "body-parser";
import path from 'path'
const website= express();
website.use(express.static(path.join(__dirname,'../../screening-questions/build')))

website.use(json());

website.use(urlencoded({ extended: true }));

website.use("/answers", todoRoutes);
website.use(
    (
      err: Error,
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      res.status(500).json({ message: err.message });
    }
  );
  


connection
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