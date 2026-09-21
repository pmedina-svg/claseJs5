const nombreAstronauta = prompt("🚀 NASA - Centro de control \n\n Bienvenido al simulador de viajes espaciales.\n Cuál es tu nombre?");
alert("Bienvenid@ " + nombreAstronauta + "!\n" + "Prepárate para tu misión espacial.");

// class o molde de viaje espacial
class ViajeEspacial {
    constructor (origen, destino, distancia, velocidad){
        this.origen = origen;
        this.destino = destino;
        this.distancia = distancia;
        this.velocidad = velocidad;
    }
    cambiarVelocidad(nuevaVelocidad){
        this.velocidad = nuevaVelocidad;
    }
    calcularDuracion(){
        const duracion = this.distancia / this.velocidad; 
        return duracion;      
    }
}

const viajeLuna = new ViajeEspacial( "Tierra", "Luna", 384400, 40000);
// prueba de calculo de duración de viaje
console.log("La duración del viaje a la luna es de " + viajeLuna.calcularDuracion() + " horas.");
const viajeVenus = new ViajeEspacial( "Tierra", "Venus", 41000000, 40000);
console.log("La duración del viaje a Venus es de " + viajeVenus.calcularDuracion() + " horas.");
const viajeMarte = new ViajeEspacial( "Tierra", "Marte", 225000000, 40000);

// prueba de cambio de velocidad
viajeMarte.cambiarVelocidad(60000);
console.log("La duración del viaje a Marte es de " + viajeMarte.calcularDuracion() + " horas.");

let mision;
let viajeSeleccionado;

do{
    mision = parseInt(prompt("🌎 Tu ubicación actual es: TIERRA \n\nDónde quieres viajar? \n1.Luna \n2.Venus \n3.Marte \n\n0. Se cancela el despegue"));

    switch (mision){
        case 0:
            alert("No te preocupes, no todos están listos para volar.");
            break;
        case 1:
            viajeSeleccionado = viajeLuna;
            console.log(viajeSeleccionado);
            break;
        case 2:
            viajeSeleccionado = viajeVenus;
            console.log(nombreAstronauta + " eligió viajar a Venus.");
            break;
        case 3:
            viajeSeleccionado = viajeMarte;
            console.log(nombreAstronauta + " eligió viajar a Marte.");
            break;
        default:
            alert("Opción no válida");
            console.log(nombreAstronauta + " escribio: " + mision + ". opción no valida.");
            break;
    };

}while (mision !== 0);


