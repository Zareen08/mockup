import React from 'react';
import { createBrowserRouter } from 'react-router';

import App from '../App';
import Modals from '../Components/Modal';
import Mod2 from '../Components/Mod2';
import Mod22 from '../Components/Mod22';

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path:"/modal",
    Component: Modals,
  },
  {
    path:"/modals",
    Component: Mod2,
  },
  {
    path:"/modalss",
    Component: Mod22,
  },

  
]);

export default router;