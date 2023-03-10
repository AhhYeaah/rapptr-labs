import React, { HTMLInputTypeAttribute } from 'react';

interface ContactFormTextInput {
  id: string;
  type: HTMLInputTypeAttribute;
  name: string;
  register: any;
  hasError?: boolean;
  placeholder?: string;
}

export function ContactFormTextInput({
  hasError = false,
  ...props
}: ContactFormTextInput) {
  return (
    <div>
      <input
        className={
          `border bg-transparent focus:outline-none h-10 focus:ring-1 w-full px-3 appearance-none flex align-center rounded-sm ` +
          (hasError
            ? 'border-red-500 text-red-600 focus:border-red-500 focus:ring-red-500 '
            : 'border-rapptr-blue focus:ring-[#2984a2] focus:border-[#2984a2] ')
        }
        {...props}
        {...props.register}
      />
    </div>
  );
}
