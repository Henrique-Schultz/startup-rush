import Logo from './assets/startupRushLogo.png'

function Logo() {
    return(
        <div className="logo-container">
            <img src={Logo} className="logo" alt="Startup Rush logo" />
        </div>
    )
}

export default Logo;