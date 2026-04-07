// @ts-nocheck
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
      <style>{`
        .film-card {
          background: #222;
          border: 1px solid #333;
          border-radius: 4px;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          width: 100%;
          max-width: 380px;
        }
        .film-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.5);
        }
        .film-card img {
          width: 100%;
          aspect-ratio: 2/3;
          object-fit: cover;
          display: block;
        }
        .film-card-body {
          padding: 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .film-card-title {
          font-size: 1.2rem;
          font-weight: 700;
          margin: 0 0 8px 0;
          line-height: 1.3;
        }
        .film-card-tagline {
          font-size: 0.85rem;
          color: #aaa;
          font-family: 'Source Sans Pro', sans-serif;
          margin: 0 0 16px 0;
          flex: 1;
        }
        .film-card-link {
          font-size: 0.9rem;
          font-family: 'Source Sans Pro', sans-serif;
          color: #c9b89a;
          text-decoration: none;
          letter-spacing: 0.05em;
        }
        .films-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 32px;
          justify-content: center;
        }
        @media (max-width: 480px) {
          .film-card {
            max-width: 100%;
          }
        }
      `}</style>

      {/* Header */}
      <header style={{
        textAlign: 'center',
        padding: '60px 24px 40px',
        borderBottom: '1px solid #333',
      }}>
        <h1 style={{
          fontSize: 'clamp(1.6rem, 5vw, 2.8rem)',
          fontWeight: 400,
          letterSpacing: '0.12em',
          margin: '0 0 10px 0',
          textTransform: 'uppercase',
        }}>
          Fallhagen Film
        </h1>
        <p style={{
          fontFamily: "'Source Sans Pro', sans-serif",
          fontSize: '1rem',
          color: '#aaa',
          margin: 0,
          letterSpacing: '0.04em',
        }}>
          Kortfilmer av Martin Fallhagen
        </p>
      </header>

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
          <a href="/jordenanropar.html" className="film-card">
            <img
              src="/assets/jordenanropar/Filmaffischen.jpeg"
              alt="Filmaffisch – Jorden Anropar"
            />
            <div className="film-card-body">
              <h2 className="film-card-title">Jorden Anropar</h2>
              <p className="film-card-tagline">
                En stjärnspäckad äventyrs-scifi på 35 minuter, fylld med hjärta, skratt och allvar.
              </p>
              <span className="film-card-link">Läs mer →</span>
            </div>
          </a>

          <a href="/narlillakalle.html" className="film-card">
            <img
              src="/assets/narlillakalleblevrymdhjalte/FilmaffischForslag2.jpg"
              alt="Filmaffisch – När lilla Kalle blev en rymdhjälte"
            />
            <div className="film-card-body">
              <h2 className="film-card-title">När lilla Kalle blev en rymdhjälte</h2>
              <p className="film-card-tagline">
                Kortfilm om hur en liten pojkes dröm om rymden tog sin början.
              </p>
              <span className="film-card-link">Läs mer →</span>
            </div>
          </a>
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
