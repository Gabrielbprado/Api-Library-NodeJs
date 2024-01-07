import Books from "../Models/BookModel.js";

class BookController
{
    static async GetBook (req,res)
    {
        const Listbooks = await Books.find({}); 
        res.status(200).json(Listbooks);
    }

    static async PostBook (req,res)
    {
        try
        {
        const NewBook = await Books.create(req.body);
        res.status(201).json({message : "Livro Criado Com Sucesso", Livro : NewBook});
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