
import { Autor } from "../Models/AutorModel.js";

class AutorController
{
  static async GetAutor (req,res)
  {
    const ListAutor = await Autor.find({}); 
    res.status(200).json(ListAutor);
  }

  static async PostAutor (req,res,next)
  {
    try
    {
      const NewAutor = await Autor.create(req.body);
      res.status(201).json({message : "Autor Criado Com Sucesso", Autor : NewAutor});
    }catch (error)
    {
      next(error);
    }
  }

  static async GetAutorId (req,res,next)
  {
    try
    {
      const id = req.params.id;
      const autor = await Autor.findById(id);
      if(autor !== null)
      {
        res.status(200).json(autor);
      }else
      {
        res.status(404).json({message : "Id Não Encontrado"});
      }
     
    }catch (erro)
    {
      next(erro);
    }
  }

  static async PutAutor(req,res,next)
  {
  
    try
    {
      const id = req.params.id;
      
      await Autor.findByIdAndUpdate(id,req.body);
      res.status(201).json({message : "Autor Atualizado"});
    }catch (erro)
    {
      next(erro);
 
    }

  }

  static async DeleteAutor (req,res,next)
  {
    try
    {   
      const id = req.params.id;
      await Autor.findByIdAndDelete(id,req.body);
      res.status(201).json({message : "Autor Excluido"});
    }catch (erro)
    {
      next(erro);
    }
  }

}



export default AutorController;