const nuestriPrimeritoObjeto = {
    claveComoString: 'valor',
    aquiHayUnNumero: 123,
    esUnBoolean: true,
    unObjetoAnimado : {}
}

const nombre = 'Eduardo';
const escuela = 'Fictizia';

const profesor = { nombre, escuela };

const String = 'mi string'
//como ya vimos esto no lo puedo hacer
String = 'otra cosa'

//Los objetos mutan, asi que puedo modificar su contenido libremente
const objeto = {
    propiedad1: 'Esta es mi propiedad',
}

objeto.propiedad2 = 'Esta es una propiedad nueva'
objeto.propiedad1 = 'Esta propiedad la modificamos'

//Lo que no puedo hacer es lo siguiente:
    const peligro = {
        propiedad1: 'Esta es mi propiedad',
    }

    peligro = {
        prohibido: 'Esto no lo puedo hacer '
    }

const heroes1 ={
    dc:['Batman', 'Superman', 'Wonder Woman'],
    marvel:['Iron Man', 'Spider Man', 'Hulk'],
}

const heroesDC = heroes1.dc

const heroes ={
    dc:['Batman', 'Superman', 'Wonder Woman'],
    marvel:['Iron Man', 'Spider Man', 'Hulk'],
}

const {dc: heroesDc} = heroes

const dc = {
    heroes:{
        bartman:{
            nombre: 'Batman'
        },
        superman:{
            nombre: 'Superman'
        },
    }
}

const { heroes: {batman} } = dc

const objeto = {
    nombre: 'Eduardo',
    edad : 26,
}

//Devuelve el mismo objeto
const objetoCongelado = Object.freeze(objeto)
objetoCongelado.localidad = 'Barcelona'

//Pero si podemos crear nuevas copias a partir del objeto congelado
const nuevoObjeto = {
    ...objetoCongelado,
    localidad: 'Madrid',
}


