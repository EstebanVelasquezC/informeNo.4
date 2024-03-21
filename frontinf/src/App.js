import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import PantallaInicial from './components/PantallaInicial'; // Importa el componente PantallaInicial
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <p>
          Informe No.4
          </p>
          
          {/* Renderiza el componente PantallaInicial */}
          <PantallaInicial />
        </header>
      </div>
    </Router>
  );
}

export default App;