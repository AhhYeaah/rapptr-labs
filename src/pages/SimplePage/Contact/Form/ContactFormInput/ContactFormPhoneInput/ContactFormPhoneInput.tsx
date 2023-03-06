import 'react-phone-number-input/style.css';
import './ContactFormPhoneInput.css';
import PhoneInput from 'react-phone-number-input';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useHref } from 'react-router-dom';

export function ContactFormPhoneInput() {
  const [countryCode, changeCountryCode] = useState();
  const [value, onChange] = useState('');

  useEffect(() => {
    //smart default
    axios
      .get('http://ip-api.com/json', { timeout: 3000 })
      .then((countryCode) => {
        changeCountryCode(countryCode.data.countryCode);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="relative flex flex-row">
        <div className="absolute top-0 left-0 bg-black h-10 w-30 z-10"></div>
      </div>
      <PhoneInput
        className="border outline-none border-rapptr-blue focus:border-[#2984a2] w-full p-3 flex align-center rounded-sm h-10"
        placeholder="Phone"
        name
        defaultCountry={countryCode}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
