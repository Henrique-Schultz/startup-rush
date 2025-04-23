import { useState } from "react";
import { useEffect } from "react";

import BoasVindas from "./pages/BoasVindas/BoasVindas.jsx";
import QuantasStartups from "./pages/QuantasStartups/QuantasStartups.jsx";
import CadastroStartups from "./pages/CadastroStartups/CadastroStartups.jsx";
import Torneio8 from "./pages/Torneio/Torneio8.jsx";
import PitchModal from "./components/PitchModal/PitchModal.jsx";
import Campeao from "./pages/Campeao/Campeao.jsx";

function App() {
  const [page, setPage] = useState("boas-vindas");
  const [numStartups, setNumStartups] = useState(0);
  const [startups, setStartups] = useState([0]);

  const addStartup = (startup) => {
    const newStartups = [...startups];
    const firstNull = newStartups.findIndex((item) => item === null);
    if(firstNull !== -1){
      newStartups[firstNull] = startup;
    }
    return setStartups(newStartups);
    
  };

  const fillArray = () => {
    if(numStartups === 8){
      setStartups([null, null, null, null, null, null, null, null]);
    }
    else if (numStartups === 4){
      setStartups([null, null, null, null]);
    }
  }

  useEffect(() => {
    fillArray();
  }, [numStartups]);

  const pages = {
    "boas-vindas": <BoasVindas changePage={setPage} />,
    "quantas-startups": (
      <QuantasStartups chooseNumber={setNumStartups} changePage={setPage} fillArray={fillArray} />
    ),
    "cadastro-startups": (
      <CadastroStartups
        numStartups={numStartups}
        changePage={setPage}
        cadastrarStartup={addStartup}
        startups={startups}
        setStartups={setStartups}
      />
    ),
    "torneio": <Torneio8 startups={startups} changePage={setPage} numStartups={numStartups} />,
    "campeao": <Campeao startups={startups} changePage={setPage}/>,
  };

  return <>{pages[page]}</>;
}

export default App;
