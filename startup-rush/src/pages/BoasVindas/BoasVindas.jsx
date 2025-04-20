import Button from '../../components/general/Button/Button.jsx';
import Logo from '../../components/general/Logo/Logo.jsx';
import './BoasVindas.css';


function BoasVindas({changePage}) {

  return (
    <>
        <div className="boas-vindas">
            <Logo />
            <Button text="INICIAR TORNEIO" onClick={() => changePage("quantas-startups")}/>
        </div>
    </>
  );
}

export default BoasVindas;
