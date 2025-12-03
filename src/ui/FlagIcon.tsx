import React from 'react';
import { iso2 as toIso2 } from '../helpers/codes';

type Props = {
  name?: string;
  code3?: string;
  iso2?: string;
  className?: string;
  title?: string;
};

export function FlagIcon({ name, code3, iso2, className, title }: Props) {
  const code = (iso2 || toIso2(code3 || name || '')).toUpperCase();
  const cls = `flag:${code}`;
  return <span className={`mini-flag ${cls} ${className || ''}`} title={title || name || code3} />;
}
