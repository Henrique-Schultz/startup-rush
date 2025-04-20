import StartupRushLogo from '../../../assets/startupRushLogo.png';
import './Logo.css';


function Logo() {
  return (
    <div className="logo-container">
      <img src={StartupRushLogo} className="logo" alt="Startup Rush logo" />
    </div>
  );
}

export default Logo;
