const express = require("express");
require("dotenv").config();
const connectToDatabase = require("./src/database/database"); //arquivo de conexao com o bando de dados

const usuario = require("./src/router/usuario.router"); //arquivo de rotas do usuario
const auth = require("./src/router/auth.router"); //arquivo de rotas de autenticacao
const produto = require("./src/router/produto.router"); //arquivo de rotas de produto
const categoria = require("./src/router/categoria.router"); //arquivo de rotas de categoria

const app = express();

const port = 3000;

app.use(express.json());

connectToDatabase(); //conectando com o banco de dados

app.use("/usuario", usuario); //chamando as rotas do usuario
app.use("/auth", auth); //chamando as rotas de autenticacao
app.use("/produto", produto); //chamando as rotas de produto
app.use("/categoria", categoria); //chamando as rotas de categoria

app.get("/", (req,res) => {
    res.send({
        message: "Bem vindo ao nosso market-place"
    });
})

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);

})