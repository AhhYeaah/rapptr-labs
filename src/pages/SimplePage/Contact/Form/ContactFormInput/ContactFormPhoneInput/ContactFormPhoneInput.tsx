import 'react-phone-number-input/style.css';
import './ContactFormPhoneInput.css';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface ContactFormPhoneInput {
  name: string;
  id: string;
  required: boolean;
  register: any;
  placeholder?: string;
}

export function ContactFormPhoneInput({ register, ...props }: ContactFormPhoneInput) {
  const [countryCode, changeCountryCode] = useState();
  const [value, onChange] = useState('');

  useEffect(() => {
    //smart default
    function getUserCountry() {
      axios
        .get('http://ip-api.com/json', { timeout: 2000 })
        .then((countryCode) => {
          changeCountryCode(countryCode.data.countryCode);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    getUserCountry();
  }, []);

  return (
    <div>
      <PhoneInput
        className="border outline-none focus-within:border-[#2984a2] border-rapptr-blue w-full p-3 flex align-center rounded-sm h-10 phoneBorder"
        defaultCountry={countryCode}
        {...props}
        {...register(props.name, {
          setValueAs: () => value,
          validate: () => isValidPhoneNumber(value) || 'Invalid Phone length',
        })}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
