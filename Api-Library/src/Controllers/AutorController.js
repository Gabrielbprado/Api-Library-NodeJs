import { Autor } from "../Models/AutorModel.js";

class AutorController
{
    static async GetAutor (req,res)
    {
        const ListAutor = await Autor.find({}); 
        res.status(200).json(ListAutor);
    }

    static async PostAutor (req,res)
    {
        try
        {
        const NewAutor = await Autor.create(req.body);
        res.status(201).json({message : "Autor Criado Com Sucesso", Autor : NewAutor});
        }catch (error)
        {
            res.status(500).json({message : "Ocorreu um erro", Erro : error});
        }
    }

    static async GetAutorId (req,res)
    {
        try
        {
        const id = req.params.id;
        const Autor = await Autor.findById(id);
        res.status(200).json(Autor);
        }catch (erro)
        {
            res.status(400).json({message: "Ocorreu um Erro Verifique se o Id esta Correto"},erro);
        }
    }

    static async PutAutor (req,res)
    {
        try
        {
        const id = req.params.id;
        await Autor.findByIdAndUpdate(id,req.body);
        res.status(201).json({message : "Autor Atualizado"});
        }catch (erro)
        {
            res.status(400).json({message: "Ocorreu um Erro Verifique se o Id esta Correto"},erro);
 
        }

    }

    static async DeleteAutor (req,res)
    {
        try
        {
        const id = req.params.id;
        await Autor.findByIdAndDelete(id,req.body);
        res.status(201).json({message : "Autor Excluido"});
        }catch (erro)
        {
            res.status(400).json({message: "Ocorreu um Erro Verifique se o Id esta Correto"},erro);

        }
    }

}

export default AutorController;