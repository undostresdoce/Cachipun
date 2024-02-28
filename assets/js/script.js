let cantidadJuegos = 0;
let contadorComputador = 0;
let contadorJugador = 0;

cantidadJuegos = prompt("¿Cuántas veces quieres jugar? 👀");
cantidadJuegos = parseInt(cantidadJuegos);

const opcionPiedra = 0;
const opcionPapel = 1;
const opcionTijera = 2;

for (let i = 0; i < cantidadJuegos; i++) {
  //Opción del jugador
  let opcionJugador = prompt(`Elige la opción
0: Piedra ✊🏼
1: Papel ✋🏼
2: Tijera✌🏼`);

  opcionJugador = parseInt(opcionJugador);

  //Opción de la computadora
  const opcionComputador = Math.floor(Math.random() * 3);

  console.log("Opción de Jugador: " + opcionJugador);
  console.log("Opción de Computador: " + opcionComputador);

  if (opcionJugador == opcionPiedra && opcionComputador == opcionPiedra) {
    //Empate (Piedra con Piedra)
    alert("Empate🤝🏼. (Jugador) Elegiste Piedra al igual que la computadora.");
  } else if (opcionJugador == opcionPiedra && opcionComputador == opcionPapel) {
    //Gana computador (Piedra con papel)
    alert("Gana Computador💻. (Jugador) Elegiste Piedra y el Computador Papel");
    contadorComputador++;
  } else if (
    opcionJugador == opcionPiedra &&
    opcionComputador == opcionTijera
  ) {
    //Gana jugador (piedra con tijera)

    alert(
      "Gana Jugador. (Jugador)Elegiste Piedra y el Computador Tijera. Felicidades 🎉"
    );
    contadorJugador++;
  } else if (opcionJugador == opcionPapel && opcionComputador == opcionPapel) {
    //Empate (Papel con Papel)
    alert("Empate 🤝🏼. (Jugador) Elegiste Papel al igual que el computador");
  } else if (opcionJugador == opcionPapel && opcionComputador == opcionPiedra) {
    //Gana jugador (Papel con piedra)
    alert(
      "Gana Jugador. (Jugador) Elegiste papel y el Computador Piedra. Felicidades 🎉"
    );
    contadorJugador++;
  } else if (opcionJugador == opcionPapel && opcionComputador == opcionTijera) {
    //Gana "Computador (Papel con Tijera)
    alert(
      "Gana Computador💻. -(Jugador) Elegiste Papel y el Computador Tijera"
    );
    contadorComputador++;
  } else if (
    opcionJugador == opcionTijera &&
    opcionComputador == opcionTijera
  ) {
    //Empate (Tijera con Tijera)
    alert("Empate 🤝🏼. (Jugador) Elegiste Tijera al igual que el computador");
  } else if (
    opcionJugador == opcionTijera &&
    opcionComputador == opcionPiedra
  ) {
    //Gana computador
    alert(
      "Gana Computador💻. (Jugador) Elegiste Tijera y el Computador Piedra"
    );
    contadorComputador++;
  } else if (opcionJugador == opcionTijera && opcionComputador == opcionPapel) {
    //Gana Jugador (Tijera con Papel)
    alert(
      "Gana Jugador. (Jugador) Elegiste Tijera y el Computador Papel. Felicidades 🎉"
    );
    contadorJugador++;
  }
}

if (contadorJugador > contadorComputador) {
  alert("El ganador final es: Jugador. Felicidades 🎉");
} else if (contadorJugador < contadorComputador) {
  alert("El ganador final es: Computador. Más suerte la próxima vez 😜");
} else {
  alert("Resultado final: Empate 🤝🏼");
}
