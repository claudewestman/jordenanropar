import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';

export default function LandingPage() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#1a1a1a',
      color: '#f0ede8',
      fontFamily: "'Playfair Display', Georgia, serif",
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Helmet>
        <title>Fallhagen Film</title>
        <meta name="description" content="Fallhagen Film – kortfilmer av Martin Fallhagen. Se Jorden Anropar och När lilla Kalle blev en rymdhjälte." />
        <meta property="og:title" content="Fallhagen Film" />
        <meta property="og:description" content="Kortfilmer av Martin Fallhagen – Jorden Anropar och När lilla Kalle blev en rymdhjälte." />
        <meta property="og:image" content="https://jordenanropar.se/assets/jordenanropar/Filmaffischen.jpeg" />
      </Helmet>
      <style>{`
        .film-card {
          background: #222;
          border: 1px solid #333;
          border-radius: 8px;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), 
                      box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                      border-color 0.3s ease;
          width: 100%;
          max-width: 380px;
        }
        .film-card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(201, 184, 154, 0.2);
          border-color: rgba(201, 184, 154, 0.3);
        }
        .film-card img {
          width: 100%;
          aspect-ratio: 2/3;
          object-fit: cover;
          display: block;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .film-card:hover img {
          transform: scale(1.03);
        }
        .film-card-body {
          padding: 24px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .film-card-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin: 0 0 10px 0;
          line-height: 1.3;
        }
        .film-card-tagline {
          font-size: 0.9rem;
          color: #b0b0b0;
          font-family: 'Source Sans Pro', sans-serif;
          margin: 0 0 18px 0;
          flex: 1;
          line-height: 1.5;
        }
        .film-card-link {
          font-size: 0.9rem;
          font-family: 'Source Sans Pro', sans-serif;
          color: #c9b89a;
          text-decoration: none;
          letter-spacing: 0.06em;
          font-weight: 500;
          transition: color 0.2s ease;
        }
        .film-card:hover .film-card-link {
          color: #e0d4c0;
        }
        .films-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
          justify-content: center;
        }
        @media (max-width: 480px) {
          .film-card {
            max-width: 100%;
          }
        }
      `}</style>

      <Header />

      {/* Film cards */}
      <main style={{
        flex: 1,
        padding: '60px 24px',
        maxWidth: '900px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <div className="films-grid">
          <Link to="/jordenanropar" className="film-card">
            <img
              src="/assets/jordenanropar/Filmaffischen.jpeg"
              alt="Filmaffisch – Jorden Anropar"
              loading="lazy"
              width="380"
              height="570"
            />
            <div className="film-card-body">
              <h2 className="film-card-title">Jorden Anropar</h2>
              <p className="film-card-tagline">
                En stjärnspäckad äventyrs-scifi på 35 minuter, fylld med hjärta, skratt och allvar.
              </p>
              <span className="film-card-link">Läs mer →</span>
            </div>
          </Link>

          <Link to="/narlillakalle" className="film-card">
            <img
              src="/assets/narlillakalleblevrymdhjalte/FilmaffischForslag2.jpg"
              alt="Filmaffisch – När lilla Kalle blev en rymdhjälte"
              loading="lazy"
              width="380"
              height="570"
            />
            <div className="film-card-body">
              <h2 className="film-card-title">När lilla Kalle blev en rymdhjälte</h2>
              <p className="film-card-tagline">
                Kortfilm om hur en liten pojkes dröm om rymden tog sin början.
              </p>
              <span className="film-card-link">Läs mer →</span>
            </div>
          </Link>
        </div>
      </main>

      {/* Följ oss */}
      <section style={{
        backgroundColor: '#111',
        borderTop: '1px solid #2a2a2a',
        padding: '48px 24px',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: '1.3rem',
          fontWeight: 400,
          letterSpacing: '0.08em',
          color: '#f0ede8',
          margin: '0 0 8px 0',
        }}>Följ oss</h2>
        <p style={{
          fontFamily: "'Source Sans Pro', sans-serif",
          fontSize: '0.9rem',
          color: '#aaa',
          margin: '0 0 20px 0',
        }}>Följ nyheter på Facebook om Fallhagen Films kommande projekt</p>
        <a
          href="https://www.facebook.com/p/FallhagenFilm-100063805215260/"
          target="_blank"
          rel="noopener"
          aria-label="Facebook"
          style={{ color: '#5890d6', display: 'inline-block' }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="60px" height="60px">
            <path fillRule="evenodd" d="M22 12.061C22 6.505 17.523 2 12 2S2 6.505 2 12.061c0 5.022 3.657 9.184 8.438 9.939v-7.03h-2.54v-2.91h2.54V9.845c0-2.522 1.492-3.915 3.777-3.915 1.094 0 2.238.197 2.238.197v2.476h-1.26c-1.243 0-1.63.775-1.63 1.57v1.888h2.773l-.443 2.908h-2.33V22c4.78-.755 8.437-4.917 8.437-9.939z"/>
          </svg>
        </a>
      </section>

      {/* Sekretesspolicy */}
      <section style={{
        backgroundColor: '#111',
        borderTop: '1px solid #2a2a2a',
        padding: '32px 24px',
        maxWidth: '700px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <h2 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: '1.1rem',
          fontWeight: 400,
          letterSpacing: '0.06em',
          color: '#f0ede8',
          margin: '0 0 16px 0',
        }}>Sekretesspolicy</h2>
        <p style={{
          fontFamily: "'Source Sans Pro', sans-serif",
          fontSize: '0.82rem',
          color: '#888',
          lineHeight: 1.6,
          margin: '0 0 12px 0',
        }}>
          <strong style={{ color: '#aaa' }}>Fallhagen Film som personuppgiftsansvarig för dina personuppgifter</strong><br/>
          Vi värnar våra användares integritet. Vi använder personuppgifter för att förbättra de produkter och tjänster som vi erbjuder.
        </p>
        <p style={{
          fontFamily: "'Source Sans Pro', sans-serif",
          fontSize: '0.82rem',
          color: '#888',
          lineHeight: 1.6,
          margin: 0,
        }}>
          <strong style={{ color: '#aaa' }}>Användning av kakor</strong><br/>
          När du besöker vår webbplats kan vi använda kakor, pixlar eller liknande spårningsteknik för analys och statistik. Användningen regleras i ePrivacy Direktivet (2002/58/EC) och Lag (2022:482) om elektronisk kommunikation.
        </p>
      </section>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '24px',
        borderTop: '1px solid #222',
        backgroundColor: '#111',
        fontFamily: "'Source Sans Pro', sans-serif",
        fontSize: '0.8rem',
        color: '#555',
      }}>
        <p style={{ margin: '0 0 8px 0' }}>Copyright © 2024 Firma Lars Nohrstedt – Med ensamrätt.</p>
      </footer>
    </div>
  );
}
