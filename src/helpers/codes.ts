import { findTeam } from '../data/teams';

export const code3 = (name: string): string => {
  const t = findTeam(name);
  if (t) return t.code3;
  if (name === 'TBD') return 'TBD';
  return '—';
};

const code3ToIso2Map: Record<string, string> = {
  CAN: 'CA',
  MEX: 'MX',
  USA: 'US',
  AUS: 'AU',
  IRN: 'IR',
  JPN: 'JP',
  JOR: 'JO',
  KOR: 'KR',
  QAT: 'QA',
  KSA: 'SA',
  UZB: 'UZ',
  ALG: 'DZ',
  CPV: 'CV',
  CIV: 'CI',
  EGY: 'EG',
  GHA: 'GH',
  MAR: 'MA',
  SEN: 'SN',
  RSA: 'ZA',
  TUN: 'TN',
  CUW: 'CW',
  HAI: 'HT',
  PAN: 'PA',
  JAM: 'JM',
  ARG: 'AR',
  BRA: 'BR',
  COL: 'CO',
  ECU: 'EC',
  PAR: 'PY',
  URU: 'UY',
  BOL: 'BO',
  SUR: 'SR',
  NZL: 'NZ',
  NCL: 'NC',
  AUT: 'AT',
  BEL: 'BE',
  CRO: 'HR',
  ENG: 'GB',
  FRA: 'FR',
  GER: 'DE',
  NED: 'NL',
  NOR: 'NO',
  POR: 'PT',
  SCO: 'GB',
  ESP: 'ES',
  SUI: 'CH',
  ALB: 'AL',
  BIH: 'BA',
  CZE: 'CZ',
  DEN: 'DK',
  ITA: 'IT',
  KOS: 'XK',
  NIR: 'GB',
  MKD: 'MK',
  POL: 'PL',
  IRL: 'IE',
  ROU: 'RO',
  SVK: 'SK',
  SWE: 'SE',
  TUR: 'TR',
  UKR: 'UA',
  WAL: 'GB',
  COD: 'CD',
  IRQ: 'IQ',
  TBD: 'ZZ',
};

export const iso2 = (nameOrCode3: string): string => {
  const t = findTeam(nameOrCode3);
  const c3 = (t && t.code3) || (nameOrCode3 || '').toUpperCase();
  return code3ToIso2Map[c3] || 'ZZ';
};
