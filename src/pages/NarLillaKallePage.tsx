// @ts-nocheck
import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';

export default function NarLillaKallePage() {
  const [, setSlideIndex] = useState(1);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function startSlideshow() {
    intervalRef.current = setInterval(() => {
      setSlideIndex(prev => {
        const slides = document.getElementsByClassName('mySlides');
        const next = prev >= slides.length ? 1 : prev + 1;
        showSlides(next);
        return next;
      });
    }, 10000);
  }

  function resetSlideshow() {
    if (intervalRef.current) clearInterval(intervalRef.current);
    startSlideshow();
  }

  function plusSlides(n: number) {
    setSlideIndex(prev => {
      const slides = document.getElementsByClassName('mySlides');
      let next = prev + n;
      if (next > slides.length) next = 1;
      if (next < 1) next = slides.length;
      showSlides(next);
      resetSlideshow();
      return next;
    });
  }

  function currentSlide(n: number) {
    showSlides(n);
    setSlideIndex(n);
    resetSlideshow();
  }

  function showSlides(n: number) {
    const slides = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('dot');
    let idx = n;
    if (idx > slides.length) idx = 1;
    if (idx < 1) idx = slides.length;
    for (let i = 0; i < slides.length; i++) {
      (slides[i] as HTMLElement).style.display = 'none';
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    if (slides[idx - 1]) (slides[idx - 1] as HTMLElement).style.display = 'flex';
    if (dots[idx - 1]) dots[idx - 1].className += ' active';
  }

  useEffect(() => {
    showSlides(1);
    startSlideshow();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
<div id="layout-narlillakalle" className="layout layout-layout layout-layout-layout-13 locale-sv-SE lang-sv">
      <Helmet>
        <title>När lilla Kalle blev en rymdhjälte - Fallhagen Film</title>
        <meta name="description" content="När lilla Kalle blev en rymdhjälte är en kortfilm av Martin Fallhagen. En berättelse om hur en liten pojkes dröm om rymden tog sin början." />
        <meta property="og:title" content="När lilla Kalle blev en rymdhjälte - Fallhagen Film" />
        <meta property="og:description" content="Kortfilm av Martin Fallhagen om hur en liten pojkes dröm om rymden tog sin början." />
        <meta property="og:image" content="https://jordenanropar.se/assets/narlillakalleblevrymdhjalte/FilmaffischForslag2.jpg" />
      </Helmet>
         <div className="c1-1 c1-2 c1-3 c1-4 c1-5 c1-6 c1-7 c1-8 c1-9 c1-a c1-b c1-c c1-d c1-e c1-f c1-g">
            <div className="page-inner">
               <div className="widget widget-header widget-header-header-9">
                  <div role="main" className="c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g c1-1 c1-2 c1-h c1-b c1-c c1-d c1-e c1-f c1-g">
                     <div>
                        <section className="c1-1 c1-2 c1-h c1-i c1-j c1-k c1-l c1-b c1-c c1-m c1-n c1-d c1-e c1-f c1-g">
                           <div className="c1-1 c1-2 c1-o c1-b c1-c c1-d c1-e c1-f c1-g">
                              <div className="c1-1 c1-2 c1-o c1-p c1-q c1-b c1-c c1-d c1-r c1-e c1-f c1-g">
                                 <div className="c1-1 c1-2 c1-s c1-b c1-c c1-d c1-e c1-f c1-g">
                                    <div className="c1-1 c1-2 c1-s c1-b c1-c c1-d c1-e c1-f c1-g">
                                       <div className="carousel loaded" style={{height: '100%', width: '100%'}}>
                                          <div className="carousel-container-inner" style={{height: '100%', width: '100%', marginBottom: '0'}}>
                                             <div className="carousel-viewport" style={{width: '100%', height: '100%'}}>
                                                <ul className="carousel-track" style={{height: '100%'}}>
                                                   <li style={{marginLeft: '0px', height: '100%', width: '100%', transition: 'opacity 1000ms ease-in-out', overflowY: 'hidden', minHeight: '100%', overflowX: 'hidden', minWidth: '100%'}} className="carousel-slide carousel-slide-selected carousel-slide-fade">
                                                      <div role="img" className="c1-1 c1-2 c1-t c1-u c1-v c1-w c1-x c1-y c1-s c1-z c1-10 c1-11 c1-12 c1-b c1-c c1-13 c1-14 c1-15 c1-16 c1-17 c1-18 c1-19 c1-1a c1-1b c1-1c c1-1d c1-1e c1-1f c1-1g c1-1h c1-1i c1-1j c1-1k c1-1l c1-1m c1-1n c1-d c1-1o c1-e c1-f c1-g" style={{backgroundImage: "url('/assets/narlillakalleblevrymdhjalte/Efterlysning.png')"}}></div>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="c1-1 c1-2 c1-t c1-w c1-2y c1-3t c1-3u c1-3v c1-3w c1-3x c1-2z c1-b c1-c c1-d c1-e c1-f c1-g">
                                    <div className="c1-1 c1-2 c1-3y c1-4 c1-3z c1-b c1-c c1-d c1-40 c1-e c1-f c1-g">
                                       <div className="c1-1 c1-2 c1-3w c1-4 c1-41 c1-b c1-c c1-d c1-e c1-f c1-g">
                                          <div className="c1-1 c1-2 c1-42 c1-41 c1-b c1-c c1-d c1-e c1-f c1-g">
                                             <nav className="c1-1 c1-2 c1-o c1-43 c1-44 c1-45 c1-46 c1-41 c1-47 c1-b c1-c c1-d c1-48 c1-49 c1-4a c1-4b c1-e c1-f c1-g">
                                                <div className="c1-1 c1-2 c1-u c1-4c c1-4 c1-t c1-33 c1-4d c1-4e c1-4f c1-39 c1-b c1-c c1-d c1-4g c1-e c1-f c1-g">
                                                   <div className="c1-1 c1-2 c1-t c1-4 c1-4h c1-4i c1-4j c1-4k c1-4l c1-b c1-c c1-d c1-e c1-f c1-g">
                                                      <div className="c1-3b c1-4m c1-4 c1-c c1-4n c1-4o c1-4p c1-d c1-e c1-f c1-g">
                                                         <a rel="" role="link" aria-haspopup="menu" title="Fallhagen film" href="/" className="c1-4q c1-4r c1-4s c1-4t c1-4j c1-4u c1-3c c1-4v c1-4w c1-4x c1-4y c1-4z c1-4 c1-b c1-50 c1-c c1-51 c1-52 c1-53 c1-d c1-e c1-f c1-g">
                                                            <div className="c1-1 c1-2 c1-3b c1-4 c1-o c1-b c1-c c1-d c1-e c1-f c1-g">
                                                               <h3 className="c1-54 c1-55 c1-4t c1-4j c1-56 c1-4f c1-4d c1-33 c1-4e c1-4z c1-3b c1-57 c1-3n c1-58 c1-59 c1-5a c1-5b c1-5c c1-5d">Fallhagen film</h3>
                                                            </div>
                                                         </a>
                                                      </div>
                                                   </div>
                                                   <div className="c1-1 c1-2 c1-5u c1-36 c1-38 c1-t c1-5v c1-b c1-c c1-d c1-e c1-f c1-g"></div>
                                                </div>
                                                <div className="c1-1 c1-2 c1-5w c1-5x c1-45 c1-46 c1-4z c1-b c1-c c1-d c1-e c1-f c1-g">
                                                   <div className="c1-1 c1-2 c1-5g c1-4i c1-u c1-4c c1-35 c1-37 c1-b c1-c c1-d c1-5y c1-e c1-f c1-g">
                                                      <div className="c1-1 c1-2 c1-36 c1-t c1-u c1-4i c1-5z c1-60 c1-61 c1-b c1-c c1-d c1-e c1-f c1-g">
                                                         <div className="c1-3b c1-4m c1-4 c1-4h c1-c c1-62 c1-63 c1-64 c1-65 c1-d c1-e c1-f c1-g">
                                                            <a rel="" role="link" aria-haspopup="menu" title="Fallhagen film" href="/" className="c1-4q c1-4r c1-4s c1-4t c1-4j c1-4u c1-3c c1-4v c1-4w c1-4x c1-4y c1-4z c1-4 c1-b c1-50 c1-c c1-51 c1-52 c1-53 c1-d c1-e c1-f c1-g">
                                                               <div className="c1-1 c1-2 c1-3b c1-4 c1-o c1-b c1-c c1-d c1-e c1-f c1-g">
                                                                  <h3 className="c1-54 c1-55 c1-4t c1-4j c1-56 c1-4f c1-4d c1-33 c1-4e c1-4z c1-3b c1-57 c1-3n c1-58 c1-59 c1-5a c1-5b c1-5c c1-5d">Fallhagen film</h3>
                                                               </div>
                                                            </a>
                                                         </div>
                                                      </div>
                                                      <div className="c1-1 c1-2 c1-t c1-66 c1-u c1-67 c1-5v c1-b c1-c c1-d c1-e c1-f c1-g"></div>
                                                   </div>
                                                </div>
                                             </nav>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="c1-1 c1-2 c1-4 c1-68 c1-5g c1-u c1-w c1-69 c1-33 c1-4e c1-b c1-c c1-d c1-6a c1-6b c1-5y c1-e c1-f c1-g">
                                       <div className="c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"></div>
                                       <div className="c1-1 c1-2 c1-4f c1-4d c1-45 c1-46 c1-4z c1-t c1-3z c1-b c1-c c1-6c c1-d c1-6d c1-6e c1-6f c1-6g c1-6h c1-e c1-6i c1-f c1-6j c1-g">
                                          <div className="c1-1 c1-2 c1-o c1-33 c1-4e c1-43 c1-44 c1-4 c1-t c1-69 c1-w c1-6k c1-b c1-c c1-d c1-6l c1-6m c1-6n c1-6o c1-6p c1-6q c1-6r c1-6s c1-e c1-f c1-g">
                                             <div className="c1-1 c1-2 c1-6t c1-b c1-c c1-d c1-e c1-f c1-g">
                                                <div className="c1-1 c1-2 c1-4t c1-4j c1-2x c1-o c1-4z c1-5i c1-56 c1-b c1-c c1-d c1-e c1-f c1-g">
                                                   <h1 className="c1-1 c1-2 c1-4t c1-4j c1-56 c1-4f c1-4d c1-33 c1-4e c1-6u c1-6v c1-4z c1-3b c1-4m c1-6w c1-6x c1-6y c1-6z c1-70 c1-71 c1-72 c1-73 c1-74 c1-75">NÄR LILLA KALLE BLEV EN RYMDHJÄLTE</h1>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </section>
                     </div>
                  </div>
               </div>


               {/* Om filmen */}
               <section role="region" className="widget widget-content c1-1 c1-2 c1-3 c1-i c1-j c1-b c1-c c1-m c1-n c1-d c1-e c1-f c1-g">
                           <div className="c1-1 c1-2 c1-5w c1-5x c1-45 c1-46 c1-4z c1-b c1-c c1-6c c1-d c1-6d c1-e c1-6i c1-f c1-6j c1-g">
                              <h2 className="c1-1 c1-2 c1-4t c1-4j c1-7e c1-5w c1-4d c1-33 c1-7f c1-6k c1-4m c1-76 c1-7g c1-6x c1-77 c1-6q c1-6f c1-78 c1-79 c1-7a">
                                 <span className="c1-7h c1-7i c1-7j c1-7k c1-7l">Om filmen</span>
                                 <div className="c1-4 c1-7m c1-4m c1-76 c1-77 c1-78 c1-79 c1-7a">
                                    <hr aria-hidden="true" role="separator" className="c1-7n c1-7o c1-3f c1-7p c1-4e c1-7q c1-3b c1-4m c1-76 c1-77 c1-78 c1-79 c1-7a"/>
                                 </div>
                              </h2>
                              <div className="c1-1 c1-2 c1-t c1-7r c1-7s c1-7t c1-33 c1-7u c1-4e c1-7v c1-4h c1-69 c1-b c1-c c1-7w c1-7x c1-7y c1-7z c1-d c1-e c1-f c1-g">
                                 <div className="c1-1 c1-2 c1-7r c1-68 c1-80 c1-81 c1-4z c1-35 c1-82 c1-37 c1-83 c1-b c1-c c1-84 c1-85 c1-86 c1-87 c1-88 c1-89 c1-d c1-8a c1-8b c1-e c1-f c1-g">
                                    <div className="c1-1 c1-2 c1-6k c1-b c1-c c1-d c1-e c1-f c1-g"><span className="c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g">
                                      <img src="assets/narlillakalleblevrymdhjalte/FilmaffischForslag2.jpg" srcSet="assets/narlillakalleblevrymdhjalte/FilmaffischForslag2.jpg 1x, assets/narlillakalleblevrymdhjalte/FilmaffischForslag2.jpg 2x" className="c1-1 c1-2 c1-4 c1-4z c1-5w c1-5x c1-33 c1-8c c1-8d c1-8e c1-3b c1-8f c1-b c1-c c1-8g c1-d c1-6b c1-e c1-f c1-g"/>
                                    </span></div>
                                 </div>
                                 <div className="c1-1 c1-2 c1-7r c1-68 c1-80 c1-81 c1-4z c1-35 c1-82 c1-37 c1-83 c1-8h c1-8i c1-b c1-c c1-84 c1-85 c1-86 c1-87 c1-88 c1-89 c1-d c1-8j c1-8k c1-e c1-f c1-g">
                                    <div className="c1-1 c1-2 c1-t c1-w c1-4 c1-8l c1-8m c1-4h c1-8n c1-8i c1-b c1-c c1-8o c1-8p c1-d c1-e c1-f c1-g">
                                       <div className="c1-1 c1-2 c1-4t c1-4j c1-8q c1-33 c1-4e c1-8r c1-8s c1-8t c1-8u c1-8v c1-8w c1-8x c1-8y c1-8z c1-90 c1-91 c1-92 c1-93 c1-94 c1-95 c1-96 c1-97 c1-98 c1-99 c1-9a c1-9b c1-9c c1-9d c1-9e c1-9f c1-9g c1-9h c1-9i c1-68 c1-b c1-9j c1-c c1-6x c1-d c1-e c1-f c1-g x-rt">
                                          <p style={{margin: '0'}}>Kalle drömde redan som liten om att resa i rymden. Under en svamptur med sin mamma fick Kalle för första gången ta över och köra ett rymdskepp på egen hand av rymdkapten Mira. Deras nyvunna vänskap kom att följa dem genom livet.</p>
                                       </div>
                                    </div>
                                    <div className="c1-1 c1-2 c1-t c1-w c1-4 c1-8l c1-8m c1-4h c1-8n c1-8i c1-b c1-c c1-8o c1-8p c1-d c1-e c1-f c1-g">
                                       <div className="c1-1 c1-2 c1-4t c1-4j c1-8q c1-33 c1-4e c1-8r c1-8s c1-8t c1-8u c1-8v c1-8w c1-8x c1-8y c1-8z c1-90 c1-91 c1-92 c1-93 c1-94 c1-95 c1-96 c1-97 c1-98 c1-99 c1-9a c1-9b c1-9c c1-9d c1-9e c1-9f c1-9g c1-9h c1-9i c1-68 c1-b c1-9j c1-c c1-6x c1-d c1-e c1-f c1-g x-rt">
                                          <p style={{margin: '0'}}>NÄR LILLA KALLE BLEV EN RYMDHJÄLTE är skriven och regisserad av Martin Fallhagen. Martin, som har Down Syndrom, har med sitt unika perspektiv gjort sig till en erkänd filmskapare då han lyfter och belyser de utmaningar som han och hans grannar upplever på gruppboendet.</p>
                                       </div>
                                    </div>
                                    <div className="c1-1 c1-2 c1-t c1-w c1-4 c1-8l c1-8m c1-4h c1-8n c1-8i c1-b c1-c c1-8o c1-8p c1-d c1-e c1-f c1-g">
                                       <div className="c1-1 c1-2 c1-4t c1-4j c1-8q c1-33 c1-4e c1-8r c1-8s c1-8t c1-8u c1-8v c1-8w c1-8x c1-8y c1-8z c1-90 c1-91 c1-92 c1-93 c1-94 c1-95 c1-96 c1-97 c1-98 c1-99 c1-9a c1-9b c1-9c c1-9d c1-9e c1-9f c1-9g c1-9h c1-9i c1-68 c1-b c1-9j c1-c c1-6x c1-d c1-e c1-f c1-g x-rt">
                                          <p style={{margin: '0'}}>NÄR LILLA KALLE BLEV EN RYMDHJÄLTE är Martin Fallhagens femte kortfilm och handlingen börjar före filmen "Jorden Anropar" men efter "Party, Problem och en Rymdhjälte." Hänger ni med?</p>
                                       </div>
                                    </div>
                                    <div className="c1-1 c1-2 c1-t c1-w c1-4 c1-8l c1-8m c1-4h c1-8n c1-8i c1-b c1-c c1-8o c1-8p c1-d c1-e c1-f c1-g">
                                       <div className="c1-1 c1-2 c1-4t c1-4j c1-8q c1-33 c1-4e c1-8r c1-8s c1-8t c1-8u c1-8v c1-8w c1-8x c1-8y c1-8z c1-90 c1-91 c1-92 c1-93 c1-94 c1-95 c1-96 c1-97 c1-98 c1-99 c1-9a c1-9b c1-9c c1-9d c1-9e c1-9f c1-9g c1-9h c1-9i c1-68 c1-b c1-9j c1-c c1-6x c1-d c1-e c1-f c1-g x-rt">
                                          <p style={{margin: '0'}}>Några av filmens karaktärer känner vi igen från SVT:s "Tillbaka till Vintergatan" som sändes under 2003–2004 samt "Jorden Anropar" från 2024: Philoméne Grandin som Mira och Anders Linder som Peo. Dessutom medverkar bland andra Jonas Kruse som kommissarie Berra Barnaby.</p>
                                       </div>
                                    </div>
                                    <div className="c1-1 c1-2 c1-t c1-w c1-4 c1-8l c1-8m c1-4h c1-8n c1-8i c1-b c1-c c1-8o c1-8p c1-d c1-e c1-f c1-g">
                                       <div className="c1-1 c1-2 c1-4t c1-4j c1-8q c1-33 c1-4e c1-8r c1-8s c1-8t c1-8u c1-8v c1-8w c1-8x c1-8y c1-8z c1-90 c1-91 c1-92 c1-93 c1-94 c1-95 c1-96 c1-97 c1-98 c1-99 c1-9a c1-9b c1-9c c1-9d c1-9e c1-9f c1-9g c1-9h c1-9i c1-68 c1-b c1-9j c1-c c1-6x c1-d c1-e c1-f c1-g x-rt">
                                          <p style={{margin: '0'}}>NÄR LILLA KALLE BLEV EN RYMDHJÄLTE är inspelad hösten/vintern 2025–2026 i Fjällnora naturområde utanför Uppsala och Ystad Studios. Filmen är cirka 19 minuter lång.</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
               </section>

               {/* Köp filmen */}
               <section role="region" className="widget widget-html c1-1 c1-2 c1-9p c1-i c1-j c1-b c1-c c1-m c1-n c1-d c1-e c1-f c1-g">
                           <div className="c1-1 c1-2 c1-5w c1-5x c1-45 c1-46 c1-4z c1-b c1-c c1-6c c1-d c1-6d c1-e c1-6i c1-f c1-6j c1-g">
                              <h2 className="c1-1 c1-2 c1-4t c1-4j c1-7e c1-5w c1-4d c1-33 c1-7f c1-6k c1-4m c1-76 c1-7g c1-6x c1-77 c1-6q c1-6f c1-78 c1-79 c1-7a">
                                 <span className="c1-7h c1-7i c1-7j c1-7k c1-7l">Köp filmen</span>
                                 <div className="c1-4 c1-7m c1-4m c1-76 c1-77 c1-78 c1-79 c1-7a">
                                    <hr aria-hidden="true" role="separator" className="c1-9q c1-7o c1-3f c1-7p c1-4e c1-7q c1-3b c1-4m c1-76 c1-77 c1-78 c1-79 c1-7a"/>
                                 </div>
                              </h2>
                              <div className="c1-1 c1-2 c1-t c1-7r c1-7s c1-7t c1-33 c1-7u c1-4e c1-7v c1-b c1-c c1-7w c1-7x c1-7y c1-7z c1-d c1-e c1-f c1-g">
                                 <div className="c1-1 c1-2 c1-7r c1-68 c1-80 c1-9r c1-4z c1-35 c1-82 c1-37 c1-83 c1-b c1-c c1-86 c1-87 c1-88 c1-89 c1-d c1-9s c1-9t c1-e c1-f c1-g">
                                    <div>
                                       <div className="c1-1 c1-2 c1-t c1-w c1-4 c1-8l c1-8m c1-4h c1-8n c1-8i c1-b c1-c c1-8o c1-8p c1-d c1-e c1-f c1-g">
                                          <div style={{margin: '0 auto'}} className="c1-1 c1-2 c1-4t c1-4j c1-8q c1-33 c1-4e c1-8r c1-8s c1-8t c1-8u c1-8v c1-8w c1-8x c1-8y c1-8z c1-90 c1-91 c1-92 c1-93 c1-94 c1-95 c1-96 c1-97 c1-98 c1-99 c1-9a c1-9b c1-9c c1-9d c1-9e c1-9f c1-9g c1-9h c1-9i c1-68 c1-b c1-9j c1-c c1-6x c1-d c1-e c1-f c1-g x-rt">
                                             <p style={{margin: '10px'}}>När lilla Kalle blev en rymdhjälte går att köpa som DVD eller som digital kopia via länk.</p>
                                          </div>
                                       </div>
                                       <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                                          <div style={{margin: '10px'}}>
                                             <stripe-buy-button buy-button-id="buy_btn_1TJiIK097byvW02hULqEtEMk" publishable-key="pk_live_51PIr4z097byvW02hYvwoLRi6TNC9wwMX4pdUJGCoy9oGQmaV21raZZgVl0W74AbDpq5buNjwOXH99MORJTVXHKik000gqR2l3P">
                                             </stripe-buy-button>
                                          </div>
                                          <div style={{margin: '10px'}}>
                                             <stripe-buy-button buy-button-id="buy_btn_1TJiMs097byvW02hBahevz2o" publishable-key="pk_live_51PIr4z097byvW02hYvwoLRi6TNC9wwMX4pdUJGCoy9oGQmaV21raZZgVl0W74AbDpq5buNjwOXH99MORJTVXHKik000gqR2l3P">
                                             </stripe-buy-button>
                                          </div>
                                       </div>
                                    </div>
                              </div>
                           </div>
                        </div></section>

               {/* Medverkande */}
               <section role="region" className="widget widget-content c1-1 c1-2 c1-3 c1-i c1-j c1-b c1-c c1-m c1-n c1-d c1-e c1-f c1-g">
                           <div className="c1-1 c1-2 c1-5w c1-5x c1-45 c1-46 c1-4z c1-b c1-c c1-6c c1-d c1-6d c1-e c1-6i c1-f c1-6j c1-g">
                              <h2 className="c1-1 c1-2 c1-4t c1-4j c1-7e c1-5w c1-4d c1-33 c1-7f c1-6k c1-4m c1-76 c1-7g c1-6x c1-77 c1-6q c1-6f c1-78 c1-79 c1-7a">
                                 <span className="c1-7h c1-7i c1-7j c1-7k c1-7l">Medverkande</span>
                                 <div className="c1-4 c1-7m c1-4m c1-76 c1-77 c1-78 c1-79 c1-7a">
                                    <hr aria-hidden="true" role="separator" className="c1-7n c1-7o c1-3f c1-7p c1-4e c1-7q c1-3b c1-4m c1-76 c1-77 c1-78 c1-79 c1-7a"/>
                                 </div>
                              </h2>
                              <div className="c1-1 c1-2 c1-t c1-7r c1-7s c1-7t c1-33 c1-7u c1-4e c1-7v c1-4h c1-69 c1-b c1-c c1-7w c1-7x c1-7y c1-7z c1-d c1-e c1-f c1-g">
                                 <div className="c1-1 c1-2 c1-7r c1-68 c1-80 c1-81 c1-4z c1-35 c1-82 c1-37 c1-83 c1-9u c1-b c1-c c1-84 c1-85 c1-86 c1-87 c1-88 c1-89 c1-d c1-8j c1-8k c1-9v c1-e c1-f c1-g">
                                    <div className="c1-1 c1-2 c1-t c1-w c1-4 c1-8l c1-8m c1-4h c1-8n c1-8i c1-b c1-c c1-8o c1-8p c1-d c1-e c1-f c1-g">
                                       <div className="c1-1 c1-2 c1-4t c1-4j c1-8q c1-33 c1-4e c1-8r c1-8s c1-8t c1-8u c1-8v c1-8w c1-8x c1-8y c1-8z c1-90 c1-91 c1-92 c1-93 c1-94 c1-95 c1-96 c1-97 c1-98 c1-99 c1-9a c1-9b c1-9c c1-9d c1-9e c1-9f c1-9g c1-9h c1-9i c1-68 c1-b c1-9j c1-c c1-6x c1-d c1-e c1-f c1-g x-rt">
                                          <div style={{margin: '0'}}>
                                          <ul>
                                             <li>Victor de Melenne – Kalle som barn</li>
                                             <li>Philomène Grandin – Mira</li>
                                             <li>Anders Linder – Peo</li>
                                             <li>Jonas Kruse – Berra</li>
                                             <li>Tina Fallhagen – Kalles mamma</li>
                                             <li>Lasse Nohrstedt – Berättarröst</li>
                                          </ul>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="c1-1 c1-2 c1-7r c1-68 c1-80 c1-81 c1-4z c1-35 c1-82 c1-37 c1-83 c1-9w c1-6k c1-b c1-c c1-84 c1-85 c1-86 c1-87 c1-88 c1-89 c1-d c1-8a c1-8b c1-9x c1-9y c1-e c1-f c1-g">
                                    <div className="c1-1 c1-2 c1-6k c1-b c1-c c1-d c1-e c1-f c1-g"><span className="c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g">
                                       <img style={{objectFit: 'cover'}} src="assets/narlillakalleblevrymdhjalte/MiraochlillaKalleirymdskeppet.jpg" srcSet="assets/narlillakalleblevrymdhjalte/MiraochlillaKalleirymdskeppet.jpg 400w, 
                                               assets/narlillakalleblevrymdhjalte/MiraochlillaKalleirymdskeppet.jpg 800w" sizes="(max-width: 400px) 90vw, 
                                              (max-width: 800px) 80vw, 
                                              50vw" className="c1-1 c1-2 c1-4 c1-4z c1-5w c1-5x c1-33 c1-8c c1-8d c1-9z c1-3b c1-8f c1-b c1-c c1-a0 c1-d c1-6b c1-e c1-f c1-g"/>
                                    </span></div>
                                 </div>
                              </div>
                           </div>
               </section>

               {/* Produktion */}
               <section role="region" className="widget widget-content c1-1 c1-2 c1-9p c1-i c1-j c1-b c1-c c1-m c1-n c1-d c1-e c1-f c1-g">
                           <div className="c1-1 c1-2 c1-5w c1-5x c1-45 c1-46 c1-4z c1-b c1-c c1-6c c1-d c1-6d c1-e c1-6i c1-f c1-6j c1-g">
                              <h2 className="c1-1 c1-2 c1-4t c1-4j c1-7e c1-5w c1-4d c1-33 c1-7f c1-6k c1-4m c1-76 c1-7g c1-6x c1-77 c1-6q c1-6f c1-78 c1-79 c1-7a">
                                 <span className="c1-7h c1-7i c1-7j c1-7k c1-7l">Produktion</span>
                                 <div className="c1-4 c1-7m c1-4m c1-76 c1-77 c1-78 c1-79 c1-7a">
                                    <hr aria-hidden="true" role="separator" className="c1-9q c1-7o c1-3f c1-7p c1-4e c1-7q c1-3b c1-4m c1-76 c1-77 c1-78 c1-79 c1-7a"/>
                                 </div>
                              </h2>
                              <div className="c1-1 c1-2 c1-t c1-7r c1-7s c1-7t c1-33 c1-7u c1-4e c1-7v c1-4h c1-69 c1-b c1-c c1-7w c1-7x c1-7y c1-7z c1-d c1-e c1-f c1-g">
                                 <div className="c1-1 c1-2 c1-7r c1-68 c1-80 c1-81 c1-4z c1-35 c1-82 c1-37 c1-83 c1-8h c1-8i c1-b c1-c c1-84 c1-85 c1-86 c1-87 c1-88 c1-89 c1-d c1-8j c1-8k c1-e c1-f c1-g">
                                    <div className="c1-1 c1-2 c1-t c1-w c1-4 c1-8l c1-8m c1-4h c1-8n c1-8i c1-b c1-c c1-8o c1-8p c1-d c1-e c1-f c1-g">
                                       <div className="c1-1 c1-2 c1-4t c1-4j c1-8q c1-33 c1-4e c1-8r c1-8s c1-8t c1-8u c1-8v c1-8w c1-8x c1-8y c1-8z c1-90 c1-91 c1-92 c1-93 c1-94 c1-95 c1-96 c1-97 c1-98 c1-99 c1-9a c1-9b c1-9c c1-9d c1-9e c1-9f c1-9g c1-9h c1-9i c1-68 c1-b c1-9j c1-c c1-6x c1-d c1-e c1-f c1-g x-rt">
                                          <p style={{margin: '0'}}>Produktionen involverar ett dedikerat team med talangfulla medarbetare, inklusive Martin Fallhagen som manusförfattare och regissör, samt de professionella skådespelarna Anders Linder, Philoméne Grandin och Jonas Kruse. För första gången agerar inte Martin som skådespelare i sina egna filmer, utan har överlåtit huvudrollen till Victor de Melenne, en nioåring från Helsingborg som liksom Martin har Down syndrom.</p>
                                       </div>
                                    </div>
                                    <div className="c1-1 c1-2 c1-t c1-w c1-4 c1-8l c1-8m c1-4h c1-8n c1-8i c1-b c1-c c1-8o c1-8p c1-d c1-e c1-f c1-g">
                                       <div className="c1-1 c1-2 c1-4t c1-4j c1-8q c1-33 c1-4e c1-8r c1-8s c1-8t c1-8u c1-8v c1-8w c1-8x c1-8y c1-8z c1-90 c1-91 c1-92 c1-93 c1-94 c1-95 c1-96 c1-97 c1-98 c1-99 c1-9a c1-9b c1-9c c1-9d c1-9e c1-9f c1-9g c1-9h c1-9i c1-68 c1-b c1-9j c1-c c1-6x c1-d c1-e c1-f c1-g x-rt">
                                          <p style={{margin: '0'}}>Martins grannar i gruppboendet agerar som i hans tidigare filmer som skådespelare och statister. Andreas Norin, Pantheon Film &amp; Fotografi AB, återkommer i teamet som filmare och bildregissör.</p>
                                       </div>
                                    </div>
                                    <div className="c1-1 c1-2 c1-t c1-w c1-4 c1-8l c1-8m c1-4h c1-8n c1-8i c1-b c1-c c1-8o c1-8p c1-d c1-e c1-f c1-g">
                                       <div className="c1-1 c1-2 c1-4t c1-4j c1-8q c1-33 c1-4e c1-8r c1-8s c1-8t c1-8u c1-8v c1-8w c1-8x c1-8y c1-8z c1-90 c1-91 c1-92 c1-93 c1-94 c1-95 c1-96 c1-97 c1-98 c1-99 c1-9a c1-9b c1-9c c1-9d c1-9e c1-9f c1-9g c1-9h c1-9i c1-68 c1-b c1-9j c1-c c1-6x c1-d c1-e c1-f c1-g x-rt">
                                          <p style={{margin: '0'}}>&#8220;När lilla Kalle blev en rymdhjälte&#8221; är en dramatisk film om saknad, mod och att följa sina drömmar även om det handlar om rymdäventyr. Filmen inrymmer också en stor portion humor och dråpliga vändningar &#8212; inte minst när Anders Linders rollfigur Peo äntligen friges efter att varit instängd i ett utedass i tjugofem år!</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
               </section>

               {/* Bakgrund till filmen */}
               <section role="region" className="widget widget-content c1-1 c1-2 c1-3 c1-i c1-j c1-b c1-c c1-m c1-n c1-d c1-e c1-f c1-g">
                           <div className="c1-1 c1-2 c1-5w c1-5x c1-45 c1-46 c1-4z c1-b c1-c c1-6c c1-d c1-6d c1-e c1-6i c1-f c1-6j c1-g">
                              <h2 className="c1-1 c1-2 c1-4t c1-4j c1-7e c1-5w c1-4d c1-33 c1-7f c1-6k c1-4m c1-76 c1-7g c1-6x c1-77 c1-6q c1-6f c1-78 c1-79 c1-7a">
                                 <span className="c1-7h c1-7i c1-7j c1-7k c1-7l">Bakgrund till filmen</span>
                                 <div className="c1-4 c1-7m c1-4m c1-76 c1-77 c1-78 c1-79 c1-7a">
                                    <hr aria-hidden="true" role="separator" className="c1-7n c1-7o c1-3f c1-7p c1-4e c1-7q c1-3b c1-4m c1-76 c1-77 c1-78 c1-79 c1-7a"/>
                                 </div>
                              </h2>
                              <div className="c1-1 c1-2 c1-t c1-7r c1-7s c1-7t c1-33 c1-7u c1-4e c1-7v c1-4h c1-69 c1-b c1-c c1-7w c1-7x c1-7y c1-7z c1-d c1-e c1-f c1-g">
                                 <div className="c1-1 c1-2 c1-7r c1-68 c1-80 c1-81 c1-4z c1-35 c1-82 c1-37 c1-83 c1-8h c1-8i c1-b c1-c c1-84 c1-85 c1-86 c1-87 c1-88 c1-89 c1-d c1-8j c1-8k c1-e c1-f c1-g">
                                    <div className="c1-1 c1-2 c1-t c1-w c1-4 c1-8l c1-8m c1-4h c1-8n c1-8i c1-b c1-c c1-8o c1-8p c1-d c1-e c1-f c1-g">
                                       <div className="c1-1 c1-2 c1-4t c1-4j c1-8q c1-33 c1-4e c1-8r c1-8s c1-8t c1-8u c1-8v c1-8w c1-8x c1-8y c1-8z c1-90 c1-91 c1-92 c1-93 c1-94 c1-95 c1-96 c1-97 c1-98 c1-99 c1-9a c1-9b c1-9c c1-9d c1-9e c1-9f c1-9g c1-9h c1-9i c1-68 c1-b c1-9j c1-c c1-6x c1-d c1-e c1-f c1-g x-rt">
                                          <p style={{margin: '0'}}>&#8220;- Du ska veta att jag känt Kalle sedan han var barn&#8221;, säger Mira och spänner ögonen i Berra, personal på ett gruppboende. Scenen är hämtad ur Martin Fallhagens fjärde novellfilm Jorden Anropar, som kom 2024. Mira, spelas som vanligt av Philoméne Grandin, får filmpubliken att fråga sig hur Kalle och Mira kan känna varandra sedan tidigare &#8212; Mira som bott stora delar av sitt liv i Vintergatans galax och Martin som lever sina dagar i ett gruppboende för personer med intellektuella funktionsvariationer?</p>
                                       </div>
                                    </div>
                                    <div className="c1-1 c1-2 c1-t c1-w c1-4 c1-8l c1-8m c1-4h c1-8n c1-8i c1-b c1-c c1-8o c1-8p c1-d c1-e c1-f c1-g">
                                       <div className="c1-1 c1-2 c1-4t c1-4j c1-8q c1-33 c1-4e c1-8r c1-8s c1-8t c1-8u c1-8v c1-8w c1-8x c1-8y c1-8z c1-90 c1-91 c1-92 c1-93 c1-94 c1-95 c1-96 c1-97 c1-98 c1-99 c1-9a c1-9b c1-9c c1-9d c1-9e c1-9f c1-9g c1-9h c1-9i c1-68 c1-b c1-9j c1-c c1-6x c1-d c1-e c1-f c1-g x-rt">
                                          <p style={{margin: '0'}}>Publikens funderingar gav Martin Fallhagen inspiration att göra en kortfilm som avslöjar vänskapens ursprung mellan Kalle och Mira. Kortfilmen När lilla Kalle blev en rymdhjälte var född!</p>
                                       </div>
                                    </div>
                                    <div className="c1-1 c1-2 c1-t c1-w c1-4 c1-8l c1-8m c1-4h c1-8n c1-8i c1-b c1-c c1-8o c1-8p c1-d c1-e c1-f c1-g">
                                       <div className="c1-1 c1-2 c1-4t c1-4j c1-8q c1-33 c1-4e c1-8r c1-8s c1-8t c1-8u c1-8v c1-8w c1-8x c1-8y c1-8z c1-90 c1-91 c1-92 c1-93 c1-94 c1-95 c1-96 c1-97 c1-98 c1-99 c1-9a c1-9b c1-9c c1-9d c1-9e c1-9f c1-9g c1-9h c1-9i c1-68 c1-b c1-9j c1-c c1-6x c1-d c1-e c1-f c1-g x-rt">
                                          <p style={{margin: '0'}}>Delar av filmen spelades in i samma studio som &#8220;Vid Vintergatans Slut&#8221;, som var en mycket uppskattad sommarlovsserie från SVT under första halvan av 2000-talet. Martin Fallhagen har som första filmskapare fått tillstånd att producera film med sitt filmteam i rymdskeppet som finns i Ystad Studios.</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
               </section>

               {/* Fotogalleri */}
               <section role="region" className="widget widget-gallery c1-1 c1-2 c1-9p c1-i c1-j c1-b c1-c c1-m c1-n c1-d c1-e c1-f c1-g">
                           <div className="c1-1 c1-2 c1-5w c1-5x c1-45 c1-46 c1-4z c1-b c1-c c1-6c c1-d c1-6d c1-e c1-6i c1-f c1-6j c1-g">
                              <h2 className="c1-1 c1-2 c1-4t c1-4j c1-7e c1-5w c1-4d c1-33 c1-7f c1-6k c1-4m c1-76 c1-7g c1-6x c1-77 c1-6q c1-6f c1-78 c1-79 c1-7a">
                                 <span className="c1-7h c1-7i c1-7j c1-7k c1-7l">Fotogalleri</span>
                                 <div className="c1-4 c1-7m c1-4m c1-76 c1-77 c1-78 c1-79 c1-7a">
                                    <hr aria-hidden="true" role="separator" className="c1-9q c1-7o c1-3f c1-7p c1-4e c1-7q c1-3b c1-4m c1-76 c1-77 c1-78 c1-79 c1-7a"/>
                                 </div>
                              </h2>
                           </div>
                           <div className="c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g">
                              <div>
                                 <div className="c1-1 c1-2 c1-5w c1-5x c1-45 c1-46 c1-4z c1-b c1-c c1-6c c1-d c1-6d c1-e c1-6i c1-f c1-6j c1-g">
                                    <div className="c1-1 c1-2 c1-t c1-7r c1-7s c1-7t c1-33 c1-7u c1-a6 c1-7v c1-b c1-c c1-7w c1-7x c1-a7 c1-7z c1-d c1-e c1-f c1-g">
                                       <div className="c1-1 c1-2 c1-7r c1-68 c1-80 c1-81 c1-4z c1-35 c1-82 c1-44 c1-83 c1-b c1-c c1-86 c1-87 c1-a8 c1-89 c1-d c1-e c1-f c1-g">
                                          <div className="c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g">
                                               <div className="slideshow-container gallery">
                                                  <div className="mySlides fade">
                                                    <div className="numbertext">1 / 6</div>
                                                    <img src="assets/narlillakalleblevrymdhjalte/FilmaffischForslag2.jpg" alt="Filmaffisch"/>
                                                    <div className="text" style={{color: 'gray', padding: '10px'}}>Filmaffisch</div>
                                                  </div>
                                                  <div className="mySlides fade">
                                                    <div className="numbertext">2 / 6</div>
                                                    <img src="assets/narlillakalleblevrymdhjalte/Fjallnora2.jpeg" alt="Inspelning vid Fjällnora"/>
                                                    <div className="text" style={{color: 'gray', padding: '10px'}}>Inspelning vid Fjällnora</div>
                                                  </div>
                                                  <div className="mySlides fade">
                                                    <div className="numbertext">3 / 6</div>
                                                    <img src="assets/narlillakalleblevrymdhjalte/Fjallnora7.jpeg" alt="Fjällnora"/>
                                                    <div className="text" style={{color: 'gray', padding: '10px'}}>Fjällnora</div>
                                                  </div>
                                                  <div className="mySlides fade">
                                                    <div className="numbertext">4 / 6</div>
                                                    <img src="assets/narlillakalleblevrymdhjalte/Martinregisserar.jpg" alt="Martin regisserar"/>
                                                    <div className="text" style={{color: 'gray', padding: '10px'}}>Martin regisserar</div>
                                                  </div>
                                                  <div className="mySlides fade">
                                                    <div className="numbertext">5 / 6</div>
                                                    <img src="assets/narlillakalleblevrymdhjalte/MiraochlillaKalleirymdskeppet.jpg" alt="Mira och lilla Kalle i rymdskeppet"/>
                                                    <div className="text" style={{color: 'gray', padding: '10px'}}>Mira och lilla Kalle i rymdskeppet</div>
                                                  </div>
                                                  <div className="mySlides fade">
                                                    <div className="numbertext">6 / 6</div>
                                                    <img src="assets/narlillakalleblevrymdhjalte/AndersLinderochMartin.jpeg" alt="Anders Linder och Martin"/>
                                                    <div className="text" style={{color: 'gray', padding: '10px'}}>Anders Linder och Martin</div>
                                                  </div>
                                                  <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
                                                  <a className="next" onClick={() => plusSlides(1)}>❯</a>
                                               </div>
                                               <br/>
                                               <div style={{textAlign: 'center'}}>
                                                 <span className="dot" onClick={() => currentSlide(1)}></span>
                                                 <span className="dot" onClick={() => currentSlide(2)}></span>
                                                 <span className="dot" onClick={() => currentSlide(3)}></span>
                                                 <span className="dot" onClick={() => currentSlide(4)}></span>
                                                 <span className="dot" onClick={() => currentSlide(5)}></span>
                                                 <span className="dot" onClick={() => currentSlide(6)}></span>
                                               </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
               </section>

               {/* Footer */}
               <section role="contentinfo" className="widget widget-footer c1-1 c1-2 c1-b2 c1-i c1-j c1-b c1-c c1-m c1-n c1-d c1-e c1-f c1-g">
                           <div className="c1-1 c1-2 c1-5w c1-5x c1-45 c1-46 c1-4z c1-b c1-c c1-6c c1-d c1-6d c1-e c1-6i c1-f c1-6j c1-g">
                              <div className="c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g">
                                 <div className="c1-1 c1-2 c1-t c1-7r c1-7s c1-7t c1-33 c1-4d c1-4e c1-4f c1-u c1-6k c1-b c1-c c1-d c1-e c1-f c1-g">
                                    <div className="c1-1 c1-2 c1-7r c1-b3 c1-80 c1-81 c1-4z c1-35 c1-36 c1-37 c1-38 c1-b c1-c c1-d c1-b4 c1-b5 c1-e c1-f c1-g">
                                       <div className="c1-1 c1-2 c1-4t c1-4j c1-8q c1-33 c1-4e c1-b c1-b6 c1-al c1-6x c1-ar c1-9y c1-aw c1-ay c1-az x-rt">
                                          <p style={{margin: '0'}}>Copyright © 2024 Firma Lars Nohrstedt - Med ensamrätt.</p>
                                       </div>
                                    </div>
                                    <div className="c1-1 c1-2 c1-7r c1-68 c1-80 c1-81 c1-4z c1-35 c1-36 c1-37 c1-38 c1-69 c1-b c1-c c1-d c1-b4 c1-b5 c1-e c1-f c1-g">
                                       <div className="c1-1 c1-2 c1-t c1-69 c1-b7 c1-b8 c1-b9 c1-ba c1-7t c1-bb c1-bc c1-b c1-c c1-d c1-e c1-f c1-g">
                                          <a rel="noopener" role="link" aria-haspopup="true" target="_blank" aria-label="Social medielänk för Facebook" href="https://www.facebook.com/p/FallhagenFilm-100063805215260/" className="c1-4q c1-4r c1-4s c1-4t c1-4j c1-4u c1-3c c1-bd c1-b c1-be c1-c c1-51 c1-bf c1-bg c1-d c1-e c1-f c1-g">
                                             <svg viewBox="0 0 24 24" fill="currentColor" width="40px" height="40px" className="c1-1 c1-2 c1-bh c1-3b c1-8d c1-bi c1-bj c1-bk c1-bl c1-b c1-c c1-d c1-e c1-f c1-g">
                                                <path fillRule="evenodd" d="M22 12.061C22 6.505 17.523 2 12 2S2 6.505 2 12.061c0 5.022 3.657 9.184 8.438 9.939v-7.03h-2.54v-2.91h2.54V9.845c0-2.522 1.492-3.915 3.777-3.915 1.094 0 2.238.197 2.238.197v2.476h-1.26c-1.243 0-1.63.775-1.63 1.57v1.888h2.773l-.443 2.908h-2.33V22c4.78-.755 8.437-4.917 8.437-9.939z"></path>
                                             </svg>
                                          </a>
                                       </div>
                                    </div>
                                    <div className="c1-1 c1-2 c1-7r c1-b3 c1-80 c1-81 c1-4z c1-35 c1-36 c1-37 c1-38 c1-b c1-c c1-d c1-b4 c1-b5 c1-e c1-f c1-g">
                                       <p className="c1-1 c1-2 c1-4t c1-4j c1-8q c1-7p c1-4e c1-b c1-b6 c1-al c1-6x c1-ar c1-bm c1-6a c1-aw c1-ay c1-az">Powered by Kattbjörn</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
               </section>
            </div>
         </div>
      </div>
  );
}
