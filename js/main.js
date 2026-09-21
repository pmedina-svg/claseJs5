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

// funcion para convertir el calculo de horas a años - dias - horas
function convertirDuracion(horasTotales){
    const horasAnio = 365 * 24;
    const anios = parseInt(horasTotales / horasAnio);
    const horasRestantes = horasTotales % horasAnio;
    const dias = parseInt(horasRestantes / 24);
    const horas = horasRestantes % 24;

    return anios + " años, " + dias + " días y " + horas + " horas";
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
let accion;
let nuevaVelocidad;
let mensajeDestino;
let regresar;

do{
    mision = parseInt(prompt("🌎 Tu ubicación actual es: TIERRA \n\nDónde quieres viajar? \n1. Luna \n2. Venus \n3. Marte \n\n4. Se cancela el despegue"));

    switch (mision){
        case 1:
            viajeSeleccionado = viajeLuna;
            mensajeDestino = "Mensaje desde la torre de control: No saltes tanto " + nombreAstronauta + ", porque en la luna pesas 6 veces menos que en la Tierra.";
            console.log(viajeSeleccionado);
            break;
        case 2:
            viajeSeleccionado = viajeVenus;
            mensajeDestino = "Mensaje desde la torre de control: Bienvenido a venus " + nombreAstronauta + ", ponte bloqueador porque acá hace calor.";
            console.log(nombreAstronauta + " eligió viajar a Venus.");
            break;
        case 3:
            viajeSeleccionado = viajeMarte;
            mensajeDestino = "Mensaje desde la torre de control: Sabias que en Marte un día dura casi lo mismo que en la tierra? Exactamente 24 horas con 39 minutos";
            console.log(nombreAstronauta + " eligió viajar a Marte.");
            break;
        case 4:
            alert("No te preocupes, no todos están listos para volar.");
            console.log("No viaja.");
            break;
        default:
            alert("Opción no válida");
            console.log(nombreAstronauta + " escribio: " + mision + ". opción no valida.");
            break;
    };

    if(mision === 1 || mision === 2 || mision === 3){
    
        do{
            
            accion = parseInt(prompt("Has seleccionado: " + viajeSeleccionado.destino + "\nDistancia: " + viajeSeleccionado.distancia + "km" + "\nVelocidad actual: " + viajeSeleccionado.velocidad + "\nQué quieres hacer? \n\n1. Lanzar misión \n2. Cambiar velocidad \n3. Calcular duración \n4. Cancelar misión"));

            switch (accion){
                case 1:{
                    const duracionViaje = viajeSeleccionado.calcularDuracion();
                    console.log("Se procede el despegue a: " + viajeSeleccionado.destino);
                    alert("🚀 Misión completada! \nHas llegado a " + viajeSeleccionado.destino + "\nDuración del viaje: " + convertirDuracion(duracionViaje) + ".\nNuestros amigos te dan la bienvenida 👽\n\n" + mensajeDestino);
                    regresar = parseInt(prompt("¿Quieres volver a la Tierra?\n\n1. Si\n2. No"));
                    if(regresar === 1){
                        alert("Astronauta " + nombreAstronauta + " regresando al planeta Tierra..");
                        console.log("Astronauta " + nombreAstronauta + " decidió volver a la Tierra.");
                    }
                    else if(regresar === 2){
                        alert("Gracias por haber participado en la misión. \nTe deseamos una vida prospera en tu nuevo hogar.");
                        console.log("Astronauta " + nombreAstronauta + " decidió quedarse en " + viajeSeleccionado.destino + ".");
                    }
                    break;
                }
                case 2:
                    nuevaVelocidad = parseInt(prompt("🚀 A que velocidad quieres viajar ?"));
                    viajeSeleccionado.cambiarVelocidad(nuevaVelocidad);
                    console.log("🚀 Nueva velocidad configurada: " + viajeSeleccionado.velocidad + " km/h");
                    console.log(viajeSeleccionado);
                    break;
                case 3:
                    const duracionViaje = viajeSeleccionado.calcularDuracion();
                    alert("La duración del viaje al destino: " + viajeSeleccionado.destino + " tiene una duración de " + convertirDuracion(duracionViaje) + ".");
                    console.log("Duración del viaje: " + convertirDuracion(duracionViaje) + ".");
                    break;
                case 4:
                    alert("🚨 Misión cancelada. \n\nLa misión a " + viajeSeleccionado.destino + " ha sido cancelada. \nVolviendo al centro de control...");
                    console.log("Misión cancelada.");
                    break;
                default:
                    alert("Opción no válida");
                    console.log(nombreAstronauta + " escribio: " + accion + ". opción no valida.");
                    break;
            };
            
        }while(accion !== 1 && accion !== 4);

    }


}while (mision !== 4 && regresar !==2);


