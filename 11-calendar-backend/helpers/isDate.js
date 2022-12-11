
//Validacion manual de fechas, pero a dìa de hoy express validator nos brinda metodos para validacion de fechas

const moment = require('moment');

const isDate = ( value ) => {
    if ( !value ){
        return false;
    }
    const fecha = moment( value );
    if( fecha.isValid() ){ 
        return true;
    }else {
        return false;
    }
}

module.exports = { 
    isDate
}