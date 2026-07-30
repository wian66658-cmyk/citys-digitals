import SEOHero from "../../components/seo/SEOHero";
import SEOServices from "../../components/seo/SEOServices";
import SEOStrategy from "../../components/seo/SEOStrategy";
import SEOAnalytics from "../../components/seo/SEOAnalytics";
import SEOProcess from "../../components/seo/SEOProcess";

import ServiceFAQ from "../../components/service/ServiceFAQ";
import RelatedServices from "../../components/service/RelatedServices";
import ServiceCTA from "../../components/service/ServiceCTA";


export default function SEOPage(){

return (

<>

<SEOHero />

<SEOServices />

<SEOStrategy />

<SEOAnalytics />

<SEOProcess />

<ServiceFAQ />

<RelatedServices />

<ServiceCTA />

</>

);

}