const axios = require('axios');

module.exports = {

    inicioPrestador: async (req, res) => {
        const feedback = "";

        const url = "https://manas-back.herokuapp.com/service-provider?id-service-provider="+req.session.usuario.idPerson;

        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };

        const response = await axios.get(url, axiosConfig);
        const servicos = response['data']['services'];

        res.render('inicioPrestador', {feedback, servicos});
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

        const urlServicos = "https://manas-back.herokuapp.com/service-provider?id-service-provider="+req.session.usuario.idPerson;

        const responseServicos = await axios.get(urlServicos, axiosConfig);
        const servicos = responseServicos['data']['services'];

        res.render("inicioPrestador", {feedback, servicos});
    },

    //função para excluir o serviço
    excluirServico: async (req, res) => {
        const idServico = req.body.idServicoExcluir;

        const url = "https://manas-back.herokuapp.com/service-provider/service/remove?id-service="+idServico;

        const axiosConfig = {
            headers: {
                "Access-Control-Allow-Origin": "*",
            }
        };

        const response = await axios.delete(url, axiosConfig);
        const feedback = "Serviço Excluido com Sucesso!";

        const urlServicos = "https://manas-back.herokuapp.com/service-provider?id-service-provider="+req.session.usuario.idPerson;

        const responseServicos = await axios.get(urlServicos, axiosConfig);
        const servicos = responseServicos['data']['services'];

        res.render("inicioPrestador", {feedback, servicos});
    },

    //função para editar o serviço
    editarServico: async (req, res) => {
        const nome = req.body.nomeServicoEditar;
        const categoria = req.body.categoriaEditar;
        const valorMedio = req.body.valorMedioEditar;
        const descricao = req.body.descricaoEditar;
        const idServico = req.body.idServicoEditar;

        const body = JSON.stringify({
            'idServiceProviderHasService': idServico,
            'serviceName': nome,
            'serviceCategory': categoria,
            'description': descricao,
            'price': valorMedio,
        });

        const url = "https://manas-back.herokuapp.com/service-provider/service/update";

        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };

        const response = await axios.put(url, body, axiosConfig);
        const feedback = "Serviço Editado com Sucesso!";

        const urlServicos = "https://manas-back.herokuapp.com/service-provider?id-service-provider="+req.session.usuario.idPerson;

        const responseServicos = await axios.get(urlServicos, axiosConfig);
        const servicos = responseServicos['data']['services'];

        res.render("inicioPrestador", {feedback, servicos});
    },

}
