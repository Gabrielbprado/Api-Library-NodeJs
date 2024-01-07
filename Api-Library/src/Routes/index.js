import Express from "express";
import Books from './Route.js';

const routes = (app) =>
{
    app.route("/").get((req,res) => res.status(200).send("Programa Iniciado"));
    app.use(Express.json(),Books);

}

export default routes;

