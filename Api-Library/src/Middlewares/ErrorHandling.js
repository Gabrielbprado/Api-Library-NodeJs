import mongoose from "mongoose";
// eslint-disable-next-line no-unused-vars
function ErrorHandling(error,req,res,next)
{
  if(error instanceof mongoose.Error.CastError)
  {
    res.status(400).json({Message : "Ocorreu um Erro Do Lado do Cliente Verifique as Informações Passadas", Erro : error});
  }else
  {
    res.status(500).json({message: "Ocorreu um Erro Do Lado do Servidor Por Favor Tente Novamente", Erro :error});
  }
}

export default ErrorHandling;