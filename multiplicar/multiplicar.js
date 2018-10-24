const fs = require('fs');
const util = require('util');
const colors = require('colors');

const writeFile = util.promisify(fs.writeFile);

let listarTabla = async (base, limite = 10) => {
    console.log('======================='.green);
    console.log(`Tabla del ${base}`.green);
    console.log('======================='.green);

    let data = await getDataMultiplicar(base, limite);
    console.log(data);
};

let crearArchivo = async (base, limite = 10) => {
    if (!Number(base)) {
        throw new Error(`El valor introducido ${base} no es un número.`);
    }

    let nombreArchivo = `tabla-${base}-al-${limite}.txt`;
    let nombreArchivoFull = `tablas/${nombreArchivo}`;
    let data = await getDataMultiplicar(base, limite);

    await writeFile(nombreArchivoFull, data);
    return nombreArchivo;
};

let getDataMultiplicar = async (base, limite) => {
    let data = '';
    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base * i}\n`;
    }

    return data;
};

let crearArchivo_promises = (base) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número.`);
            return;
        }

        let data = '';
        let nombreArchivo = `tablas/tabla-${base}.txt`;
    
        for (let i = 1; i <= 10; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }
        
        fs.writeFile(nombreArchivo, data, (err) => {
            if (err) 
                reject(err);    
            else
                resolve(nombreArchivo);
        });
    });
};

module.exports = {
    crearArchivo,
    crearArchivo_promises,
    listarTabla
};
