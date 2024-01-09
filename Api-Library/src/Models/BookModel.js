import mongoose from "mongoose"
import { AutorSchema } from './AutorModel.js';

const livroSchema = new mongoose.Schema ({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    editora: { type: String },
    Preco: { type: Number },
    paginas: { type: Number },
    Autor : AutorSchema
}, { versionKey: false });

const livro = mongoose.model("books", livroSchema);

export default livro;
