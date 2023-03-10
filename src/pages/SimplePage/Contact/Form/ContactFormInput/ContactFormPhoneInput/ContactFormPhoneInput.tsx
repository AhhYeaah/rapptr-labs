import 'react-phone-number-input/style.css';
import './ContactFormPhoneInput.css';
import PhoneInput, {
  isValidPhoneNumber,
} from 'react-phone-number-input';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useController } from 'react-hook-form';

interface ContactFormPhoneInput {
  name: string;
  id: string;
  register: any;
  control: any;
  hasError: boolean;
  placeholder?: string;
}

export function ContactFormPhoneInput({
  hasError,
  control,
  ...props
}: ContactFormPhoneInput) {
  const [countryCode, changeCountryCode] = useState();

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

  const { field } = useController({
    name: props.name,
    control,
    rules: {
      required: 'This field is required',
      validate: (value) =>
        isValidPhoneNumber(value) || 'Invalid Phone Number length',
    },
  });

  return (
    <div>
      <PhoneInput
        className={
          `border bg-transparent focus-within:outline-none h-10 focus-within:ring-1 w-full px-3 appearance-none flex align-center rounded-sm ` +
          (hasError
            ? 'border-red-500 text-red-600 focus-within:border-red-500 focus-within:ring-red-500 '
            : 'border-rapptr-blue focus-within:ring-[#2984a2] focus-within:border-[#2984a2] ')
        }
        defaultCountry={countryCode}
        {...props}
        onChange={(value) => field.onChange(value ?? '')} // send value to hook form
        onBlur={field.onBlur} // notify when input is touched/blur
        value={field.value} // input value
        name={field.name} // send down the input name
        inputRef={field.ref} // send input ref, so we can focus on input when error appear
      />
    </div>
  );
}
