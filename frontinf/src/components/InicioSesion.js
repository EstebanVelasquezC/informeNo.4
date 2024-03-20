import React, { useState } from 'react';

const InicioSesion = () => {
    const [usuario, setUsuario] = useState('');
    const [contraseña, setContraseña] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes agregar la lógica para iniciar sesión
        console.log('Iniciando sesión con usuario:', usuario);
        console.log('Contraseña:', contraseña);
    };

    return (
        <div className="inicio-sesion-container">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Usuario:</label>
                    <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
                </div>
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default InicioSesion;