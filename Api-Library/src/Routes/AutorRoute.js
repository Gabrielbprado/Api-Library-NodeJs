import Express from "express";
import AutorController from "../Controllers/AutorController.js";

const Routers = Express.Router();

Routers.get("/autor",AutorController.GetAutor);
Routers.post("/autor",AutorController.PostAutor);
Routers.get("/autor/:id",AutorController.GetAutorId);
Routers.put("/autor/:id",AutorController.PutAutor);
Routers.delete("/autor/:id",AutorController.DeleteAutor);
export default Routers;