import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import BackgroundEffects from "../components/ui/BackgroundEffects";


export default function MainLayout() {

  return (

    <div
      className="
        relative
        min-h-screen
        overflow-x-hidden
        bg-[#050505]
        text-white
      "
    >

      <BackgroundEffects />


      <Navbar />


      <main
        className="
          relative
          pt-28
        "
      >

        <Outlet />

      </main>


      <Footer />


    </div>

  );

}