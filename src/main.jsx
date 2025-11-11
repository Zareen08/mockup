import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider } from 'react-router'
import router from './Router/router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <ChakraProvider>
  <RouterProvider router={router}> 
    <App />
  </RouterProvider>
  </ChakraProvider>
  </StrictMode>,
)
