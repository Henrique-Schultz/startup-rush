import "./ButtonCadastrar.css";

function ButtonCadastrar({ onClick }) {
  return (
    <button className="button-cadastrar" onClick={onClick}>
      CADASTRAR
    </button>
  );
}

export default ButtonCadastrar;
