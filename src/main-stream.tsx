import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import StreamPage from './pages/StreamPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StreamPage />
  </StrictMode>
)
