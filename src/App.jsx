import React from "react";
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import Menu from "./pages/Menu";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <div className="font-sans">
      <Header />
      <HeroSlider />
      <Menu />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;
