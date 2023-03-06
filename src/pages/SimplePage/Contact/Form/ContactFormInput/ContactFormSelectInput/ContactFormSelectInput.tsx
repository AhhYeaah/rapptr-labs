import { faAngleDown, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface ContactFormSelectInput {
  name: string;
  id: string;
}

export function ContactFormSelectInput({ name, id }: ContactFormSelectInput) {
  return (
    <div className="relative">
      <FontAwesomeIcon
        className="absolute top-[55%] right-3 translate-y-[-50%] -z-10"
        icon={faAngleDown}
      ></FontAwesomeIcon>
      <select
        className={
          'border bg-transparent border-rapptr-blue outline-none focus:border-[#2984a2] w-full h-10 px-3 appearance-none flex align-center invalid:text-gray-400 rounded-sm'
        }
        required
        name={name}
        id={id}
      >
        <option label="Bussiness Phase" disabled selected hidden></option>
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
