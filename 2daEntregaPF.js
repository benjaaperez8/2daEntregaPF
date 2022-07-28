
/*
class Operacion{
    constructor (ingresarNumero1,ingresarNumero2){
        this.ingresar = ingresarNumero1
        this.ingresar = ingresarNumero2
    }
}
let Operacion = []
if(localStorage.getItem('storageOperacion')) {
    Operacion = JSON.parse(localStorage.getItem('storageOperacion'))
} else {
    localStorage.setItem('storageOperacion', JSON.stringify(Operacion))
}

const form = document.getElementById('idForm')
const botonOperacion = document.getElementById('idBotonOperacion')
const divOperacion = document.getElementsById('divOperacion')
*/
function sumar(){
    var x = parseInt(document.getElementById('idNumero1').value);
    var y = parseInt(document.getElementById('idNumero2').value);
    document.getElementById('idBotonOperacion').innerHTML = x+y;

}

function restar(){
    var x = parseInt(document.getElementById('idNumero1').value);
    var y = parseInt(document.getElementById('idNumero2').value);
    document.getElementById('idBotonOperacion').innerHTML = x-y;
}

function multiplicar(){
    var x = parseInt(document.getElementById('idNumero1').value);
    var y = parseInt(document.getElementById('idNumero2').value);
    document.getElementById('idBotonOperacion').innerHTML = x*y;
}
function dividir(){
    var x = parseInt(document.getElementById('idNumero1').value);
    var y = parseInt(document.getElementById('idNumero2').value);
    document.getElementById('idBotonOperacion').innerHTML = x/y;
}

