import Express  from "express";

const app = Express();

app.get("/", (req,res) =>
{
    res.status(200).send("Raiz do Projeto");
});

export default app;