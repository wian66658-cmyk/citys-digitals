import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import Services from "./components/sections/Services";
import Portfolio from "./components/sections/Portfolio";
import About from "./components/sections/About";
import Testimonials from "./components/sections/Testimonials";
import CTA from "./components/sections/CTA";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
<Hero />
<Stats />
<Services />
<Portfolio />
<About />
<Testimonials />
<CTA />
<Footer />
    </div>
  );
}

export default App;
