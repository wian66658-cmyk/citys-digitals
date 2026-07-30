import { useState, useEffect } from "react";

import Container from "../ui/Container";

import NavbarLogo from "./NavbarLogo";
import NavbarDesktop from "./NavbarDesktop";
import NavbarCTA from "./NavbarCTA";
import NavbarMobile from "./NavbarMobile";


export default function Navbar() {

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };


    window.addEventListener(
      "scroll",
      handleScroll
    );


    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);



  return (

    <header
      className="
        fixed
        inset-x-0
        top-0
        z-[9999]
      "
    >

      <Container>

        <nav
          className={`
            relative
            mt-5
            flex
            items-center
            justify-between
            rounded-2xl
            border
            px-6
            py-4
            transition-all
            duration-500
            ${
              scrolled
              ?
              "border-white/10 bg-[#090909]/90 shadow-[0_20px_60px_rgba(0,0,0,.35)] backdrop-blur-2xl"
              :
              "border-transparent bg-transparent"
            }
          `}
        >


          <NavbarLogo />


          <NavbarDesktop />


          <NavbarCTA />


          <NavbarMobile
            mobileOpen={mobileOpen}
            setMobileOpen={setMobileOpen}
          />


        </nav>


      </Container>


    </header>

  );

}