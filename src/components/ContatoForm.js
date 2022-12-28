import "./ContatoFormStyles.css";

function ContatoForm() {
  return (
    <div className="from-container">
      <h1>Mande uma mensagem para nós</h1>
      <form>
        <input placeholder="Nome" />
        <input placeholder="E-mail" />
        <input placeholder="Sobre" />
        <textarea placeholder="Mensagem" rows="4"></textarea>
        <button>Enviar Mensagem</button>
      </form>
    </div>
  );
}

export default ContatoForm;
