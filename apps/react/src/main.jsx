import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/home';
import About from './pages/about';
import Sample from './pages/sample';
import Root from './root';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/sample',
        element: <Sample />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
