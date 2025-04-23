import ModalPlacar from "../../components/ModalPlacar/ModalPlacar";
import "./Campeao.css";

function Campeao({startups}) {


  return (
    <div className="campeao">
      <ModalPlacar startups={startups}/>
    </div>
  );
}

export default Campeao;