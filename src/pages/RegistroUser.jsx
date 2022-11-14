//import axios from "axios";
import { useState } from "react";
import { crearUser } from "../Api/Auth";

const RegistroUser = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const SerphSubmit = async(e) => {
        e.preventDefault();
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
        <button onClick={SerphSubmit}> registrarme </button>
    </form>
    
    </>)
}

export default RegistroUser;