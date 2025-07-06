import { Link } from "react-router-dom";
import "../App.css";

export default function Home() {
  return (
    <div className="main-container">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">Bella Modas</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#sobre">Sobre</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#produtos">Produtos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contato">Contato</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="content-wrap">
        <section className="hero text-center">
          <div className="container py-5">
            <h1>Bem-vinda à Bella Modas</h1>
            <p>Roupas e acessórios feminino que combinam elegância e estilo.</p>
            <a href="https://www.instagram.com/bella_modas.jp/?hl=en" className="text-decoration-none text-dark">
              <h3>@Bella_modas.jp</h3>
            </a>
          </div>
        </section>

        <section id="produtos" className="section">
          <div className="container">
            <h2 className="text-center mb-4">Nossos Produtos</h2>
            <div className="row">
              <div className="col-12 col-md-4 mb-4">
                <Link to="/produto/blusas" className="text-decoration-none">
                  <div className="card h-100" style={{backgroundColor: "var(--bg-color)", borderColor: "var(--secondary-color)"}}>
                    <div className="card-body text-center">
                      <h5 className="card-title">Blusas</h5>
                      <p className="card-text">Modelos leves e sofisticados para todas as estações.</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-12 col-md-4 mb-4">
                <Link to="/produto/saias" className="text-decoration-none">
                  <div className="card h-100" style={{backgroundColor: "var(--bg-color)", borderColor: "var(--secondary-color)"}}>
                    <div className="card-body text-center">
                      <h5 className="card-title">Saias</h5>
                      <p className="card-text">Saias que valorizam sua silhueta e garantem conforto.</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-12 col-md-4 mb-4">
                <Link to="/produto/acessorios" className="text-decoration-none">
                  <div className="card h-100" style={{backgroundColor: "var(--bg-color)", borderColor: "var(--secondary-color)"}}>
                    <div className="card-body text-center">
                      <h5 className="card-title">Acessórios</h5>
                      <p className="card-text">Bolsas e complementos para completar seu look.</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer style={{ backgroundColor: "var(--primary-color)", color: "var(--text-color)" }}>
        <p>&copy; 2025 Bella Modas - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
