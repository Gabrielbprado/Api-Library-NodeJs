import mongoose from "mongoose";

async function ConnectionMongo()
{
    mongoose.connect("mongodb+srv://gabrielbprado13:gabrielbprado13@cluster0.pi9jrso.mongodb.net/livraria?retryWrites=true&w=majority");
    return mongoose.connection;
}

export default ConnectionMongo;

