import React from 'react';
import '../styles/card.css';

type CardProps = {
  title?: string;
  rightLabel?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
};

export function Card({ title, rightLabel, children, className }: CardProps) {
  return (
    <div className={`card-ui ${className || ''}`.trim()}>
      {(title || rightLabel) && (
        <div className="card-ui-header">
          {title && <strong className="card-ui-title">{title}</strong>}
          {rightLabel && <div className="card-ui-right">{rightLabel}</div>}
        </div>
      )}
      <div className="card-ui-body">{children}</div>
    </div>
  );
}
