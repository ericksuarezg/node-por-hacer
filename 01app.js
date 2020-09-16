const { argv } = require('./configuracion/yargsapp');
const colores = require('colors')
const porHacer = require('./porHacer/por-hacer');
let comando = argv._[0]; // como es un array le indico la posicion uno

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.listar();
        listado.forEach(tarea => {
            console.log('=============Por Hacer========='.green);
            console.log(tarea.descripcion);
            console.log('Estado', tarea.completado);
            console.log('==============================='.green)
        });
        console.log('Mostrar todas las tareas po hacer');
        break;
    case 'actualizar':
        let actualizar = porHacer.actualizar(argv.descripcion, argv.completado)
        console.log(actualizar);
        break;
    case 'borrar':
        let borrar = porHacer.borrar(argv.descripcion)
        console.log(borrar);
        break;


    default:
        console.log('comando no es reconocido');
        break;
}