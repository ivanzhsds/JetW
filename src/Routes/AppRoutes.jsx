import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Agendamentos from "../pages/agendamentos";
import Servicos from "../pages/servicos";
import Historico from "../pages/historico";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/agendamentos" element={<Agendamentos />} />
      <Route path="/servicos" element={<Servicos />} />
      <Route path="/historico" element={<Historico />} />
    </Routes>
  );
}