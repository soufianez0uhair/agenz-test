import Logo from '../assets/agenz-logo.jpeg';
import Flag from '../assets/MoroccanFlag.png';
import Account from '../assets/account-icon.png';
import Redirect from '../assets/redirect-icon.png';

const Header = () => {
    return (
        <header className="header">
            <img src={Logo} alt="logo" className="logo" />
            <ul className="menu">
                <li className="menu__li">Acheter</li>
                <li className="menu__li">Louer</li>
                <li className="menu__li">Estimer</li>
                <li className="menu__li">Prix immobilers</li>
                <li className="menu__li">Credit</li>
                <li className="menu__li">Agence</li>
            </ul>
            <div className="header__options">
                <div className="header__option">
                    <img src={Flag} alt="falg png" className="header__option__icon header__option__icon--flag" />
                    <span className="header__option__title">Arabe</span>
                </div>
                <div className="header__option">
                    <img src={Account} alt="" className="header__option__icon" />
                    <span className="header__option__title">Connexion</span>
                </div>
                <div className="header__option">
                    <span className="header__option__title">Offres pro</span>
                    <img src={Redirect} alt="redirect png" className="header__option__icon" />
                </div>
            </div>
        </header>
    )
}

export default Header;