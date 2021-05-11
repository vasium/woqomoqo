import { useEffect, useState } from "react";
import About from "./About";
import "./App.css";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
  homeObjFive,
} from "./Data";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";
import Sidebar from "./Sidebar";

function Home() {
  const [open, setOpen] = useState(null);

  useEffect(() => {
    setOpen(true);
  }, []);

  const toggle = () => {
    const sidebarStyle = document.getElementById("sidebar-container").style;
    open ? (sidebarStyle.opacity = "100%") : (sidebarStyle.opacity = "0%");
    open ? (sidebarStyle.top = "0%") : (sidebarStyle.top = "-100%");
    setOpen(!open);
  };

  return (
    <>
      <Sidebar toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <About {...homeObjOne} />
      <About {...homeObjTwo} />
      {/* <About {...homeObjThree} /> */}
      <About {...homeObjFour} />
      <Portfolio />
      <About {...homeObjFive} />

      <Footer />
    </>
  );
}

export default Home;
