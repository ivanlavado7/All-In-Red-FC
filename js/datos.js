const equipo = {
  partidos: 10,
  victorias: 8,
  empates: 0,
  derrotas: 2,
  golesFavor: 62,
  golesContra: 48
};


const jugadores = [
  {
    id:1,
    nombre: "Alejandro Gil Román",
    posicion: "Central, Banda izquierda",
    dorsal: 39,
    goles: 1,
    asistencias: 4,
    partidosJugados: 10,
    foto: "img/jugador1.jpg"
  },
  {
    id:2,
    nombre: "Alejandro Reis Hernández",
    posicion: "Mediocentro",
    dorsal: 19,
    goles: 6,
    asistencias: 6,
    partidosJugados: 10,
    foto: "img/jugador2.jpg"
  },
  {
    id:3,
    nombre: "Alejandro Valero Genicio",
    posicion: "Delantero",
    dorsal: 17,
    goles: 12,
    asistencias: 2,
    partidosJugados: 9,
    foto: "img/jugador3.jpg"
  },
  {
    id:4,
    nombre: "Eloi Otal Rafael",
    posicion: "Banda izquierda, Banda derecha",
    dorsal: 50,
    goles: 0,
    asistencias: 0,
    partidosJugados: 1,
    foto: "img/jugador4.jpg"
  },
  {
    id:5,
    nombre: "Erik Gabriel Vela",
    posicion: "Central, Mediocentro",
    dorsal: 7,
    goles: 2,
    asistencias: 3,
    partidosJugados: 10,
    foto: "img/jugador5.jpg"
  },
  {
    id:6,
    nombre: "Gerard Herrera Gómez",
    posicion: "Central",
    dorsal: 16,
    goles: 0,
    asistencias: 0,
    partidosJugados: 7,
    foto: "img/jugador6.jpg"
  },
  {
    id:7,
    nombre: "Iván Lavado García",
    posicion: "Banda derecha, Mediocentro",
    dorsal: 10,
    goles: 11,
    asistencias: 12,
    partidosJugados: 9,
    foto: "img/jugador7.jpg"
  },
  {
    id:8,
    nombre: "Nacho Hernández Del Olmo",
    posicion: "Portero, Central",
    dorsal: 13,
    goles: 0,
    asistencias: 1,
    partidosJugados: 5,
    foto: "img/jugador8.jpg"
  },
  {
    id:9,
    nombre: "Pau Soler",
    posicion: "Banda izquierda, Delantero",
    dorsal: 99,
    goles: 24,
    asistencias: 14,
    partidosJugados: 9,
    foto: "img/jugador9.jpg"
  },
  {
    id:10,
    nombre: "Pierre Kallay",
    posicion: "Portero",
    dorsal: 1,
    goles: 0,
    asistencias: 1,
    partidosJugados: 5,
    foto: "img/jugador10.jpg"
  },
  {
    id:11,
    nombre: "Pol Rodríguez Torralba",
    posicion: "Banda derecha, Banda izquierda, Delantero",
    dorsal: 11,
    goles: 5,
    asistencias: 7,
    partidosJugados: 9,
    foto: "img/jugador11.jpg"
  }
];
const partidos = [
  // JORNADA 1
  { jornada: 1, local: "1MillionBeers", visitante: "VRC", golesLocal: 1, golesVisitante: 6 },
  { jornada: 1, local: "Beerça Legends", visitante: "BPB", golesLocal: 6, golesVisitante: 8 },
  { jornada: 1, local: "Naldas F7", visitante: "TXIMELET F.T.", golesLocal: 6, golesVisitante: 8 },
  { jornada: 1, local: "Romesku Lukau", visitante: "Moreneta F.C.", golesLocal: 4, golesVisitante: 3 },
  // ALL IN RED FC descansa

  // JORNADA 2
  { jornada: 2, local: "Beerça Legends", visitante: "VRC", golesLocal: 6, golesVisitante: 8 },
  { jornada: 2, local: "ALL IN RED FC", visitante: "TXIMELET F.T.", golesLocal: 10, golesVisitante: 6 },
  { jornada: 2, local: "Naldas F7", visitante: "Moreneta F.C.", golesLocal: 9, golesVisitante: 4 },
  { jornada: 2, local: "Romesku Lukau", visitante: "1MillionBeers", golesLocal: 12, golesVisitante: 4 },
  // BPB descansa

  // JORNADA 3
  { jornada: 3, local: "Beerça Legends", visitante: "1MillionBeers", golesLocal: 7, golesVisitante: 5 },
  { jornada: 3, local: "BPB", visitante: "TXIMELET F.T.", golesLocal: 5, golesVisitante: 6 },
  { jornada: 3, local: "ALL IN RED FC", visitante: "Moreneta F.C.", golesLocal: 5, golesVisitante: 3 },
  { jornada: 3, local: "Romesku Lukau", visitante: "Naldas F7", golesLocal: 10, golesVisitante: 3 },
  // VRC descansa

  // JORNADA 4
  { jornada: 4, local: "Romesku Lukau", visitante: "Beerça Legends", golesLocal: 4, golesVisitante: 4 },
  { jornada: 4, local: "TXIMELET F.T.", visitante: "VRC", golesLocal: 9, golesVisitante: 4 },
  { jornada: 4, local: "BPB", visitante: "Moreneta F.C.", golesLocal: 7, golesVisitante: 6 },
  { jornada: 4, local: "ALL IN RED FC", visitante: "Naldas F7", golesLocal: 3, golesVisitante: 9 },
  // 1MillionBeers descansa

  // JORNADA 5
  { jornada: 5, local: "Romesku Lukau", visitante: "ALL IN RED FC", golesLocal: 8, golesVisitante: 2 },
  { jornada: 5, local: "BPB", visitante: "Naldas F7", golesLocal: 8, golesVisitante: 9 },
  { jornada: 5, local: "TXIMELET F.T.", visitante: "1MillionBeers", golesLocal: 7, golesVisitante: 4 },
  { jornada: 5, local: "VRC", visitante: "Moreneta F.C.", golesLocal: 8, golesVisitante: 3 },
  // Beerça Legends descansa

  // JORNADA 6
  { jornada: 6, local: "TXIMELET F.T.", visitante: "Beerça Legends", golesLocal: 7, golesVisitante: 4 },
  { jornada: 6, local: "BPB", visitante: "ALL IN RED FC", golesLocal: 3, golesVisitante: 6 },
  { jornada: 6, local: "VRC", visitante: "Naldas F7", golesLocal: 4, golesVisitante: 3 },
  { jornada: 6, local: "Moreneta F.C.", visitante: "1MillionBeers", golesLocal: 4, golesVisitante: 2 },
  // Romesku Lukau descansa

  // JORNADA 7
  { jornada: 7, local: "VRC", visitante: "ALL IN RED FC", golesLocal: 4, golesVisitante: 5 },
  { jornada: 7, local: "Moreneta F.C.", visitante: "Beerça Legends", golesLocal: 4, golesVisitante: 15 },
  { jornada: 7, local: "Romesku Lukau", visitante: "BPB", golesLocal: 4, golesVisitante: 3 },
  { jornada: 7, local: "1MillionBeers", visitante: "Naldas F7", golesLocal: 2, golesVisitante: 11 },
  // TXIMELET F.T. descansa

  // JORNADA 8
  { jornada: 8, local: "VRC", visitante: "BPB", golesLocal: 8, golesVisitante: 5 },
  { jornada: 8, local: "Naldas F7", visitante: "Beerça Legends", golesLocal: 8, golesVisitante: 7 },
  { jornada: 8, local: "1MillionBeers", visitante: "ALL IN RED FC", golesLocal: 4, golesVisitante: 8 },
  { jornada: 8, local: "Romesku Lukau", visitante: "TXIMELET F.T.", golesLocal: 2, golesVisitante: 6 },
  // Moreneta F.C. descansa

  // JORNADA 9
  { jornada: 9, local: "1MillionBeers", visitante: "BPB", golesLocal: 3, golesVisitante: 5 },
  { jornada: 9, local: "Beerça Legends", visitante: "ALL IN RED FC", golesLocal: 6, golesVisitante: 14 },
  { jornada: 9, local: "Moreneta F.C.", visitante: "TXIMELET F.T.", golesLocal: 3, golesVisitante: 4 },
  { jornada: 9, local: "Romesku Lukau", visitante: "VRC", golesLocal: 8, golesVisitante: 5 },
  // Naldas F7 descansa

  // JORNADA 10
  { jornada: 10, local: "Moreneta F.C.", visitante: "Romesku Lukau", golesLocal: 2, golesVisitante: 6 }, 
  { jornada: 10, local: "VRC", visitante: "1MillionBeers", golesLocal: 3, golesVisitante: 2 },
  { jornada: 10, local: "TXIMELET F.T.", visitante: "Naldas F7", golesLocal: 3, golesVisitante: 2 },
  { jornada: 10, local: "BPB", visitante: "Beerça Legends", golesLocal: 4, golesVisitante: 6 },
  // ALL IN RED FC descansa

  // JORNADA 11
  { jornada: 11, local: "VRC", visitante: "Beerça Legends", golesLocal: 7, golesVisitante: 8 }, 
  { jornada: 11, local: "1MillionBeers", visitante: "Romesku Lukau", golesLocal: 3, golesVisitante: 13 },
  { jornada: 11, local: "Moreneta F.C.", visitante: "Naldas F7", golesLocal: 3, golesVisitante: 13 },
  { jornada: 11, local: "TXIMELET F.T.", visitante: "ALL IN RED FC", golesLocal: 3, golesVisitante: 4 },
  // BPB descansa

  // JORNADA 12
  { jornada: 12, local: "TXIMELET F.T.", visitante: "BPB", golesLocal: 6, golesVisitante: 4 }, 
  { jornada: 12, local: "1MillionBeers", visitante: "Beerça Legends", golesLocal: 4, golesVisitante: 5 },
  { jornada: 12, local: "Naldas F7", visitante: "Romesku Lukau", golesLocal: 3, golesVisitante: 9 },
  { jornada: 12, local: "Moreneta F.C.", visitante: "ALL IN RED FC", golesLocal: 2, golesVisitante: 5 },
  // VRC descansa

  // JORNADA 13
  { jornada: 13, local: "Beerça Legends", visitante: "Romesku Lukau", golesLocal: null, golesVisitante: null }, 
  { jornada: 13, local: "Naldas F7", visitante: "ALL IN RED FC", golesLocal: null, golesVisitante: null },
  { jornada: 13, local: "Moreneta F.C.", visitante: "BPB", golesLocal: null, golesVisitante: null },
  { jornada: 13, local: "VRC", visitante: "TXIMELET F.T.", golesLocal: null, golesVisitante: null },
  // 1MillionBeers descansa

  // JORNADA 14
  { jornada: 14, local: "VRC", visitante: "Romesku Lukau", golesLocal: null, golesVisitante: null }, 
  { jornada: 14, local: "BPB", visitante: "1MillionBeers", golesLocal: null, golesVisitante: null },
  { jornada: 14, local: "ALL IN RED FC", visitante: "Beerça Legends", golesLocal: null, golesVisitante: null },
  { jornada: 14, local: "TXIMELET F.T.", visitante: "Moreneta F.C.", golesLocal: null, golesVisitante: null },
  // Naldas F7 descansa

  // JORNADA 15
  { jornada: 15, local: "1MillionBeers", visitante: "Moreneta F.C.", golesLocal: null, golesVisitante: null }, 
  { jornada: 15, local: "Beerça Legends", visitante: "TXIMELET F.T.", golesLocal: null, golesVisitante: null },
  { jornada: 15, local: "ALL IN RED FC", visitante: "BPB", golesLocal: null, golesVisitante: null },
  { jornada: 15, local: "Naldas F7", visitante: "VRC", golesLocal: null, golesVisitante: null },
  // Romesku Lukau descansa

  // JORNADA 16
  { jornada: 16, local: "ALL IN RED FC", visitante: "VRC", golesLocal: null, golesVisitante: null }, 
  { jornada: 16, local: "Beerça Legends", visitante: "Moreneta F.C.", golesLocal: null, golesVisitante: null },
  { jornada: 16, local: "BPB", visitante: "Romesku Lukau", golesLocal: null, golesVisitante: null },
  { jornada: 16, local: "Naldas F7", visitante: "1MillionBeers", golesLocal: null, golesVisitante: null },
  // TXIMELET F.T. descansa

  // JORNADA 17
  { jornada: 17, local: "BPB", visitante: "VRC", golesLocal: null, golesVisitante: null }, 
  { jornada: 17, local: "TXIMELET F.T.", visitante: "Romesku Lukau", golesLocal: null, golesVisitante: null },
  { jornada: 17, local: "Beerça Legends", visitante: "Naldas F7", golesLocal: null, golesVisitante: null },
  { jornada: 17, local: "ALL IN RED FC", visitante: "1MillionBeers", golesLocal: null, golesVisitante: null },
  // Moreneta F.C. descansa

  // JORNADA 18
  { jornada: 18, local: "ALL IN RED FC", visitante: "Romesku Lukau", golesLocal: null, golesVisitante: null }, 
  { jornada: 18, local: "Moreneta F.C.", visitante: "VRC", golesLocal: null, golesVisitante: null },
  { jornada: 18, local: "Naldas F7", visitante: "BPB", golesLocal: null, golesVisitante: null },
  { jornada: 18, local: "1MillionBeers", visitante: "TXIMELET F.T.", golesLocal: null, golesVisitante: null },
  // Beerça Legends descansa
];