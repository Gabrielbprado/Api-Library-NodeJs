import mongoose from "mongoose";

async function ConnectionMongo()
{
    mongoose.connect("mongodb+srv://gabriel13:gabriel13@cluster0.kpl8moy.mongodb.net/?retryWrites=true&w=majority");
    return mongoose.connection;
}

export default ConnectionMongo;

