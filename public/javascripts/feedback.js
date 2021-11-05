let feedback = document.getElementById("feedbacks").value;
let mensagemFeedback = document.getElementById("mensagemFeedback");

function exibirFeedback(){
    if(feedback != ""){
        $('#modal-feedback').modal('show');
        mensagemFeedback.innerText = feedback;
    }
}

exibirFeedback();
