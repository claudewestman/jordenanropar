import { CSSProperties } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: '100vh',
    backgroundColor: '#fff',
    color: '#333',
    fontFamily: "'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif",
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: 'rgb(22, 22, 22)',
    padding: '1.5rem 2rem',
  },
  navLink: {
    color: 'rgb(247, 247, 247)',
    textDecoration: 'none',
    fontSize: '22px',
    fontWeight: 700,
    fontFamily: "'Montserrat', sans-serif",
    letterSpacing: '4px',
    textTransform: 'uppercase' as const,
  },
  main: {
    flex: 1,
    padding: '4rem 1.5rem',
    maxWidth: '800px',
    margin: '0 auto',
    width: '100%',
  },
  title: {
    fontSize: '32px',
    fontWeight: 400,
    fontFamily: "'Playfair Display', Georgia, serif",
    marginBottom: '2rem',
    color: 'rgb(111, 111, 111)',
    textAlign: 'center' as const,
  },
  section: {
    marginBottom: '2rem',
  },
  sectionTitle: {
    fontSize: '1.3rem',
    fontWeight: 600,
    marginBottom: '1rem',
    color: '#333',
  },
  text: {
    fontSize: '1rem',
    lineHeight: 1.8,
    color: '#444',
    marginBottom: '1rem',
  },
  list: {
    paddingLeft: '1.5rem',
    marginBottom: '1rem',
  },
  listItem: {
    fontSize: '1rem',
    lineHeight: 1.8,
    color: '#444',
    marginBottom: '0.5rem',
  },
  link: {
    color: 'rgb(208, 191, 0)',
    textDecoration: 'none',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div style={styles.page}>
      <Helmet>
        <title>Sekretesspolicy - Fallhagen Film</title>
        <meta name="description" content="Sekretesspolicy för Fallhagen Film och jordenanropar.se" />
      </Helmet>

      <header style={styles.header}>
        <nav>
          <Link to="/" style={styles.navLink}>Fallhagen film</Link>
        </nav>
      </header>

      <main style={styles.main}>
        <h1 style={styles.title}>Sekretesspolicy</h1>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Om denna policy</h2>
          <p style={styles.text}>
            Denna sekretesspolicy förklarar hur Fallhagen Film ("vi", "oss") samlar in och 
            använder information när du besöker vår webbplats jordenanropar.se.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Information vi samlar in</h2>
          <p style={styles.text}>
            Vi samlar in begränsad information för att förbättra din upplevelse på webbplatsen:
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <strong>Analysdata:</strong> Vi använder Google Analytics för att samla in 
              anonymiserad information om hur besökare använder webbplatsen, såsom vilka 
              sidor som besöks och hur lång tid besökare spenderar på sidan.
            </li>
            <li style={styles.listItem}>
              <strong>Betalningsinformation:</strong> När du köper en film hanteras betalningen 
              av Stripe. Vi lagrar inte dina kortuppgifter – dessa hanteras säkert av Stripe 
              enligt deras sekretesspolicy.
            </li>
          </ul>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Cookies</h2>
          <p style={styles.text}>
            Webbplatsen använder cookies för att:
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}>Möjliggöra analysfunktioner via Google Analytics</li>
            <li style={styles.listItem}>Hantera betalningar via Stripe</li>
          </ul>
          <p style={styles.text}>
            Du kan blockera cookies genom att ändra inställningarna i din webbläsare.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Tredjepartstjänster</h2>
          <p style={styles.text}>
            Vi använder följande tredjepartstjänster:
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <strong>Google Analytics:</strong> För webbplatsanalys.{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={styles.link}>Googles sekretesspolicy</a>
            </li>
            <li style={styles.listItem}>
              <strong>Stripe:</strong> För betalningshantering.{' '}
              <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" style={styles.link}>Stripes sekretesspolicy</a>
            </li>
          </ul>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Kontakt</h2>
          <p style={styles.text}>
            Om du har frågor om vår sekretesspolicy kan du kontakta oss via vår{' '}
            <a href="https://www.facebook.com/p/FallhagenFilm-100063805215260/" target="_blank" rel="noopener noreferrer" style={styles.link}>Facebook-sida</a>.
          </p>
        </div>

        <div style={styles.section}>
          <p style={styles.text}>
            <em>Senast uppdaterad: April 2026</em>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
