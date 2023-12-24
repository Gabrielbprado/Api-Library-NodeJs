import mongoose, { version } from "mongoose";

const LivroSchema = new mongoose.Schema({
    id : { type : mongoose.Schema.ObjectId},
    title : {type : String, require : true},
    autora : {type : String},
    preco : {type : Number},
    Pag : {type : String}

}, {versionKey : false});

const livros = mongoose.model("Books",LivroSchema);

export default  livros;