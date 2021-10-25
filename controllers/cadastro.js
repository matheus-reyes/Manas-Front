const bcrypt = require("bcrypt");

module.exports = {

    //função para carregar a página de login
    cadastro: (req, res) => {
        const email = req.body.emailCadastro;
        const senha = bcrypt.hashSync(req.body.senhaCadastro, 10);
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
        
        const uri = "";
        const body = {
            'username': email,
            'password': senha,
            'name': nome,
            'cpf': cpf,
            'telephone': telefone,
            'birthdate': dataNascimento,
            'state': estado,
            'city': cidade,
            'district': bairro,
            'street': logradouro,
            'number': numero,
            'cep': cep,
            'type': tipo
        }
    }

}
