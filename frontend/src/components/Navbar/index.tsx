import './styles.css';
import 'bootstrap/js/src/collapse.js';

function Navbar() {
  return (
    <nav className=" navbar navbar-expand-md navbar-ligth bg-primary main-nav">
      <div className="container-fluid">
        <a href="link" className="nav-logo-text">
          <h4>Caramelow</h4>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#caramelow-navbar"
          aria-controls="caramelow-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="caramelow-navbar">
          <ul className="navbar-nav offset-md-0 main-menu">
            <li>
              <a href="link" className="active align-menu">
                Empresa
              </a>
            </li>
            <li>
              <a href="link">Serviços</a>
            </li>
            <li>
              <a href="link">Produtos</a>
            </li>
            <li>
              <a href="link">Central de Ajuda</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
