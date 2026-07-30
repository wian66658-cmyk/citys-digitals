import ServicesHero from "../components/service/ServicesHero";
import SolutionsGrid from "../components/service/SolutionsGrid";
import ServiceExperience from "../components/service/ServiceExperience";
import TechnologyStack from "../components/service/TechnologyStack";
import WhyChooseUs from "../components/service/WhyChooseUs";

import ProcessTimeline from "../components/service/ProcessTimeline";

import FinalCTA from "../components/home/FinalCTA";


export default function ServicesPage() {

  return (

    <>

      {/* Main Services Introduction */}

      <ServicesHero />


      {/* Core Solutions */}

      <SolutionsGrid />


      {/* How We Build */}

      <ServiceExperience />


      {/* Technology Credibility */}

      <TechnologyStack />


      {/* Trust Section */}

      <WhyChooseUs />


      {/* Delivery Process */}

      <ProcessTimeline />


      {/* Conversion */}

      <FinalCTA />

    </>

  );

}