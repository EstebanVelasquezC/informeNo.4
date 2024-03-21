import React, { useState } from 'react';
import CrearPublicacion from './CrearPublicacion';
import Comentario from './Comentario'; // Importa el componente Comentario
import './PantallaInicial.css';

const PantallaInicial = () => {
  const [filtroCurso, setFiltroCurso] = useState('');
  const [filtroCatedratico, setFiltroCatedratico] = useState('');
  const [mostrarCrearPublicacion, setMostrarCrearPublicacion] = useState(false);
  const [comentario, setComentario] = useState('');
  const [mostrarNuevasPublicaciones, setMostrarNuevasPublicaciones] = useState(false);
  const [mostrarComentar, setMostrarComentar] = useState(false);

  const handleFiltroCursoChange = (event) => {
    setFiltroCurso(event.target.value);
  };

  const handleFiltroCatedraticoChange = (event) => {
    setFiltroCatedratico(event.target.value);
  };

  const mostrarFormularioCrearPublicacion = () => {
    setMostrarCrearPublicacion(true);
  };

  const enviarComentario = () => {
    console.log('Comentario:', comentario);
    setComentario('');
  };

  const buscarNuevasPublicaciones = () => {
    console.log('Buscando nuevas publicaciones...');
    setMostrarNuevasPublicaciones(true);
    setMostrarComentar(true);
  };

  return (
    <div className="pantalla-inicial-container">
      <h2>Bienvenido a la Pantalla Inicial</h2>
      
      <div className="filtros-container">
        <h3>Buscar Publicaciones</h3>
        <div className="filtro">
          <label htmlFor="filtro-curso">Buscar por Curso:</label>
          <input type="text" id="filtro-curso" value={filtroCurso} onChange={handleFiltroCursoChange} />
        </div>
        <div className="filtro">
          <label htmlFor="filtro-catedratico">Buscar por Catedrático:</label>
          <input type="text" id="filtro-catedratico" value={filtroCatedratico} onChange={handleFiltroCatedraticoChange} />
        </div>
      </div>

      {!mostrarNuevasPublicaciones && (
        <button onClick={buscarNuevasPublicaciones}>Buscar nuevas publicaciones</button>
      )}

      {mostrarNuevasPublicaciones && (
        <div className="publicaciones-container">
          <p>Sin nuevas publicaciones</p>
        </div>
      )}

      {mostrarComentar && (
        <Comentario 
          comentario={comentario} 
          setComentario={setComentario} 
          enviarComentario={enviarComentario} 
        />
      )}

      {!mostrarCrearPublicacion && (
        <div className="crear-publicacion-container">
          <p>¿Quieres publicar algo?</p>
          <button className="btn-crear-publicacion" onClick={mostrarFormularioCrearPublicacion}>Crear Publicación</button>
        </div>
      )}

      {mostrarCrearPublicacion && <CrearPublicacion />}
    </div>
  );
};

export default PantallaInicial;
