import React, { HTMLInputTypeAttribute, useId } from 'react';
import { capitalizeFirstLetter } from '../../../../../../utils/Text';

interface ContactFormTextInput {
  name: string;
  id: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  className?: string;
}

export function ContactFormTextInput({
  name,
  type,
  id,
  placeholder = capitalizeFirstLetter(name),
  className,
}: ContactFormTextInput) {
  return (
    <div>
      <input
        className={
          'border border-rapptr-blue outline-none focus:border-[#2984a2] w-full h-10 px-3 flex align-center rounded-sm ' +
          className
        }
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
}
