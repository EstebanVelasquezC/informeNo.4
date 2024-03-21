// CrearPublicacion.js

import React, { useState } from 'react';

const CrearPublicacion = () => {
    const [titulo, setTitulo] = useState('');
    const [contenido, setContenido] = useState('');
    const [autor, setAutor] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes agregar la lógica para manejar el envío del formulario
        console.log('Se ha enviado la publicación:');
        console.log('Título:', titulo);
        console.log('Contenido:', contenido);
        console.log('Autor:', autor);
    };

    return (
        <div className="crear-publicacion-container">
            <h2>Crear Publicación</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Título:</label>
                    <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                </div>
                <div>
                    <label>Contenido:</label>
                    <textarea value={contenido} onChange={(e) => setContenido(e.target.value)} />
                </div>
                <div>
                    <label>Autor:</label>
                    <input type="text" value={autor} onChange={(e) => setAutor(e.target.value)} />
                </div>
                <button type="submit">Crear Publicación</button>
            </form>
        </div>
    );
};

export default CrearPublicacion;
