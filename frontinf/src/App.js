import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import PantallaInicial from './components/PantallaInicial'; // Importa el componente PantallaInicial
import PerfilUsuario from './components/PerfilUsuario'; // Importa el componente PerfilUsuario
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="content-container">
            <div className="left-column">
              {/* Renderiza el componente PantallaInicial */}
              <PantallaInicial />
            </div>
            <div className="right-column">
              {/* Renderiza el componente PerfilUsuario */}
              <PerfilUsuario />
            </div>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
