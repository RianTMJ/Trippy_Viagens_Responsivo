import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import contatoimg from "../assets/contato.jpg";
import Footer from "../components/Footer";
import ContatoForm from "../components/ContatoForm";

function Contato() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroimg={contatoimg}
        title="Contato"
        btnClass="hide"
      />

      <ContatoForm />
      <Footer />
    </>
  );
}

export default Contato;
