import TripData from "./TripData";
import "./TripStyles.css";
import losangeles from "../assets/losangeles.jpg";
import vancouver from "../assets/vancouver.jpg";
import vegas from "../assets/lasvegas.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Viagens Recentes</h1>
      <p>Você pode descobrir destinos únicos usando o Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={losangeles}
          heading="Los Angeles, EUA"
          text="Los Angeles foi uma cidade espanhola 
          até 1821, ano em que o México se tornou 
          independente da Coroa espanhola e toda 
          Califórnia ficou sob controle da recém-criada 
          nação mexicana. Em 1839, a história de Los 
          Angeles sofreu uma grande mudança quando se 
          tornou a capital da Califórnia."
        />

        <TripData
          image={vancouver}
          heading="Vancouver, Canadá"
          text="A cidade de Vancouver é uma cidade portuária costeira, 
          na província da Colúmbia Britânica, terceira maior do Canadá. 
          Com suas vistas panorâmicas, clima ameno e pessoas amigas, 
          Vancouver é conhecida em todo o mundo como um dos melhores 
          lugares para se viver."
        />

        <TripData
          image={vegas}
          heading="Las Vegas, EUA"
          text="Las Vegas, oficialmente Cidade de Las Vegas 
          (inglês: City of Las Vegas), é a cidade mais populosa 
          e mais densamente povoada do estado americano de Nevada. 
          Localiza-se no sul do estado, no Condado de Clark, do qual é sede. 
          Foi fundada em 1905, porém, tornou-se oficialmente uma cidade em 1911."
        />
      </div>
    </div>
  );
}

export default Trip;
