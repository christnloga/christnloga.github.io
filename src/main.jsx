import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import router from './routes.jsx'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from '@dr.pogodin/react-helmet';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
)
