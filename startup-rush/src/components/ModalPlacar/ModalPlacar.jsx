import "./ModalPlacar.css";

function ModalPlacar({ startups }) {
  const startupsOrdenadas = [...startups].sort((a, b) => b.pontos - a.pontos);
  return (
    console.log(startups),
    console.log(startupsOrdenadas),
    (
      <div className="modal-placar">
        <label className="modal-placar-vencedora">VENCEDORA:</label>

        <div className="modal-placar-trofeu">
          <div className="modal-placar-trofeu-vencedor-container">
            <label className="modal-placar-trofeu-nome">
              {startupsOrdenadas[0].nome}
            </label>
          </div>
        </div>

        <label className="modal-placar-ranking-titulo">Ranking:</label>

        <div className="modal-placar-ranking">
          <div>
            <ol>
              {startupsOrdenadas.map((s, i) => (
                <li key={i}>
                  {s.pontos}pts {s.nome}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <button
          className="button-cadastrar"
          onClick={() => window.location.reload()}
        >
          NOVO TORNEIO
        </button>
      </div>
    )
  );
}
export default ModalPlacar;
