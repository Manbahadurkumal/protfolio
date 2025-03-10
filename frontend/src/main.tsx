import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import RoutingConfig from './config/router.config'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <RoutingConfig />
    </BrowserRouter>
    
  </StrictMode>,
)
