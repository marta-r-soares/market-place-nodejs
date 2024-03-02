const express = require("express");
const connectToDatabase = require("./src/database/database"); //arquivo de conexao com o bando de dados

const usuario = require("./src/router/usuario.router"); //arquivo de rotas do usuario

const app = express();

const port = 3000;

app.use(express.json());

connectToDatabase(); //conectando com o banco de dados

app.use("/usuario", usuario); //chamando as rotas do usuario

app.get("/", (req,res) => {
    res.send({
        message: "Bem vindo ao nosso market-place"
    });
})

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);

})