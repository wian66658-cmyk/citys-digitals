import Hero from "../components/home/Hero";
import Capabilities from "../components/home/Capabilities";
import FeaturedProjects from "../components/home/FeaturedProjects";
import Impact from "../components/home/Impact";
import Process from "../components/home/Process";
import FinalCTA from "../components/home/FinalCTA";


export default function Home() {

  return (

    <>

      {/* Hero Section */}

      <Hero />


      {/* Capabilities */}

      <Capabilities />


      {/* Featured Work */}

      <FeaturedProjects />


      {/* Business Impact */}

      <Impact />


      {/* Development Process */}

      <Process />


      {/* Conversion Section */}

      <FinalCTA />

    </>

  );

}