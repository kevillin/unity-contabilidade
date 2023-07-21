import {  useRef } from 'react';
import logo from '../assets/UNITY.png';
import menu from '../assets/main-menu.png';
import '../styles/Header.css';

function Header() {
  // const [botao, setBotao] = useState(false);
  const navRef = useRef();

  const handleClick = () => {
    navRef.current.classList.toggle('active');
  }

  return (
    <div>
      <div className="header-container">
        <div id="logo">
          <img src={logo} id="logo-img" alt="unity-contabilidade" />
        </div>
        <img
          src={menu}
          id="burguer"
          alt="menu-hamburguer"
          onClick={ () => handleClick() }
        />
        <nav id="links">
          <a className="link" href="#">
            SOBRE
          </a>
          <a className="link" href="#">
            ORÇAMENTOS
          </a>
          <a className="link" href="#">
            CONTATO
          </a>
        </nav>
      </div>
      <nav ref={navRef} id="links2">
        <a className="link2" href="#">
          SOBRE
        </a>
        <a className="link2" href="#">
          ORÇAMENTOS
        </a>
        <a className="link2" href="#">
          CONTATO
        </a>
      </nav>
    </div>
  );
}

export default Header;
