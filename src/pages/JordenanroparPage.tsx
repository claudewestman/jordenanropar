import { useState, useEffect, useRef, useCallback, CSSProperties } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: '100vh',
    backgroundColor: '#fff',
    color: '#333',
    fontFamily: "'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif",
  },
  hero: {
    position: 'relative',
    height: '560px',
    minHeight: '300px',
    backgroundImage: "url('/assets/jordenanropar/Fin-bild-i-rymdskeppet.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: '58% 60%',
    display: 'flex',
    flexDirection: 'column',
  },
  heroOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.25))',
  },
  nav: {
    position: 'relative',
    zIndex: 10,
    padding: '1.5rem 2rem',
  },
  navLink: {
    color: 'rgb(247, 247, 247)',
    textDecoration: 'none',
    fontWeight: 700,
    fontFamily: "'Montserrat', sans-serif",
    letterSpacing: '4px',
    textTransform: 'uppercase' as const,
  },
  heroContent: {
    position: 'relative',
    zIndex: 10,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 400,
    fontFamily: "'Playfair Display', Georgia, serif",
    textAlign: 'center' as const,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.1em',
    textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
    padding: '0 1rem',
    color: 'rgb(208, 191, 0)',
    whiteSpace: 'pre-line' as const,
    lineHeight: 1.2,
  },
  sectionWrapper: {
    width: '100%',
    backgroundColor: '#fff',
  },
  sectionWrapperAlt: {
    width: '100%',
    backgroundColor: 'rgb(246, 246, 246)',
  },
  sectionInner: {
    padding: '4rem 1.5rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  sectionHeader: {
    textAlign: 'center' as const,
    marginBottom: '2.5rem',
  },
  sectionTitle: {
    fontSize: '32px',
    fontWeight: 400,
    fontFamily: "'Playfair Display', Georgia, serif",
    marginBottom: '0.75rem',
    color: 'rgb(80, 80, 80)',
    lineHeight: 1.4,
  },
  divider: {
    width: '80px',
    height: '2px',
    backgroundColor: 'rgb(226, 226, 226)',
    margin: '0 auto',
    border: 'none',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2.5rem',
    alignItems: 'start',
  },
  poster: {
    width: '100%',
    maxWidth: '400px',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
  },
  text: {
    fontSize: '1.15rem',
    lineHeight: 1.8,
    color: '#333',
    marginBottom: '1.25rem',
  },
  buySection: {
    textAlign: 'center' as const,
  },
  buyButtons: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap' as const,
    gap: '1rem',
    marginTop: '1.5rem',
  },
  castList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  castItem: {
    fontSize: '1.15rem',
    padding: '0.5rem 0',
    color: '#333',
    lineHeight: 1.7,
  },
  castImage: {
    width: '100%',
    maxWidth: '500px',
    height: 'auto',
    borderRadius: '8px',
    objectFit: 'cover' as const,
  },
  productionSubtitle: {
    textAlign: 'center' as const,
    fontFamily: "'Playfair Display', Georgia, serif",
    color: 'rgb(80, 80, 80)',
    fontSize: '1.1rem',
    marginBottom: '2rem',
    fontWeight: 400,
  },
  gallery: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  slideContainer: {
    position: 'relative',
  },
  slide: {
    display: 'none',
    flexDirection: 'column' as const,
    alignItems: 'center',
  },
  slideActive: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
  },
  slideImage: {
    width: '100%',
    maxHeight: '500px',
    objectFit: 'contain' as const,
    borderRadius: '8px',
  },
  slideNav: {
    position: 'absolute' as const,
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(0,0,0,0.7)',
    color: '#fff',
    border: '2px solid rgba(255,255,255,0.3)',
    padding: '1rem 1.25rem',
    cursor: 'pointer',
    fontSize: '1.75rem',
    borderRadius: '8px',
    transition: 'all 0.2s',
    minWidth: '50px',
    minHeight: '50px',
  },
  slideNavPrev: {
    left: '10px',
  },
  slideNavNext: {
    right: '10px',
  },
  dots: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.5rem',
    marginTop: '1.5rem',
    flexWrap: 'wrap' as const,
  },
  dot: {
    width: '14px',
    height: '14px',
    borderRadius: '50%',
    backgroundColor: '#666',
    border: '2px solid #999',
    cursor: 'pointer',
    transition: 'all 0.3s',
    minWidth: '14px',
    minHeight: '14px',
  },
  dotActive: {
    backgroundColor: 'rgb(208, 191, 0)',
    border: '2px solid rgb(208, 191, 0)',
  },
  slideCaption: {
    color: '#666',
    padding: '1rem',
    fontSize: '1rem',
    textAlign: 'center' as const,
  },
};

