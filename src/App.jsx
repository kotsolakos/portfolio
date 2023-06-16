import { useEffect } from 'react'
import ScrollReveal from 'scrollreveal';



import Hero from './components/hero.component';
import About from './components/about.component';
import Projects from './components/projects.component';
import Contact from './components/contact.component';
import Footer from './components/footer.component';

/* Configuration for the ScrollReveal effect */

export const defaultProps = {
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  distance: "30px",
  duration: 1000,
  desktop: true,
  mobile: true,
};

export const targetElements = [
  {
    element: ".section-title",
    animation: {
      delay: 300,
      distance: "0px",
      origin: "bottom",
    },
  },
  {
    element: ".hero-title",
    animation: {
      delay: 500,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    },
  },
  {
    element: ".hero-cta",
    animation: {
      delay: 1000,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    },
  },
  {
    element: ".about-wrapper__image",
    animation: {
      delay: 600,
      origin: "bottom",
    },
  },
  {
    element: ".about-wrapper__info",
    animation: {
      delay: 1000,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    },
  },
  {
    element: ".project-wrapper__text",
    animation: {
      delay: 500,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    },
  },
  {
    element: ".project-wrapper__image",
    animation: {
      delay: 1000,
      origin: window.innerWidth > 768 ? "right" : "bottom",
    },
  },
  {
    element: ".contact-wrapper",
    animation: {
      delay: 800,
      origin: "bottom",
    },
  },
];

/* ScrollReveal function */

function useScrollReveal() {
  useEffect(() => {
    if (!targetElements.length) return;

    ScrollReveal({ reset: false });

    targetElements.forEach(({ element, animation }) => {
      ScrollReveal().reveal(element, Object.assign({}, defaultProps, animation));
    });
  }, []);
}


/* Website component to be compartmentalized */

function App() {
  /* Initialization of ScrollReveal */
  useScrollReveal();

  return (
    <div className="App">
      { /* **** Introduction Section **** */ }
      <Hero/>
      { /* END Introduction Section */ }

      { /* **** About Section **** */ }
      <About/>
      { /* END About Section */ }

      { /* **** Projects Section **** */ }
      <Projects/>
      { /* END Projects Section */ }

      { /* **** Contacts Section **** */ }
      <Contact/>
      { /* END Contacts Section */ }

      { /* **** Footer Section **** */ }
      <Footer/>
      { /* END Footer Section */ }

    </div>
  )
}

export default App
