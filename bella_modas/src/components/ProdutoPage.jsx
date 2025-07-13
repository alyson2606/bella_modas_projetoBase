import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../App.css";

export default function ProdutoPage() {
  const { nome } = useParams();
  const nomeFormatado = nome.charAt(0).toUpperCase() + nome.slice(1);

  return (
    <>
      <Helmet>
        <title>{nomeFormatado} | Bella Modas</title>
        <meta name="description" content={`Confira nossa coleção de ${nomeFormatado} que combinam elegância e estilo.`} />
      </Helmet>

      <nav className="navbar navbar-expand-lg" aria-label="Menu principal">
        <div className="container">
          <Link className="navbar-brand" to="/">Bella Modas</Link>
        </div>
      </nav>

      <main>
        <section className="section">
          <div className="container text-center">
            <h2 className="mb-4">{nomeFormatado}</h2>
            <img src="../img/short_e_camisa.jpg" alt={`Categoria ${nomeFormatado}`} loading="lazy" />
            <p className="mt-4">
              Aqui você pode colocar fotos e descrições detalhadas dos produtos da categoria <strong>{nomeFormatado}</strong>.
            </p>
            <Link to="/" className="btn btn-primary mt-3">Voltar</Link>
          </div>
        </section>
      </main>

      <footer role="contentinfo">
        <p>&copy; 2025 Bella Modas - Todos os direitos reservados.</p>
      </footer>
    </>
  );
}
