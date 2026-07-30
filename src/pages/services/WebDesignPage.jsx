import ServiceHero from "../../components/service/ServiceHero";
import ServiceIntro from "../../components/service/ServiceIntro";
import ServiceBenefits from "../../components/service/ServiceBenefits";
import FeaturedProjects from "../../components/service/FeaturedProjects";
import WebsitePackages from "../../components/service/WebsitePackages";
import IndustriesGrid from "../../components/service/IndustriesGrid";
import ProcessTimeline from "../../components/service/ProcessTimeline";
import TechnologyGrid from "../../components/service/TechnologyGrid";
import ServiceFAQ from "../../components/service/ServiceFAQ";
import RelatedServices from "../../components/service/RelatedServices";
import ServiceCTA from "../../components/service/ServiceCTA";


export default function WebDesignPage() {
  return (
    <>

      <ServiceHero
        eyebrow="Premium Website Design"
        title="Luxury Websites Built To Convert Visitors Into Customers"
        description="We create premium websites combining strategy, design, performance, and technology to help ambitious businesses grow online."
      />


      <ServiceIntro />


      <ServiceBenefits />


      <FeaturedProjects />


      <WebsitePackages />


      <IndustriesGrid />


      <ProcessTimeline />


      <TechnologyGrid />


      <ServiceFAQ />


      <RelatedServices />


      <ServiceCTA />

    </>
  );
}