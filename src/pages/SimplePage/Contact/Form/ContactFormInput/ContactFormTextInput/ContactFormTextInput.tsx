import React, { HTMLInputTypeAttribute, useId } from 'react';
import { capitalizeFirstLetter } from '../../../../../../utils/Text';

interface ContactFormTextInput {
  id: string;
  type: HTMLInputTypeAttribute;
  name: string;
  register: (name: string, options: any) => any;
  required: boolean;
  placeholder?: string;
}

export function ContactFormTextInput({ required, ...props }: ContactFormTextInput) {
  return (
    <div>
      <input
        className={
          'border border-rapptr-blue outline-none focus:border-[#2984a2] w-full h-10 px-3 flex align-center rounded-sm '
        }
        {...props}
        {...props.register}
      />
    </div>
  );
}
