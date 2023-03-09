import React, { HTMLInputTypeAttribute, ReactNode, useId } from 'react';
import { capitalizeFirstLetter } from '../../../../../utils/Text';
import { ContactFormPhoneInput } from './ContactFormPhoneInput/ContactFormPhoneInput';
import { ContactFormSelectInput } from './ContactFormSelectInput/ContactFormSelectInput';
import { ContactFormTextareaInput } from './ContactFormTextareaInput/ContactFormTextareaInput';
import { ContactFormTextInput } from './ContactFormTextInput/ContactFormTextInput';

interface ContactFormInputProps {
  type: HTMLInputTypeAttribute | 'textarea' | 'select';
  required?: boolean;
  inputOptions: {
    name: string;
    label?: string;
    className?: string;
    placeholder?: string;
  };
}

export function ContactFormInput({
  type,
  inputOptions: { name, label = capitalizeFirstLetter(name), className, placeholder },
  required = true,
}: ContactFormInputProps) {
  const id = useId();

  return (
    <div className="flex flex-col">
      <label className="mb-2 text-sm" htmlFor={id}>
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      {(() => {
        if (type === 'select') return <ContactFormSelectInput name={name} id={id} />;
        if (type === 'tel') return <ContactFormPhoneInput name={name} id={id} />;
        if (type === 'textarea') return <ContactFormTextareaInput name={name} id={id} placeholder={placeholder} />;
        return (
          <ContactFormTextInput
            name={name}
            id={id}
            type={type}
            placeholder={placeholder ?? label}
            className={className}
          />
        );
      })()}
    </div>
  );
}