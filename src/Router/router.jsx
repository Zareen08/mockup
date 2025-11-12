import React from 'react';
import { createBrowserRouter } from 'react-router';

import App from '../App';
import MainLayout from '../Layouts/MainLayout';


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
      {
        path: '/',
        Component: App,
      }
    ]
  },
  
]);

export default router;