const axios = require('axios');

module.exports = {

    //função para carregar a página de login
    cadastro: async (req, res) => {
        const email = req.body.emailCadastro;
        const senha = req.body.senhaCadastro;
        const nome = req.body.nome;
        const cpf = req.body.cpf;
        const dataNascimento = req.body.dataNascimento;
        const telefone = req.body.telefone;
        const logradouro = req.body.logradouro;
        const bairro = req.body.bairro;
        const numero = req.body.numero;
        const cep = req.body.cep;
        const cidade = req.body.cidade;
        const estado = req.body.estado;
        const tipo = req.body.tipo;
        
        const url = "https://manas-back.herokuapp.com/home/registration";

        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };

        const body = JSON.stringify({
            email: email,
            password: senha,
            name: nome,
            cpf: cpf,
            telephone: telefone,
            birthDate: dataNascimento,
            state: estado,
            city: cidade,
            neighbourhood: bairro,
            street: logradouro,
            number: parseInt(numero),
            cep: cep,
            userType: tipo
        });

        const response = await axios.post(url, body, axiosConfig);
        const feedback = "Cadastro Realizado com Sucesso!";

        res.render("index", {feedback});
    }
}
