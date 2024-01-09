import mongoose from 'mongoose';

const AutorSchema = new mongoose.Schema({

    Id : { type : mongoose.Types.ObjectId},
    Name : { type : String, require : true},
    Nacionalidade : { type : String}
}, {versionKey : false});

const Autor = mongoose.model("autor",AutorSchema);

export {Autor , AutorSchema};