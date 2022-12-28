import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import sobreimg from "../assets/capa2.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Serviços() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroimg={sobreimg}
        title="Serviços"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Serviços;
