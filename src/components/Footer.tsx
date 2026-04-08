import { CSSProperties } from 'react';
import { Link } from 'react-router-dom';

const styles: Record<string, CSSProperties> = {
  footerWrapper: {
    width: '100%',
    backgroundColor: 'rgb(22, 22, 22)',
  },
  footer: {
    padding: '3.5rem 1.5rem 2.5rem',
    textAlign: 'center' as const,
    maxWidth: '800px',
    margin: '0 auto',
  },
  divider: {
    width: '50px',
    height: '2px',
    backgroundColor: 'rgb(208, 191, 0)',
    margin: '0 auto 2rem',
    border: 'none',
  },
  heading: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: '1.5rem',
    fontWeight: 400,
    letterSpacing: '0.05em',
    color: 'rgb(247, 247, 247)',
    margin: '0 0 0.75rem 0',
  },
  subtext: {
    fontFamily: "'Source Sans Pro', sans-serif",
    fontSize: '1rem',
    color: 'rgb(150, 150, 150)',
    margin: '0 0 1.5rem 0',
    lineHeight: 1.6,
  },
  facebookLink: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    color: 'rgb(247, 247, 247)',
    transition: 'all 0.3s ease',
    marginBottom: '2.5rem',
  },
  bottomSection: {
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    paddingTop: '1.5rem',
    marginTop: '0.5rem',
  },
  footerText: {
    fontFamily: "'Source Sans Pro', sans-serif",
    color: 'rgb(111, 111, 111)',
    fontSize: '0.85rem',
    margin: '0.4rem 0',
    letterSpacing: '0.02em',
  },
  footerLink: {
    color: 'rgb(111, 111, 111)',
    fontSize: '0.85rem',
    textDecoration: 'none',
    transition: 'color 0.2s',
  },
};

export default function Footer() {
  return (
    <div style={styles.footerWrapper}>
      <footer style={styles.footer}>
        <hr style={styles.divider} />
        <h2 style={styles.heading}>Följ oss</h2>
        <p style={styles.subtext}>
          Följ nyheter på Facebook om Fallhagen Films kommande projekt
        </p>
        <a
          href="https://www.facebook.com/p/FallhagenFilm-100063805215260/"
          target="_blank"
          rel="noopener"
          aria-label="Facebook"
          style={styles.facebookLink}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
          </svg>
        </a>
        <div style={styles.bottomSection}>
          <p style={styles.footerText}>
            © {new Date().getFullYear()} Firma Lars Nohrstedt. Med ensamrätt.
          </p>
          <p style={styles.footerText}>
            <Link 
              to="/sekretesspolicy" 
              style={styles.footerLink}
              onMouseEnter={(e) => e.currentTarget.style.color = 'rgb(150, 150, 150)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(111, 111, 111)'}
            >
              Sekretesspolicy
            </Link>
          </p>
          <p style={{ ...styles.footerText, marginTop: '1rem', fontSize: '0.75rem' }}>
            Powered by Kattbjörn
          </p>
        </div>
      </footer>
    </div>
  );
}
