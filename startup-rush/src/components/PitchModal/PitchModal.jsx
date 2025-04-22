import "./PitchModal.css";
import { useState } from "react";

function PitchModal({ pitchList, onSubmit, semifinalIndex }) {
  const criterios = [
    { label: "Pitch convincente", pontos: 6 },
    { label: "Produto com bugs", pontos: -4 },
    { label: "Boa tração de usuários", pontos: 3 },
    { label: "Investidor irritado", pontos: -6 },
    { label: "Fake news no pitch", pontos: -8 },
  ];

  const [checks1, setChecks1] = useState([false, false, false, false, false]);
  const [checks2, setChecks2] = useState([false, false, false, false, false]);

  const toggleCheck = (index, setChecks, checks) => {
    const novos = [...checks];
    novos[index] = !novos[index];
    setChecks(novos);
  };

  const getPontuacao = (checks) =>
    checks.reduce(
      (acc, marcado, i) => acc + (marcado ? criterios[i].pontos : 0),
      0
    );

  return (
    <div className="modal-pitch-overlay">
      <div className="modal-pitch">
        <label className="titulo-pitch">Pitch</label>

        <div className="modal-pitch-top">
          {/* STARTUP 1 */}
          <div className="submodal1">
            <label className="submodal-titulo">{pitchList[0].nome}</label>

            {criterios.map((criterio, i) => (
              <label key={i} className="checkbox-container">
                <input
                  type="checkbox"
                  checked={checks1[i]}
                  onChange={() => toggleCheck(i, setChecks1, checks1)}
                />
                {criterio.label}: {criterio.pontos > 0 ? "+" : ""}
                {criterio.pontos} pontos
                <span className="checkmark"></span>
              </label>
            ))}

            <p className="pontuacao">
              Total:{" "}
              <strong>{pitchList[0].pontos + getPontuacao(checks1)}</strong>
            </p>
          </div>

          {/* STARTUP 2 */}
          <div className="submodal2">
            <label className="submodal-titulo">{pitchList[1].nome}</label>
            {criterios.map((criterio, i) => (
              <label key={i} className="checkbox-container">
                <input
                  type="checkbox"
                  checked={checks2[i]}
                  onChange={() => toggleCheck(i, setChecks2, checks2)}
                />
                {criterio.label}: {criterio.pontos > 0 ? "+" : ""}
                {criterio.pontos} pontos
                <span className="checkmark"></span>
              </label>
            ))}
            <p className="pontuacao">
              Total:{" "}
              <strong>{pitchList[1].pontos + getPontuacao(checks2)}</strong>
            </p>
          </div>
        </div>

        <button
          className="button-cadastrar"
          onClick={() => {
            pitchList[0].pontos += getPontuacao(checks1);
            pitchList[1].pontos += getPontuacao(checks2);

            const vencedora =
              pitchList[0].pontos > pitchList[1].pontos
                ? pitchList[0]
                : pitchList[1];
            onSubmit(vencedora, semifinalIndex);
          }}
        >
          Concluído
        </button>
      </div>
    </div>
  );
}

export default PitchModal;
