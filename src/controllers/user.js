const userModel = require('../models/user');

module.exports = {
    createUser : async (req, res )=>
    {
        try
        {
            const {nome, idade, senha} = req.body;
            const user = await userModel.create({
                nome,
                idade,
                senha,
            });
            if(!user) throw new Error("Impossível criar esse User!");
            res.status(201).json({
                mensagem :"Pessoa criada com sucesso!",
                user:{
                    nome,
                idade,
                }
               
            });
        }
        catch(err)
        {
            res.status(400).json({
                mensagem: error.message,
            });

        }

    },

    listUser : async (req,res) =>
    {
        try{
            const user = await userModel.find();
            res.status(200).json(
                {
                    quantidade : user.length,
                    user,
                }
            );

        }
        catch(err)
        {
            res.status(500).json(
                {
                  mensagem : "Algo de errado não está certo...Faça contanto com o suporte",
                }
            );
        }
    },
}