import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import homeimg from "../assets/capa1.jpg";
import Destinos from "../components/Destinos";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroimg={homeimg}
        title="Sua jornada sua história"
        text="Escolha seu destino favorito."
        buttonText="Planeje sua viagem"
        url="/"
        btnClass="show"
      />
      <Destinos />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
