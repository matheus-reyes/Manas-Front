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
        const url = "https://manas-back.herokuapp.com/customer/category";
        let queryParams = "?category=CONSERTOS_GERAIS";
        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };
        const response = await axios.get(url + queryParams, axiosConfig);
        const servicos = response['data'];
        res.render('servicosContratados', {servicos});
    }
}
