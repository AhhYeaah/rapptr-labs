import React, { ReactNode, useId } from 'react';

interface ContactFormTextareaInputProps {
  name: string;
  placeholder?: string;
  id: string;
  required: boolean;
  register: any;
}

export function ContactFormTextareaInput(props: ContactFormTextareaInputProps) {
  return (
    <div>
      <textarea
        className="border border-rapptr-blue outline-none focus:border-[#2984a2] w-full p-3 flex align-center rounded-sm "
        cols={30}
        rows={5}
        {...props}
        {...props.register}
      ></textarea>
    </div>
  );
}