const galleryImages = [
  { src: 'assets/jordenanropar/Anna-och-Martin-regisserar2.jpg', alt: 'Anna och Martin regisserar' },
  { src: 'assets/jordenanropar/Filmaffischen.jpeg', alt: 'Filmaffischen' },
  { src: 'assets/jordenanropar/Fin-bild-i-rymdskeppet.jpg', alt: 'Fin bild i rymdskeppet' },
  { src: 'assets/jordenanropar/Ystad-julbild-21B.jpg', alt: 'Ystad julbild' },
  { src: 'assets/jordenanropar/Ystad-julbild-4.jpg', alt: 'Ystad julbild' },
  { src: 'assets/jordenanropar/Johan-Philomene-Lasse-och-Martin-pa-stranden.jpeg', alt: 'Johan, Philomène, Lasse och Martin på stranden' },
  { src: 'assets/jordenanropar/Kalle-och-Mira.jpeg', alt: 'Kalle och Mira' },
  { src: 'assets/jordenanropar/Martin-laser-shot-list-i-Ludvika.jpg', alt: 'Martin läser shot list i Ludvika' },
  { src: 'assets/jordenanropar/Martin-och-Victor.jpg', alt: 'Martin och Victor' },
  { src: 'assets/jordenanropar/Mira-och-Bjorn.jpeg', alt: 'Mira och Björn' },
  { src: 'assets/jordenanropar/Tomas-Norstrom-portratt.jpeg', alt: 'Tomas Norström' },
];

const cast = [
  { actor: 'Philomène Grandin', role: 'Mira' },
  { actor: 'Anders Linder', role: 'Peo' },
  { actor: 'Martin Fallhagen', role: 'Kalle' },
  { actor: 'Viktor de Melenne', role: 'Kalle som barn' },
  { actor: 'Jonas Kruse', role: 'Berra' },
  { actor: 'Terese Jansson', role: 'Sara' },
  { actor: 'Björn Pallin', role: 'Jonas' },
  { actor: 'Kristoffer Morath', role: 'Jerry' },
  { actor: 'Kristoffer Öhlund', role: 'Fyllebjörnen' },
  { actor: 'Andreas Wik Holmström', role: 'Gubben i bajamajan' },
  { actor: 'Jonas Sykfont', role: 'Femman (röst)' },
  { actor: 'Lasse Nohrstedt', role: 'Berättarröst' },
];

const production = [
  { name: 'Martin Fallhagen', role: 'manus' },
  { name: 'Tomas Norström', role: 'manusassistent' },
  { name: 'Martin Fallhagen', role: 'regi' },
  { name: 'Philomène Grandin', role: 'regiassistent' },
  { name: 'Anna Sandin', role: 'inspelningsledare och dramapedagog' },
  { name: 'Lasse Nohrstedt', role: 'exekutiv producent' },
  { name: 'Johan Bodin', role: 'foto' },
  { name: 'Simon Hjortek', role: 'foto' },
  { name: 'Louise Norström', role: 'ljudtekniker' },
  { name: 'Johan Engelbrekt', role: 'ljudtekniker' },
  { name: 'Simon Hjortek', role: 'ljudtekniker' },
  { name: 'Svante Lodén', role: 'musik' },
  { name: 'Decca', role: 'Fly me to the moon' },
];

