let opciones = ["piedra","papel","tijera"];

function jugar(eleccion){
    var maquina = opciones[Math.floor(Math.random()*3)];
    if(eleccion == maquina)        console.log("Empate");
    else if(eleccion=="piedra" && maquina=="papel")     console.log("Perdiste contra " + maquina)
    else if(eleccion== "piedra" && maquina=="tijera")   console.log("Ganaste! contra " + maquina);
    else if(eleccion=="papel" && maquina=="piedra") console.log("Ganaste! contra " + maquina);
    else if(eleccion=="papel" && maquina=="tijera") console.log("Perdiste contra " + maquina);
    else if(eleccion=="tijera" && maquina=="papel") console.log("Ganaste! contra " + maquina);
    else  console.log("Perdiste");
}

jugar("papel");

function jugarCon(eleccion){
    var maquina = opciones[Math.floor(Math.random()*3)];
    switch(eleccion){
        case "piedra":
            if(maquina=="papel")    console.log("Perdiste contra " + maquina)
            else if(maquina=="tijera")  console.log("GANASTE contra " + maquina)
            else console.log("Empate, la maquina tambien eligió "+ eleccion)
            break;
        case "papel":
            if(maquina=="tijera")    console.log("Perdiste contra " + maquina)
            else if(maquina=="piedra")  console.log("GANASTE contra " + maquina)
            else console.log("Empate, la maquina tambien eligió "+ eleccion)
            break;
        case "tijera":
            if(maquina=="piedra")    console.log("Perdiste contra " + maquina)
            else if(maquina=="papel")  console.log("GANASTE contra " + maquina)
            else console.log("Empate, la maquina tambien eligió "+ eleccion)
            break;
        default:
            console.log("Empate, la maquina tambien eligió "+ eleccion)
    }
}

jugarCon("piedra");
