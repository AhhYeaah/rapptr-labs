import { faAngleDown, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

export enum BussinessPhaseValues {
  IPH = 'IPH',
  DPS = 'DPS',
  ES = 'ES',
}

interface ContactFormSelectInput {
  name: string;
  id: string;
  required?: boolean;
  register: any;
}

export function ContactFormSelectInput(props: ContactFormSelectInput) {
  const [pristine, changePristine] = useState(true);

  return (
    <div className="relative">
      <FontAwesomeIcon
        className="absolute top-[55%] right-3 translate-y-[-50%] -z-10"
        icon={faAngleDown}
      ></FontAwesomeIcon>
      <select
        className={
          'border bg-transparent border-rapptr-blue outline-none focus:border-[#2984a2] w-full h-10 px-3 appearance-none flex align-center rounded-sm ' +
          (pristine ? 'text-gray-400 ' : '')
        }
        {...props}
        {...props.register}
        onChange={() => changePristine(false)}
        defaultValue={''}
      >
        <option value="" label="Bussiness Phase" disabled hidden></option>
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
