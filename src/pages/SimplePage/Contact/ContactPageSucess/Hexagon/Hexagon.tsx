import React from 'react';

interface HexagonProps {
  className: string;
}

export function Hexagon({ className }: HexagonProps) {
  return <span className={className}>&#x2B22;</span>;
}
