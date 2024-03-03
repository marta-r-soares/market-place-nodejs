const userService = require("../service/usuario.service");

const findUserByIdController = async (req, res) => {
    try{
        const user = await userService.findUserByIdSerevice(req.params.id);

        if(!user){
            return res.status(400).send({message: "Usuario nao encontrado, tente novamente"})
        }

        return res.status(200).send(user);

    }catch (err){
        if(err.kind == "ObjectId"){
        
            return res.status(400).send({ message: 'ID informado, esta incorreto, verifique o ID e tente novamente!'});
        }
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: 'Erro inesperado tente novamente!'});
    }
};

const findAllUsersController = async (req, res) =>{
    try{
        return res.status(200).send(await userService.findAllUsersService());
    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: 'Erro inesperado tente novamente!'});
    }
};

const createUserController = async (req, res) =>{
    try{
        const body = req.body;

        if(!body.nome){
            return res.status(400).send({ message: 'O campo "nome" nao foi preenchido!'});
        }

        return res.status(201).send(await userService.createUserService(body));

    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: 'Erro inesperado tente novamente!'});
    }
};

const updateUserController = async (req, res) =>{
    try{
        const body = req.body;
        
        if(!body.nome){
            return res.status(400).send({ message: 'O campo "nome" nao foi preenchido!'});
        }

        return res.send(await userService.updateUserService(req.params.id, body));

    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: 'Erro inesperado tente novamente!'});
    }
};

const removeUserController = async (req, res) =>{
    try{

        const deleteUser = await userService.removeUserService(req.params.id);

        console.log(deleteUser);
    

        if(deleteUser == null){
            res.status(404).send({ message: 'Usuario nao encontrado, tente novamente!'});
        }else{
            res.status(200).send({ message: 'Usuario deletado com sucesso!'});
        }

    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: 'Erro inesperado tente novamente!'});
    }
};

const addUserAddressController = async (req, res) =>{
    try{
        req.body.createdAt = new Date();
        const endereco = await userService.addUserAddressService(req.params.id, req.body);
    
        if(endereco.ok == 1){
          res.status(200).send({ message: 'endereco adicionado com sucesso' });  
        }else{
          res.status(400).send({ message: 'algo deu errado, tente novamente' });  
        }
       
      } catch (err) {
        res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde"});
        console.log(err.message);
      }
};
const removeUserAddressController = async (req,res) =>{
        try{
        const endereco = await userService.removeUserAddressService(req.body.id,req.body.idEndereco);
    
        if(endereco.ok == 1){
            res.status(200).send({ message: 'endereco removido com sucesso' });  
        }else{
            res.status(400).send({ message: 'algo deu errado, tente novamente' });  
        }
        
        } catch (err) {
        res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde"});
        console.log(err.message);
        }
    };

const addUserFavProductController = async (req, res) =>{
    try{



    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: 'Erro inesperado tente novamente!'});
    }
};

const removeUserFavProductController = async (req, res) =>{
    try{



    }catch (err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: 'Erro inesperado tente novamente!'});
    }
};

module.exports = {
    findUserByIdController,
    findAllUsersController,
    createUserController,
    updateUserController, 
    removeUserController,
    addUserAddressController,
    removeUserAddressController,
    addUserFavProductController ,
    removeUserFavProductController,
}