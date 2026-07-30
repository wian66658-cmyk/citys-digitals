import BrandHero from "../../components/branding/BrandHero";
import BrandServices from "../../components/branding/BrandServices";
import IdentityShowcase from "../../components/branding/IdentityShowcase";
import BrandProcess from "../../components/branding/BrandProcess";
import BrandDeliverables from "../../components/branding/BrandDeliverables";

import ServiceFAQ from "../../components/service/ServiceFAQ";
import RelatedServices from "../../components/service/RelatedServices";
import ServiceCTA from "../../components/service/ServiceCTA";


export default function BrandingPage() {

  return (

    <>

      {/* Hero */}

      <BrandHero />


      {/* Brand Expertise */}

      <BrandServices />


      {/* Portfolio */}

      <IdentityShowcase />


      {/* Process */}

      <BrandProcess />


      {/* Deliverables */}

      <BrandDeliverables />


      {/* FAQ */}

      <ServiceFAQ />


      {/* Related Services */}

      <RelatedServices />


      {/* Conversion */}

      <ServiceCTA />


    </>

  );

}