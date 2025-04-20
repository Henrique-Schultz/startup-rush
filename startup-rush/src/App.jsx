import { useState } from "react";
import BoasVindas from "./pages/BoasVindas/BoasVindas.jsx";
import QuantasStartups from "./pages/QuantasStartups/QuantasStartups.jsx";

function App() {
  const [page, setPage] = useState("boas-vindas");

  const pages = {
    "boas-vindas": <BoasVindas changePage={setPage}/>,
    "quantas-startups": <QuantasStartups />,
  }

  return (
    <>
      {pages[page]}
    </>
  );
}

export default App;
