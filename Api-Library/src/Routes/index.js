import Express from "express";
import Books from "./LivroRoute.js";
import Autor from "./AutorRoute.js";

const routes = (app) =>
{
  app.route("/").get((req,res) => res.status(200).send("Programa Iniciado"));
  app.use(Express.json(),Books,Autor);

};

export default routes;

