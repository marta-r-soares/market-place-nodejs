const mongoose = require("mongoose");

const ProdutoSchema = new mongoose.Schema({
    nome: { type: String, unique: true, required: true },
    tamanho: { type: Number, required: true },
    descricao: { type: String, required: true },
    precoUnitario: { type: Number, required: true },
    imagem: { type: String, required: true },
    codigoBarra: { type: Number, unique: true, required: true },
    // categorias: [
    //     {
    //         _id: { type: mongoose.Schema.Types.ObjectId, unique: true, required: true, ref: "categorias" },
    //         createAt: { type: Date, require: true, default: Date.now() }
    //     },
    // ],
});

const Produto = mongoose.model("produtos", ProdutoSchema);

module.exports = Produto;