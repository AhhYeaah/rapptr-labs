import React, { ReactNode } from 'react';

interface WorkPageProps {
  value?: string;
  children?: ReactNode[] | ReactNode;
}

export function WorkPage({ value }: WorkPageProps) {
  return <div className="bg-slate-200"></div>;
}
