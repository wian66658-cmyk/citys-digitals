import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import Services from "./components/sections/Services";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
    </div>
  );
}

export default App;
