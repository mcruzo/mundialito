import React from 'react';
import '../styles/loaderbar.css';

type Props = { width?: number | string; height?: number | string };

export function LoaderBar({ width = '100%', height = 6 }: Props) {
  return (
    <div className="loaderbar" style={{ width }}>
      <div className="loaderbar-track" style={{ height }}>
        <div className="loaderbar-fill" />
      </div>
    </div>
  );
}
