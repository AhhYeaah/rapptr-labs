import React, { ReactNode, useId } from 'react';

interface ContactFormTextareaInputProps {
  name: string;
  placeholder?: string;
  id: string;
}

export function ContactFormTextareaInput({
  name,
  id,
  placeholder = 'Tell us about your project',
}: ContactFormTextareaInputProps) {
  return (
    <div>
      <textarea
        className="border border-rapptr-blue outline-none focus:border-[#2984a2] w-full p-3 flex align-center rounded-sm "
        name={name}
        id={id}
        cols={30}
        rows={5}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
}
