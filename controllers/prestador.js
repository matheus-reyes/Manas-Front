const axios = require('axios');

module.exports = {

    inicioPrestador: (req, res) => {
        const feedback = "";
        res.render('inicioPrestador', {feedback});
    },

    //função para carregar a página de login
    cadastrarServico: async (req, res) => {
        const nome = req.body.nomeServico;
        const categoria = req.body.categoria;
        const valorMedio = req.body.valorMedio;
        const descricao = req.body.descricao;

        const body = JSON.stringify({
            'idServiceProvider': req.session.usuario.idPerson,
            'serviceName': nome,
            'category': categoria,
            'description': descricao,
            'price': valorMedio,
        });

        const url = "https://manas-back.herokuapp.com/service-provider/service/register";

        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };

        const response = await axios.post(url, body, axiosConfig);
        const feedback = "Serviço Cadastrado com Sucesso!";

        res.render("index", {feedback});
    },

}
