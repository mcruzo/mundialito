export type Team = {
  name: string;
  code3: string;
  emoji: string;
  confed: 'HOST' | 'AFC' | 'CAF' | 'CONCACAF' | 'CONMEBOL' | 'OFC' | 'UEFA' | 'TBD';
  aliases?: string[];
};

export const teams: Team[] = [
  { name: 'Canadá', code3: 'CAN', emoji: '🇨🇦', confed: 'HOST', aliases: ['Canada'] },
  { name: 'México', code3: 'MEX', emoji: '🇲🇽', confed: 'HOST', aliases: ['Mexico'] },
  {
    name: 'Estados Unidos',
    code3: 'USA',
    emoji: '🇺🇸',
    confed: 'HOST',
    aliases: ['USA', 'Estados_Unidos'],
  },

  { name: 'Australia', code3: 'AUS', emoji: '🇦🇺', confed: 'AFC' },
  { name: 'RI de Irán', code3: 'IRN', emoji: '🇮🇷', confed: 'AFC', aliases: ['Irán', 'Iran'] },
  { name: 'Japón', code3: 'JPN', emoji: '🇯🇵', confed: 'AFC', aliases: ['Japan'] },
  { name: 'Jordania', code3: 'JOR', emoji: '🇯🇴', confed: 'AFC', aliases: ['Jordan'] },
  {
    name: 'República de Corea',
    code3: 'KOR',
    emoji: '🇰🇷',
    confed: 'AFC',
    aliases: ['Corea del Sur', 'Corea_del_Sur', 'South_Korea'],
  },
  { name: 'Catar', code3: 'QAT', emoji: '🇶🇦', confed: 'AFC' },
  {
    name: 'Arabia Saudí',
    code3: 'KSA',
    emoji: '🇸🇦',
    confed: 'AFC',
    aliases: ['Arabia Saudita', 'Saudi Arabia'],
  },
  { name: 'Uzbekistán', code3: 'UZB', emoji: '🇺🇿', confed: 'AFC', aliases: ['Uzbekistan'] },

  { name: 'Argelia', code3: 'ALG', emoji: '🇩🇿', confed: 'CAF', aliases: ['Algeria'] },
  { name: 'Cabo Verde', code3: 'CPV', emoji: '🇨🇻', confed: 'CAF' },
  {
    name: 'Costa de Marfil',
    code3: 'CIV',
    emoji: '🇨🇮',
    confed: 'CAF',
    aliases: ['Costa de Côte d’Ivoire', 'Côte d’Ivoire'],
  },
  { name: 'Egipto', code3: 'EGY', emoji: '🇪🇬', confed: 'CAF', aliases: ['Egypt'] },
  { name: 'Ghana', code3: 'GHA', emoji: '🇬🇭', confed: 'CAF' },
  { name: 'Marruecos', code3: 'MAR', emoji: '🇲🇦', confed: 'CAF', aliases: ['Morocco'] },
  { name: 'Senegal', code3: 'SEN', emoji: '🇸🇳', confed: 'CAF' },
  { name: 'Sudáfrica', code3: 'RSA', emoji: '🇿🇦', confed: 'CAF', aliases: ['South Africa'] },
  { name: 'Túnez', code3: 'TUN', emoji: '🇹🇳', confed: 'CAF', aliases: ['Tunisia'] },

  { name: 'Curazao', code3: 'CUW', emoji: '🇨🇼', confed: 'CONCACAF' },
  { name: 'Haití', code3: 'HAI', emoji: '🇭🇹', confed: 'CONCACAF' },
  { name: 'Panamá', code3: 'PAN', emoji: '🇵🇦', confed: 'CONCACAF' },

  { name: 'Argentina', code3: 'ARG', emoji: '🇦🇷', confed: 'CONMEBOL' },
  { name: 'Brasil', code3: 'BRA', emoji: '🇧🇷', confed: 'CONMEBOL', aliases: ['Brazil'] },
  { name: 'Colombia', code3: 'COL', emoji: '🇨🇴', confed: 'CONMEBOL' },
  { name: 'Ecuador', code3: 'ECU', emoji: '🇪🇨', confed: 'CONMEBOL' },
  { name: 'Paraguay', code3: 'PAR', emoji: '🇵🇾', confed: 'CONMEBOL' },
  { name: 'Uruguay', code3: 'URU', emoji: '🇺🇾', confed: 'CONMEBOL' },

  {
    name: 'Nueva Zelanda',
    code3: 'NZL',
    emoji: '🇳🇿',
    confed: 'OFC',
    aliases: ['New Zealand', 'New_Zealand'],
  },

  { name: 'Austria', code3: 'AUT', emoji: '🇦🇹', confed: 'UEFA' },
  { name: 'Bélgica', code3: 'BEL', emoji: '🇧🇪', confed: 'UEFA' },
  { name: 'Croacia', code3: 'CRO', emoji: '🇭🇷', confed: 'UEFA' },
  { name: 'Inglaterra', code3: 'ENG', emoji: '🇬🇧', confed: 'UEFA' },
  { name: 'Francia', code3: 'FRA', emoji: '🇫🇷', confed: 'UEFA', aliases: ['France'] },
  { name: 'Alemania', code3: 'GER', emoji: '🇩🇪', confed: 'UEFA' },
  { name: 'Países Bajos', code3: 'NED', emoji: '🇳🇱', confed: 'UEFA' },
  { name: 'Noruega', code3: 'NOR', emoji: '🇳🇴', confed: 'UEFA' },
  { name: 'Portugal', code3: 'POR', emoji: '🇵🇹', confed: 'UEFA' },
  { name: 'Escocia', code3: 'SCO', emoji: '🇬🇧', confed: 'UEFA' },
  { name: 'España', code3: 'ESP', emoji: '🇪🇸', confed: 'UEFA' },
  { name: 'Suiza', code3: 'SUI', emoji: '🇨🇭', confed: 'UEFA' },

  { name: 'TBD', code3: 'TBD', emoji: '❓', confed: 'TBD' },
  { name: 'TBD', code3: 'TBD', emoji: '❓', confed: 'TBD' },
  { name: 'TBD', code3: 'TBD', emoji: '❓', confed: 'TBD' },
  { name: 'TBD', code3: 'TBD', emoji: '❓', confed: 'TBD' },
  { name: 'TBD', code3: 'TBD', emoji: '❓', confed: 'TBD' },
  { name: 'TBD', code3: 'TBD', emoji: '❓', confed: 'TBD' },
];

export const findTeam = (q: string): Team | undefined => {
  const name = q || '';
  return (
    teams.find((t) => t.name === name) ||
    teams.find((t) => (t.aliases || []).includes(name)) ||
    teams.find((t) => t.code3 === name)
  );
};
