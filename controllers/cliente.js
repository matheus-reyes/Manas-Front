module.exports = {

    //função para carregar a página de login
    cadastrarServico: (req, res) => {
        const nome = req.body.nomeServico;
        const categoria = req.body.categoria;
        const valorMedio = req.body.valorMedio;
        const descricao = req.body.descricao;

        const uri = "";
        const body = {
            'name': nome,
            'category': categoria,
            'decription': descricao,
            'value': valorMedio,
        }
    },

    index: (req, res) => {
        let feedback="";
        res.render('index', {feedback});
    },

    inicioCliente: (req, res) => {
        res.render('inicioCliente');
    },

    servicos: (req, res) => {
        res.render('servicos');
    }

}
