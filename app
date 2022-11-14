const {crearArchivo} = require('./helpers/multiplicar');
const {b, l, h} = require('./config/yargs');

console.clear();

/* 
const [, , arg3] = process.argv;
const [, base = 5] = arg3.split('=');
console.log(base);
/* const base = 6; */

crearArchivo(b, l, h)
    .then(nombreArchivo => console.log(nombreArchivo))
    .catch(err=>console.log(err));