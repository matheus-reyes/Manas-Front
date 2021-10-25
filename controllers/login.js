const bcrypt = require("bcrypt");

module.exports = {

    //função para carregar a página de login
    login: (req, res) => {
        const email = req.body.emailLogin;
        const senha = bcrypt.hashSync(req.body.senhaLogin, 10);
        const uri = "";
        const body = {
            'username': email,
            'password': senha
        }
    }

}
