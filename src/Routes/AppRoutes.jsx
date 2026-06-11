import { Route, Routes, Navigate } from "react-router-dom"
import Home from "../pages/home"
import Login from "../pages/login"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}
