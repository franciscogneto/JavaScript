
//alert("first js");
/*var lista = ['aaa', 'bbb', 'ccc'];
console.log(lista.join('-'));
var frutas = { fruta: 'maça', cor: 'vermelho' };
console.log(frutas.fruta);

var d = new Date();
alert(d.getMonth());*/

/*function ex(idade) {
    if (idade >= 18)
        return true
    else
        return false;
}

var idade = prompt('qual sua idade');
alert(ex(idade));*/


function button() {
    var elemtent = document.getElementById('id1');
    elemtent.innerHTML = '<b>ola</b>';

}

function redirecionar() {
    window.open('www.google.com.br'); //abre em páginas diferentes
    //window.location.href = "www.google.com.br"; // abre na mea página
}

function onOver(element) {
    //document.getElementById('id2').innerHTML = 'Passou o mouse';
    //alert('ops');
    element.innerHTML = 'Passou o mouse';
}

function onOut(element) {
    //document.getElementById('id2').innerHTML = 'Passe o mouse aqui';
    element.innerHTML = 'Passe o mouse';
}

function load() {
    alert('carregou');
}

function functionChange(element) {
    console.log(element.value);
}