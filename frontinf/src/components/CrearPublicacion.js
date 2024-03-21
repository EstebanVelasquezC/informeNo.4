import React, { useState } from 'react';

const CrearPublicacion = () => {
  const [tipoPublicacion, setTipoPublicacion] = useState('curso');
  const [mensaje, setMensaje] = useState('');
  const [punteo, setPunteo] = useState(1);
  const [consejo, setConsejo] = useState('');
  const [opinionCatedratico, setOpinionCatedratico] = useState('');
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
    // Aquí iría la lógica para enviar la publicación al servidor
    console.log('Publicación enviada:', {
      tipoPublicacion,
      mensaje,
      punteo,
      consejo,
      opinionCatedratico,
      nivelDificultad,
      catedraticoRecomendado
    });
    // Limpiar el formulario
    setTipoPublicacion('curso');
    setMensaje('');
    setPunteo(1);
    setConsejo('');
    setOpinionCatedratico('');
    setNivelDificultad(1);
    setCatedraticoRecomendado('');
  };

  return (
    <div>
      <h2>Crear Publicación</h2>
      <div>
        <label>
          Tipo de Publicación:
          <select value={tipoPublicacion} onChange={handleTipoPublicacionChange}>
            <option value="curso">Curso</option>
            <option value="catedratico">Catedrático</option>
          </select>
        </label>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Mensaje:
            <textarea value={mensaje} onChange={handleMensajeChange} />
          </label>
        </div>
        {tipoPublicacion === 'catedratico' && (
          <>
            <div>
              <label>
                Punteo (del 1 al 5):
                <input type="number" value={punteo} min={1} max={5} onChange={(e) => setPunteo(e.target.value)} />
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
                Opinión del Catedrático:
                <textarea value={opinionCatedratico} onChange={(e) => setOpinionCatedratico(e.target.value)} />
              </label>
            </div>
          </>
        )}
        {tipoPublicacion === 'curso' && (
          <>
            <div>
              <label>
                Consejo:
                <input type="text" value={consejo} onChange={(e) => setConsejo(e.target.value)} />
              </label>
            </div>
            <div>
              <label>
                Nivel de Dificultad (del 1 al 5):
                <input type="number" value={nivelDificultad} min={1} max={5} onChange={(e) => setNivelDificultad(e.target.value)} />
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
        <button type="submit">Crear Publicación</button>
      </form>
    </div>
  );
};

export default CrearPublicacion;
