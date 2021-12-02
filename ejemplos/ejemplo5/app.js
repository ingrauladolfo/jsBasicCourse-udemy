'use strict'
// Var se usa en todo momento que se esté ejecutando el script
var numero = 20;
var texto = 'hola';
if(true){
    // Let es usado solamente en un cierto bloque como el if
    let numero = 40;
    let texto = 'hola que tal';
    console.log(numero);
    console.log(texto);
}
console.log(numero);
console.log(texto);