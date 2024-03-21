import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.svg';
import CrearPublicacion from './components/CrearPublicacion'; // Importa el componente CrearPublicacion
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {/* Renderiza el componente CrearPublicacion */}
          <CrearPublicacion />
        </header>
      </div>
    </Router>
  );
}

export default App;
