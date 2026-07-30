import PortfolioHero from "./PortfolioHero";
import ProjectGrid from "./ProjectGrid";
import PortfolioProcess from "./PortfolioProcess";
import TechnologyBoard from "./TechnologyBoard";
import ImpactMetrics from "../components/portfolio/ImpactMetrics";
import PortfolioCTA from "./PortfolioCTA";


export default function Portfolio(){

  return (

    <>

      <PortfolioHero />

      <ProjectGrid />

      <PortfolioProcess />

      <TechnologyBoard />

      <ImpactMetrics />

      <PortfolioCTA />

    </>

  );

}