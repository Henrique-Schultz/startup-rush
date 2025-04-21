import { useState } from "react";
import { useEffect } from "react";

import BoasVindas from "./pages/BoasVindas/BoasVindas.jsx";
import QuantasStartups from "./pages/QuantasStartups/QuantasStartups.jsx";
import CadastroStartups from "./pages/CadastroStartups/CadastroStartups.jsx";
import Torneio from "./pages/Torneio/Torneio.jsx";

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

  // // 🧪 Função para preencher com 8 startups fictícias
  // const preencherStartupsFake = () => {
  //   const nomes = [
  //     "Hotwheels Tech",
  //     "GreenAI",
  //     "RocketFoods",
  //     "AquaBytes",
  //     "ByteBuddies",
  //     "Nuvem Rápida",
  //     "EcoCharge",
  //     "CyberLemon"
  //   ];

  //   const slogans = [
  //     "Correndo para o futuro",
  //     "Soluções verdes com inteligência",
  //     "O delivery mais veloz do universo",
  //     "Dados que fluem como água",
  //     "Conectando ideias e pessoas",
  //     "A nuvem mais ágil da internet",
  //     "Energia limpa. Tecnologia esperta.",
  //     "Cítrico, sintético, cibernético"
  //   ];

  //   const anoBase = 2018;

  //   const novasStartups = nomes.map((nome, i) => ({
  //     nome,
  //     slogan: slogans[i],
  //     ano: anoBase + i
  //   }));

  //   setStartups(novasStartups);
  //   setNumStartups(novasStartups.length);
  // };

  // // 🚀 Chama a função uma vez no início
  // useEffect(() => {
  //   preencherStartupsFake();
  // }, []);

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
      />
    ),
    torneio: <Torneio startups={startups} changePage={setPage} />,
  };

  return <>{pages[page]}</>;
}

export default App;
