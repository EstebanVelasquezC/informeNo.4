import React, { useState } from 'react';

const RegistroUsuario = () => {
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [correo, setCorreo] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes agregar la lógica para enviar los datos del formulario al servidor
        // Por ahora, solo mostraremos los datos en la consola
        console.log('Nombres:', nombres);
        console.log('Apellidos:', apellidos);
        console.log('Contraseña:', contraseña);
        console.log('Correo electrónico:', correo);
    };

    return (
        <div>
            <h2>Registro de Usuario</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombres:</label>
                    <input type="text" value={nombres} onChange={(e) => setNombres(e.target.value)} />
                </div>
                <div>
                    <label>Apellidos:</label>
                    <input type="text" value={apellidos} onChange={(e) => setApellidos(e.target.value)} />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
                </div>
                <div>
                    <label>Correo electrónico:</label>
                    <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                </div>
                <button type="submit">Registrarse</button>
            </form>
        </div>
    );
};

export default RegistroUsuario;
