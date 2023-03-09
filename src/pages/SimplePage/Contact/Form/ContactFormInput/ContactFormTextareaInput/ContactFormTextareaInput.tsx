import React, { ReactNode, useId } from 'react';

interface ContactFormTextareaInputProps {
  name: string;
  placeholder?: string;
  id: string;
  hasError: boolean;
  register: any;
}

export function ContactFormTextareaInput({ hasError, ...props }: ContactFormTextareaInputProps) {
  return (
    <div>
      <textarea
        className={
          `border focus:outline-none  focus:ring-1 w-full p-3 flex align-center rounded-sm ` +
          (hasError
            ? 'border-red-500 text-red-600 focus:border-red-500 focus:ring-red-500'
            : 'border-rapptr-blue focus:ring-[#2984a2] focus:border-[#2984a2]')
        }
        cols={30}
        rows={5}
        {...props}
        {...props.register}
      ></textarea>
    </div>
  );
}
