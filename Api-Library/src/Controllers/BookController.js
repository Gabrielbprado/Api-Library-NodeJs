import Books from "../Models/BookModel.js";
import { Autor } from "../Models/AutorModel.js";

class BookController
{
  static async GetBook (req,res)
  {
    const Listbooks = await Books.find({}); 
    res.status(200).json(Listbooks);
  }

  static async PostBook (req,res)
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
      res.status(500).json({message : "Ocorreu um erro", Erro : error});
    }
  }

  static async GetBookId (req,res)
  {
    try
    {
      const id = req.params.id;
      const Book = await Books.findById(id);
      res.status(200).json(Book);
    }catch (erro)
    {
      res.status(400).json({message: "Ocorreu um Erro Verifique se o Id esta Correto"},erro);
    }
  }

  static async PutBook (req,res)
  {
    try
    {
      const id = req.params.id;
      await Books.findByIdAndUpdate(id,req.body);
      res.status(201).json({message : "Livro Atualizado"});
    }catch (erro)
    {
      res.status(400).json({message: "Ocorreu um Erro Verifique se o Id esta Correto"},erro);
 
    }

  }

  static async SearchPublisher(req,res)
  {
    try
    {
      const Publisher = req.query.editora;
      const book = await Books.find({editora : Publisher});
      res.status(200).json(book);
    }
    catch (error)
    {
      res.status(404).json({message : "Ocorreu um Erro ao Procurar o Livro"});
    }

  }

  static async DeleteBook (req,res)
  {
    try
    {
      const id = req.params.id;
      await Books.findByIdAndDelete(id,req.body);
      res.status(201).json({message : "Livro Excluido"});
    }catch (erro)
    {
      res.status(400).json({message: "Ocorreu um Erro Verifique se o Id esta Correto"},erro);

    }
  }

}

export default BookController;