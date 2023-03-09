import React, { HTMLInputTypeAttribute, ReactNode, useId } from 'react';
import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';
import { capitalizeFirstLetter } from '../../../../../utils/Text';
import { ContactFormPhoneInput } from './ContactFormPhoneInput/ContactFormPhoneInput';
import { ContactFormSelectInput } from './ContactFormSelectInput/ContactFormSelectInput';
import { ContactFormTextareaInput } from './ContactFormTextareaInput/ContactFormTextareaInput';
import { ContactFormTextInput } from './ContactFormTextInput/ContactFormTextInput';

interface ContactFormInputProps {
  identification: {
    name: string;
  };
  appearence: {
    placeholder?: string;
    label?: string;
  };
  options: {
    type: HTMLInputTypeAttribute | 'textarea' | 'select';
    required?: boolean;
  };
  registration: {
    register: any;
    options?: RegisterOptions;
  };
}

export function ContactFormInput({
  identification: { name },
  appearence: { placeholder, label = capitalizeFirstLetter(name) },
  options: { type, required = false },
  registration: { register, options },
}: ContactFormInputProps) {
  const id = useId();

  function getGeneralInputInfo(phone = false) {
    return {
      required,
      name,
      id,
      label,
      placeholder: placeholder ?? label,
      register: phone
        ? register
        : register(name, { ...options, required: { required, message: 'This field is required' } }),
    };
  }

  return (
    <div className="flex flex-col">
      <label className="mb-2 text-sm" htmlFor={id}>
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      {(() => {
        if (type === 'select') return <ContactFormSelectInput {...getGeneralInputInfo()} />;
        if (type === 'tel') return <ContactFormPhoneInput {...getGeneralInputInfo(true)} />;
        if (type === 'textarea') return <ContactFormTextareaInput {...getGeneralInputInfo()} />;
        return <ContactFormTextInput {...getGeneralInputInfo()} type={type} />;
      })()}
    </div>
  );
}
