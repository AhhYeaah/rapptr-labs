import React from 'react';
import { ContactFormInput } from './ContactFormInput/ContactFormInput';

export function ContactForm() {
  return (
    <div className="flex flex-row">
      <form className="w-full grid gap-5">
        <div className="grid grid-cols-2 gap-5">
          <ContactFormInput inputOptions={{ name: 'firstName', label: 'First Name' }} type="text"></ContactFormInput>
          <ContactFormInput inputOptions={{ name: 'lastName', label: 'Last Name' }} type="text"></ContactFormInput>
        </div>
        <ContactFormInput inputOptions={{ name: 'email' }} type="email"></ContactFormInput>
        <ContactFormInput inputOptions={{ name: 'phone' }} type="tel"></ContactFormInput>
        <ContactFormInput inputOptions={{ name: 'company' }} type="text"></ContactFormInput>
        <ContactFormInput
          required={false}
          inputOptions={{ name: 'bussinessPhase', label: 'Bussiness Phase' }}
          type="select"
        ></ContactFormInput>

        <div>
          <ContactFormInput
            required={false}
            inputOptions={{ name: 'message', label: 'Let us help!' }}
            type="textarea"
          ></ContactFormInput>
        </div>
      </form>
    </div>
  );
}
