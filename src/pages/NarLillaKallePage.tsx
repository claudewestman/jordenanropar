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
    backgroundImage: "url('/assets/narlillakalleblevrymdhjalte/Efterlysning.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  heroOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.5))',
  },
  nav: {
    position: 'relative',
    zIndex: 10,
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
  heroContent: {
    position: 'relative',
    zIndex: 10,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 'clamp(2rem, 5vw, 40px)',
    fontWeight: 400,
    fontFamily: "'Playfair Display', Georgia, serif",
    textAlign: 'center' as const,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.1em',
    textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
    padding: '0 1rem',
    color: 'rgb(208, 191, 0)',
    whiteSpace: 'pre-line' as const,
  },
  sectionWrapper: {
    width: '100%',
    backgroundColor: '#fff',
  },
  sectionWrapperAlt: {
    width: '100%',
    backgroundColor: '#f5f5f5',
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
    fontSize: '1.1rem',
    padding: '0.5rem 0',
    color: '#444',
  },
  castImage: {
    width: '100%',
    maxWidth: '500px',
    height: 'auto',
    borderRadius: '8px',
    objectFit: 'cover' as const,
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
};

const galleryImages = [
  { src: 'assets/narlillakalleblevrymdhjalte/FilmaffischForslag2.jpg', alt: 'Filmaffisch' },
  { src: 'assets/narlillakalleblevrymdhjalte/Fjallnora2.jpeg', alt: 'Inspelning vid Fjällnora' },
  { src: 'assets/narlillakalleblevrymdhjalte/Fjallnora7.jpeg', alt: 'Fjällnora' },
  { src: 'assets/narlillakalleblevrymdhjalte/Martinregisserar.jpg', alt: 'Martin regisserar' },
  { src: 'assets/narlillakalleblevrymdhjalte/MiraochlillaKalleirymdskeppet.jpg', alt: 'Mira och lilla Kalle i rymdskeppet' },
  { src: 'assets/narlillakalleblevrymdhjalte/AndersLinderochMartin.jpeg', alt: 'Anders Linder och Martin' },
];

const cast = [
  { actor: 'Victor de Melenne', role: 'Kalle som barn' },
  { actor: 'Philomène Grandin', role: 'Mira' },
  { actor: 'Anders Linder', role: 'Peo' },
  { actor: 'Jonas Kruse', role: 'Berra' },
  { actor: 'Tina Fallhagen', role: 'Kalles mamma' },
  { actor: 'Lasse Nohrstedt', role: 'Berättarröst' },
];

export default function NarLillaKallePage() {
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
        <title>När lilla Kalle blev en rymdhjälte - Fallhagen Film</title>
        <meta name="description" content="När lilla Kalle blev en rymdhjälte är en kortfilm av Martin Fallhagen. En berättelse om hur en liten pojkes dröm om rymden tog sin början." />
        <meta property="og:title" content="När lilla Kalle blev en rymdhjälte - Fallhagen Film" />
        <meta property="og:description" content="Kortfilm av Martin Fallhagen om hur en liten pojkes dröm om rymden tog sin början." />
        <meta property="og:image" content="https://jordenanropar.se/assets/narlillakalleblevrymdhjalte/FilmaffischForslag2.jpg" />
      </Helmet>

      {/* Hero */}
      <header className="hero-section" style={{
        ...styles.hero,
        height: undefined, // Override - controlled by CSS class
      }}>
        <div style={styles.heroOverlay} />
        <nav style={styles.nav}>
          <Link to="/" className="nav-logo" style={{...styles.navLink, fontSize: undefined}}>Fallhagen film</Link>
        </nav>
        <div style={styles.heroContent}>
          <h1 className="hero-title" style={{...styles.title, fontSize: undefined}}>När lilla Kalle{'\n'}blev en rymdhjälte</h1>
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
                src="assets/narlillakalleblevrymdhjalte/FilmaffischForslag2.jpg"
                alt="Filmaffisch för När lilla Kalle blev en rymdhjälte"
                style={styles.poster}
                loading="lazy"
                width={400}
                height={566}
              />
            </div>
            <div>
              <p style={styles.text}>
                Kalle drömde redan som liten om att resa i rymden. Under en svamptur med sin mamma 
                fick Kalle för första gången ta över och köra ett rymdskepp på egen hand av rymdkapten 
                Mira. Deras nyvunna vänskap kom att följa dem genom livet.
              </p>
              <p style={styles.text}>
                NÄR LILLA KALLE BLEV EN RYMDHJÄLTE är skriven och regisserad av Martin Fallhagen. 
                Martin, som har Down Syndrom, har med sitt unika perspektiv gjort sig till en erkänd 
                filmskapare då han lyfter och belyser de utmaningar som han och hans grannar upplever 
                på gruppboendet.
              </p>
              <p style={styles.text}>
                NÄR LILLA KALLE BLEV EN RYMDHJÄLTE är Martin Fallhagens femte kortfilm och handlingen 
                börjar före filmen "Jorden Anropar" men efter "Party, Problem och en Rymdhjälte." 
                Hänger ni med?
              </p>
              <p style={styles.text}>
                Några av filmens karaktärer känner vi igen från SVT:s "Tillbaka till Vintergatan" 
                som sändes under 2003–2004 samt "Jorden Anropar" från 2024: Philoméne Grandin som 
                Mira och Anders Linder som Peo. Dessutom medverkar bland andra Jonas Kruse som 
                kommissarie Berra Barnaby.
              </p>
              <p style={styles.text}>
                NÄR LILLA KALLE BLEV EN RYMDHJÄLTE är inspelad hösten/vintern 2025–2026 i Fjällnora 
                naturområde utanför Uppsala och Ystad Studios. Filmen är cirka 19 minuter lång.
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
              När lilla Kalle blev en rymdhjälte går att köpa som DVD eller som digital kopia via länk.
            </p>
            <div style={styles.buyButtons}>
               <stripe-buy-button
                 buy-button-id="buy_btn_1TJiMs097byvW02hBahevz2o"
                 publishable-key="pk_live_51PIr4z097byvW02hYvwoLRi6TNC9wwMX4pdUJGCoy9oGQmaV21raZZgVl0W74AbDpq5buNjwOXH99MORJTVXHKik000gqR2l3P"
               />
              <stripe-buy-button
                buy-button-id="buy_btn_1TJiIK097byvW02hULqEtEMk"
                publishable-key="pk_live_51PIr4z097byvW02hYvwoLRi6TNC9wwMX4pdUJGCoy9oGQmaV21raZZgVl0W74AbDpq5buNjwOXH99MORJTVXHKik000gqR2l3P"
              />
            </div>
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
            <ul style={styles.castList}>
              {cast.map(({ actor, role }) => (
                <li key={actor} style={styles.castItem}>
                  <strong>{actor}</strong> – {role}
                </li>
              ))}
            </ul>
            <div style={{ textAlign: 'center' }}>
              <img
                src="assets/narlillakalleblevrymdhjalte/MiraochlillaKalleirymdskeppet.jpg"
                alt="Mira och lilla Kalle i rymdskeppet"
                style={styles.castImage}
                loading="lazy"
                width={800}
                height={533}
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
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={styles.text}>
              Produktionen involverar ett dedikerat team med talangfulla medarbetare, inklusive 
              Martin Fallhagen som manusförfattare och regissör, samt de professionella skådespelarna 
              Anders Linder, Philoméne Grandin och Jonas Kruse. För första gången agerar inte Martin 
              som skådespelare i sina egna filmer, utan har överlåtit huvudrollen till Victor de 
              Melenne, en nioåring från Helsingborg som liksom Martin har Down syndrom.
            </p>
            <p style={styles.text}>
              Martins grannar i gruppboendet agerar som i hans tidigare filmer som skådespelare och 
              statister. Andreas Norin, Pantheon Film &amp; Fotografi AB, återkommer i teamet som 
              filmare och bildregissör.
            </p>
            <p style={styles.text}>
              "När lilla Kalle blev en rymdhjälte" är en dramatisk film om saknad, mod och att följa 
              sina drömmar även om det handlar om rymdäventyr. Filmen inrymmer också en stor portion 
              humor och dråpliga vändningar — inte minst när Anders Linders rollfigur Peo äntligen 
              friges efter att varit instängd i ett utedass i tjugofem år!
            </p>
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
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={styles.text}>
              "- Du ska veta att jag känt Kalle sedan han var barn", säger Mira och spänner ögonen 
              i Berra, personal på ett gruppboende. Scenen är hämtad ur Martin Fallhagens fjärde 
              novellfilm Jorden Anropar, som kom 2024. Mira, spelas som vanligt av Philoméne Grandin, 
              får filmpubliken att fråga sig hur Kalle och Mira kan känna varandra sedan tidigare — 
              Mira som bott stora delar av sitt liv i Vintergatans galax och Martin som lever sina 
              dagar i ett gruppboende för personer med intellektuella funktionsvariationer?
            </p>
            <p style={styles.text}>
              Publikens funderingar gav Martin Fallhagen inspiration att göra en kortfilm som avslöjar 
              vänskapens ursprung mellan Kalle och Mira. Kortfilmen När lilla Kalle blev en rymdhjälte 
              var född!
            </p>
            <p style={styles.text}>
              Delar av filmen spelades in i samma studio som "Vid Vintergatans Slut", som var en 
              mycket uppskattad sommarlovsserie från SVT under första halvan av 2000-talet. Martin 
              Fallhagen har som första filmskapare fått tillstånd att producera film med sitt filmteam 
              i rymdskeppet som finns i Ystad Studios.
            </p>
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
                  aria-hidden={index !== slideIndex}
                >
                  <span style={{ color: '#888', marginBottom: '0.5rem' }}>
                    {index + 1} / {galleryImages.length}
                  </span>
                  <img src={img.src} alt={img.alt} style={styles.slideImage} />
                  <span style={{ color: '#888', marginTop: '0.5rem' }}>{img.alt}</span>
                </div>
              ))}
              <button
                type="button"
                onClick={() => plusSlides(-1)}
                style={{ ...styles.slideNav, ...styles.slideNavPrev }}
                aria-label="Föregående bild"
              >
                ❮
              </button>
              <button
                type="button"
                onClick={() => plusSlides(1)}
                style={{ ...styles.slideNav, ...styles.slideNavNext }}
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
