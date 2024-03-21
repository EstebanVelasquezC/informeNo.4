import React from 'react';

const Comentario = ({ comentario, setComentario, enviarComentario }) => {
  return (
    <div className="comentario-container">
      <textarea 
        value={comentario} 
        onChange={(e) => setComentario(e.target.value)} 
        placeholder="Escribe tu comentario aquí"
      ></textarea>
      <button onClick={enviarComentario}>Comentar</button>
    </div>
  );
};

export default Comentario;