import React from 'react';
import { FlagIcon } from './FlagIcon';
import '../styles/minicard.css';

type MiniCardProps = { teamName: string; code3: string };

export function MiniCard({ teamName, code3 }: MiniCardProps) {
  return (
    <div className="mini-card">
      <FlagIcon name={teamName} />
      <span className="mini-code">{code3}</span>
    </div>
  );
}
