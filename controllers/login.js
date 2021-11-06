const bcrypt = require("bcrypt");
const axios = require('axios');

module.exports = {

    //função para carregar a página de login
    login: async (req, res) => {
        const email = req.body.emailLogin;
        const senha = req.body.senhaLogin;

        const url = "https://manas-back.herokuapp.com/login";

        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };

        const body = JSON.stringify({
            'email': email,
            'password': senha
        });

        const response = await axios.post(url, body, axiosConfig);
        req.session.usuario = response['data'];
        const usuario = req.session.usuario;

        if(usuario.user.authorities[0].authority == "SERVICE_PROVIDER"){
            res.redirect('inicioPrestador');
        }else if(usuario.user.authorities[0].authority == "CUSTOMER"){
            res.redirect('inicioCliente');
        }
    }

}
