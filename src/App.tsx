import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home/HomePage';
import { Page } from './pages/Page/Page';
import { WorkPage } from './pages/Work/WorkPage';

export function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Page />,
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
      ],
    },
  ]);
  return (
    <div className="h-screen">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
