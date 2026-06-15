import { useState } from "react";
import "../App.css";

export default function Agendamentos() {
  const [marcas, setMarcas] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");

  async function buscarMarcas() {
    try {
      setCarregando(true);
      setErro("");

      const resposta = await fetch(
        "https://parallelum.com.br/fipe/api/v1/carros/marcas"
      );

      const dados = await resposta.json();
      setMarcas(dados);
    } catch (error) {
      setErro("Erro ao carregar os dados.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="page">
      <h1>📅 Agendamentos</h1>

      <p className="descricao">
        Consulte marcas de veículos para realizar agendamentos.
      </p>

      <button className="btn-buscar" onClick={buscarMarcas}>
        Buscar Marcas
      </button>

      {carregando && <p>Carregando...</p>}

      {erro && <p>{erro}</p>}

      <div className="lista-marcas">
        {marcas.map((marca) => (
          <div className="marca-card" key={marca.codigo}>
            <h3>{marca.nome}</h3>
            <span>Código: {marca.codigo}</span>
          </div>
        ))}
      </div>
    </div>
  );
}