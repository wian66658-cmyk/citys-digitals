import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <Stats />
    </div>
  );
}

export default App;
