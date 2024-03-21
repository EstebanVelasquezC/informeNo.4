import React, { useState } from 'react';

const CrearPublicacion = ({ agregarComentario }) => {
  const [tipoPublicacion, setTipoPublicacion] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [curso, setCurso] = useState('');
  const [catedratico, setCatedratico] = useState('');
  const [consejo, setConsejo] = useState('');
  const [opinion, setOpinion] = useState('');
  const [nivelDificultad, setNivelDificultad] = useState(1);
  const [catedraticoRecomendado, setCatedraticoRecomendado] = useState('');

  const handleTipoPublicacionChange = (event) => {
    setTipoPublicacion(event.target.value);
  };

  const handleMensajeChange = (event) => {
    setMensaje(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Publicación enviada:', {
      tipoPublicacion,
      mensaje,
      curso,
      catedratico,
      consejo,
      opinion,
      nivelDificultad,
      catedraticoRecomendado
    });
    setTipoPublicacion('');
    setMensaje('');
    setCurso('');
    setCatedratico('');
    setConsejo('');
    setOpinion('');
    setNivelDificultad(1);
    setCatedraticoRecomendado('');

    agregarComentario('id_publicacion_ejemplo', { usuario: 'UsuarioEjemplo', comentario: mensaje });
  };

  return (
    <div>
      <h2>Crear Publicación</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Tipo de Publicación:
            <select value={tipoPublicacion} onChange={handleTipoPublicacionChange}>
              <option value="">Seleccione un tipo</option>
              <option value="curso">Curso</option>
              <option value="catedratico">Catedrático</option>
            </select>
          </label>
        </div>
        {tipoPublicacion && (
          <>
            <div>
              <label>
                Mensaje:
                <textarea value={mensaje} onChange={handleMensajeChange} />
              </label>
            </div>
            {tipoPublicacion === 'curso' && (
              <>
                <div>
                  <label>
                    Nombre del Curso:
                    <input type="text" value={curso} onChange={(e) => setCurso(e.target.value)} />
                  </label>
                </div>
                <div>
                  <label>
                    Consejo:
                    <input type="text" value={consejo} onChange={(e) => setConsejo(e.target.value)} />
                  </label>
                </div>
                <div>
                  <label>
                    Catedrático Recomendado:
                    <input type="text" value={catedraticoRecomendado} onChange={(e) => setCatedraticoRecomendado(e.target.value)} />
                  </label>
                </div>
              </>
            )}
            {tipoPublicacion === 'catedratico' && (
              <>
                <div>
                  <label>
                    Nombre del Catedrático:
                    <input type="text" value={catedratico} onChange={(e) => setCatedratico(e.target.value)} />
                  </label>
                </div>
                <div>
                  <label>
                    Opinión del Catedrático:
                    <textarea value={opinion} onChange={(e) => setOpinion(e.target.value)} />
                  </label>
                </div>
                <div>
                  <label>
                    Nivel de Dificultad (del 1 al 5):
                    <input type="number" value={nivelDificultad} min={1} max={5} onChange={(e) => setNivelDificultad(e.target.value)} />
                  </label>
                </div>
              </>
            )}
            <button type="submit">Crear Publicación</button>
          </>
        )}
      </form>
    </div>
  );
};

export default CrearPublicacion;
