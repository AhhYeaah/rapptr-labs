import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useForm, RegisterOptions } from 'react-hook-form';
import { Button } from '../../../../Components/Button/Button';
import { ContactPageSucess } from '../ContactPageSucess/ContactPageSucess';
import { ContactFormInput } from './ContactFormInput/ContactFormInput';
import { BussinessPhaseValues } from './ContactFormInput/ContactFormSelectInput/ContactFormSelectInput';

interface FormInput {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  bussinessPhase: BussinessPhaseValues;
  message: string;
}

export function ContactForm() {
  const [completed, complete] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  return (
    <div
      className="flex flex-row"
      onSubmit={handleSubmit((data) => {
        complete(true);
        createPortal(
          <ContactPageSucess></ContactPageSucess>,
          document.body
        );
      })}
    >
      <form className="w-full grid gap-5">
        <div className="grid lg:grid-cols-2 gap-5">
          <ContactFormInput
            identification={{
              name: 'firstName',
            }}
            appearence={{ label: 'First Name' }}
            options={{ required: true, type: 'text' }}
            registration={{ register }}
            errors={errors}
          />
          <ContactFormInput
            identification={{
              name: 'lastName',
            }}
            appearence={{ label: 'Last Name' }}
            options={{ required: true, type: 'text' }}
            registration={{ register }}
            errors={errors}
          />
        </div>

        <ContactFormInput
          identification={{
            name: 'email',
          }}
          appearence={{}}
          options={{ required: true, type: 'text' }}
          registration={{
            register,
            options: {
              pattern: {
                //https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                message: 'This is not a valid email address.',
              },
            },
          }}
          errors={errors}
        />
        <ContactFormInput
          identification={{
            name: 'phone',
          }}
          appearence={{ placeholder: 'Phone' }}
          options={{ required: true, type: 'tel' }}
          // This one needs to be validated inside of the component because
          // value state differs from input value.
          registration={{ control }}
          errors={errors}
        />
        <ContactFormInput
          identification={{
            name: 'company',
          }}
          appearence={{}}
          options={{ required: true, type: 'text' }}
          registration={{ register }}
          errors={errors}
        />
        <ContactFormInput
          identification={{
            name: 'bussinessPhase',
          }}
          appearence={{ label: 'Bussiness Phase' }}
          options={{ required: false, type: 'select' }}
          registration={{ register }}
          errors={errors}
        />

        <div>
          <ContactFormInput
            identification={{
              name: 'message',
            }}
            appearence={{
              label: 'Let us help!',
              placeholder: 'Tell us about your project',
            }}
            options={{ type: 'textarea' }}
            registration={{ register }}
            errors={errors}
          />
        </div>
        <div className="text-left">
          <Button
            className="bg-[#053148] text-white enabled:hover:bg-[#3D5F79] enabled:hover:scale-105 transition-all rounded-lg w-44"
            onClick={}
          >
            Submit
          </Button>
        </div>
      </form>
      {completed && <ContactPageSucess></ContactPageSucess>}
    </div>
  );
}
