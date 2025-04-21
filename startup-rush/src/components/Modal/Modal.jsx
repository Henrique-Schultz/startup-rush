import ButtonCadastrar from "../general/ButtonCadastrar/ButtonCadastrar";
import "./Modal.css";
import { useState } from "react";

function Modal({onSubmit}) {
  const [nome, setNome] = useState("");
  const [slogan, setSlogan] = useState("");
  const [ano, setAno] = useState("");

  const handleCadastrarClick = () => {
    if (nome && slogan && ano) {
      onSubmit({ nome, slogan, ano });
      setNome("");
      setSlogan("");
      setAno("");
    } else {
      alert("Preencha todos os campos!");
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="nome-container">
          <label className="label-nome">Nome</label>
          <input
            className="input-nome"
            type="text"
            placeholder="Nome da Startup"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className="slogan-container">
          <label className="label-slogan">Slogan</label>
          <textarea
            className="textarea-slogan"
            placeholder="Slogan da Startup"
            value={slogan}
            onChange={(e) => setSlogan(e.target.value)}
          />
        </div>

        <div className="ano-container">
          <label className="label-ano">Ano</label>
          <input
            className="input-ano"
            type="text"
            placeholder="XXXX"
            value={ano}
            onChange={(e) => setAno(e.target.value)}
          />
        </div>
      </div>

      <ButtonCadastrar onClick={handleCadastrarClick} />

    </div>
  );
}

export default Modal;
