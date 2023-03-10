import React, { ReactNode, useEffect, useRef } from 'react';

interface HexagonProps {
  value?: string;
  className: string;
  children?: ReactNode[] | ReactNode;
}

export function Hexagon({ className }: HexagonProps) {
  return <span className={className}>&#x2B22;</span>;
}
