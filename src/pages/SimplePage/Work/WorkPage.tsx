import React, { ReactNode } from 'react';

interface WorkPageProps {
  value?: string;
  children?: ReactNode[] | ReactNode;
}

export function WorkPage({ value }: WorkPageProps) {
  return <div className="h-[3000px] bg-slate-200"></div>;
}
