import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

export enum BussinessPhaseValues {
  IPH = 'IPH',
  DPS = 'DPS',
  ES = 'ES',
}

interface ContactFormSelectInput {
  name: string;
  id: string;
  register: any;
  hasError: boolean;
}

export function ContactFormSelectInput({
  hasError,
  ...props
}: ContactFormSelectInput) {
  const [pristine, changePristine] = useState(true);

  return (
    <div className="relative">
      <FontAwesomeIcon
        className="absolute top-[55%] right-3 translate-y-[-50%] -z-10"
        icon={faAngleDown}
      ></FontAwesomeIcon>
      <select
        className={
          `border bg-transparent focus:outline-none h-10 focus:ring-1 w-full px-3 appearance-none flex align-center rounded-sm ` +
          (hasError
            ? 'border-red-500 text-red-600 focus:border-red-500 focus:ring-red-500 '
            : 'border-rapptr-blue focus:ring-[#2984a2] focus:border-[#2984a2] ') +
          (pristine ? 'text-gray-400 ' : '')
        }
        {...props}
        {...props.register}
        onChange={() => changePristine(false)}
        defaultValue={''}
      >
        <option
          value=""
          label="Bussiness Phase"
          disabled
          hidden
        ></option>
        <option className="text-black" value="IPH">
          Idea Phase Startup
        </option>
        <option className="text-black" value="DPS">
          Development Phase Startup
        </option>
        <option className="text-black" value="EB">
          Existing Bussiness
        </option>
      </select>
    </div>
  );
}
