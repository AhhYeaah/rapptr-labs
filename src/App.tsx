import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { IndexPage } from './pages/Index/IndexPage';
import { WorkPage } from './pages/Work/WorkPage';

export function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <IndexPage></IndexPage>,
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
  ]);
  return (
    <div className="h-screen">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
