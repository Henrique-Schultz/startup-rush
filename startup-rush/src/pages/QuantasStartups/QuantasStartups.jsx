import ButtonSquare from "../../components/general/ButtonSquare/ButtonSquare";
import "./QuantasStartups.css";

function QuantasStartups({chooseNumber, changePage}) {
  return (
    <div className="quantas-startups">
        <h1 className="titulo">Quantas Startups você quer cadastrar?</h1>
        <div className="buttons-container">
            <ButtonSquare text="4" onClick={() => {
                chooseNumber(4);
                changePage("cadastro-startups");}} />
            <ButtonSquare text="8" onClick={() => {
                chooseNumber(8);
                changePage("cadastro-startups");}} />
        </div>
    </div>
  );
}

export default QuantasStartups;