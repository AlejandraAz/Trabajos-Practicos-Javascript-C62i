/*1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.
Output:
objeto.encender();
objeto.apadar()
auto encendido
El auto se apagó */

let auto = {
    marca: 'fiat',
    modelo: 'pulse',
    anio: 2022,
    color: 'gris',
    estado: true,
    encendido:function(){
    if(this.estado =!this.estado ){
        console.log(`El vehiculo se apagó`);
    }else{
        console.log(`El vehiculo está encendido`);
    }
    }
}

