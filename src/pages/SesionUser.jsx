//import axios from "axios";
import { useState } from "react";
import { IniciarUser } from "../Api/Auth";

const SesionUser = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const SerphSubmit = async(e) => {
        e.preventDefault();
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
    <form> 
        <div className="grid">
            <label class="email">
                Email
                <input type="email" 
                id="email" 
                name="email" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                placeholder="Email Andress" required></input>
            </label>
        </div>
        <label class="password">
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