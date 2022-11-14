const fileSystem = require('fs');
const colors = require('colors');

const  crearArchivo = async(base, lista, hasta ) => {
    
    let salida = ''; 
    let consola = '';
    for(let i = 0; i <= hasta; i++){
        salida += `${base} x ${i} = ${base * i} \n`;
        consola += `${base} x ${colors.bgGreen(i)} = ${base * i} \n`;
    }
    fileSystem.writeFileSync(`./salida/tabla-${base}.txt`, salida);    

    if(lista){
        console.log('========='.bgGreen);
        console.log('Tabla del '.bold.bgGreen, base)
        console.log('========='.bgGreen);
        return consola.bgRed;
    }
}

module.exports = {
    crearArchivo
}
