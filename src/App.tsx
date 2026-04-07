import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import LandingPage from './pages/LandingPage';
import JordenanroparPage from './pages/JordenanroparPage';
import NarLillaKallePage from './pages/NarLillaKallePage';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/jordenanropar" element={<JordenanroparPage />} />
          <Route path="/narlillakalle" element={<NarLillaKallePage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
