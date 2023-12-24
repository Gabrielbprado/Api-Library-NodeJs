import Express  from "express";
import Connection from "./Data/Data.js";

const app = Express();
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

const Livros = 
[
    {
        "Id" : 1,
        "Livro" : "Harry Poter"
    },
    {
        "Id" : 2,
        "Livro" : "Pc Gamer"
    }

];

function GetId(id)
{
    return Livros.findIndex(Livros => 
        {
            return Livros.Id === Number(id);
        });
}

app.get("/livros" ,(req,res) =>
{
    res.status(200).json(Livros);
});

app.get("/", (req,res) =>
{
    res.status(200).send("Raiz do Projeto");
});

app.post("/livros",(req,res) =>
{
    Livros.push(req.body);
    res.status(201).send("Livro Cadastrado");
});

app.get("/livros/:id" ,(req,res) => 
{
    const id = GetId(req.params.id);
   
        res.status(200).json(Livros[id]);
  
});

app.put("/livros/:id", (req,res) =>
{
    const id = GetId(req.params.id);
    if(req.body.Id != Livros[id].Id)
    {
        res.send("Não é possivel Atualizar o Id")
    }else
    {
    Livros[id] = req.body
    res.status(201).send("Livro Atualizado");
    }
});

app.delete("/livros/:id" ,(req,res) => 
{
    const id = GetId(req.params.id);
    Livros.splice(id,1);
    res.status(201).send("Livro Excluido");
});

export default app;

