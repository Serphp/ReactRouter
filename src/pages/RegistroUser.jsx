//import axios from "axios";
import { useState } from "react";
import { crearUser } from "../Api/Auth";

const RegistroUser = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null); // Estado del mensaje de error

    const SerphSubmit = async(e) => {
        e.preventDefault();
        if (!emailValidator.validate(email)) {
            setError('Por favor ingrese un correo electrónico válido');
        } else {
            setError(null);
        }
        try {
            const data = await crearUser({
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
    <h2> Registro </h2>
    <h3> Registrate para ver ss </h3>
    </hgroup>
    <form> 
        <div className="grid">
        {error && <div className="Highlighted">{error}</div>}
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
        <label className="password">
            Password
        <input type="password" id="password" 
        name="password" 
        value={password} onChange={e => setPassword(e.target.value)} 
        placeholder="Password"></input>
        </label>
        <button onClick={SerphSubmit}> <b>Registrar</b> </button>
    </form>
    
    </>)
}

export default RegistroUser;