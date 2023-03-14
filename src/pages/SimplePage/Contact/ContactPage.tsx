import React from 'react';

import {
  faLinkedin,
  faSquareFacebook,
  faSquareTwitter,
} from '@fortawesome/free-brands-svg-icons';

import { SocialIcon } from '../../../Components/Footer/SocialIcon/SocialIcon';
import { PageTitle } from '../../PageTitle/PageTitle';
import { ContactForm } from './Form/ContactForm';

export function ContactPage() {
  return (
    <div className="flex-center flex-col">
      <PageTitle>Contact Us</PageTitle>
      <div
        className="max-w-screen-lg w-full
        lg:mx-10 lg:px-0 px-20 my-20
        grid lg:grid-rows-1 
        grid-cols-1 lg:grid-cols-6
        gap-20 lg:gap-5 text-[#053148]"
      >
        <div className="lg:col-span-4">
          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-3">Let&apos;s Talk</h1>
            <p className="font-light text-xl ">
              From high-growth startups to enterprise brands, we help companies of all
              sizes launch digital products that drive user engagement. We&apos;d love to
              discuss how we can help you!
            </p>
          </div>

          <div>
            <ContactForm></ContactForm>
          </div>
        </div>
        <div className="lg:col-span-2 mx-auto lg:text-left text-center">
          <h2 className="mb-2 text-2xl font-bold">Rapptr Labs</h2>
          <address className="mb-3 not-italic">
            <p className="text-lg font-light">
              185 Hudson St, Suite 2340 <br />
              Jersey City, NJ 07311 <br />
              <a href="tel:(212) 913 9626">(212) 913 9626</a>
            </p>
          </address>
          <div className="text-[#26a6ed] mb-6 lg:mt-4">
            <SocialIcon
              icon={faLinkedin}
              to="https://www.linkedin.com/company/rapptr"
            ></SocialIcon>
            <SocialIcon
              icon={faSquareFacebook}
              to="https://www.facebook.com/rapptrlabs"
            ></SocialIcon>
            <SocialIcon
              icon={faSquareTwitter}
              to="https://twitter.com/rapptrlabs"
            ></SocialIcon>
          </div>
        </div>
      </div>
    </div>
  );
}
