import React from "react";
import { Routes ,Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import Usuarios from './components/Usuarios'
import CriarUsuarios from './components/CriarUsuarios'
import AtualizarUsuarios from './components/AtualizarUsuarios'

export default function App() {




  return (
      <>
        <Navbar />
        <Routes>
          <Route  path='/' element={Usuarios} />
          <Route  path='/criar' element={CriarUsuarios} />
          <Route  path='/atualizar/:id' component={AtualizarUsuarios} />
        </Routes>   
      </>
  );
}