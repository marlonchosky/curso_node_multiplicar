const { crearArchivo, crearArchivo_promises, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');
const colors = require('colors/safe');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${colors.green(archivo.green)}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido.');
        break;
}


/* VERSION CON PROMISES */
// crearArchivo_promises(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(err => console.log(err));
