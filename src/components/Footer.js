import "./FooterStyle.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Trippy</h1>
          <p>Escolha se udestino favorito.</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>Projetos</h4>
          <a href="/">Alterações</a>
          <a href="/">Status</a>
          <a href="/">Licenças</a>
          <a href="/">Todas as Versões</a>
        </div>
        <div>
          <h4>Comunidade</h4>
          <a href="/">Github</a>
          <a href="/">Projetos</a>
          <a href="/">Twitter</a>
          <a href="/">Instagram</a>
        </div>
        <div>
          <h4>Ajuda</h4>
          <a href="/">Suporte</a>
          <a href="/">Contato</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
