import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import sobreimg from "../assets/capa2.jpg";
import Footer from "../components/Footer";
import SobreUs from "../components/SobreUs";

function Sobre() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroimg={sobreimg} title="Sobre" btnClass="hide" />

      <SobreUs />
      <Footer />
    </>
  );
}

export default Sobre;
