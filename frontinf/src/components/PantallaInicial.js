import React from 'react';
import logo from './logo.svg';
import './App.css';
import PantallaInicial from './components/PantallaInicial'; // Importamos el componente PantallaInicial

function App() {
  return (
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
      </header>
      {/* Integración del componente PantallaInicial */}
      <PantallaInicial />
    </div>
  );
}

export default App;
