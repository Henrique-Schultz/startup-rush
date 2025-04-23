import ButtonCadastrar from "../general/ButtonCadastrar/ButtonCadastrar";
import "./Modal.css";
import { useState } from "react";

function Modal({ onSubmit }) {
  const [nome, setNome] = useState("");
  const [slogan, setSlogan] = useState("");
  const [ano, setAno] = useState("");
  const [somEscolhido, setSomEscolhido] = useState("");

  const handleCadastrarClick = () => {
    if (nome && slogan && ano && somEscolhido) {
      onSubmit({ nome, slogan, ano, somEscolhido });
      setNome("");
      setSlogan("");
      setAno("");
      setSomEscolhido("");
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

        <div className="ano-container">
          <select
          className="dropdown"
            value={somEscolhido}
            onChange={(e) => setSomEscolhido(e.target.value)}
          >
            <option value="">Escolha um som</option>
            <option value="aplauso.mp3">Aplausos 👏</option>
            <option value="trompete-medieval.mp3">Trompete Medieval 🏰</option>
            <option value="trompete-real.mp3">Trompete Real 🎺</option>
            <option value="victory.mp3">Vitória! 🏆</option>
          </select>
        </div>
      </div>

      <ButtonCadastrar onClick={handleCadastrarClick} />
    </div>
  );
}

export default Modal;
