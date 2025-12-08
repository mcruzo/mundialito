import type { Match } from '../store/appStore';

export const allMatches: Match[] = [
  // Grupo A
  { id: 1, date: '2026-06-11T15:00:00', home: 'México', away: 'Sudáfrica', venue: 'Estadio Azteca, Ciudad de México' },
  { id: 2, date: '2026-06-11T22:00:00', home: 'República de Corea', away: 'CZE/DEN/MKD/IRL', venue: 'Estadio Akron, Guadalajara' },
  { id: 25, date: '2026-06-18T12:00:00', home: 'CZE/DEN/MKD/IRL', away: 'Sudáfrica', venue: 'Mercedes-Benz Stadium, Atlanta' },
  { id: 28, date: '2026-06-18T21:00:00', home: 'México', away: 'República de Corea', venue: 'Estadio Akron, Guadalajara' },
  { id: 53, date: '2026-06-24T21:00:00', home: 'CZE/DEN/MKD/IRL', away: 'México', venue: 'Estadio Azteca, Ciudad de México' },
  { id: 54, date: '2026-06-24T21:00:00', home: 'Sudáfrica', away: 'República de Corea', venue: 'Estadio BBVA, Monterrey' },

  // Grupo B
  { id: 3, date: '2026-06-12T15:00:00', home: 'Canadá', away: 'BIH/ITA/NIR/WAL', venue: 'BMO Field, Toronto' },
  { id: 5, date: '2026-06-13T15:00:00', home: 'Catar', away: 'Suiza', venue: 'Levi’s Stadium, Santa Clara' },
  { id: 26, date: '2026-06-18T15:00:00', home: 'Suiza', away: 'BIH/ITA/NIR/WAL', venue: 'SoFi Stadium, Los Ángeles' },
  { id: 27, date: '2026-06-18T18:00:00', home: 'Canadá', away: 'Catar', venue: 'BC Place, Vancouver' },
  { id: 51, date: '2026-06-24T15:00:00', home: 'Suiza', away: 'Canadá', venue: 'BC Place, Vancouver' },
  { id: 52, date: '2026-06-24T15:00:00', home: 'BIH/ITA/NIR/WAL', away: 'Catar', venue: 'Lumen Field, Seattle' },

  // Grupo C
  { id: 6, date: '2026-06-13T18:00:00', home: 'Brasil', away: 'Marruecos', venue: 'MetLife Stadium, New York/New Jersey' },
  { id: 7, date: '2026-06-13T21:00:00', home: 'Haití', away: 'Escocia', venue: 'Gillette Stadium, Boston' },
  { id: 29, date: '2026-06-19T18:00:00', home: 'Escocia', away: 'Marruecos', venue: 'Gillette Stadium, Boston' },
  { id: 30, date: '2026-06-19T21:00:00', home: 'Brasil', away: 'Haití', venue: 'Lincoln Financial Field, Filadelfia' },
  { id: 49, date: '2026-06-24T18:00:00', home: 'Escocia', away: 'Brasil', venue: 'Hard Rock Stadium, Miami' },
  { id: 50, date: '2026-06-24T18:00:00', home: 'Marruecos', away: 'Haití', venue: 'Mercedes-Benz Stadium, Atlanta' },

  // Grupo D
  { id: 4, date: '2026-06-12T21:00:00', home: 'Estados Unidos', away: 'Paraguay', venue: 'SoFi Stadium, Los Ángeles' },
  { id: 8, date: '2026-06-13T00:00:00', home: 'Australia', away: 'KOS/ROU/SVK/TUR', venue: 'BC Place, Vancouver' },
  { id: 31, date: '2026-06-19T15:00:00', home: 'Estados Unidos', away: 'Australia', venue: 'Lumen Field, Seattle' },
  { id: 32, date: '2026-06-19T00:00:00', home: 'KOS/ROU/SVK/TUR', away: 'Paraguay', venue: 'Levi’s Stadium, Santa Clara' },
  { id: 59, date: '2026-06-25T22:00:00', home: 'KOS/ROU/SVK/TUR', away: 'Estados Unidos', venue: 'SoFi Stadium, Los Ángeles' },
  { id: 60, date: '2026-06-25T22:00:00', home: 'Paraguay', away: 'Australia', venue: 'Levi’s Stadium, Santa Clara' },

  // Grupo E
  { id: 9, date: '2026-06-14T13:00:00', home: 'Alemania', away: 'Curazao', venue: 'NRG Stadium, Houston' },
  { id: 11, date: '2026-06-14T19:00:00', home: 'Costa de Marfil', away: 'Ecuador', venue: 'Lincoln Financial Field, Filadelfia' },
  { id: 33, date: '2026-06-20T16:00:00', home: 'Alemania', away: 'Costa de Marfil', venue: 'BMO Field, Toronto' },
  { id: 35, date: '2026-06-20T20:00:00', home: 'Ecuador', away: 'Curazao', venue: 'Arrowhead Stadium, Kansas City' },
  { id: 55, date: '2026-06-25T16:00:00', home: 'Ecuador', away: 'Alemania', venue: 'MetLife Stadium, New York/New Jersey' },
  { id: 56, date: '2026-06-25T16:00:00', home: 'Curazao', away: 'Costa de Marfil', venue: 'Lincoln Financial Field, Filadelfia' },

  // Grupo F
  { id: 10, date: '2026-06-14T16:00:00', home: 'Países Bajos', away: 'Japón', venue: 'AT&T Stadium, Dallas' },
  { id: 12, date: '2026-06-14T22:00:00', home: 'ALB/POL/SWE/UKR', away: 'Túnez', venue: 'Estadio BBVA, Monterrey' },
  { id: 34, date: '2026-06-20T13:00:00', home: 'Países Bajos', away: 'ALB/POL/SWE/UKR', venue: 'NRG Stadium, Houston' },
  { id: 36, date: '2026-06-20T00:00:00', home: 'Túnez', away: 'Japón', venue: 'Estadio BBVA, Monterrey' },
  { id: 57, date: '2026-06-25T19:00:00', home: 'Japón', away: 'ALB/POL/SWE/UKR', venue: 'AT&T Stadium, Dallas' },
  { id: 58, date: '2026-06-25T19:00:00', home: 'Túnez', away: 'Países Bajos', venue: 'Arrowhead Stadium, Kansas City' },

  // Grupo G
  { id: 14, date: '2026-06-15T15:00:00', home: 'Bélgica', away: 'Egipto', venue: 'Lumen Field, Seattle' },
  { id: 16, date: '2026-06-15T21:00:00', home: 'Irán', away: 'Nueva Zelanda', venue: 'SoFi Stadium, Los Ángeles' },
  { id: 39, date: '2026-06-21T15:00:00', home: 'Bélgica', away: 'Irán', venue: 'SoFi Stadium, Los Ángeles' },
  { id: 40, date: '2026-06-21T21:00:00', home: 'Nueva Zelanda', away: 'Egipto', venue: 'BC Place, Vancouver' },
  { id: 63, date: '2026-06-26T23:00:00', home: 'Egipto', away: 'Irán', venue: 'Lumen Field, Seattle' },
  { id: 64, date: '2026-06-26T23:00:00', home: 'Nueva Zelanda', away: 'Bélgica', venue: 'BC Place, Vancouver' },

  // Grupo H
  { id: 13, date: '2026-06-15T12:00:00', home: 'España', away: 'Cabo Verde', venue: 'Mercedes-Benz Stadium, Atlanta' },
  { id: 15, date: '2026-06-15T18:00:00', home: 'Arabia Saudita', away: 'Uruguay', venue: 'Hard Rock Stadium, Miami' },
  { id: 39, date: '2026-06-21T12:00:00', home: 'España', away: 'Arabia Saudita', venue: 'Mercedes-Benz Stadium, Atlanta' },
  { id: 40, date: '2026-06-21T18:00:00', home: 'Uruguay', away: 'Cabo Verde', venue: 'Hard Rock Stadium, Miami' },
  { id: 65, date: '2026-06-26T20:00:00', home: 'Cabo Verde', away: 'Arabia Saudita', venue: 'NRG Stadium, Houston' },
  { id: 66, date: '2026-06-26T20:00:00', home: 'Uruguay', away: 'España', venue: 'Estadio Akron, Guadalajara' },

  // Grupo I
  { id: 17, date: '2026-06-16T15:00:00', home: 'Francia', away: 'Senegal', venue: 'MetLife Stadium, New York/New Jersey' },
  { id: 18, date: '2026-06-16T18:00:00', home: 'TC 2', away: 'Noruega', venue: 'Gillette Stadium, Boston' },
  { id: 41, date: '2026-06-22T17:00:00', home: 'Francia', away: 'TC 2', venue: 'Lincoln Financial Field, Filadelfia' },
  { id: 42, date: '2026-06-22T20:00:00', home: 'Noruega', away: 'Senegal', venue: 'MetLife Stadium, New York/New Jersey' },
  { id: 61, date: '2026-06-26T15:00:00', home: 'Noruega', away: 'Francia', venue: 'Gillette Stadium, Boston' },
  { id: 62, date: '2026-06-26T15:00:00', home: 'Senegal', away: 'TC 2', venue: 'BMO Field, Toronto' },

  // Grupo J
  { id: 19, date: '2026-06-16T21:00:00', home: 'Argentina', away: 'Argelia', venue: 'Arrowhead Stadium, Kansas City' },
  { id: 20, date: '2026-06-17T00:00:00', home: 'Austria', away: 'Jordania', venue: 'Levi’s Stadium, Santa Clara' },
  { id: 43, date: '2026-06-22T13:00:00', home: 'Argentina', away: 'Austria', venue: 'AT&T Stadium, Dallas' },
  { id: 44, date: '2026-06-22T23:00:00', home: 'Jordania', away: 'Argelia', venue: 'Levi’s Stadium, Santa Clara' },
  { id: 69, date: '2026-06-27T22:00:00', home: 'Argelia', away: 'Austria', venue: 'Arrowhead Stadium, Kansas City' },
  { id: 70, date: '2026-06-27T22:00:00', home: 'Jordania', away: 'Argentina', venue: 'AT&T Stadium, Dallas' },

  // Grupo K
  { id: 21, date: '2026-06-17T13:00:00', home: 'Portugal', away: 'TC 1', venue: 'NRG Stadium, Houston' },
  { id: 24, date: '2026-06-17T22:00:00', home: 'Uzbekistán', away: 'Colombia', venue: 'Estadio Azteca, Ciudad de México' },
  { id: 47, date: '2026-06-23T13:00:00', home: 'Portugal', away: 'Uzbekistán', venue: 'NRG Stadium, Houston' },
  { id: 48, date: '2026-06-23T22:00:00', home: 'Colombia', away: 'TC 1', venue: 'Estadio Akron, Guadalajara' },
  { id: 71, date: '2026-06-27T19:30:00', home: 'Colombia', away: 'Portugal', venue: 'Hard Rock Stadium, Miami' },
  { id: 72, date: '2026-06-27T19:30:00', home: 'TC 1', away: 'Uzbekistán', venue: 'Mercedes-Benz Stadium, Atlanta' },

  // Grupo L
  { id: 23, date: '2026-06-17T16:00:00', home: 'Inglaterra', away: 'Croacia', venue: 'AT&T Stadium, Dallas' },
  { id: 24, date: '2026-06-17T19:00:00', home: 'Ghana', away: 'Panamá', venue: 'BMO Field, Toronto' },
  { id: 45, date: '2026-06-23T16:00:00', home: 'Inglaterra', away: 'Ghana', venue: 'Gillette Stadium, Boston' },
  { id: 46, date: '2026-06-23T19:00:00', home: 'Panamá', away: 'Croacia', venue: 'BMO Field, Toronto' },
  { id: 67, date: '2026-06-26T00:00:00', home: 'Inglaterra', away: 'Croacia', venue: 'AT&T Stadium, Dallas' },
  { id: 68, date: '2026-06-26T15:00:00', home: 'Ghana', away: 'Panamá', venue: 'BMO Field, Toronto' },

  // Ronda de 32 (ejemplos con mapeo oficial)
  { id: 73, date: '2026-06-28T21:00:00', home: '2º Grupo A', away: '2º Grupo B', venue: 'Los Angeles Stadium' },
  { id: 74, date: '2026-06-29T16:30:00', home: '1º Grupo E', away: 'Mejor 3º A/B/C/D/F', venue: 'Gillette Stadium, Boston' },
  { id: 75, date: '2026-06-29T21:00:00', home: '1º Grupo F', away: '2º Grupo C', venue: 'Estadio BBVA, Monterrey' },
  { id: 76, date: '2026-06-29T13:00:00', home: '1º Grupo C', away: '2º Grupo F', venue: 'NRG Stadium, Houston' },
  { id: 77, date: '2026-06-30T21:00:00', home: '1º Grupo I', away: 'Mejor 3º C/D/F/G/H', venue: 'MetLife Stadium, New York/New Jersey' },
  { id: 78, date: '2026-06-30T16:00:00', home: '2º Grupo E', away: '2º Grupo I', venue: 'AT&T Stadium, Dallas' },
  { id: 79, date: '2026-06-30T21:00:00', home: '1º Grupo A', away: 'Mejor 3º C/E/F/H/I', venue: 'Estadio Azteca, Ciudad de México' },
  { id: 80, date: '2026-07-01T12:00:00', home: '1º Grupo L', away: 'Mejor 3º E/H/I/J/K', venue: 'Mercedes-Benz Stadium, Atlanta' },
  { id: 81, date: '2026-07-01T19:00:00', home: '1º Grupo D', away: 'Mejor 3º B/E/F/I/J', venue: 'Levi’s Stadium, Santa Clara' },
  { id: 82, date: '2026-07-01T21:00:00', home: '1º Grupo G', away: 'Mejor 3º A/E/H/I/J', venue: 'Lumen Field, Seattle' },
  { id: 83, date: '2026-07-02T15:00:00', home: '2º Grupo K', away: '2º Grupo L', venue: 'BMO Field, Toronto' },
  { id: 84, date: '2026-07-02T21:00:00', home: '1º Grupo H', away: '2º Grupo J', venue: 'Los Angeles Stadium' },
  { id: 85, date: '2026-07-02T18:00:00', home: '1º Grupo B', away: 'Mejor 3º E/F/G/I/J', venue: 'BC Place, Vancouver' },
  { id: 86, date: '2026-07-03T17:00:00', home: '1º Grupo J', away: '2º Grupo H', venue: 'Hard Rock Stadium, Miami' },
  { id: 87, date: '2026-07-03T20:00:00', home: '1º Grupo K', away: 'Mejor 3º D/E/I/J/L', venue: 'Arrowhead Stadium, Kansas City' },
  { id: 88, date: '2026-07-03T20:00:00', home: '2º Grupo D', away: '2º Grupo G', venue: 'AT&T Stadium, Dallas' },

  // Octavos de final
  { id: 89, date: '2026-07-04T17:00:00', home: 'Ganador 74', away: 'Ganador 77', venue: 'Lincoln Financial Field, Filadelfia' },
  { id: 90, date: '2026-07-04T13:00:00', home: 'Ganador 73', away: 'Ganador 75', venue: 'NRG Stadium, Houston' },
  { id: 91, date: '2026-07-05T15:00:00', home: 'Ganador 78', away: 'Ganador 79', venue: 'AT&T Stadium, Dallas' },
  { id: 92, date: '2026-07-05T21:00:00', home: 'Ganador 80', away: 'Ganador 81', venue: 'Mercedes-Benz Stadium, Atlanta' },
  { id: 93, date: '2026-07-06T18:00:00', home: 'Ganador 82', away: 'Ganador 83', venue: 'Lumen Field, Seattle' },
  { id: 94, date: '2026-07-06T21:00:00', home: 'Ganador 84', away: 'Ganador 85', venue: 'SoFi Stadium, Los Ángeles' },
  { id: 95, date: '2026-07-07T15:00:00', home: 'Ganador 86', away: 'Ganador 88', venue: 'Mercedes-Benz Stadium, Atlanta' },
  { id: 96, date: '2026-07-07T00:00:00', home: 'Ganador 85', away: 'Ganador 87', venue: 'BC Place, Vancouver' },

  // Cuartos de final
  { id: 97, date: '2026-07-09T16:00:00', home: 'Ganador 89', away: 'Ganador 90', venue: 'Gillette Stadium, Boston' },
  { id: 98, date: '2026-07-10T15:00:00', home: 'Ganador 91', away: 'Ganador 92', venue: 'SoFi Stadium, Los Ángeles' },
  { id: 99, date: '2026-07-11T17:00:00', home: 'Ganador 93', away: 'Ganador 94', venue: 'Hard Rock Stadium, Miami' },
  { id: 100, date: '2026-07-11T20:00:00', home: 'Ganador 95', away: 'Ganador 96', venue: 'Arrowhead Stadium, Kansas City' },

  // Semifinales
  { id: 101, date: '2026-07-14T15:00:00', home: 'Ganador 97', away: 'Ganador 98', venue: 'AT&T Stadium, Dallas' },
  { id: 102, date: '2026-07-15T15:00:00', home: 'Ganador 99', away: 'Ganador 100', venue: 'Mercedes-Benz Stadium, Atlanta' },

  // Tercer lugar
  { id: 103, date: '2026-07-18T17:00:00', home: 'Perdedor 101', away: 'Perdedor 102', venue: 'Hard Rock Stadium, Miami' },

  // Final
  { id: 104, date: '2026-07-19T15:00:00', home: 'Ganador 101', away: 'Ganador 102', venue: 'MetLife Stadium, New York/New Jersey' },
];
