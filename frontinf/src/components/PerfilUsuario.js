import React, { useState } from 'react';
import './PerfilUsuario.css';

const PerfilUsuario = () => {
  const [registroAcademico, setRegistroAcademico] = useState('');
  const [usuarioEncontrado, setUsuarioEncontrado] = useState(null);
  const [mostrarPerfil, setMostrarPerfil] = useState(false);

  const buscarUsuario = () => {
    const usuario = obtenerUsuarioPorRegistroAcademico(registroAcademico);
    setUsuarioEncontrado(usuario);
    setMostrarPerfil(true);
  };

  const obtenerUsuarioPorRegistroAcademico = (registro) => {
   
    if (registro === '123456') {
      return {
        nombre: 'John Doe',
        correo: 'john.doe@example.com',
        cursosAprobados: ['Curso 1', 'Curso 2']
      };
    } else {
      return null;
    }
  };

 
  const obtenerValorCampo = (valor) => {
    return valor || 'Datos no encontrados';
  };

 
  const buscarOtroUsuario = () => {
    setRegistroAcademico('');
    setUsuarioEncontrado(null);
    setMostrarPerfil(false);
  };

  return (
    <div className="perfil-usuario-container">
      <h2>Perfil de Usuario</h2>
      <div className="buscar-usuario">
        <input
          type="text"
          value={registroAcademico}
          onChange={(e) => setRegistroAcademico(e.target.value)}
          placeholder="Ingrese el registro académico del usuario"
        />
        <button onClick={buscarUsuario}>Buscar</button>
      </div>
      {mostrarPerfil && (
        <div className="informacion-personal">
          <h3>Información Personal</h3>
          <p>Nombre: <input type="text" value={obtenerValorCampo(usuarioEncontrado?.nombre)} readOnly /></p>
          <p>Correo Electrónico: <input type="text" value={obtenerValorCampo(usuarioEncontrado?.correo)} readOnly /></p>
          <div className="cursos-aprobados">
            <h3>Cursos Aprobados</h3>
            <ul>
              {usuarioEncontrado?.cursosAprobados ? (
                usuarioEncontrado.cursosAprobados.map((curso, index) => (
                  <li key={index}>{curso}</li>
                ))
              ) : (
                <li>{obtenerValorCampo(null)}</li>
              )}
            </ul>
          </div>
          <button onClick={buscarOtroUsuario}>Buscar otro usuario</button>
        </div>
      )}
    </div>
  );
};

export default PerfilUsuario;
