export default function CardProduto({ titulo, descricao, imagem, alt }) {
  return (
    <div className="container mt-5">
      <div className="card mx-auto" style={{ maxWidth: "600px", backgroundColor: "var(--bg-color)", borderColor: "var(--secondary-color)" }}>
        <img src={imagem} className="card-img-top" alt={alt} />
        <div className="card-body text-center">
          <h3 className="card-title">{titulo}</h3>
          <p className="card-text">{descricao}</p>
        </div>
      </div>
    </div>
  );
}
