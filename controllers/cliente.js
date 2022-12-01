const axios = require('axios');

module.exports = {

    index: (req, res) => {
        let feedback="";
        res.render('index', {feedback});
    },

    inicioCliente: (req, res) => {
        res.render('inicioCliente');
    },

    servicos: async (req, res) => {
        const categoria = req.query.categoria;

        const url = "https://manas-back.herokuapp.com/customer/category";
        let queryParams = "?category="+categoria;
        if(req.query.orderedBy){
            queryParams += "&orderedBy=EVALUATION"
        }
        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };

        const response = await axios.get(url + queryParams, axiosConfig);
        const servicosPorCategoria = response['data'];
        res.render('servicos', {servicosPorCategoria});
    },

    servicosContratados: async (req, res) => {
        const feedback = ""
        const url = "https://manas-back.herokuapp.com/customer/contracted-service?id-customer="+req.session.usuario.idPerson;
        const idPerson = req.session.usuario.idPerson;
        const name = (req.session.usuario.namePerson).split(" ")[0];

        const axiosConfig = {
            headers: {
                "Access-Control-Allow-Origin": "*",
            }
        };
        const response = await axios.get(url, axiosConfig);
        const servicosContratados = response['data'];
        let servicosList = [];
        for(let i = 0; i < servicosContratados.length; i++){
            const url = "https://manas-back.herokuapp.com/service-provider/service?id-service="+servicosContratados[i].idServiceProvider;
            const response = await axios.get(url, axiosConfig)
            servicosList.push(response['data'])
        }
        console.log(servicosList)
        res.render('servicosContratados', {feedback, servicos:servicosList, idPerson, name});
    },

    contratarServico: async (req, res) => {
        const idServico = req.body.idServicoContratar;
        const idCustomer = req.session.usuario.idPerson;
        const idPerson = req.session.usuario.idPerson;
        const name = (req.session.usuario.namePerson).split(" ")[0];

        const body = JSON.stringify({
            'serviceId': idServico,
            'customerId': idCustomer,
        });

        const url = "https://manas-back.herokuapp.com/customer/contract-service";

        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };

        const response = await axios.post(url, body, axiosConfig);
        const feedback = "Serviço Contratado com Sucesso!";

        const urlContratados = "https://manas-back.herokuapp.com/customer/contracted-service?id-customer="+req.session.usuario.idPerson;

        const axiosConfigContratados = {
            headers: {
                "Access-Control-Allow-Origin": "*",
            }
        };
        const responseContratados = await axios.get(urlContratados, axiosConfigContratados);
        const servicosContratados = responseContratados['data'];
        let servicosList = [];
        for(let i = 0; i < servicosContratados.length; i++){
            const url = "https://manas-back.herokuapp.com/service-provider/service?id-service="+servicosContratados[i].idServiceProvider;
            const response = await axios.get(url, axiosConfig)
            servicosList.push(response['data'])
        }

        res.render("servicosContratados", {feedback, servicos: servicosList, idPerson, name});
    },

    avaliarServico: async (req, res) => {
        const idCustomer = req.session.usuario.idPerson;
        const idServiceProvider = req.body.idServiceProvider;
        const idServiceProviderHasService = req.body.idServiceProviderHasService;
        const grade = req.body.grade;
        const comment = req.body.comment;
        const name = (req.session.usuario.namePerson).split(" ")[0];
        const idPerson = req.session.usuario.idPerson;
        
        const bodyAvaliar = JSON.stringify({
            'idCustomer': idCustomer,
            'idServiceProvider': idServiceProvider,
            'idServiceProviderHasService': idServiceProviderHasService,
            'grade': grade,
            'comment': comment
        });

        const urlAvaliar = "https://manas-back.herokuapp.com/service/evaluation/";

        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };

        const responseAvaliar = await axios.post(urlAvaliar, bodyAvaliar, axiosConfig);
        const feedback = "Avaliação Realizada com Sucesso!";

        const urlContratados = "https://manas-back.herokuapp.com/customer/contracted-service?id-customer="+req.session.usuario.idPerson;

        const axiosConfigContratados = {
            headers: {
                "Access-Control-Allow-Origin": "*",
            }
        };
        const responseContratados = await axios.get(urlContratados, axiosConfigContratados);
        const servicosContratados = responseContratados['data'];
        let servicosList = [];
        for(let i = 0; i < servicosContratados.length; i++){
            const url = "https://manas-back.herokuapp.com/service-provider/service?id-service="+servicosContratados[i].idServiceProvider;
            const response = await axios.get(url, axiosConfig)
            servicosList.push(response['data'])
        }


        res.render("servicosContratados", {feedback, servicos: servicosList, idPerson, name});

    }
}
