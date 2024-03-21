import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const InicioSesion = () => {
    const [usuario, setUsuario] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [olvidarContraseña, setOlvidarContraseña] = useState(false);
    const [registroAcademico, setRegistroAcademico] = useState('');
    const [correoElectronico, setCorreoElectronico] = useState('');
    const [nuevaContraseña, setNuevaContraseña] = useState('');
    const [contraseñaRestablecida, setContraseñaRestablecida] = useState(false);
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Iniciando sesión con usuario:', usuario);
        console.log('Contraseña:', contraseña);

        history.push('/pantalla-inicial/perfil-usuario');
    };

    const handleOlvidarContraseña = () => {
        setOlvidarContraseña(true);
    };

    const handleRestablecerContraseña = (event) => {
        event.preventDefault();
        console.log('Restableciendo contraseña para el usuario:', registroAcademico);
        console.log('Correo electrónico:', correoElectronico);
        console.log('Nueva contraseña:', nuevaContraseña);

       
        setContraseñaRestablecida(true);
        setTimeout(() => {
            setContraseñaRestablecida(false);
            setOlvidarContraseña(false); 
        }, 3000); 
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
            <p>
                <button onClick={handleOlvidarContraseña}>¿Olvidé mi contraseña?</button>
            </p>
            {olvidarContraseña && (
                <div>
                    <h2>Restablecer Contraseña</h2>
                    <form onSubmit={handleRestablecerContraseña}>
                        <div>
                            <label>Registro Académico:</label>
                            <input type="text" value={registroAcademico} onChange={(e) => setRegistroAcademico(e.target.value)} />
                        </div>
                        <div>
                            <label>Correo Electrónico:</label>
                            <input type="email" value={correoElectronico} onChange={(e) => setCorreoElectronico(e.target.value)} />
                        </div>
                        <div>
                            <label>Nueva Contraseña:</label>
                            <input type="password" value={nuevaContraseña} onChange={(e) => setNuevaContraseña(e.target.value)} />
                        </div>
                        <button type="submit">Restablecer Contraseña</button>
                    </form>
                    {contraseñaRestablecida && (
                        <p style={{ fontSize: 'small', color: 'green' }}>Contraseña restablecida con éxito. Por favor, inicia sesión nuevamente.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default InicioSesion;
