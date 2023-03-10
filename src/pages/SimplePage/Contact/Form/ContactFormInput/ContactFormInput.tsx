import React, { HTMLInputTypeAttribute, useId } from 'react';
import { RegisterOptions } from 'react-hook-form';
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
    register?: any;
    options?: RegisterOptions;
    control?: any;
  };

  errors: any;
}

export function ContactFormInput({
  identification: { name },
  appearence: { placeholder, label = capitalizeFirstLetter(name) },
  options: { type, required = false },
  registration: { register, options, control },
  errors,
}: ContactFormInputProps) {
  const id = useId();

  const hasErrors = !!errors[name];

  function getGeneralInputInfo(phone = false) {
    return {
      name,
      id,
      label,
      'aria-invalid': !!errors[name],
      placeholder: placeholder ?? label,
      hasError: !!errors[name],
      register: phone
        ? control
        : register(name, {
            ...options,
            required: required ? 'This field is required' : undefined,
          }),
    };
  }

  return (
    <div className="flex flex-col">
      <label className="mb-2 text-sm" htmlFor={id}>
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      {(() => {
        if (type === 'select')
          return (
            <ContactFormSelectInput {...getGeneralInputInfo()} />
          );
        if (type === 'tel')
          return (
            <ContactFormPhoneInput
              {...getGeneralInputInfo(true)}
              control={control}
            />
          );
        if (type === 'textarea')
          return (
            <ContactFormTextareaInput {...getGeneralInputInfo()} />
          );
        return (
          <ContactFormTextInput
            {...getGeneralInputInfo()}
            type={type}
          />
        );
      })()}
      {hasErrors && (
        <div className="text-red-500 text-sm">
          <p>{errors[name].message}</p>
        </div>
      )}
    </div>
  );
}
