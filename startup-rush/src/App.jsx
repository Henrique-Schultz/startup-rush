import { useState } from "react";
import BoasVindas from "./pages/BoasVindas/BoasVindas.jsx";
import QuantasStartups from "./pages/QuantasStartups/QuantasStartups.jsx";
import CadastroStartups from "./pages/CadastroStartups/CadastroStartups.jsx";

function App() {
  const [page, setPage] = useState("boas-vindas");
  const [numStartups, setNumStartups] = useState(0);
  const [startups, setStartups] = useState([]);

  const pages = {
    "boas-vindas": <BoasVindas changePage={setPage}/>,
    "quantas-startups": <QuantasStartups chooseNumber={setNumStartups} changePage={setPage}/>,
    "cadastro-startups": <CadastroStartups numStartups={numStartups} changePage={setPage}/>,
  }

  return (
    <>
      {pages[page]}
    </>
  );
}

export default App;