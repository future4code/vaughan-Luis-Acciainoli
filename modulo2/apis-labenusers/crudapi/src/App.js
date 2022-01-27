import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar'
import Usuarios from './components/Usuarios'
import CriarUsuarios from './components/CriarUsuarios'
import AtualizarUsuarios from './components/AtualizarUsuarios'

export default function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route path="usuarios" element={<Usuarios />} />
    </Routes>
    </BrowserRouter>
   
  );
}
