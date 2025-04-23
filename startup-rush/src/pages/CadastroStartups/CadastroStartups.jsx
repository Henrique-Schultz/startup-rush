import Modal from "../../components/Modal/Modal";
import ListaStartups from "../../components/ListaStartups/ListaStartups";
import "./CadastroStartups.css";

function CadastroStartups({numStartups, changePage, cadastrarStartup, startups, setStartups}) {
    const handleDadosRecebidos = ({ nome, slogan, ano, pontos }) => {
        const novaStartup = {
          nome,
          slogan,
          ano,
          pontos: 30
        };
    
        cadastrarStartup(novaStartup);
        nome = "";
        slogan = "";
        ano = "";
        if (startups.filter((s) => s !== null).length === numStartups-1) {
            changePage("torneio");
        }
      };

    const preencherStartupsFake = () => {
        const nomes = [
        "Hotwheels Tech",
        "GreenAI",
        "RocketFoods",
        "AquaBytes",
        "ByteBuddies",
        "Nuvem Rápida",
        "EcoCharge",
        "CyberLemon"
        ];

        const slogans = [
        "Correndo para o futuro",
        "Soluções verdes com inteligência",
        "O delivery mais veloz do universo",
        "Dados que fluem como água",
        "Conectando ideias e pessoas",
        "A nuvem mais ágil da internet",
        "Energia limpa. Tecnologia esperta.",
        "Cítrico, sintético, cibernético"
        ];

        const anoBase = 2018;

        const novasStartups = nomes.map((nome, i) => ({
        nome,
        slogan: slogans[i],
        ano: anoBase + i,
        pontos: 30
        }));

        if(numStartups === 4){
            novasStartups.splice(4, 4);
        }

        setStartups(novasStartups);
    };

    return (
        <>   
            <div className="cadastro-startups">
                


            <ListaStartups startups={startups} />   
                <Modal onSubmit={handleDadosRecebidos}/>
                <button className="preencher" onClick={() => { 
                    changePage("torneio");
                    preencherStartupsFake();
                }}>fill</button>
            </div>
            
        </>
    );
}
export default CadastroStartups;