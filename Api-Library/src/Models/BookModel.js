import mongoose from "mongoose"

const livroSchema = new mongoose.Schema ({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    editora: { type: String },
    Preco: { type: Number },
    paginas: { type: Number }
}, { versionKey: false });

const livro = mongoose.model("books", livroSchema);

export default livro;
