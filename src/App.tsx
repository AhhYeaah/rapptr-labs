import React, { Suspense } from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const TermsOfService = React.lazy(
  () => import('./pages/TextHeavyPages/TermsOfService/TermsOfService')
);
const PrivacyPolicyPage = React.lazy(
  () => import('./pages/TextHeavyPages/PrivacyPolicy/PrivacyPolicyPage')
);

const TextHeavyPages = React.lazy(() => import('./pages/TextHeavyPages/TextHeavyPages'));

import { ContactPage } from './pages/SimplePage/Contact/ContactPage';
import { HomePage } from './pages/SimplePage/Home/HomePage';
import { SimplePage } from './pages/SimplePage/SimplePage';
import { WorkPage } from './pages/SimplePage/Work/WorkPage';
// import { PrivacyPolicyPage } from './pages/TextHeavyPages/PrivacyPolicy/PrivacyPolicyPage';
// import { TermsOfService } from './pages/TextHeavyPages/TermsOfService/TermsOfService';
// import { TextHeavyPages } from './pages/TextHeavyPages/TextHeavyPages';

export function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <SimplePage>
          <HomePage />
        </SimplePage>
      ),
    },
    {
      path: '/work',
      element: (
        <SimplePage isNavBarDark={true}>
          <WorkPage />
        </SimplePage>
      ),
    },
    {
      path: '/contact-us',
      element: (
        <SimplePage>
          <ContactPage />
        </SimplePage>
      ),
    },
    {
      path: '/tos',
      element: (
        <Suspense fallback={<div> We are loading your page, please wait a second.</div>}>
          <TextHeavyPages title="Terms of Service">
            <TermsOfService />
          </TextHeavyPages>
        </Suspense>
      ),
    },
    {
      path: '/policy',
      element: (
        <Suspense fallback={<div> We are loading your page, please wait a second.</div>}>
          <TextHeavyPages title="Privacy Policy">
            <PrivacyPolicyPage />
          </TextHeavyPages>
        </Suspense>
      ),
    },
  ]);
  //   {
  //    ,}

  //     children: [
  //       {
  //         path: '/',
  //         element: <HomePage></HomePage>,
  //       },
  //       {
  //         path: '/work',
  //         element: <WorkPage></WorkPage>,
  //       },
  //       {
  //         path: '/approach',
  //         element: <WorkPage></WorkPage>,
  //       },
  //       {
  //         path: '/about',
  //         element: <WorkPage></WorkPage>,
  //       },
  //       {
  //         path: '/jobs',
  //         element: <WorkPage></WorkPage>,
  //       },
  //       {
  //         path: '/academy',
  //         element: <WorkPage></WorkPage>,
  //       },
  //       {
  //         path: '/contact-us',
  //         element: <ContactPage></ContactPage>,
  //       },]},{
  //       path: 'text',
  //       element:
  //       {
  //         path: '/tos',
  //         element: (
  //           <TextHeavyPages title="Terms of Service">
  //             <TermsOfService />
  //           </TextHeavyPages>
  //         ),
  //       },
  //       {
  //         path: '/policy',
  //         element: (
  //           <TextHeavyPages title="Privacy Policy">
  //             <PrivacyPolicyPage />
  //           </TextHeavyPages>
  //         ),
  //       },
  //     ],
  //   },
  // ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
