import axios from "axios";

const Registro = () => {

    const SerphSumit = async() => {
        try {
            const los = await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB7WbedVpMk1dBnjpttkPn1vi-cid1Z9rg",
            {
                email: "text2@test.com",
                password: "1234567",
                returnSecureToken: true,
            }); console.log(los);
        } catch (error) {
            console.log(error)
        }
    };

    
    return (
    <>

    <hgroup>
    <h2> Registro </h2>
    <h3> Registrate para ver  </h3>
    </hgroup>
    
    <button onClick={SerphSumit}> Register  </button>
    </>)
}

export default Registro;