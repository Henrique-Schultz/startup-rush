import Button from "../../components/general/Button/Button.jsx";
import Logo from "../../components/Logo/Logo.jsx";
import "./BoasVindas.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function BoasVindas({ changePage }) {
  return (
    <div className="boas-vindas">
      <Logo />
      <Button
        text="INICIAR TORNEIO"
        onClick={() => changePage("quantas-startups")}
      />
    </div>
  );
}

export default BoasVindas;
