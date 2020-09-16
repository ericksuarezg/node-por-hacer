const fs = require('fs');

let listadoPorHacer = []; // creando un array para almacenar las notas 

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer); // combierte un OBJETO a un json totalmente valido
    fs.writeFile('db/data.json', data, (err) => {
        if (err) {
            throw new Error('No se pudo grabar', err)
        }
    });

}

const cargarBD = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}

const crear = (descripcion) => {
    cargarBD();
    let porHacer = {
        descripcion: descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);
    console.log(listadoPorHacer);
    guardarDB()
    return porHacer;
}


const listar = () => {

    cargarBD();
    /*  let porListar = {
         descripcion: descripcion,
         completado: false
     } */
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarBD();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion; //retorna la pocicion index del elemento que coincide
        //de lo contrario retornara un -1
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;

    } else {
        return false;
    }
}


const borrar = (descripcion) => {
    cargarBD();
    let indexBorrar = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion
    });
    if (indexBorrar >= 0) {
        listadoPorHacer.splice(indexBorrar, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }


}

module.exports = {
    crear: crear,
    listar: listar,
    actualizar: actualizar,
    borrar: borrar
}