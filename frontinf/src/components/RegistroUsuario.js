import React, { useState } from 'react';
import './RegistroUsuario.css'; // Archivo de estilos CSS personalizado
import InicioSesion from './InicioSesion'; // Importa el componente InicioSesion

const RegistroUsuario = () => {
    const [mostrarInicioSesion, setMostrarInicioSesion] = useState(false); // Estado para controlar si se muestra el componente InicioSesion

    const handleIniciarSesion = () => {
        setMostrarInicioSesion(true); // Al hacer clic en "Iniciar sesión", mostramos el componente InicioSesion
    };

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

    const [registroAcademico, setRegistroAcademico] = useState('');
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [correo, setCorreo] = useState('');

    return (
        <div className="registro-container">
            <h2 className="registro-title">Registro de Usuario</h2>
            <form onSubmit={handleSubmit} className="registro-form">
                <div className="registro-input-container">
                    <label className="registro-label">Registro Académico:</label>
                    <input type="text" className="registro-input" value={registroAcademico} onChange={(e) => setRegistroAcademico(e.target.value)} />
                </div>
                <div className="registro-input-container">
                    <label className="registro-label">Nombres:</label>
                    <input type="text" className="registro-input" value={nombres} onChange={(e) => setNombres(e.target.value)} />
                </div>
                <div className="registro-input-container">
                    <label className="registro-label">Apellidos:</label>
                    <input type="text" className="registro-input" value={apellidos} onChange={(e) => setApellidos(e.target.value)} />
                </div>
                <div className="registro-input-container">
                    <label className="registro-label">Contraseña:</label>
                    <input type="password" className="registro-input" value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
                </div>
                <div className="registro-input-container">
                    <label className="registro-label">Correo electrónico:</label>
                    <input type="email" className="registro-input" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                </div>
                <button type="submit" className="registro-submit-button">Registrarse</button>
            </form>
            <p className="registro-login-text">¿Ya tienes una cuenta? <button className="registro-login-button" onClick={handleIniciarSesion}>Iniciar sesión</button></p>
            {mostrarInicioSesion && <InicioSesion />} {/* Mostrar el componente InicioSesion si mostrarInicioSesion es true */}
        </div>
    );
};

export default RegistroUsuario;
