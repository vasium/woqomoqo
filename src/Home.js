import { useEffect, useState } from "react";
import About from "./About";
import "./App.css";
import { homeObjOne } from "./Data";
import Hero from "./Hero";
import Navbar from "./Navbar";
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
    </>
  );
}

export default Home;
