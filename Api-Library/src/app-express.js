import Express  from "express";
import Connection from "./Data/Data.js";
import routes from "./Routes/index.js";
import Middlewares from "./Middlewares/ErrorHandling.js";


const app = Express();
routes(app);
app.use(Express.json());
// eslint-disable-next-line no-unused-vars
app.use(Middlewares); 


const connection = await Connection();
connection.on("error",(error) =>
{
  console.error("Ocorreu um Erro",error);
});

connection.once("open", () =>
{
  console.log("Conexão realizada com susesso");
});

export default app;

