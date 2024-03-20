import React, { useState } from 'react';

const RegistroUsuario = () => {
    const [registroAcademico, setRegistroAcademico] = useState('');
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [correo, setCorreo] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes agregar la lógica para enviar los datos del formulario al servidor
        // Por ahora, solo mostraremos los datos en la consola
        console.log('Registro Académico:', registroAcademico);
        console.log('Nombres:', nombres);
        console.log('Apellidos:', apellidos);
        console.log('Contraseña:', contraseña);
        console.log('Correo electrónico:', correo);
    };

    const handleIniciarSesion = () => {
        // Aquí puedes agregar la lógica para redirigir a la página de inicio de sesión
        console.log('Redirigiendo a la página de inicio de sesión...');
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Registro de Usuario</h2>
            <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
                <div>
                    <label>Registro Académico:</label>
                    <input type="text" value={registroAcademico} onChange={(e) => setRegistroAcademico(e.target.value)} />
                </div>
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
            <p style={{ marginTop: '20px' }}>¿Ya tienes una cuenta? <button onClick={handleIniciarSesion}>Iniciar sesión</button></p>
        </div>
    );
};

export default RegistroUsuario;
