import { faLinkedin, faSquareFacebook, faSquareTwitter } from '@fortawesome/free-brands-svg-icons';
import React, { ReactNode } from 'react';
import { SocialIcon } from '../../../Components/Footer/SocialIcon/SocialIcon';

import { PageTitle } from '../../PageTitle/PageTitle';
import { ContactForm } from './Form/ContactForm';

export function ContactPage() {
  return (
    <div className="flex-center flex-col">
      <PageTitle>Contact Us</PageTitle>
      <div className="max-w-screen-lg w-full mx-10 my-20 grid grid-cols-6 gap-5 text-[#053148]">
        <div className="col-span-4 m">
          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-3">Let&apos;s Talk</h1>
            <p className="font-light text-xl ">
              From high-growth startups to enterprise brands, we help companies of all sizes launch digital products
              that drive user engagement. We&apos;d love to discuss how we can help you!
            </p>
          </div>

          <div>
            <ContactForm></ContactForm>
          </div>
        </div>
        <div className="col-span-2">
          <h2 className="mb-2 text-2xl font-bold">Rapptr Labs</h2>
          <address className="mb-3 not-italic	 ">
            <p className="text-lg font-light">
              185 Hudson St, Suite 2340 <br />
              Jersey City, NJ 07311 <br />
              (212) 913 9626
            </p>
          </address>
          <div className="text-rapptr-blue mb-6 lg:mb-6 lg:mt-4">
            <SocialIcon icon={faLinkedin} to="https://www.linkedin.com/company/rapptr"></SocialIcon>
            <SocialIcon icon={faSquareFacebook} to="https://www.facebook.com/rapptrlabs"></SocialIcon>
            <SocialIcon icon={faSquareTwitter} to="https://twitter.com/rapptrlabs"></SocialIcon>
          </div>
        </div>
      </div>
    </div>
  );
}
