// let nombre = prompt("Hola! Ingrese su nombre");
// let apellido = prompt("Ingrese su apellido");

// if (nombre === "") {
//   alert("Nombre se debe ingresar");
// } else if (apellido === "") {
//   alert("Apellido se debe ingresar");
// } else {
//   solicitarTurno();
// }

// let nombre, apellido;

// do{
//     nombre=prompt("Hola! Ingrese su nombre");
// }while (!nombre);

// do{
//     apellido=prompt("Ingrese su apellido");
// } while(!apellido);

// function solicitarTurno(){
//     do {
//     eleccion = prompt(`${nombre} ${apellido}, ¿Con quién deseas solicitar turno?
//     1) Kinesiología
//     2) Médico Clínico
//     3) Oftalmología
//     4) Pediatría
//     5) Otorrinolaringología
//     6) Rayos
//     7) Cancelar turno`);
    
//     switch (eleccion) {
//       case "1":
//         reservarTurno("Kinesiología", "4 de octubre 9.45hs", "$2.100", "01");
//         break;
//       case "2":
//         reservarTurno("Médico Clínico", "5 de octubre 19.30hs", "$4.000", "09");
//         break;
//       case "3":
//         reservarTurno("Oftalmología", "9 de octubre 11.30hs", "$2.400", "06");
//         break;
//       case "4":
//         reservarTurno("Pediatría", "11 de octubre 17.30hs", "$2.800", "11");
//         break;
//       case "5":
//         reservarTurno("Otorrinolaringología", "6 de octubre 10.30hs", "$3.500", "21");
//         break;
//       case "6":
//         reservarTurno("Rayos", "7 de octubre 13.30hs", "$1.800", "16");
//         break;
//       case "7":
//         alert("Gracias por confiar en La Ribera. Lo esperamos pronto!");
//         window.CloseEvent();
//         break;
//       default:
//         alert("Opción no válida. Por favor, elija una opción válida.");
//     }
//   } while (eleccion !== "7");
// }

// function reservarTurno(especialidad, fecha, costo, numeroTurno) {
//   let reservar = prompt(`El valor del turno de ${especialidad} es de ${costo}.\n¿Deseas reservar el turno?
//     Intrucciones: Escriba "si" para reservarlo o escriba "no" para cancelar`).toLowerCase();
  
//   if (reservar === "si") {
//     alert(`Has confirmado tu turno para el día ${fecha}.\nTu número de TURNO es el: ${numeroTurno}`);
//     window.CloseEvent();
//   } else {
//     window.CloseEvent();
//   }
// }


let nombre, apellido;

do {
    nombre = prompt("Hola! Ingrese su nombre");
} while (!nombre);

do {
    apellido = prompt("Ingrese su apellido");
} while (!apellido);

function solicitarTurno() {
    do {
        eleccion = prompt(`${nombre} ${apellido}, ¿Con quién deseas solicitar turno?
    1) Kinesiología
    2) Médico Clínico
    3) Oftalmología
    4) Pediatría
    5) Otorrinolaringología
    6) Rayos
    7) Cancelar turno`);

        switch (eleccion) {
            case "1":
                reservarTurno("Kinesiología", "4 de octubre 9.45hs", "$2.100", "01");
                break;
            case "2":
                reservarTurno("Médico Clínico", "5 de octubre 19.30hs", "$4.000", "09");
                break;
            case "3":
                reservarTurno("Oftalmología", "9 de octubre 11.30hs", "$2.400", "06");
                break;
            case "4":
                reservarTurno("Pediatría", "11 de octubre 17.30hs", "$2.800", "11");
                break;
            case "5":
                reservarTurno("Otorrinolaringología", "6 de octubre 10.30hs", "$3.500", "21");
                break;
            case "6":
                reservarTurno("Rayos", "7 de octubre 13.30hs", "$1.800", "16");
                break;
            case "7":
                alert("Gracias por confiar en La Ribera. Lo esperamos pronto!");
                window.close(); // Cierra la ventana
                break;
            default:
                alert("Opción no válida. Por favor, elija una opción válida.");
        }
    } while (eleccion !== "7");
}

function reservarTurno(especialidad, fecha, costo, numeroTurno) {
    let reservar = prompt(`El valor del turno de ${especialidad} es de ${costo}.\n¿Deseas reservar el turno?
    Intrucciones: Escriba "si" para reservarlo o escriba "no" para cancelar`).toLowerCase();

    if (reservar === "si") {
        alert(`Has confirmado tu turno para el día ${fecha}.\nTu número de TURNO es el: ${numeroTurno}`);
        alert("Gracias por confiar en La Ribera. Lo esperamos pronto!");
        window.CloseEvent();
    } else {
        window.CloseEvent();
    }
}

solicitarTurno();

// Fin Primera entrega archivo main.js