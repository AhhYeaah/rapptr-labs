import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/SimplePage/Home/HomePage';
import { PrivacyPolicyPage } from './pages/SimplePage/PrivacyPolicy/PrivacyPolicyPage';
import { SimplePage } from './pages/SimplePage/SimplePage';
import { TextHeavyPages } from './pages/SimplePage/TextHeavyPages/TextHeavyPages';
import { WorkPage } from './pages/SimplePage/Work/WorkPage';

export function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <SimplePage />,
      children: [
        {
          path: '/',
          element: <HomePage></HomePage>,
        },
        {
          path: '/work',
          element: <WorkPage></WorkPage>,
        },
        {
          path: '/approach',
          element: <WorkPage></WorkPage>,
        },
        {
          path: '/about',
          element: <WorkPage></WorkPage>,
        },
        {
          path: '/jobs',
          element: <WorkPage></WorkPage>,
        },
        {
          path: '/academy',
          element: <WorkPage></WorkPage>,
        },
        {
          path: '/contact-us',
          element: <WorkPage></WorkPage>,
        },
        {
          path: '/policy',
          element: (
            <TextHeavyPages title="Terms of Service">
              <PrivacyPolicyPage />
            </TextHeavyPages>
          ),
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
