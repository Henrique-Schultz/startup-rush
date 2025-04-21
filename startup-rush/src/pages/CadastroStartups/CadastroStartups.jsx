import Modal from "../../components/Modal/Modal";
import ListaStartups from "../../components/ListaStartups/ListaStartups";
import "./CadastroStartups.css";

function CadastroStartups({numStartups, changePage, cadastrarStartup, startups}) {
    const handleDadosRecebidos = ({ nome, slogan, ano }) => {
        const novaStartup = {
          nome,
          slogan,
          ano,
        };
    
        cadastrarStartup(novaStartup);
        nome = "";
        slogan = "";
        ano = "";
        if (startups.filter((s) => s !== null).length === numStartups-1) {
            changePage("torneio");
        }
      };


    return (
        <>   
            <div className="cadastro-startups">
            <ListaStartups startups={startups} />   
                <Modal onSubmit={handleDadosRecebidos}/>
            </div>
        </>
    );
}
export default CadastroStartups;