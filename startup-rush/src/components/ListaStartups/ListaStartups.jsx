import "./ListaStartups.css";

function ListaStartups({ startups }) {
  if (startups.length === 0) {
    return (
      <div className="lista vazia">
        <div className="card card-vazio">
          <label>Não há startups cadastradas</label>
        </div>
      </div>
    );
  }

  return (
    <div className="lista">
      {startups.map(function (startup, index) {
        return (
          <div key={index} className={`card ${startup === null ? "card-vazio" : ""}`}>
            {startup ? (
              <>
                <label>{startup.nome}</label>
              </>
            ) : (
              <label></label>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ListaStartups;
