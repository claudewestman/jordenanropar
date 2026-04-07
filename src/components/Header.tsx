import { Link } from 'react-router-dom';

interface HeaderProps {
  showBackLink?: boolean;
}

export default function Header({ showBackLink = false }: HeaderProps) {
  return (
    <header style={{
      textAlign: 'center',
      padding: showBackLink ? '24px 24px 20px' : '60px 24px 40px',
      borderBottom: '1px solid #333',
      backgroundColor: '#1a1a1a',
    }}>
      {showBackLink ? (
        <Link to="/" style={{
          color: '#f0ede8',
          textDecoration: 'none',
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 'clamp(1rem, 3vw, 1.4rem)',
          fontWeight: 400,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '12px',
          transition: 'opacity 0.2s ease',
        }}>
          <span style={{ fontSize: '0.9em' }}>←</span>
          Fallhagen Film
        </Link>
      ) : (
        <h1 style={{
          fontSize: 'clamp(1.6rem, 5vw, 2.8rem)',
          fontWeight: 400,
          letterSpacing: '0.12em',
          margin: '0 0 10px 0',
          textTransform: 'uppercase',
          color: '#f0ede8',
        }}>
          Fallhagen Film
        </h1>
      )}
      {!showBackLink && (
        <p style={{
          fontFamily: "'Source Sans Pro', sans-serif",
          fontSize: '1rem',
          color: '#aaa',
          margin: 0,
          letterSpacing: '0.04em',
        }}>
          Kortfilmer av Martin Fallhagen
        </p>
      )}
    </header>
  );
}