export default function JordenanroparPage() {
  const [slideIndex, setSlideIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const showSlide = useCallback((index: number) => {
    let newIndex = index;
    if (newIndex >= galleryImages.length) newIndex = 0;
    if (newIndex < 0) newIndex = galleryImages.length - 1;
    setSlideIndex(newIndex);
  }, []);

  const startSlideshow = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setSlideIndex(prev => (prev + 1) % galleryImages.length);
    }, 10000);
  }, []);

  const resetSlideshow = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    startSlideshow();
  }, [startSlideshow]);

  const plusSlides = useCallback((n: number) => {
    setSlideIndex(prev => {
      let next = prev + n;
      if (next >= galleryImages.length) next = 0;
      if (next < 0) next = galleryImages.length - 1;
      return next;
    });
    resetSlideshow();
  }, [resetSlideshow]);

  const goToSlide = useCallback((n: number) => {
    showSlide(n);
    resetSlideshow();
  }, [showSlide, resetSlideshow]);

  useEffect(() => {
    startSlideshow();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startSlideshow]);

  return (
    <div style={styles.page}>
      <style>{`
        .hero-section {
          height: 560px;
        }
        @media (min-width: 1024px) {
          .hero-section {
            height: 85vh;
          }
        }
        .nav-logo {
          font-size: 22px;
        }
        @media (min-width: 768px) {
          .nav-logo {
            font-size: 24px;
          }
        }
        @media (min-width: 1280px) {
          .nav-logo {
            font-size: 26px;
          }
        }
        @media (min-width: 1536px) {
          .nav-logo {
            font-size: 29px;
          }
        }
        .hero-title {
          font-size: 40px;
        }
        @media (min-width: 768px) {
          .hero-title {
            font-size: 48px;
          }
        }
        @media (min-width: 1280px) {
          .hero-title {
            font-size: 62px;
          }
        }
        @media (min-width: 1536px) {
          .hero-title {
            font-size: 64px;
          }
        }
      `}</style>
      <a href="#main-content" className="skip-link">Hoppa till innehåll</a>
      <Helmet>
        <title>Jorden Anropar - Fallhagen Film</title>
        <meta name="description" content="Jorden Anropar är en stjärnspäckad äventyrs-scifi film av Martin Fallhagen och Tomas Norström, fylld med hjärta, skratt och allvar." />
        <meta property="og:title" content="Jorden Anropar - Fallhagen Film" />
        <meta property="og:description" content="Jorden Anropar är en stjärnspäckad äventyrs-scifi film av Martin Fallhagen och Tomas Norström." />
        <meta property="og:image" content="https://jordenanropar.se/assets/jordenanropar/Fin-bild-i-rymdskeppet.jpg" />
      </Helmet>

      {/* Hero */}
      <header className="hero-section" style={{
        ...styles.hero,
        height: undefined,
      }}>
        <div style={styles.heroOverlay} />
        <nav style={styles.nav}>
          <Link to="/" className="nav-logo" style={{...styles.navLink, fontSize: undefined}}>Fallhagen film</Link>
        </nav>
        <div style={styles.heroContent}>
          <h1 className="hero-title" style={{...styles.title, fontSize: undefined}}>Jorden Anropar</h1>
        </div>
      </header>

      <main id="main-content">
        {/* Om filmen */}
        <section style={styles.sectionWrapper}>
          <div style={styles.sectionInner}>
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>Om filmen</h2>
              <hr style={styles.divider} aria-hidden="true" />
            </div>
            <div style={styles.grid}>
              <div style={{ textAlign: 'center' }}>
                <img
                  src="assets/jordenanropar/Filmaffischen.jpeg"
                  alt="Filmaffisch för Jorden Anropar"
                  style={styles.poster}
                  loading="lazy"
                  width={400}
                  height={566}
                />
              </div>
              <div>
                <p style={styles.text}>
                  Rymdhjälten Mira får ett rop på hjälp av sin vän Femman, som bor i ett gruppboende 
                  på Skogsplaneten, 550 miljoner kilometer från Jorden. Men Mira är trött på att vara 
                  ensam i rymden och behöver sin vän Kalle för att klara den långa resan. Kalle, som 
                  alltid drömt om att bli rymdpilot, brottas dock med sin dåliga självkänsla.
                </p>
                <p style={styles.text}>
                  Kommer Kalle och hans vänner att följa med Mira på äventyr bland stjärnorna eller 
                  stanna kvar på sin Greklandssemester och dricka starköl på den lokala tavernan 
                  Peos pub? "Jorden Anropar" är regissören och manusförfattaren Martin Fallhagens 
                  fjärde kortfilm, skriven tillsammans med Tomas Norström. Det blev den sista filmen 
                  som Tomas arbetade med innan sin bortgång 2021.
                </p>
                <p style={styles.text}>
                  Martin Fallhagen, som har Down syndrom, har med sitt unika perspektiv gjort sig 
                  till en erkänd filmskapare då han lyfter och belyser de utmaningar som han och 
                  hans grannar upplever till vardags i gruppboendet. "Jorden Anropar" är en 
                  stjärnspäckad äventyrs-scifi på 35 minuter, fylld med mycket hjärta och rymmer 
                  både skratt och allvar. Det är en film som inspirerar till att hitta tron på 
                  sig själv och att en stöttande omgivning kan bidra till detta. Några av filmens 
                  karaktärer känner vi igen från SVT:s "Tillbaka till Vintergatan".
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Köp filmen */}
        <section style={styles.sectionWrapperAlt}>
          <div style={styles.sectionInner}>
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>Köp filmen</h2>
              <hr style={styles.divider} aria-hidden="true" />
            </div>
            <div style={styles.buySection}>
              <p style={styles.text}>
                Jorden Anropar går att köpa som DVD eller som digital kopia via länk.
              </p>
              <div style={styles.buyButtons}>
                <stripe-buy-button 
                  buy-button-id="buy_btn_1PLLNK097byvW02hkGaAi9a4" 
                  publishable-key="pk_live_51PIr4z097byvW02hYvwoLRi6TNC9wwMX4pdUJGCoy9oGQmaV21raZZgVl0W74AbDpq5buNjwOXH99MORJTVXHKik000gqR2l3P"
                />
                <stripe-buy-button 
                  buy-button-id="buy_btn_1PLLI0097byvW02h5oGX9BSR" 
                  publishable-key="pk_live_51PIr4z097byvW02hYvwoLRi6TNC9wwMX4pdUJGCoy9oGQmaV21raZZgVl0W74AbDpq5buNjwOXH99MORJTVXHKik000gqR2l3P"
                />
              </div>
              <p style={{...styles.text, marginTop: '1.5rem'}}>
                Om du redan har köpt filmen, kan du titta på den eller ladda hem den{' '}
                <a href="/stream" style={{ color: 'rgb(208, 191, 0)' }}>här</a> (kräver lösenord).
              </p>
            </div>
          </div>
        </section>

        {/* Medverkande */}
        <section style={styles.sectionWrapper}>
          <div style={styles.sectionInner}>
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>Medverkande</h2>
              <hr style={styles.divider} aria-hidden="true" />
            </div>
            <div style={styles.grid}>
              <div>
                <ul style={styles.castList}>
                  {cast.map((person, index) => (
                    <li key={index} style={styles.castItem}>
                      {person.actor} – {person.role}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ textAlign: 'center' }}>
                <img
                  src="assets/jordenanropar/Fin-bild-i-rymdskeppet.jpg"
                  alt="Mira och Kalle i rymdskeppet"
                  style={styles.castImage}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Produktion */}
        <section style={styles.sectionWrapperAlt}>
          <div style={styles.sectionInner}>
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>Produktion</h2>
              <hr style={styles.divider} aria-hidden="true" />
            </div>
            <p style={styles.productionSubtitle}>WIZWORKS STUDIOS &amp; TEATER AROS</p>
            <div style={styles.grid}>
              <div>
                <ul style={styles.castList}>
                  {production.map((person, index) => (
                    <li key={index} style={styles.castItem}>
                      {person.name} – {person.role}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ textAlign: 'center' }}>
                <img
                  src="assets/jordenanropar/Anna-och-Martin-regisserar2.jpg"
                  alt="Anna och Martin regisserar"
                  style={styles.castImage}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Bakgrund till filmen */}
        <section style={styles.sectionWrapper}>
          <div style={styles.sectionInner}>
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>Bakgrund till filmen</h2>
              <hr style={styles.divider} aria-hidden="true" />
            </div>
            <div style={styles.grid}>
              <div style={{ textAlign: 'center' }}>
                <img
                  src="assets/jordenanropar/Johan-Philomene-Lasse-och-Martin-pa-stranden.jpeg"
                  alt="Johan, Philomène, Lasse och Martin på stranden"
                  style={styles.castImage}
                  loading="lazy"
                />
              </div>
              <div>
                <p style={styles.text}>
                  Redan 2019 presenterade Martin Fallhagen sitt filmmanus till novellfilmen 
                  "Jorden Anropar" för sin vän och filmkollega Tomas Norström. Tillsammans 
                  med då projektanställde producenten Casper Andreas bearbetade de manuset. 
                  Ambitionen var att filma under sommaren 2020. Men då var Coronapandemin 
                  redan här och inspelningarna fick skjutas på framtiden.
                </p>
                <p style={styles.text}>
                  Våren 2021 drabbades Tomas Norström av en obotlig cancer och i oktober 
                  samma år gick han bort i sviterna av sin cancer. Sorgen och saknaden 
                  efter honom var stor och det skulle dröja ända fram till julen 2022 
                  innan Martin Fallhagen orkade väcka filmplanerna på nytt.
                </p>
                <p style={styles.text}>
                  Inspelningen av "Jorden Anropar" påbörjades i början av augusti 2023 
                  i Ystad. Delar av novellfilmen spelades in i samma studio som "Vid 
                  Vintergatans Slut". Martin Fallhagen har som första filmskapare fått 
                  tillstånd att producera film med sitt filmteam i rymdskeppet som finns 
                  i Ystad Studios.
                </p>
                <p style={styles.text}>
                  "Jorden Anropar" är en gripande film om vänskap, mod och att följa 
                  sina drömmar. Filmen tillägnas vännen och skådespelaren Tomas Norström.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fotogalleri */}
        <section style={styles.sectionWrapperAlt}>
          <div style={styles.sectionInner}>
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>Fotogalleri</h2>
              <hr style={styles.divider} aria-hidden="true" />
            </div>
            <div style={styles.gallery}>
              <div style={styles.slideContainer}>
                {galleryImages.map((img, index) => (
                  <div
                    key={img.src}
                    style={index === slideIndex ? styles.slideActive : styles.slide}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      style={styles.slideImage}
                      loading="lazy"
                    />
                    <p style={styles.slideCaption}>{img.alt}</p>
                  </div>
                ))}
                <button
                  onClick={() => plusSlides(-1)}
                  style={{...styles.slideNav, ...styles.slideNavPrev}}
                  aria-label="Föregående bild"
                >
                  ❮
                </button>
                <button
                  onClick={() => plusSlides(1)}
                  style={{...styles.slideNav, ...styles.slideNavNext}}
                  aria-label="Nästa bild"
                >
                  ❯
                </button>
              </div>
              <p style={{
                textAlign: 'center',
                color: '#666',
                fontSize: '0.95rem',
                marginTop: '1rem',
                marginBottom: '0.5rem',
                fontFamily: "'Source Sans Pro', sans-serif",
              }}>
                Bild {slideIndex + 1} av {galleryImages.length}
              </p>
              <div style={styles.dots} role="tablist" aria-label="Bildnavigering">
                {galleryImages.map((img, index) => (
                  <button
                    key={img.src}
                    type="button"
                    role="tab"
                    onClick={() => goToSlide(index)}
                    style={{
                      ...styles.dot,
                      ...(index === slideIndex ? styles.dotActive : {}),
                    }}
                    aria-label={`Bild ${index + 1} av ${galleryImages.length}`}
                    aria-selected={index === slideIndex}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
