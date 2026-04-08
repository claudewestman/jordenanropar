import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
        .film-card:focus-visible {
          outline: 3px solid rgb(208, 191, 0);
          outline-offset: 4px;
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
          font-size: 1.35rem;
          font-weight: 600;
          margin: 0 0 12px 0;
          line-height: 1.35;
        }
        .film-card-tagline {
          font-size: 1rem;
          color: #c8c8c8;
          font-family: 'Source Sans Pro', sans-serif;
          margin: 0 0 18px 0;
          flex: 1;
          line-height: 1.6;
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

      <a href="#main-content" className="skip-link">Hoppa till innehåll</a>
      <Header />

      {/* Film cards */}
      <main id="main-content" style={{
        flex: 1,
        padding: '60px 24px',
        maxWidth: '900px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <div className="films-grid">
          <Link to="/narlillakalleblevrymdhjalte" className="film-card">
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

        </div>
      </main>
      <Footer />
    </div>
  );
}
