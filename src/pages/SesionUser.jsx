//import axios from "axios";
import { useState } from "react";
import { IniciarUser } from "../Api/Auth";
import { Form, Button, Alert } from 'react-bootstrap';
import emailValidator from 'email-validator';

const SesionUser = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [errorp, setErrorp] = useState(null);


    const SerphSubmit = async(e) => {
        e.preventDefault();
        // TEST DE EMAIL
        if (!emailValidator.validate(email)) {
            setError('Por favor ingrese un correo electrónico válido');
        } else {
            setError(null);
        }
        if (password.length < 8) {
            setErrorp('La contraseña debe tener al menos 8 caracteres');
        } else if (!/[A-Z]/.test(password) || !/\d/.test(password)) {
            setErrorp('La contraseña debe tener al menos una letra mayúscula y un número');
        } else {
            setErrorp(null);
        }
        // INIT DATOS
        try {
            const data = await IniciarUser({
                email: email,
                password: password,
            });
        console.log(data)
        } catch (error) {
            console.log(error)
        }
    };

    return (
    <>

    <hgroup>
    <h2> Inicio de sesion </h2>
    <h3> Ingresa con tu cuenta </h3>
    </hgroup>

    <div className="containersp">
    {error && <div className="alert">{error}</div>}
    </div>
    
    <form> 
        <div className="grid">
            <label className="email">
                Email
                <input type="email" 
                id="email" 
                name="email" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                placeholder="Email Andress" required></input>
            </label>
        </div>

        <div className="containersp">
        {errorp && <div className="alert">{errorp}</div>}
        </div>

        <label className="password">
            Password
        <input type="password" id="password" 
        name="password" 
        value={password} onChange={e => setPassword(e.target.value)} 
        placeholder="Password"></input>
        </label>
        <button onClick={SerphSubmit}> Iniciar </button>
    </form>
    
    </>)
}

export default SesionUser;