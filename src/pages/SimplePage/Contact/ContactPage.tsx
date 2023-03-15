import React from 'react';
import { SocialIconsRow } from '../../../Components/SocialIconsRow/SocialIconsRow';

import { PageTitle } from '../../PageTitle/PageTitle';
import { ContactForm } from './Form/ContactForm';

export function ContactPage() {
  return (
    <div className="flex-center flex-col">
      <PageTitle>Contact Us</PageTitle>
      <div
        className="max-w-screen-lg
        mx-20 my-20
        grid lg:grid-cols-6
        gap-20 text-[#053148]"
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
              185 Hudson St, Suite 2340
              <br />
              Jersey City, NJ 07311
              <br />
              <a href="tel:(212) 913 9626">(212) 913 9626</a>
            </p>
          </address>
          <SocialIconsRow className="text-[#26a6ed]"></SocialIconsRow>
        </div>
      </div>
    </div>
  );
}
