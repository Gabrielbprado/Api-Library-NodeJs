import Express from "express";
import BookController from "../Controllers/BookController.js";

const Routers = Express.Router();

Routers.get("/livros",BookController.GetBook);
Routers.post("/livros",BookController.PostBook);
Routers.get("/livros/:id",BookController.GetBookId);
Routers.put("/livros/:id",BookController.PutBook);
Routers.delete("/livros/:id",BookController.DeleteBook);
export default Routers;