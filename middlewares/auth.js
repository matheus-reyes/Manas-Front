function auth(req, res, next){

    if(typeof(req.session.usuario) != "undefined"){
        return next();
    } else {
        return res.send("Erro de Autenticação");
    }
}

module.exports = auth;
