import "./ListaStartups.css";

function ListaStartups({ startups }) {
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
