import Header from "./scenes/Header";
import Navbar from "./scenes/Navbar";
import React from "react";
import SectionCreateAccount from "./scenes/SectionCreateAccount";
import SectionExploring from "./scenes/SectionExploring";
import SectionCheckout from "./scenes/SectionCheckout";
import Footer from "./scenes/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <SectionCreateAccount />
        <SectionExploring />
        <SectionCheckout />
      </main>
      <Footer />
    </>
  );
}

export default App;
