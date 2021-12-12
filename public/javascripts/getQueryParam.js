function getParameterByName(name = "categoria", url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function noOrder(){
    let queryParam = getParameterByName();
    window.location.replace("/servicos?categoria="+queryParam);
}

function evaluationOrdered(){
    let queryParam = getParameterByName();
    window.location.replace("/servicos?categoria="+queryParam+"&orderedBy=EVALUATION");
}
