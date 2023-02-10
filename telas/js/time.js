// Função que cria uma mascara para o campo hi
window.onload = function() {
    let hi = document.getElementById("hora");
    let data = new Date;

    dia = data.getDate();
    mes = data.getMonth();
    ano = data.getFullYear();
    dataf = dia + '/' + mes + '/' + ano;

    hi.innerHTML = dataf;
}