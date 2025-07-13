import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import "../App.css";

export default function Home() {
  return (
    <>
      <Helmet>
        <html lang="pt-br" />
        <title>Bella Modas - Moda feminina</title>
        <meta name="description" content="Roupas e acessórios femininos que combinam elegância e estilo." />
        <meta property="og:title" content="Bella Modas - Moda feminina" />
        <meta property="og:description" content="Roupas leves, sofisticadas e modernas para todas as estações." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/img/banner.jpg" />
      </Helmet>

      <div className="main-container">
        <nav className="navbar navbar-expand-lg" aria-label="Menu principal">
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

        <main className="content-wrap">
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
                  <Link to="/Blusas" className="text-decoration-none">
                    <div className="card h-100" style={{backgroundColor: "var(--bg-color)", borderColor: "var(--secondary-color)"}}>
                      <div className="card-body text-center">
                        <h5 className="card-title">Blusas</h5>
                        <p className="card-text">Modelos leves e sofisticados para todas as estações.</p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-12 col-md-4 mb-4">
                  <Link to="/saias" className="text-decoration-none">
                    <div className="card h-100" style={{backgroundColor: "var(--bg-color)", borderColor: "var(--secondary-color)"}}>
                      <div className="card-body text-center">
                        <h5 className="card-title">Saias</h5>
                        <p className="card-text">Saias que valorizam sua silhueta e garantem conforto.</p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-12 col-md-4 mb-4">
                  <Link to="/Acessorios" className="text-decoration-none">
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
        </main>

        <footer role="contentinfo" style={{ backgroundColor: "var(--primary-color)", color: "var(--text-color)" }}>
          <p>&copy; 2025 Bella Modas - Todos os direitos reservados.</p>
        </footer>
      </div>
    </>
  );
}
