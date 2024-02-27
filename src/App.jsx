import * as React from "react";
import Hero from "./sections/Hero";
import "./index.css";
import Navbar from "/src/components/Navbar";
import Vedio from "./sections/Vedio";
import Images from "./sections/Images";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="max-w-screen mx-[20px] lg:mx-[160px] xl-mx-[180px] overflow-x-hidden font-custom">
      <Navbar />
      <Hero />
      <Vedio />
      <Images />
      <Footer />
    </main>
  );
}

export default App;
