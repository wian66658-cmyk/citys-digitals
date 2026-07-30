import {
  Routes,
  Route,
} from "react-router-dom";


import MainLayout from "./layouts/MainLayout";


// Core Pages

import Home from "./pages/Home";
import PortfolioPage from "./pages/PortfolioPage";
import ServicesPage from "./pages/ServicesPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import ProductsPage from "./pages/ProductsPage";
import ResourcesPage from "./pages/ResourcesPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";



export default function App() {

  return (

    <Routes>


      {/* Main Website Layout */}

      <Route element={<MainLayout />}>


        {/* Homepage */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* Services */}

        <Route
          path="/services"
          element={<ServicesPage />}
        />


        {/* Portfolio */}

        <Route
          path="/portfolio"
          element={<PortfolioPage />}
        />


        {/* Case Studies */}

        <Route
          path="/case-studies"
          element={<CaseStudiesPage />}
        />


        {/* Digital Products */}

        <Route
          path="/products"
          element={<ProductsPage />}
        />


        {/* Resources */}

        <Route
          path="/resources"
          element={<ResourcesPage />}
        />


        {/* Contact */}

        <Route
          path="/contact"
          element={<ContactPage />}
        />


      </Route>



      {/* 
      
      FUTURE CITY'S DIGITALS V3 ROUTES

      Portfolio Projects:

      /portfolio/veloura
      /portfolio/auren
      /portfolio/nexa
      /portfolio/novaflow
      /portfolio/mediconnect
      /portfolio/terrasphere


      Case Studies:

      /case-studies/veloura
      /case-studies/auren
      /case-studies/nexa
      /case-studies/novaflow
      /case-studies/mediconnect
      /case-studies/terrasphere


      Services:

      /services/web-design
      /services/ui-ux
      /services/branding
      /services/seo
      /services/web-applications


      */}



      {/* 404 */}

      <Route
        path="*"
        element={<NotFound />}
      />


    </Routes>

  );

}