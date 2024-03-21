import React, { useState } from 'react';
import CrearPublicacion from './CrearPublicacion'; // Importa el componente CrearPublicacion
import './PantallaInicial.css'; // Importa el archivo CSS para estilos específicos de PantallaInicial

const PantallaInicial = () => {
  const [filtroCurso, setFiltroCurso] = useState('');
  const [filtroCatedratico, setFiltroCatedratico] = useState('');
  const [mostrarCrearPublicacion, setMostrarCrearPublicacion] = useState(false);
  const [comentario, setComentario] = useState('');
  const [mostrarNuevasPublicaciones, setMostrarNuevasPublicaciones] = useState(false);
  const [mostrarComentar, setMostrarComentar] = useState(false);

  // Función para manejar el cambio en el filtro de curso
  const handleFiltroCursoChange = (event) => {
    setFiltroCurso(event.target.value);
  };

  // Función para manejar el cambio en el filtro de catedrático
  const handleFiltroCatedraticoChange = (event) => {
    setFiltroCatedratico(event.target.value);
  };

  // Función para mostrar el formulario de creación de publicación
  const mostrarFormularioCrearPublicacion = () => {
    setMostrarCrearPublicacion(true);
  };

  // Función para enviar el comentario
  const enviarComentario = () => {
    console.log('Comentario:', comentario);
    setComentario('');
  };

  // Función para buscar nuevas publicaciones
  const buscarNuevasPublicaciones = () => {
    console.log('Buscando nuevas publicaciones...');
    setMostrarNuevasPublicaciones(true);
    setMostrarComentar(true);
  };

  return (
    <div className="pantalla-inicial-container">
      <h2>Bienvenido a la Pantalla Inicial</h2>
      
      {/* Sección de filtros */}
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

      {/* Botón para buscar nuevas publicaciones */}
      {!mostrarNuevasPublicaciones && (
        <button onClick={buscarNuevasPublicaciones}>Buscar nuevas publicaciones</button>
      )}

      {/* Sección de visualización de publicaciones */}
      {mostrarNuevasPublicaciones && (
        <div className="publicaciones-container">
          {/* Aquí mostraríamos las publicaciones filtradas */}
          <p>Publicaciones filtradas aparecerían aquí...</p>
        </div>
      )}

      {/* Área de comentarios */}
      {mostrarComentar && (
        <div className="comentario-container">
          <textarea value={comentario} onChange={(e) => setComentario(e.target.value)} placeholder="Escribe tu comentario aquí"></textarea>
          <button onClick={enviarComentario}>Comentar</button>
        </div>
      )}

      {/* Mensaje de "Sin nuevas publicaciones" si no hay */}
      {mostrarNuevasPublicaciones && !mostrarComentar && <p>Sin nuevas publicaciones</p>}

      {/* Mensaje de invitación a crear publicación */}
      {!mostrarCrearPublicacion && (
        <div className="crear-publicacion-container">
          <p>¿Quieres publicar algo?</p>
          <button className="btn-crear-publicacion" onClick={mostrarFormularioCrearPublicacion}>Crear Publicación</button>
        </div>
      )}

      {/* Mostrar el formulario de creación de publicación si se ha solicitado */}
      {mostrarCrearPublicacion && <CrearPublicacion />}
    </div>
  );
};

export default PantallaInicial;
