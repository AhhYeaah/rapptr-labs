import 'react-phone-number-input/style.css';
import './ContactFormPhoneInput.css';
import PhoneInput from 'react-phone-number-input';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface ContactFormPhoneInput {
  name: string;
  placeholder?: string;
  id: string;
}

export function ContactFormPhoneInput({ name, id, placeholder = 'Phone' }: ContactFormPhoneInput) {
  const [countryCode, changeCountryCode] = useState();
  const [value, onChange] = useState('');

  useEffect(() => {
    console.log('eh');
    //smart default
    axios
      .get('http://ip-api.com/json', { timeout: 2000 })
      .then((countryCode) => {
        changeCountryCode(countryCode.data.countryCode);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <PhoneInput
        className="border outline-none focus-within:border-[#2984a2] border-rapptr-blue w-full p-3 flex align-center rounded-sm h-10 phoneBorder"
        placeholder={placeholder}
        name={name}
        id={name}
        defaultCountry={countryCode}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
