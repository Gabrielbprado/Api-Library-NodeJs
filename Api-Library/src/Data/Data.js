import mongoose from "mongoose";

async function ConnectionMongo()
{
  mongoose.connect("mongodb+srv://gabrielbprado13:gabrielbprado13@cluster0.xdcbwfz.mongodb.net/livrariasalura?retryWrites=true&w=majority");
  return mongoose.connection;
}

export default ConnectionMongo;

