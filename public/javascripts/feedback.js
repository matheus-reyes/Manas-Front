let feedback = document.getElementById("feedbacks").value;
let mensagemFeedback = document.getElementById("mensagemFeedback");

function exibirFeedback(){
    if(feedback != ""){
        $('#modal-feedback').modal('show');
        mensagemFeedback.innerText = feedback;
    }
}

exibirFeedback();

const validateEmailRegex = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validateEmail = () => {
    const email = $('#emailCadastro').val();

    if (validateEmailRegex(email)) {
        $('#emailCadastro').addClass("is-valid");
        $('#emailCadastro').removeClass("is-invalid")
    } else {
        $('#emailCadastro').addClass("is-invalid");
        $('#emailCadastro').removeClass("is-valid")
    }
    return false;
}

const validateEmailLogin = () => {
    const email = $('#emailLogin').val();

    if (validateEmailRegex(email)) {
        $('#emailLogin').addClass("is-valid");
        $('#emailLogin').removeClass("is-invalid")
    } else {
        $('#emailLogin').addClass("is-invalid");
        $('#emailLogin').removeClass("is-valid")
    }
    return false;
}

const validateCpfRegex = (cpf) => {
    return cpf.match(
        /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/
    );
}

const validateCpf = () => {
    const cpf = $('#cpf').val();

    if (validateCpfRegex(cpf)) {
        $('#cpf').addClass("is-valid");
        $('#cpf').removeClass("is-invalid")
    } else {
        $('#cpf').addClass("is-invalid");
        $('#cpf').removeClass("is-valid")
    }
    return false;
}

const validateDateRegex = (date) => {
    return date.match(
        /^\d{4}\-\d{2}\-\d{2}$/
    );
}

const validateDate = () => {
    const data = $('#dataNascimento').val();

    if (validateDateRegex(data)) {
        $('#dataNascimento').addClass("is-valid");
        $('#dataNascimento').removeClass("is-invalid")
    } else {
        $('#dataNascimento').addClass("is-invalid");
        $('#dataNascimento').removeClass("is-valid")
    }
    return false;
}

const validateTelefoneRegex = (telefone) => {
    return telefone.match(
        /^\d{2}\ \d{5}\-\d{4}$/
    );
}

const validateTelefone = () => {
    const telefone = $('#telefone').val();

    if (validateTelefoneRegex(telefone)) {
        $('#telefone').addClass("is-valid");
        $('#telefone').removeClass("is-invalid")
    } else {
        $('#telefone').addClass("is-invalid");
        $('#telefone').removeClass("is-valid")
    }
    return false;
}

const validateCepRegex = (cep) => {
    return cep.match(
        /^\d{5}\-\d{3}$/
    );
}

const validateCep = () => {
    const cep = $('#cep').val();

    if (validateCepRegex(cep)) {
        $('#cep').addClass("is-valid");
        $('#cep').removeClass("is-invalid")
    } else {
        $('#cep').addClass("is-invalid");
        $('#cep').removeClass("is-valid")
    }
    return false;
}

$('#emailCadastro').on('input', validateEmail);
$('#cpf').on('input', validateCpf);
$('#dataNascimento').on('input', validateDate);
$('#telefone').on('input', validateTelefone);
$('#cep').on('input', validateCep);
$('#emailLogin').on('input', validateEmailLogin);
