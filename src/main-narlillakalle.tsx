import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NarLillaKallePage from './pages/NarLillaKallePage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NarLillaKallePage />
  </StrictMode>
)
