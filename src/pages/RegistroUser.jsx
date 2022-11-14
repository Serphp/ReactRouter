import axios from "axios";
import { crearUser } from "../Api/Auth";

const RegistroUser = () => {

    const SerphSumit = async() => {
        try {
            const data = await crearUser({
                email,
                password,
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
    
    <button onClick={SerphSumit}> Register  </button>
    </>)
}

export default RegistroUser;