import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';
import { Experience } from './components/sections/Experience';
import { Hero } from './components/sections/Hero';
import { Principles } from './components/sections/Principles';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { ui } from './content/ui';
import { useLocale } from './hooks/useLocale';

export function App() {
  const { t } = useLocale();
  return (
    <>
      <a href="#conteudo" className="skip-link">
        {t(ui.skip)}
      </a>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <About />
        <Projects />
        <Principles />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
