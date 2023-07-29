import logo from '../assets/UNITY.png';
import '../styles/Header.css';

function Header() {
  const mobileMenu = () => {
    const navBar = document.querySelector('.nav');
    navBar.classList.toggle('active');
  };

  return (
    <header className="header">
      <img src={logo} id="logo" alt="unity-contabilidade" />
      <nav className="nav">
        <span id="hamburguer" onClick={() => mobileMenu()}></span>
        <ul className="menu">
          <li>
            <a className="link" href="#">
              SOBRE
            </a>
          </li>
          <li>
            <a className="link" href="#">
              ORÇAMENTOS
            </a>
          </li>
          <li>
            <a className="link" href="#">
              CONTATO
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
