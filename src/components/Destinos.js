import toronto1 from "../assets/toronto1.jpg";
import toronto2 from "../assets/toronto2.jpg";
import newyork1 from "../assets/newyork1.jpg";
import newyork2 from "../assets/newyork2.jpg";
import DestinosData from "./DestinosData";
import "./DestinosStyles.css";

const Destinos = () => {
  return (
    <div className="destinos">
      <h1>Destinos Populares</h1>
      <p>Viajar não é despesa, é investimento.</p>

      <DestinosData
        className="primeira-des"
        heading="Toronto, Canadá"
        text="Toronto é uma metrópole que chama a atenção por sua excelente
      infraestrutura, pela simpatia de seus habitantes e, também, por
      abrigar uma série de lugares incríveis para quem deseja viver
      experiências marcantes nas terras canadenses. Entre as principais
      estruturas, a CN Tower é uma das mais famosas. Com mais de 550
      metros de altura, a torre de comunicação é uma das atrações
      turísticas preferidas dos brasileiros, recebendo milhões de
      visitantes e dando a oportunidade de vislumbrar a capital por
      ângulos diferentes. As pessoas têm vivido em Toronto desde pouco depois 
      da última idade do gelo, embora a comunidade urbana só remonta a 1793, 
      quando autoridades coloniais britânicas fundaram a cidade de York sobre 
      o que então era a fronteira superior canadense. Aquela aldeia cresceu para 
      se tornar a Cidade de Toronto, em 1834. A cidade evolui até se tornar um dos 
      lugares mais habitáveis e multiculturais no mundo hoje."
        img1={toronto1}
        img2={toronto2}
      />

      <DestinosData
        className="primeira-des-reverse"
        heading="New York, Estados Unidos"
        text="Na Times Square, os grandes painéis fazem a noite parecer dia, 
        e o local está sempre lotado de gente. Ao andar pela cidade, principalmente 
        na região sul de Manhattan, olha-se para o alto e vê-se centenas de arranha-céus. 
        Cosmopolita, moderna e ao mesmo tempo clássica, dinâmica e culta, essa é Nova York. 
        É a cidade mais populosa dos Estados Unidos e o centro da área metropolitana de Nova York, 
        que está entre as áreas urbanas mais populosas do mundo. 
        Nova Iorque exerce uma poderosa influência sobre o comércio mundial, finanças, cultura, moda e entretenimento. 
        A cidade sedia a Organização das Nações Unidas e também é um importante centro de negócios internacionais. 
        A cidade é muitas vezes referida como New York City, para diferenciá-la do estado de Nova York, do qual faz parte.
        Localizada em um grande porto natural na costa atlântica do Nordeste dos Estados Unidos, 
        a cidade é composta por cinco distritos: Bronx, Brooklyn, Manhattan, Queens e Staten Island."
        img1={newyork1}
        img2={newyork2}
      />
    </div>
  );
};

export default Destinos;
