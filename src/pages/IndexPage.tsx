// @ts-nocheck
import { useState, useEffect, useRef } from 'react';

export default function IndexPage() {
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
<div id="layout-040-dcbec-136-f-4-b-20-b-24-f-b-1-dbfe-4-acc-5-f" className="layout layout-layout layout-layout-layout-13 locale-sv-SE lang-sv">
         <div id="page-163597" className="c1-1 c1-2 c1-3 c1-4 c1-5 c1-6 c1-7 c1-8 c1-9 c1-a c1-b c1-c c1-d c1-e c1-f c1-g">
            <div className="page-inner">
               <div id="71a5b96d-5d09-4403-9988-2116efa4263f" className="widget widget-header widget-header-header-9">
                  <div role="main" id="n-163598" className="c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g c1-1 c1-2 c1-h c1-b c1-c c1-d c1-e c1-f c1-g">
                     <div>
                        <div id="freemium-ad-163600"></div>
                        <section className="c1-1 c1-2 c1-h c1-i c1-j c1-k c1-l c1-b c1-c c1-m c1-n c1-d c1-e c1-f c1-g">
                           <div className="c1-1 c1-2 c1-o c1-b c1-c c1-d c1-e c1-f c1-g">
                              <div className="c1-1 c1-2 c1-o c1-p c1-q c1-b c1-c c1-d c1-r c1-e c1-f c1-g">
                                 <div id="bs-1" className="c1-1 c1-2 c1-s c1-b c1-c c1-d c1-e c1-f c1-g">
                                    <div className="c1-1 c1-2 c1-s c1-b c1-c c1-d c1-e c1-f c1-g">
                                       <div className="carousel loaded" style={{height: '100%', width: '100%'}}>
                                          <div className="carousel-container-inner" style={{height: '100%', width: '100%', marginBottom: '0'}}>
                                             <div className="carousel-viewport" style={{width: '100%', height: '100%'}}>
                                                <ul className="carousel-track" style={{height: '100%'}}>
                                                   <li style={{marginLeft: '0px', height: '100%', width: '100%', transition: 'opacity 1000ms ease-in-out', overflowY: 'hidden', minHeight: '100%', overflowX: 'hidden', minWidth: '100%'}} className="carousel-slide carousel-slide-selected carousel-slide-fade">
                                                      <div role="img" className="c1-1 c1-2 c1-t c1-u c1-v c1-w c1-x c1-y c1-s c1-z c1-10 c1-11 c1-12 c1-b c1-c c1-13 c1-14 c1-15 c1-16 c1-17 c1-18 c1-19 c1-1a c1-1b c1-1c c1-1d c1-1e c1-1f c1-1g c1-1h c1-1i c1-1j c1-1k c1-1l c1-1m c1-1n c1-d c1-1o c1-e c1-f c1-g"></div>
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
                                                            <div id="logo-container-163604" className="c1-1 c1-2 c1-3b c1-4 c1-o c1-b c1-c c1-d c1-e c1-f c1-g">
                                                               <h3 id="logo-text-163605" className="c1-54 c1-55 c1-4t c1-4j c1-56 c1-4f c1-4d c1-33 c1-4e c1-4z c1-3b c1-57 c1-3n c1-58 c1-59 c1-5a c1-5b c1-5c c1-5d">Fallhagen film</h3>
                                                               
                                                            </div>
                                                         </a>
                                                      </div>
                                                   </div>
                                                   <div className="c1-1 c1-2 c1-5u c1-36 c1-38 c1-t c1-5v c1-b c1-c c1-d c1-e c1-f c1-g"></div>
                                                </div>
                                                <div className="c1-1 c1-2 c1-5w c1-5x c1-45 c1-46 c1-4z c1-b c1-c c1-d c1-e c1-f c1-g">
                                                   <div id="navBarId-163607" className="c1-1 c1-2 c1-5g c1-4i c1-u c1-4c c1-35 c1-37 c1-b c1-c c1-d c1-5y c1-e c1-f c1-g">
                                                      <div className="c1-1 c1-2 c1-36 c1-t c1-u c1-4i c1-5z c1-60 c1-61 c1-b c1-c c1-d c1-e c1-f c1-g">
                                                         <div className="c1-3b c1-4m c1-4 c1-4h c1-c c1-62 c1-63 c1-64 c1-65 c1-d c1-e c1-f c1-g">
                                                            <a rel="" role="link" aria-haspopup="menu" title="Fallhagen film" href="/" className="c1-4q c1-4r c1-4s c1-4t c1-4j c1-4u c1-3c c1-4v c1-4w c1-4x c1-4y c1-4z c1-4 c1-b c1-50 c1-c c1-51 c1-52 c1-53 c1-d c1-e c1-f c1-g">
                                                               <div id="logo-container-163609" className="c1-1 c1-2 c1-3b c1-4 c1-o c1-b c1-c c1-d c1-e c1-f c1-g">
                                                                  <h3 id="logo-text-163610" className="c1-54 c1-55 c1-4t c1-4j c1-56 c1-4f c1-4d c1-33 c1-4e c1-4z c1-3b c1-57 c1-3n c1-58 c1-59 c1-5a c1-5b c1-5c c1-5d">Fallhagen film</h3>
                                                                  
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
                                                <div id="tagline-container-163611" className="c1-1 c1-2 c1-4t c1-4j c1-2x c1-o c1-4z c1-5i c1-56 c1-b c1-c c1-d c1-e c1-f c1-g">
                                                   <h1 id="dynamic-tagline-163612" className="c1-1 c1-2 c1-4t c1-4j c1-56 c1-4f c1-4d c1-33 c1-4e c1-6u c1-6v c1-4z c1-3b c1-4m c1-6w c1-6x c1-6y c1-6z c1-70 c1-71 c1-72 c1-73 c1-74 c1-75">JORDEN ANROPAR</h1>
                                                   
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="c1-1 c1-2 c1-4 c1-68 c1-t c1-u c1-w c1-69 c1-33 c1-4e c1-b c1-c c1-d c1-6a c1-6b c1-4g c1-e c1-f c1-g">
                                       <div className="c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g"></div>
                                       <div className="c1-1 c1-2 c1-4f c1-4d c1-45 c1-46 c1-4z c1-t c1-3z c1-b c1-c c1-6c c1-d c1-6d c1-6e c1-6f c1-6g c1-6h c1-e c1-6i c1-f c1-6j c1-g">
                                          <div className="c1-1 c1-2 c1-o c1-33 c1-4e c1-43 c1-44 c1-4 c1-t c1-69 c1-w c1-6k c1-b c1-c c1-d c1-6l c1-6m c1-6n c1-6o c1-6p c1-6q c1-6r c1-6s c1-e c1-f c1-g">
                                             <div className="c1-1 c1-2 c1-6t c1-b c1-c c1-d c1-e c1-f c1-g">
                                                <div id="tagline-container-163613" className="c1-1 c1-2 c1-4t c1-4j c1-2x c1-o c1-4z c1-5i c1-56 c1-b c1-c c1-d c1-e c1-f c1-g">
                                                   <h1 id="dynamic-tagline-163614" className="c1-1 c1-2 c1-4t c1-4j c1-56 c1-4f c1-4d c1-33 c1-4e c1-6u c1-6v c1-4z c1-3b c1-4m c1-6w c1-6x c1-6y c1-6z c1-70 c1-71 c1-72 c1-73 c1-74 c1-75">JORDEN ANROPAR</h1>
                                                   
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
               </section>
               <section id="efe70d4d-3ec5-49e5-81b6-1d03d41b298d" role="region" className="widget widget-content c1-1 c1-2 c1-3 c1-i c1-j c1-b c1-c c1-m c1-n c1-d c1-e c1-f c1-g">
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
                                      <img src="assets/jordenanropar/Filmaffischen.jpeg" srcSet="assets/jordenanropar/Filmaffischen.jpeg 1x, assets/jordenanropar/Filmaffischen.jpeg 2x, assets/jordenanropar/Filmaffischen.jpeg 3x" className="c1-1 c1-2 c1-4 c1-4z c1-5w c1-5x c1-33 c1-8c c1-8d c1-8e c1-3b c1-8f c1-b c1-c c1-8g c1-d c1-6b c1-e c1-f c1-g"/>
                                    </span></div>
                                 </div>
                                 <div className="c1-1 c1-2 c1-7r c1-68 c1-80 c1-81 c1-4z c1-35 c1-82 c1-37 c1-83 c1-8h c1-8i c1-b c1-c c1-84 c1-85 c1-86 c1-87 c1-88 c1-89 c1-d c1-8j c1-8k c1-e c1-f c1-g">
                                    <div id="5fb00c11-5929-4f0a-8695-428dca83fdf5" className="c1-1 c1-2 c1-t c1-w c1-4 c1-8l c1-8m c1-4h c1-8n c1-8i c1-b c1-c c1-8o c1-8p c1-d c1-e c1-f c1-g">
                                       <div className="c1-1 c1-2 c1-4t c1-4j c1-8q c1-33 c1-4e c1-8r c1-8s c1-8t c1-8u c1-8v c1-8w c1-8x c1-8y c1-8z c1-90 c1-91 c1-92 c1-93 c1-94 c1-95 c1-96 c1-97 c1-98 c1-99 c1-9a c1-9b c1-9c c1-9d c1-9e c1-9f c1-9g c1-9h c1-9i c1-68 c1-b c1-9j c1-c c1-6x c1-d c1-e c1-f c1-g x-rt">
                                          <p style={{margin: '0'}}>Rymdhjälten Mira får ett rop på hjälp av sin vän Femman, som bor i ett gruppboende på Skogsplaneten, 550 miljoner kilometer från Jorden. Men Mira är trött på att vara ensam i rymden och behöver sin vän Kalle för att klara den långa resan. Kalle, som alltid drömt om att bli rymdpilot, brottas dock med sin dåliga självkänsla.</p>
                                       </div>
                                    </div>
                                    <div id="4ab6124b-0604-4cc9-a47b-86fe2346ec66" className="c1-1 c1-2 c1-t c1-w c1-4 c1-8l c1-8m c1-4h c1-8n c1-8i c1-b c1-c c1-8o c1-8p c1-d c1-e c1-f c1-g">
                                       <div className="c1-1 c1-2 c1-4t c1-4j c1-8q c1-33 c1-4e c1-8r c1-8s c1-8t c1-8u c1-8v c1-8w c1-8x c1-8y c1-8z c1-90 c1-91 c1-92 c1-93 c1-94 c1-95 c1-96 c1-97 c1-98 c1-99 c1-9a c1-9b c1-9c c1-9d c1-9e c1-9f c1-9g c1-9h c1-9i c1-68 c1-b c1-9j c1-c c1-6x c1-d c1-e c1-f c1-g x-rt">
                                          <p style={{margin: '0'}}>Kommer Kalle och hans vänner att följa med Mira på äventyr bland stjärnorna eller stanna kvar på sin Greklandssemester och dricka starköl på den lokala tavernan Peos pub? ”Jorden Anropar” är regissören och manusförfattaren Martin Fallhagens fjärde kortfilm, skriven tillsammans med Tomas Norström. Det blev den sista filmen som Tomas arbetade med innan sin bortgång 2021.</p>
                                       </div>
                                    </div>
                                    <div id="068d6353-d65b-4760-985d-b2acca673db0" className="c1-1 c1-2 c1-t c1-w c1-4 c1-8l c1-8m c1-4h c1-8n c1-8i c1-b c1-c c1-8o c1-8p c1-d c1-e c1-f c1-g">
                                       <div className="c1-1 c1-2 c1-4t c1-4j c1-8q c1-33 c1-4e c1-8r c1-8s c1-8t c1-8u c1-8v c1-8w c1-8x c1-8y c1-8z c1-90 c1-91 c1-92 c1-93 c1-94 c1-95 c1-96 c1-97 c1-98 c1-99 c1-9a c1-9b c1-9c c1-9d c1-9e c1-9f c1-9g c1-9h c1-9i c1-68 c1-b c1-9j c1-c c1-6x c1-d c1-e c1-f c1-g x-rt">
                                          <p style={{margin: '0'}}>Martin Fallhagen, som har Down syndrom, har med sitt unika perspektiv gjort sig till en erkänd filmskapare då han lyfter och belyser de utmaningar som han och hans grannar upplever till vardags i gruppboendet. ”Jorden Anropar” är en stjärnspäckad äventyrs-scifi på 35 minuter, fylld med mycket hjärta och rymmer både skratt och allvar. Det är en film som inspirerar till att hitta tron på sig själv och att en stöttande omgivning kan bidra till detta. Några av filmens karaktärer känner vi igen från SVT:s ”Tillbaka till Vintergatan”.</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
               </section>
               <section id="95c27c17-0202-41a5-92dd-17d599cd0eee" role="region" className="widget widget-html c1-1 c1-2 c1-9p c1-i c1-j c1-b c1-c c1-m c1-n c1-d c1-e c1-f c1-g">
                           <div className="c1-1 c1-2 c1-5w c1-5x c1-45 c1-46 c1-4z c1-b c1-c c1-6c c1-d c1-6d c1-e c1-6i c1-f c1-6j c1-g">
                              <h2 className="c1-1 c1-2 c1-4t c1-4j c1-7e c1-5w c1-4d c1-33 c1-7f c1-6k c1-4m c1-76 c1-7g c1-6x c1-77 c1-6q c1-6f c1-78 c1-79 c1-7a">
                                 <span className="c1-7h c1-7i c1-7j c1-7k c1-7l">Köp filmen</span>
                                 <div className="c1-4 c1-7m c1-4m c1-76 c1-77 c1-78 c1-79 c1-7a">
                                    <hr aria-hidden="true" role="separator" className="c1-9q c1-7o c1-3f c1-7p c1-4e c1-7q c1-3b c1-4m c1-76 c1-77 c1-78 c1-79 c1-7a"/>
                                 </div>
                              </h2>
                              <div className="c1-1 c1-2 c1-t c1-7r c1-7s c1-7t c1-33 c1-7u c1-4e c1-7v c1-b c1-c c1-7w c1-7x c1-7y c1-7z c1-d c1-e c1-f c1-g">
                                 <div className="c1-1 c1-2 c1-7r c1-68 c1-80 c1-9r c1-4z c1-35 c1-82 c1-37 c1-83 c1-b c1-c c1-86 c1-87 c1-88 c1-89 c1-d c1-9s c1-9t c1-e c1-f c1-g">
                                    <div id="bs-2" className="c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g">
                                       <div id="068d6353-d65b-4760-985d-b2acca673db0" className="c1-1 c1-2 c1-t c1-w c1-4 c1-8l c1-8m c1-4h c1-8n c1-8i c1-b c1-c c1-8o c1-8p c1-d c1-e c1-f c1-g">
                                          <div style={{margin: '0 auto'}} className="c1-1 c1-2 c1-4t c1-4j c1-8q c1-33 c1-4e c1-8r c1-8s c1-8t c1-8u c1-8v c1-8w c1-8x c1-8y c1-8z c1-90 c1-91 c1-92 c1-93 c1-94 c1-95 c1-96 c1-97 c1-98 c1-99 c1-9a c1-9b c1-9c c1-9d c1-9e c1-9f c1-9g c1-9h c1-9i c1-68 c1-b c1-9j c1-c c1-6x c1-d c1-e c1-f c1-g x-rt">
                                             <p style={{margin: '10px'}}>Jorden Anropar går att köpa som DVD eller som digital kopia via länk.</p>
                                          </div>
                                       </div>
                                       <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                                          <div style={{margin: '10px'}}>

                                          <stripe-buy-button buy-button-id="buy_btn_1PLLNK097byvW02hkGaAi9a4" publishable-key="pk_live_51PIr4z097byvW02hYvwoLRi6TNC9wwMX4pdUJGCoy9oGQmaV21raZZgVl0W74AbDpq5buNjwOXH99MORJTVXHKik000gqR2l3P">
                                          </stripe-buy-button>
                                       </div>
                                       <div style={{margin: '10px'}}>

                                          <stripe-buy-button buy-button-id="buy_btn_1PLLI0097byvW02h5oGX9BSR" publishable-key="pk_live_51PIr4z097byvW02hYvwoLRi6TNC9wwMX4pdUJGCoy9oGQmaV21raZZgVl0W74AbDpq5buNjwOXH99MORJTVXHKik000gqR2l3P">
                                          </stripe-buy-button>
                                       </div>
                                          </div>
                                          <div id="068d6353-d65b-4760-985d-b2acca673db0" className="c1-1 c1-2 c1-t c1-w c1-4 c1-8l c1-8m c1-4h c1-8n c1-8i c1-b c1-c c1-8o c1-8p c1-d c1-e c1-f c1-g">
                                             <div style={{margin: '0 auto'}} className="c1-1 c1-2 c1-4t c1-4j c1-8q c1-33 c1-4e c1-8r c1-8s c1-8t c1-8u c1-8v c1-8w c1-8x c1-8y c1-8z c1-90 c1-91 c1-92 c1-93 c1-94 c1-95 c1-96 c1-97 c1-98 c1-99 c1-9a c1-9b c1-9c c1-9d c1-9e c1-9f c1-9g c1-9h c1-9i c1-68 c1-b c1-9j c1-c c1-6x c1-d c1-e c1-f c1-g x-rt">
                                                <p style={{margin: '10px'}}><span>Om du redan har köpt filmen, kan du titta på den eller ladda hem den <a href="stream">här</a> (kräver lösenord).</span></p>
                                             </div>
                                          </div>
                                    </div>
                              </div>
                           </div>
                        </div></section>
                     </div>
                  </div>
               </div>
               <section id="92fc7aa9-a15d-4c54-b00d-cf5f2f706e44" role="region" className="widget widget-content c1-1 c1-2 c1-3 c1-i c1-j c1-b c1-c c1-m c1-n c1-d c1-e c1-f c1-g">
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
                                             <li>Philomène Grandin – Mira</li>
                                             <li>Anders Linder – Peo</li>
                                             <li>Martin Fallhagen – Kalle</li>
                                             <li>Viktor de Melenne– Kalle som barn</li>
                                             <li>Jonas Kruse – Berra</li>
                                             <li>Terese Jansson – Sara</li>
                                             <li>Björn Pallin – Jonas</li>
                                             <li>Kristoffer Morath – Jerry</li>
                                             <li>Kristoffer Öhlund - Fyllebjörnen</li>
                                             <li>Andreas Wik Holmström - Gubben i bajamajan</li>
                                             <li>Jonas Sykfont - Femman (röst)</li>
                                             <li>Lasse Nohrstedt - Berättarröst</li>
                                          </ul>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="c1-1 c1-2 c1-7r c1-68 c1-80 c1-81 c1-4z c1-35 c1-82 c1-37 c1-83 c1-9w c1-6k c1-b c1-c c1-84 c1-85 c1-86 c1-87 c1-88 c1-89 c1-d c1-8a c1-8b c1-9x c1-9y c1-e c1-f c1-g">
                                    <div className="c1-1 c1-2 c1-6k c1-b c1-c c1-d c1-e c1-f c1-g"><span className="c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g">
                                       <img style={{objectFit: 'cover'}} src="assets/jordenanropar/Fin-bild-i-rymdskeppet.jpg" srcSet="assets/jordenanropar/Fin-bild-i-rymdskeppet.jpg 400w, 
                                               assets/jordenanropar/Fin-bild-i-rymdskeppet.jpg 800w, 
                                               assets/jordenanropar/Fin-bild-i-rymdskeppet.jpg 1200w" sizes="(max-width: 400px) 90vw, 
                                              (max-width: 800px) 80vw, 
                                              (max-width: 1200px) 60vw, 
                                              50vw" className="c1-1 c1-2 c1-4 c1-4z c1-5w c1-5x c1-33 c1-8c c1-8d c1-9z c1-3b c1-8f c1-b c1-c c1-a0 c1-d c1-6b c1-e c1-f c1-g"/>

                                    </span></div>
                                 </div>
                              </div>
                           </div>
               </section>
               <section id="13b80a2d-e9ef-4d7a-a9c2-2c6a5e1a15a7" role="region" className="widget widget-content c1-1 c1-2 c1-9p c1-i c1-j c1-b c1-c c1-m c1-n c1-d c1-e c1-f c1-g">
                           <div className="c1-1 c1-2 c1-5w c1-5x c1-45 c1-46 c1-4z c1-b c1-c c1-6c c1-d c1-6d c1-e c1-6i c1-f c1-6j c1-g">
                              <h2 className="c1-1 c1-2 c1-4t c1-4j c1-7e c1-5w c1-4d c1-33 c1-7f c1-6k c1-4m c1-76 c1-7g c1-6x c1-77 c1-6q c1-6f c1-78 c1-79 c1-7a">
                                 <span className="c1-7h c1-7i c1-7j c1-7k c1-7l">Produktion</span>
                                 <div className="c1-4 c1-7m c1-4m c1-76 c1-77 c1-78 c1-79 c1-7a">
                                    <hr aria-hidden="true" role="separator" className="c1-9q c1-7o c1-3f c1-7p c1-4e c1-7q c1-3b c1-4m c1-76 c1-77 c1-78 c1-79 c1-7a"/>
                                 </div>
                              </h2>
                              <h4 className="c1-6k c1-4m  c1-7g c1-6x c1-6q c1-6f">
                                 <span className="c1-7i c1-7j c1-7k c1-7l">WIZWORKS STUDIOS & TEATER AROS</span>
                              </h4>
                              <div className="c1-1 c1-2 c1-t c1-7r c1-7s c1-7t c1-33 c1-7u c1-4e c1-7v c1-4h c1-69 c1-b c1-c c1-7w c1-7x c1-7y c1-7z c1-d c1-e c1-f c1-g">
                                 <div className="c1-1 c1-2 c1-7r c1-68 c1-80 c1-81 c1-4z c1-35 c1-82 c1-37 c1-83 c1-9u c1-b c1-c c1-84 c1-85 c1-86 c1-87 c1-88 c1-89 c1-d c1-8j c1-8k c1-9v c1-e c1-f c1-g">
                                    <div className="c1-1 c1-2 c1-t c1-w c1-4 c1-8l c1-8m c1-4h c1-8n c1-8i c1-b c1-c c1-8o c1-8p c1-d c1-e c1-f c1-g">
                                       <div className="c1-1 c1-2 c1-4t c1-4j c1-8q c1-33 c1-4e c1-8r c1-8s c1-8t c1-8u c1-8v c1-8w c1-8x c1-8y c1-8z c1-90 c1-91 c1-92 c1-93 c1-94 c1-95 c1-96 c1-97 c1-98 c1-99 c1-9a c1-9b c1-9c c1-9d c1-9e c1-9f c1-9g c1-9h c1-9i c1-68 c1-b c1-a1 c1-c c1-6x c1-d c1-e c1-f c1-g x-rt">
                                          <div style={{margin: '0'}}>
                                          <ul>
                                             <li>Martin Fallhagen – manus</li>
                                             <li>Tomas Norström – manusassistent</li>
                                             <li>Martin Fallhagen – regi</li>
                                             <li>Philoméne Grandin - regiassistent</li>
                                             <li>Anna Sandin – inspelningsledare och dramapedagog</li>
                                             <li>Lasse Nohrstedt – exekutiv producent</li>
                                             <li>Johan Bodin – foto</li>
                                             <li>Simon Hjortek - foto</li>
                                             <li>Louise Norström – ljudtekniker</li>
                                             <li>Johan Engelbrekt – ljudtekniker</li>
                                             <li>Simon Hjortek - ljudtekniker</li>
                                             <li>Svante Lodén – musik</li>
                                             <li>Decca – Fly me to the moon</li>
                                          </ul>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="c1-1 c1-2 c1-7r c1-68 c1-80 c1-81 c1-4z c1-35 c1-82 c1-37 c1-83 c1-9w c1-6k c1-b c1-c c1-84 c1-85 c1-86 c1-87 c1-88 c1-89 c1-d c1-8a c1-8b c1-9x c1-9y c1-e c1-f c1-g">
                                    <div className="c1-1 c1-2 c1-6k c1-b c1-c c1-d c1-e c1-f c1-g"><span className="c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g">
                                      <img src="assets/jordenanropar/Anna-och-Martin-regisserar2.jpg" srcSet="assets/jordenanropar/Anna-och-Martin-regisserar2.jpg 451w, assets/jordenanropar/Anna-och-Martin-regisserar2.jpg 768w, assets/jordenanropar/Anna-och-Martin-regisserar2.jpg 1024w, assets/jordenanropar/Anna-och-Martin-regisserar2.jpg 1280w, assets/jordenanropar/Anna-och-Martin-regisserar2.jpg 1536w" sizes="(min-width: 451px) and (max-width: 767px) 767px, (min-width: 768px) and (max-width: 1023px) 1023px, (min-width: 1024px) and (max-width: 1279px) 1279px, (min-width: 1280px) and (max-width: 1535px) 1535px, (min-width: 1536px) 1536px" className="c1-1 c1-2 c1-4 c1-4z c1-5w c1-5x c1-33 c1-8c c1-8d c1-a2 c1-3b c1-8f c1-b c1-c c1-a3 c1-d c1-6b c1-e c1-f c1-g"/>
                                    </span></div>
                                 </div>
                              </div>
                           </div>
               </section>
               <section id="28f56be8-ee17-4ad1-8e4b-3e57a3759d6e" role="region" className="widget widget-content c1-1 c1-2 c1-3 c1-i c1-j c1-b c1-c c1-m c1-n c1-d c1-e c1-f c1-g">
                           <div className="c1-1 c1-2 c1-5w c1-5x c1-45 c1-46 c1-4z c1-b c1-c c1-6c c1-d c1-6d c1-e c1-6i c1-f c1-6j c1-g">
                              <h2 className="c1-1 c1-2 c1-4t c1-4j c1-7e c1-5w c1-4d c1-33 c1-7f c1-6k c1-4m c1-76 c1-7g c1-6x c1-77 c1-6q c1-6f c1-78 c1-79 c1-7a">
                                 <span className="c1-7h c1-7i c1-7j c1-7k c1-7l">Bakgrund till filmen</span>
                                 <div className="c1-4 c1-7m c1-4m c1-76 c1-77 c1-78 c1-79 c1-7a">
                                    <hr aria-hidden="true" role="separator" className="c1-7n c1-7o c1-3f c1-7p c1-4e c1-7q c1-3b c1-4m c1-76 c1-77 c1-78 c1-79 c1-7a"/>
                                 </div>
                              </h2>
                              <div className="c1-1 c1-2 c1-t c1-7r c1-7s c1-7t c1-33 c1-7u c1-4e c1-7v c1-4h c1-69 c1-b c1-c c1-7w c1-7x c1-7y c1-7z c1-d c1-e c1-f c1-g">
                                 <div className="c1-1 c1-2 c1-7r c1-68 c1-80 c1-81 c1-4z c1-35 c1-82 c1-37 c1-83 c1-b c1-c c1-84 c1-85 c1-86 c1-87 c1-88 c1-89 c1-d c1-8a c1-8b c1-e c1-f c1-g">
                                    <div className="c1-1 c1-2 c1-6k c1-b c1-c c1-d c1-e c1-f c1-g"><span className="c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g">
                                      <img src="assets/jordenanropar/Johan-Philomene-Lasse-och-Martin-pa-stranden.jpeg" srcSet="assets/jordenanropar/Johan-Philomene-Lasse-och-Martin-pa-stranden.jpeg 451w, 
                                              assets/jordenanropar/Johan-Philomene-Lasse-och-Martin-pa-stranden.jpeg 768w, 
                                              assets/jordenanropar/Johan-Philomene-Lasse-och-Martin-pa-stranden.jpeg 1024w, 
                                              assets/jordenanropar/Johan-Philomene-Lasse-och-Martin-pa-stranden.jpeg 1280w, 
                                              assets/jordenanropar/Johan-Philomene-Lasse-och-Martin-pa-stranden.jpeg 1536w" sizes="(min-width: 451px) and (max-width: 767px) 767px, 
                                             (min-width: 768px) and (max-width: 1023px) 1023px, 
                                             (min-width: 1024px) and (max-width: 1279px) 1279px, 
                                             (min-width: 1280px) and (max-width: 1535px) 1535px, 
                                             (min-width: 1536px) 1536px" className="c1-1 c1-2 c1-4 c1-4z c1-5w c1-5x c1-33 c1-8c c1-8d c1-a4 c1-3b c1-8f c1-b c1-c c1-a5 c1-d c1-6b c1-e c1-f c1-g"/>
                                  
                                    </span></div>
                                 </div>
                                 <div className="c1-1 c1-2 c1-7r c1-68 c1-80 c1-81 c1-4z c1-35 c1-82 c1-37 c1-83 c1-8h c1-8i c1-b c1-c c1-84 c1-85 c1-86 c1-87 c1-88 c1-89 c1-d c1-8j c1-8k c1-e c1-f c1-g">
                                    <div id="5fb00c11-5929-4f0a-8695-428dca83fdf5" className="c1-1 c1-2 c1-t c1-w c1-4 c1-8l c1-8m c1-4h c1-8n c1-8i c1-b c1-c c1-8o c1-8p c1-d c1-e c1-f c1-g">
                                       <div className="c1-1 c1-2 c1-4t c1-4j c1-8q c1-33 c1-4e c1-8r c1-8s c1-8t c1-8u c1-8v c1-8w c1-8x c1-8y c1-8z c1-90 c1-91 c1-92 c1-93 c1-94 c1-95 c1-96 c1-97 c1-98 c1-99 c1-9a c1-9b c1-9c c1-9d c1-9e c1-9f c1-9g c1-9h c1-9i c1-68 c1-b c1-9j c1-c c1-6x c1-d c1-e c1-f c1-g x-rt">
                                          <p style={{margin: '0'}}>Redan 2019 presenterade Martin Fallhagen sitt filmmanus till novellfilmen ”Jorden Anropar” för sin vän och filmkollega Tomas Norström. Tillsammans med då projektanställde producenten Casper Andreas bearbetade de manuset. Ambitionen var att filma under sommaren 2020. Men då var Coronapandemin redan här och inspelningarna fick skjutas på framtiden.</p>
                                       </div>
                                    </div>
                                    <div id="4536a171-4387-4ea7-9465-56d04e416e2b" className="c1-1 c1-2 c1-t c1-w c1-4 c1-8l c1-8m c1-4h c1-8n c1-8i c1-b c1-c c1-8o c1-8p c1-d c1-e c1-f c1-g">
                                       <div className="c1-1 c1-2 c1-4t c1-4j c1-8q c1-33 c1-4e c1-8r c1-8s c1-8t c1-8u c1-8v c1-8w c1-8x c1-8y c1-8z c1-90 c1-91 c1-92 c1-93 c1-94 c1-95 c1-96 c1-97 c1-98 c1-99 c1-9a c1-9b c1-9c c1-9d c1-9e c1-9f c1-9g c1-9h c1-9i c1-68 c1-b c1-9j c1-c c1-6x c1-d c1-e c1-f c1-g x-rt">
                                          <p style={{margin: '0'}}>Våren 2021 drabbades Tomas Norström av en obotlig cancer och i oktober samma år gick han bort i sviterna av sin cancer. Sorgen och saknaden efter honom var stor och det skulle dröja ända fram till julen 2022 innan Martin Fallhagen orkade väcka filmplanerna på nytt. Men då hade huvudfinansiärerna försvunnit och den största delen av filmprojektet fick finansieras genom egna sparpengar och privata banklån. Men filmen skulle färdigställas och såväl Film i Dalarna som Film i Uppland stöttade projektet tillsammans med några privata vård- och skolbolag.</p>
                                       </div>
                                    </div>
                                    <div id="c4d3b8c6-a95c-4277-8b38-888d8b865c7d" className="c1-1 c1-2 c1-t c1-w c1-4 c1-8l c1-8m c1-4h c1-8n c1-8i c1-b c1-c c1-8o c1-8p c1-d c1-e c1-f c1-g">
                                       <div className="c1-1 c1-2 c1-4t c1-4j c1-8q c1-33 c1-4e c1-8r c1-8s c1-8t c1-8u c1-8v c1-8w c1-8x c1-8y c1-8z c1-90 c1-91 c1-92 c1-93 c1-94 c1-95 c1-96 c1-97 c1-98 c1-99 c1-9a c1-9b c1-9c c1-9d c1-9e c1-9f c1-9g c1-9h c1-9i c1-68 c1-b c1-9j c1-c c1-6x c1-d c1-e c1-f c1-g x-rt">
                                          <p style={{margin: '0'}}>Inspelningen av"Jorden Anropar" påbörjades i början av augusti 2023 i Ystad. Delar av novellfilmen spelades in i samma studio som"Vid Vintergatans Slut". Martin Fallhagen har som första filmskapare fått tillstånd att producera film med sitt filmteam i rymdskeppet som finns i Ystad Studios.</p>
                                       </div>
                                    </div>
                                    <div id="cffd9235-73c5-4607-8350-1ccb4f05be54" className="c1-1 c1-2 c1-t c1-w c1-4 c1-8l c1-8m c1-4h c1-8n c1-8i c1-b c1-c c1-8o c1-8p c1-d c1-e c1-f c1-g">
                                       <div className="c1-1 c1-2 c1-4t c1-4j c1-8q c1-33 c1-4e c1-8r c1-8s c1-8t c1-8u c1-8v c1-8w c1-8x c1-8y c1-8z c1-90 c1-91 c1-92 c1-93 c1-94 c1-95 c1-96 c1-97 c1-98 c1-99 c1-9a c1-9b c1-9c c1-9d c1-9e c1-9f c1-9g c1-9h c1-9i c1-68 c1-b c1-9j c1-c c1-6x c1-d c1-e c1-f c1-g x-rt">
                                          <p style={{margin: '0'}}>Produktionen involverade ett dedikerat team med talangfulla medarbetare, inklusive Martin Fallhagen som manusförfattare och regissör, samt Johan Bodin som filmare och bildregissör. Under produktionens gång genomfördes location scoutning i Ystad, Uppsala, Stockholm och Dalarna för att hitta lämpliga platser för inspelningen. Inspelningsarbetet var fördelat över flera veckor och inkluderade även inspelningar i Uppsala, Ludvika och Stockholm.</p>
                                       </div>
                                    </div>
                                    <div id="4ab6124b-0604-4cc9-a47b-86fe2346ec66" className="c1-1 c1-2 c1-t c1-w c1-4 c1-8l c1-8m c1-4h c1-8n c1-8i c1-b c1-c c1-8o c1-8p c1-d c1-e c1-f c1-g">
                                       <div className="c1-1 c1-2 c1-4t c1-4j c1-8q c1-33 c1-4e c1-8r c1-8s c1-8t c1-8u c1-8v c1-8w c1-8x c1-8y c1-8z c1-90 c1-91 c1-92 c1-93 c1-94 c1-95 c1-96 c1-97 c1-98 c1-99 c1-9a c1-9b c1-9c c1-9d c1-9e c1-9f c1-9g c1-9h c1-9i c1-68 c1-b c1-9j c1-c c1-6x c1-d c1-e c1-f c1-g x-rt">
                                          <p style={{margin: '0'}}>"Jorden Anropar" är en gripande film om vänskap, mod och att följa sina drömmar och den utforskar teman som tillhörighet och längtan efter äventyr. Med en imponerande ensemble av skådespelare och en fängslande berättelse tar filmen oss med på en oförglömlig resa genom rymden och mänskliga känslor. Filmen tillägnas vännen och skådespelaren Tomas Norström.</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
               </section>
               <div id="13b80a2d-e9ef-4d7a-a9c2-2c6a5e1a15a7" className="widget widget-content widget-content-content-6">
                  <div role="region" id="13b80a2d-e9ef-4d7a-a9c2-2c6a5e1a15a7" className="c1-1 c1-2 c1-9p c1-b c1-c c1-d c1-e c1-f c1-g">
                     <div>
                        <section className="c1-1 c1-2 c1-9p c1-i c1-j c1-b c1-c c1-m c1-n c1-d c1-e c1-f c1-g" style={{backgroundColor: 'rgb(227, 235, 247)'}}>
                           <div className="c1-1 c1-2 c1-5w c1-5x c1-45 c1-46 c1-4z c1-b c1-c c1-6c c1-d c1-6d c1-e c1-6i c1-f c1-6j c1-g">
                              <h2 className="c1-1 c1-2 c1-4t c1-4j c1-7e c1-5w c1-4d c1-33 c1-7f c1-6k c1-4m c1-76 c1-7g c1-6x c1-77 c1-6q c1-6f c1-78 c1-79 c1-7a">
                                 <span className="c1-7h c1-7i c1-7j c1-7k c1-7l">Följ oss</span>
                                 <div className="c1-4 c1-7m c1-4m c1-76 c1-77 c1-78 c1-79 c1-7a">
                                    <hr aria-hidden="true" role="separator" className="c1-7n c1-7o c1-3f c1-7p c1-4e c1-7q c1-3b c1-4m c1-76 c1-77 c1-78 c1-79 c1-7a"/>
                                 </div>
                              </h2>
                              <div className="c1-1 c1-2 c1-t c1-7r c1-7s c1-7t c1-33 c1-7u c1-4e c1-7v c1-4h c1-69 c1-b c1-c c1-7w c1-7x c1-7y c1-7z c1-d c1-e c1-f c1-g">
                                 <div className="c1-1 c1-2 c1-7r c1-68 c1-80 c1-81 c1-4z c1-35 c1-82 c1-37 c1-83 c1-8h c1-8i c1-b c1-c c1-84 c1-85 c1-86 c1-87 c1-88 c1-89 c1-d c1-8j c1-8k c1-e c1-f c1-g">
                                    <div id="068d6353-d65b-4760-985d-b2acca673db0" className="c1-1 c1-2 c1-t c1-w c1-4 c1-8l c1-8m c1-4h c1-8n c1-8i c1-b c1-c c1-8o c1-8p c1-d c1-e c1-f c1-g">
                                       <div style={{margin: '0 auto'}} className="c1-1 c1-2 c1-4t c1-4j c1-8q c1-33 c1-4e c1-8r c1-8s c1-8t c1-8u c1-8v c1-8w c1-8x c1-8y c1-8z c1-90 c1-91 c1-92 c1-93 c1-94 c1-95 c1-96 c1-97 c1-98 c1-99 c1-9a c1-9b c1-9c c1-9d c1-9e c1-9f c1-9g c1-9h c1-9i c1-68 c1-b c1-9j c1-c c1-6x c1-d c1-e c1-f c1-g x-rt">
                                          <p style={{margin: '10px'}}>Följ nyheter på Facebook om vad som händer med filmen Jorden Anropar</p>
                                          <div className="c1-1 c1-2 c1-7r c1-68 c1-80 c1-81 c1-4z c1-35 c1-36 c1-37 c1-38 c1-69 c1-b c1-c c1-d c1-b4 c1-b5 c1-e c1-f c1-g">
                                             <div className="c1-1 c1-2 c1-t c1-69 c1-b7 c1-b8 c1-b9 c1-ba c1-7t c1-bb c1-bc c1-b c1-c c1-d c1-e c1-f c1-g">
                                                <a rel="noopener" role="link" aria-haspopup="true" target="_blank" aria-label="Social medielänk för Facebook" href="https://www.facebook.com/p/FallhagenFilm-100063805215260/" className="c1-4q c1-4r c1-4s c1-4t c1-4j c1-4u c1-3c c1-bd c1-b c1-be c1-c c1-51 c1-bf c1-bg c1-d c1-e c1-f c1-g">
                                                   <svg viewBox="0 0 24 24" fill="blue" width="100px" height="100px" className="c1-1 c1-2 c1-bh c1-3b c1-8d c1-bi c1-bj c1-bk c1-bl c1-b c1-c c1-d c1-e c1-f c1-g">
                                                      <path fillRule="evenodd" d="M22 12.061C22 6.505 17.523 2 12 2S2 6.505 2 12.061c0 5.022 3.657 9.184 8.438 9.939v-7.03h-2.54v-2.91h2.54V9.845c0-2.522 1.492-3.915 3.777-3.915 1.094 0 2.238.197 2.238.197v2.476h-1.26c-1.243 0-1.63.775-1.63 1.57v1.888h2.773l-.443 2.908h-2.33V22c4.78-.755 8.437-4.917 8.437-9.939z"></path>
                                                   </svg>
                                                </a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
               </section>
               <section id="113ab445-9353-47c8-b7ca-cb096759ca3c" role="region" className="widget widget-gallery c1-1 c1-2 c1-9p c1-i c1-j c1-b c1-c c1-m c1-n c1-d c1-e c1-f c1-g">
                           <div className="c1-1 c1-2 c1-5w c1-5x c1-45 c1-46 c1-4z c1-b c1-c c1-6c c1-d c1-6d c1-e c1-6i c1-f c1-6j c1-g">
                              <h2 className="c1-1 c1-2 c1-4t c1-4j c1-7e c1-5w c1-4d c1-33 c1-7f c1-6k c1-4m c1-76 c1-7g c1-6x c1-77 c1-6q c1-6f c1-78 c1-79 c1-7a">
                                 <span className="c1-7h c1-7i c1-7j c1-7k c1-7l">Fotogalleri</span>
                                 <div className="c1-4 c1-7m c1-4m c1-76 c1-77 c1-78 c1-79 c1-7a">
                                    <hr aria-hidden="true" role="separator" className="c1-9q c1-7o c1-3f c1-7p c1-4e c1-7q c1-3b c1-4m c1-76 c1-77 c1-78 c1-79 c1-7a"/>
                                 </div>
                              </h2>
                           </div>
                           <div id="bs-3" className="c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g">
                              <div>
                                 <div className="c1-1 c1-2 c1-5w c1-5x c1-45 c1-46 c1-4z c1-b c1-c c1-6c c1-d c1-6d c1-e c1-6i c1-f c1-6j c1-g">
                                    <div className="c1-1 c1-2 c1-t c1-7r c1-7s c1-7t c1-33 c1-7u c1-a6 c1-7v c1-b c1-c c1-7w c1-7x c1-a7 c1-7z c1-d c1-e c1-f c1-g">
                                       <div className="c1-1 c1-2 c1-7r c1-68 c1-80 c1-81 c1-4z c1-35 c1-82 c1-44 c1-83 c1-b c1-c c1-86 c1-87 c1-a8 c1-89 c1-d c1-e c1-f c1-g">
                                          <div className="c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g">
                                               <div className="slideshow-container gallery">
                                                                   
                                                  {/* Full-width images with number and caption text */}
                                                  <div className="mySlides fade">
                                                    <div className="numbertext">1 / 11</div>
                                                    <img src="assets/jordenanropar/Anna-och-Martin-regisserar2.jpg" alt="Anna och Martin regisserar"/>
                                                    <div className="text" style={{color: 'gray', padding: '10px'}}>Anna och Martin regisserar</div>
                                                  </div>
                                                
                                                  <div className="mySlides fade">
                                                    <div className="numbertext">2 / 11</div>
                                                    <img src="assets/jordenanropar/Filmaffischen.jpeg" alt="Filmaffischen"/>
                                                    <div className="text" style={{color: 'gray', padding: '10px'}}>Filmaffischen</div>
                                                  </div>
                                                  
                                                  <div className="mySlides fade">
                                                    <div className="numbertext">3 / 11</div>
                                                    <img src="assets/jordenanropar/Fin-bild-i-rymdskeppet.jpg" alt="Fin bild i rymdskeppet"/>
                                                    <div className="text" style={{color: 'gray', padding: '10px'}}>Fin bild i rymdskeppet</div>
                                                  </div>
                                                  <div className="mySlides fade">
                                                    <div className="numbertext">4 / 11</div>
                                                    <img src="assets/jordenanropar/Ystad-julbild-21B.jpg" alt="Ystad julbild"/>
                                                    <div className="text" style={{color: 'gray', padding: '10px'}}>Ystad julbild</div>
                                                  </div>
                                                  <div className="mySlides fade">
                                                    <div className="numbertext">5 / 11</div>
                                                    <img src="assets/jordenanropar/Ystad-julbild-4.jpg" alt="Ystad julbild"/>
                                                    <div className="text" style={{color: 'gray', padding: '10px'}}>Ystad julbild</div>
                                                  </div>
                                                  <div className="mySlides fade">
                                                    <div className="numbertext">6 / 11</div>
                                                    <img src="assets/jordenanropar/Johan-Philomene-Lasse-och-Martin-pa-stranden.jpeg" alt="Johan Philomene Lasse och Martin på stranden"/>
                                                    <div className="text" style={{color: 'gray', padding: '10px'}}>Johan Philomene Lasse och Martin på stranden</div>
                                                  </div>
                                                  <div className="mySlides fade">
                                                    <div className="numbertext">7 / 11</div>
                                                    <img src="assets/jordenanropar/Kalle-och-Mira.jpeg" alt="Kalle och Mira"/>
                                                    <div className="text" style={{color: 'gray', padding: '10px'}}>Kalle och Mira</div>
                                                  </div>
                                                  <div className="mySlides fade">
                                                    <div className="numbertext">8 / 11</div>
                                                    <img src="assets/jordenanropar/Martin-laser-shot-list-i-Ludvika.jpg" alt="Martin läser shot list i Ludvika"/>
                                                    <div className="text" style={{color: 'gray', padding: '10px'}}>Martin läser shot list i Ludvika</div>
                                                  </div>
                                                  <div className="mySlides fade">
                                                    <div className="numbertext">9 / 11</div>
                                                    <img src="assets/jordenanropar/Martin-och-Victor.jpg" alt="Martin och Victor"/>
                                                    <div className="text" style={{color: 'gray', padding: '10px'}}>Martin och Victor</div>
                                                  </div>
                                                  <div className="mySlides fade">
                                                    <div className="numbertext">10 / 11</div>
                                                    <img src="assets/jordenanropar/Mira-och-Bjorn.jpeg" alt="Mira och Björn"/>
                                                    <div className="text" style={{color: 'gray', padding: '10px'}}>Mira och Björn</div>
                                                  </div>
                                                  <div className="mySlides fade">
                                                    <div className="numbertext">11 / 11</div>
                                                    <img src="assets/jordenanropar/Tomas-Norström-portratt.jpeg" alt="Tomas Norström"/>
                                                    <div className="text" style={{color: 'gray', padding: '10px'}}>Tomas Norström</div>
                                                  </div>
                                                    {/* Next and previous buttons */}
                                       <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
                                       <a className="next" onClick={() => plusSlides(1)}>❯</a>
                                     </div>
                                     <br/>
                                     
                                     {/* The dots/circles */}
                                     <div style={{textAlign: 'center'}}>
                                       <span className="dot" onClick={() => currentSlide(1)}></span>
                                       <span className="dot" onClick={() => currentSlide(2)}></span>
                                       <span className="dot" onClick={() => currentSlide(3)}></span>
                                       <span className="dot" onClick={() => currentSlide(4)}></span>
                                       <span className="dot" onClick={() => currentSlide(5)}></span>
                                       <span className="dot" onClick={() => currentSlide(6)}></span>
                                       <span className="dot" onClick={() => currentSlide(7)}></span>
                                       <span className="dot" onClick={() => currentSlide(8)}></span>
                                       <span className="dot" onClick={() => currentSlide(9)}></span>
                                       <span className="dot" onClick={() => currentSlide(10)}></span>
                                       <span className="dot" onClick={() => currentSlide(11)}></span>
                                     </div>
                                                 </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </section></div>
                        
                     </div>
                  </div>
               </div>
               <section id="5e2fc403-b07f-4619-8373-72e1adcd726d" role="region" className="widget widget-privacy c1-1 c1-2 c1-3 c1-i c1-j c1-b c1-c c1-m c1-n c1-d c1-e c1-f c1-g">
                           <div className="c1-1 c1-2 c1-5w c1-5x c1-45 c1-46 c1-4z c1-b c1-c c1-6c c1-d c1-6d c1-e c1-6i c1-f c1-6j c1-g">
                              <h2 className="c1-1 c1-2 c1-4t c1-4j c1-7e c1-5w c1-4d c1-33 c1-7f c1-6k c1-4m c1-76 c1-7g c1-6x c1-77 c1-6q c1-6f c1-78 c1-79 c1-7a">
                                 <span className="c1-7h c1-7i c1-7j c1-7k c1-7l">Sekretesspolicy</span>
                                 <div className="c1-4 c1-7m c1-4m c1-76 c1-77 c1-78 c1-79 c1-7a">
                                    <hr aria-hidden="true" role="separator" className="c1-7n c1-7o c1-3f c1-7p c1-4e c1-7q c1-3b c1-4m c1-76 c1-77 c1-78 c1-79 c1-7a"/>
                                 </div>
                              </h2>
                              <div className="c1-1 c1-2 c1-t c1-7r c1-7s c1-7t c1-33 c1-7u c1-a6 c1-7v c1-b c1-c c1-7w c1-7x c1-a7 c1-7z c1-d c1-e c1-f c1-g">
                                 <div className="c1-1 c1-2 c1-7r c1-68 c1-80 c1-9r c1-4z c1-35 c1-82 c1-44 c1-83 c1-b c1-c c1-b0 c1-84 c1-85 c1-86 c1-87 c1-a8 c1-89 c1-d c1-b1 c1-8j c1-8k c1-e c1-f c1-g">
                                    <div className="c1-1 c1-2 c1-4t c1-4j c1-8q c1-33 c1-4e c1-b c1-9j c1-c c1-6x c1-d c1-e c1-f c1-g x-rt">
                                       <p style={{margin: '0'}}><span><strong className="c1-4q c1-4r c1-b c1-9k c1-7i c1-59 c1-9l">Jorden Anropar som personuppgiftsansvarig för dina personuppgifter</strong><br/>
                                          Vi värnar våra användares integritet. Vi vet också att användning av personuppgifter är nyckeln till att leverera den produkt som våra användare förväntar sig. Vi använder
                                          personuppgifter för att förbättra de produkter och tjänster som vi erbjuder. Vi på Jorden Anropar är ansvariga för behandlingen av våra användares personuppgifter.
                                          <br/>
                                          <strong className="c1-4q c1-4r c1-b c1-9k c1-7i c1-59 c1-9l">Användning av kakor</strong><br/>
                                          När du besöker vår webbplats eller använder vårt meddelandesystem (e-post) kan Jorden Anropar använda så kallade kakor, pixlar eller liknande spårningsteknik för att lagra information för olika ändamål såsom funktionalitet, analys, statistik, produktutveckling, rapportering, resultatmätning, annonsering och marknadsföring. Användningen av kakor och liknande spårningsteknik regleras i ePrivacy Direktivet (2002/58/EC) och dess svenska implementering, Lag (2022:482) om elektronisk kommunikation.</span>
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           </div>
               </section>
               <section id="73419053-1186-44c0-948d-11d982a8b886" role="contentinfo" className="widget widget-footer c1-1 c1-2 c1-b2 c1-i c1-j c1-b c1-c c1-m c1-n c1-d c1-e c1-f c1-g">
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
               <div id="f29c4e99-e406-4ffe-abf4-08c06e811c0f" className="widget widget-cookie-banner widget-cookie-banner-cookie-1">
                  <div id="f29c4e99-e406-4ffe-abf4-08c06e811c0f-banner" className="c1-1 c1-2 c1-bn c1-3v c1-bx c1-4 c1-by c1-4h c1-bu c1-8f c1-bz c1-c0 c1-c1 c1-c2 c1-c3 c1-43 c1-46 c1-44 c1-45 c1-33 c1-4d c1-4e c1-4f c1-39 c1-b c1-c c1-c4 c1-c5 c1-c6 c1-c7 c1-c8 c1-c9 c1-ca c1-d c1-e c1-f c1-g">
                     <h4 className="c1-1 c1-2 c1-4t c1-4j c1-cb c1-4f c1-4d c1-33 c1-4e c1-ak c1-b c1-6w c1-58 c1-6x c1-cc c1-cd c1-ce c1-cf">Den här webbplatsen använder cookies.</h4>
                     <div className="c1-1 c1-2 c1-4t c1-4j c1-8q c1-33 c1-4e c1-cg c1-bz c1-b c1-6w c1-c c1-6x c1-ch c1-d c1-e c1-f c1-g x-rt">
                        <p style={{margin: '0'}}>Vi använder cookies för att analysera webbplatstrafik och optimera din webbplatsupplevelse. Genom att acceptera vår användning av cookies kommer dina data att aggregeras med alla andra användardata.</p>
                     </div>
                     <div className="c1-1 c1-2 c1-t c1-v c1-b c1-c c1-d c1-e c1-f c1-g"><a data-ux-btn="primary" color="HIGHCONTRAST" href="" id="f29c4e99-e406-4ffe-abf4-08c06e811c0f-decline" className="c1-ci c1-55 c1-t c1-w c1-69 c1-3c c1-7p c1-3k c1-cj c1-ck c1-68 c1-cl c1-u c1-6k c1-4s c1-4j c1-4t c1-o c1-4z c1-4 c1-cm c1-cn c1-co c1-cp c1-cq c1-cr c1-cs c1-3 c1-b c1-59 c1-12 c1-ct c1-cu c1-cv c1-cw c1-cx c1-cy c1-cz c1-d0">Neka</a><a data-ux-btn="primary" color="HIGHCONTRAST" href="" id="f29c4e99-e406-4ffe-abf4-08c06e811c0f-accept" className="c1-ci c1-55 c1-t c1-w c1-69 c1-3c c1-7p c1-3k c1-cj c1-ck c1-68 c1-cl c1-u c1-6k c1-4s c1-4j c1-4t c1-o c1-4z c1-4 c1-cm c1-cn c1-co c1-cp c1-cq c1-cr c1-cs c1-3 c1-b c1-59 c1-12 c1-ct c1-cu c1-cv c1-cw c1-cx c1-cy c1-cz c1-d0">Acceptera</a></div>
                  </div>
               </div>
            </div>
         </div>
  );
}
