import Express  from "express";
import Connection from "./Data/Data.js";
import routes from "./Routes/index.js";


const app = Express();
routes(app);
app.use(Express.json());

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

