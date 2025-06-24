import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './AppRoutes';
import { Toaster } from "@/components/ui/toaster"
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
            <AppRoutes />
            <Toaster />     
    </BrowserRouter>
  </StrictMode>,
)
