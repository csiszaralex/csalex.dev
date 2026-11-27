import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Experience } from '@/components/experience';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/hero';
import { Navbar } from '@/components/navbar';
import { Projects } from '@/components/projects';

export default function Home() {
  return (
    <div className='min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary'>
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

