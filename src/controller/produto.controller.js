const produtoService = require("../service/produto.service");

const findProductByIdController = async (req, res) => {
    try {
        res.status(200).send(await produtoService.findProductByIdService(req.params.id));
    }
    catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!` });
    }
};

const findAllProductController = async (req, res) => {
    try {
        res.status(200).send(await produtoService.findAllProductService());
    }
    catch (err) {
        console.log(`erro: ${err.message} problema findAllController!`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!` });
    }
};



const createProductController = async (req, res) => {
    try {
        const corpo = {
             ...req.body,
             userId: req.userId,
             createdAt: new Date(),
        }

        res.send(await produtoService.createProductService(corpo));
    }catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!` });
    }
};

const updateProductController = async (req, res) => {
    try {
        
        res.send(await produtoService.updateProductService(req.params.id, req.body));

    }
    catch (err) {
        res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
        console.log(`erro: ${err.message}`);
    }
};

const deleteProductController = async (req, res) => {
    try {
        res.send(await produtoService.deleteProductService(req.params.id));

        // const deleteProduct = await produtoService.deleteProductService(req.params.id);

        // if (deleteProduct == null) {
        //     res.status(404).send({ Message: `Produto náo encontrado, tente novamente! ` });
        // }
        // else {
        //     res.status(200).send({ Message: `Sucesso, Produto deletado! ` });
        // }
    }
    catch (err) {
        console.log(`erro: ${err.message} Problema removeProductController`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!` });
    }
};

// const addCategoriaProdutoController = async (req, res) => {
//     try {
//         res.status(200).send(await produtoService.addCategoriaProdutoService(req.params.id, req.body));
//     }
//     catch (err) {
//         res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
//         console.log(`erro: ${err.message}`);
//     }
// }

// const rmCategoriaProdutoController = async (req, res) => {
//     try {
//         res.status(200).send(await produtoService.rmCategoriaProdutoService(req.params.id, req.body));
//     }
//     catch (err) {
//         res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
//         console.log(`erro: ${err.message}`);
//     }
// }


module.exports = {
    findProductByIdController,
    findAllProductController,
    createProductController,
    updateProductController,
    deleteProductController
}