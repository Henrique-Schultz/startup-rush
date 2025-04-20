import ButtonCadastrar from "../general/ButtonCadastrar/ButtonCadastrar";
import "./Modal.css";

function Modal() {
  return (
    <div className="modal">

      <div className="modal-content">

        <div className="nome-container">
          <label className="label-nome">Nome</label>
          <input className="input-nome" type="text" placeholder="Nome da Startup"/>
        </div>

        <div className="slogan-container">
          <label className="label-slogan">Slogan</label>
          <textarea className="textarea-slogan" type="text" placeholder="Slogan da Startup"/>
        </div>

        <div className="ano-container">
          <label className="label-ano">Ano</label>
          <input className="input-ano" type="text" placeholder="XXXX"/>

        </div>

      </div>

      <ButtonCadastrar/>

    </div>
  );
}

export default Modal;
