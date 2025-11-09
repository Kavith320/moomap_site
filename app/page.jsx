import Hero from "./(sections)/hero/Hero";
import Features from "./(sections)/features/Features";
import About from "./(sections)/about/About";
import Pricing from "./(sections)/pricing/Pricing";
import Download from "./(sections)/download/Download";
import Gallery from "./(sections)/gallery/Gallery";
import Contact from "./(sections)/contact/Contact";
import Team from "./(sections)/team/Team";
export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <Pricing />
      <Download />
      <Gallery />
      <Team />
      <Contact />
    </>
  );
}
