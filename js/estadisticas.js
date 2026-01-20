const MI_EQUIPO = "ALL IN RED FC";

// PARTIDOS JUGADOS
const jugados = partidos.filter(p => p.golesLocal !== null && p.golesVisitante !== null);

let pj = 0, pg = 0, pe = 0, pp = 0;
let gf = 0, gc = 0, porteriasCero = 0;

jugados.forEach(p => {
  const local = p.local === MI_EQUIPO;
  const visitante = p.visitante === MI_EQUIPO;

  if (!local && !visitante) return;

  pj++;

  const golesFavor = local ? p.golesLocal : p.golesVisitante;
  const golesContra = local ? p.golesVisitante : p.golesLocal;

  gf += golesFavor;
  gc += golesContra;

  if (golesFavor > golesContra) pg++;
  else if (golesFavor === golesContra) pe++;
  else pp++;
});

const puntos = pg * 3 + pe;
const dg = gf - gc;
const mediaGoles = pj ? (gf / pj).toFixed(2) : 0;
const porcentajeVictorias = pj ? Math.round((pg / pj) * 100) : 0;

// JUGADORES DESTACADOS
const maxGoleador = jugadores.reduce((a, b) =>
  b.goles > a.goles ? b : a
);

const maxAsistente = jugadores.reduce((a, b) =>
  b.asistencias > a.asistencias ? b : a
);

// PINTAR ESTADÍSTICAS DE EQUIPO
document.getElementById("stats-equipo").innerHTML = `
  <div class="stat-card"><div class="stat-num">${pj}</div><div class="stat-label">Partidos</div></div>
  <div class="stat-card"><div class="stat-num">${puntos}</div><div class="stat-label">Puntos</div></div>
  <div class="stat-card"><div class="stat-num">${pg}</div><div class="stat-label">Victorias</div></div>
  <div class="stat-card"><div class="stat-num">${pe}</div><div class="stat-label">Empates</div></div>
  <div class="stat-card"><div class="stat-num">${pp}</div><div class="stat-label">Derrotas</div></div>

  <div class="stat-card"><div class="stat-num">${gf}</div><div class="stat-label">Goles a favor</div></div>
  <div class="stat-card"><div class="stat-num">${gc}</div><div class="stat-label">Goles en contra</div></div>
  <div class="stat-card"><div class="stat-num">${dg}</div><div class="stat-label">Diferencia de goles</div></div>

  <div class="stat-card"><div class="stat-num">${mediaGoles}</div><div class="stat-label">Goles / partido</div></div>
  <div class="stat-card"><div class="stat-num">${porcentajeVictorias}%</div><div class="stat-label">% Victorias</div></div>
`;

// PINTAR DESTACADOS
document.getElementById("stats-jugadores").innerHTML = `
  <div class="stat-card">
    <div class="stat-num">${maxGoleador.goles}</div>
    <div class="stat-label">⚽ ${maxGoleador.nombre}<br>Máx. goleador</div>
  </div>

  <div class="stat-card">
    <div class="stat-num">${maxAsistente.asistencias}</div>
    <div class="stat-label">🎯 ${maxAsistente.nombre}<br>Máx. asistente</div>
  </div>
`;
// RACHA ACTUAL (últimos 5 partidos)
const ultimos5 = jugados
  .filter(p => p.local === MI_EQUIPO || p.visitante === MI_EQUIPO)
  .slice(-5);

const contRacha = document.getElementById("racha");

ultimos5.forEach(p => {
  const local = p.local === MI_EQUIPO;
  const gf = local ? p.golesLocal : p.golesVisitante;
  const gc = local ? p.golesVisitante : p.golesLocal;

  let clase = "";
  let texto = "";

  if (gf > gc) {
    clase = "victoria";
    texto = "V";
  } else if (gf === gc) {
    clase = "empate";
    texto = "E";
  } else {
    clase = "derrota";
    texto = "D";
  }

  contRacha.innerHTML += `
    <span class="${clase}" title="${p.local} ${p.golesLocal}-${p.golesVisitante} ${p.visitante}">
      ${texto}
    </span>
  `;
});
// FIN estadisticas.js