import Books from "../Models/BookModel.js";
import { Autor } from "../Models/AutorModel.js";

class BookController
{
  static async GetBook (req,res,next)
  {
    try
    {
      const Listbooks = await Books.find({}); 
      res.status(200).json(Listbooks);
    } catch (error)
    {
      next(error);
    }
  }

  static async PostBook (req,res,next)
  {   
    const newBook = req.body;
    try
    {
            
      const autorEncontrado = await Autor.findById(newBook.Autor);
      const BookCompleto = { ...newBook, Autor: { ...autorEncontrado._doc}};
      const book = await Books.create(BookCompleto);
      res.status(201).json({message : "Livro Criado Com Sucesso", Livro : book});
    }catch (error)
    {
      next(error);    }
  }

  static async GetBookId (req,res,next)
  {
    try
    {
      const id = req.params.id;
      const Book = await Books.findById(id);
      if(Book !== null)
      {
        res.status(200).json(Book);
      }else
      {
        res.status(404).json({message : "Id Não Encontrado"});
      }
    
    }catch (erro)
    {
      next(erro);    }
  }

  static async PutBook (req,res,next)
  {
    try
    {
      const id = req.params.id;
      await Books.findByIdAndUpdate(id,req.body);
      res.status(201).json({message : "Livro Atualizado"});
    }catch (erro)
    {
      next(erro); 
    }

  }

  static async SearchPublisher(req,res,next)
  {
    try
    {
      const Publisher = req.query.editora;
      const book = await Books.find({editora : Publisher});
      res.status(200).json(book);
    }
    catch (error)
    {
      next(error);    }

  }

  static async DeleteBook (req,res,next)
  {
    try
    {
      const id = req.params.id;
      await Books.findByIdAndDelete(id,req.body);
      res.status(201).json({message : "Livro Excluido"});
    }catch (erro)
    {
      next(erro);
    }
  }

}

export default BookController;