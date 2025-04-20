import Button from '../components/general/Button/Button.jsx';
import Logo from '../components/general/Logo/Logo.jsx';
import './BoasVindas.css';


function BoasVindas() {
  return (
    <>
        <div className="boas-vindas">
            <Logo />
            <Button text={"INICIAR TORNEIO"}/>
        </div>
    </>
  );
}

export default BoasVindas;
