const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Manrac como completado o pendiente la tarea'
}

const { argv } = require('yargs')
    .command('crear', 'Crea un elento por hacer', {
        descripcion: descripcion
    }).command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion: descripcion,
        completado: completado
    })
    .command('borrar', 'borra una tarea por hacer', {
        descripcion: descripcion
    })
    .help();

module.exports = {
    argv: argv
}