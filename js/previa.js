const alineacion = {
  portero: {
    nombre: "Nacho",
    dorsals: 13,
    foto: "img/jugador8.jpg",
    portero: true
  },
  defensas: [
    { nombre: "Erik", dorsals: 7, foto: "img/jugador5.jpg" },
    { nombre: "Gil", dorsals: 39, foto: "img/jugador1.jpg" }
  ],
  centro: [
    { nombre: "Pau", dorsals: 99, foto: "img/jugador9.jpg" },
    { nombre: "Reis", dorsals: 19, foto: "img/jugador2.jpg" },
    { nombre: "Iván", dorsals: 10, foto: "img/jugador7.jpg", capitan: true }
  ],
  delantero: {
    nombre: "Valero", dorsals: 17, foto: "img/jugador3.jpg"
  }
};

function jugadorHTML(j) {
  return `
    <div class="jugador">
      <div class="foto-jugador">
        <img src="${j.foto}" alt="${j.nombre}">
        <div class="dorsals">${j.dorsals}</div>

        ${j.capitan ? `<span class="capitan">C</span>` : ""}
        ${j.portero ? `<span class="guantes">🧤</span>` : ""}
      </div>
      <span class="nombre">${j.nombre}</span>
    </div>
  `;
}


document.getElementById("portero").innerHTML =
  jugadorHTML(alineacion.portero);

document.getElementById("defensas").innerHTML =
  alineacion.defensas.map(jugadorHTML).join("");

document.getElementById("centro").innerHTML =
  alineacion.centro.map(jugadorHTML).join("");

document.getElementById("delantero").innerHTML =
  jugadorHTML(alineacion.delantero);

