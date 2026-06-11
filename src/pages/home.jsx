import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h1>🚗 Jet Wash</h1>
      <p>Gerenciamento inteligente para lava-jatos.</p>

      <div className="cards">
        <Link to="/agendamentos" className="card">
          <h3>Agendamentos</h3>
          <span>15</span>
        </Link>

        <Link to="/servicos" className="card">
          <h3>Em Serviço</h3>
          <span>4</span>
        </Link>

        <Link to="/historico" className="card">
          <h3>Finalizados</h3>
          <span>28</span>
        </Link>
      </div>
    </div>
  );
}