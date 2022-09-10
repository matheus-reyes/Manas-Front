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
    const $result = $('#resultadoEmailCadastro');
    const email = $('#emailCadastro').val();
    $result.text('');

    if (validateEmailRegex(email)) {
        $result.text(email + ' is valid :)');
        $result.css('color', 'green');
    } else {
        $result.text(email + ' is not valid :(');
        $result.css('color', 'red');
    }
    return false;
}

const validateCpfRegex = (cpf) => {
    return cpf.match(
        /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/
    );
}

const validateCpf = () => {
    const $result = $('#resultadoCpf');
    const cpf = $('#cpf').val();
    $result.text('');

    if (validateCpfRegex(cpf)) {
        $result.text(cpf + ' is valid :)');
        $result.css('color', 'green');
    } else {
        $result.text(cpf + ' is not valid :(');
        $result.css('color', 'red');
    }
    return false;
}

const validateDateRegex = (date) => {
    return date.match(
        /^\d{4}\-\d{2}\-\d{2}$/
    );
}

const validateDate = () => {
    const $result = $('#resultadoData');
    const data = $('#dataNascimento').val();
    $result.text('');

    if (validateDateRegex(data)) {
        $result.text(data + ' is valid :)');
        $result.css('color', 'green');
    } else {
        $result.text(data + ' is not valid :(');
        $result.css('color', 'red');
    }
    return false;
}

const validateTelefoneRegex = (telefone) => {
    return telefone.match(
        /^\d{2}\ \d{5}\-\d{4}$/
    );
}

const validateTelefone = () => {
    const $result = $('#resultadoTelefone');
    const telefone = $('#telefone').val();
    $result.text('');

    if (validateTelefoneRegex(telefone)) {
        $result.text(telefone + ' is valid :)');
        $result.css('color', 'green');
    } else {
        $result.text(telefone + ' is not valid :(');
        $result.css('color', 'red');
    }
    return false;
}

$('#emailCadastro').on('input', validateEmail);
$('#cpf').on('input', validateCpf);
$('#dataNascimento').on('input', validateDate);
$('#telefone').on('input', validateTelefone);
