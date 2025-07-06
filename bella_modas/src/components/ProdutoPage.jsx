import { useParams, Link } from "react-router-dom";
import "../App.css";

export default function ProdutoPage() {
  const { nome } = useParams();

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">Bella Modas</Link>
        </div>
      </nav>

      <section className="section">
        <div className="container text-center">
          <h2 className="mb-4">{nome.charAt(0).toUpperCase() + nome.slice(1)}</h2>
          <p className="mb-4">
            
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container text-center">
          <h2 className="mb-4">{nome.charAt(0).toUpperCase() + nome.slice(1)}</h2>
          <img src="../img/short_e_camisa.jpg" alt="" />
        </div>
      </section>
      <section className="section">
        <div className="container text-center">
          <h2 className="mb-4">{nome.charAt(0).toUpperCase() + nome.slice(1)}</h2>
          <p className="mb-4">
            Aqui você pode colocar fotos e descrições detalhadas dos produtos da categoria <strong>{nome}</strong>.
          </p>
        </div>
          <Link to="/" className="btn btn-primary">Voltar</Link>
      </section>

      <footer>
        <p>&copy; 2025 Bella Modas - Todos os direitos reservados.</p>
      </footer>
    </>
  );
}
