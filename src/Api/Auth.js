import axios from "axios";

export const crearUser = async({email, password}) => {
        const {data} = await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB7WbedVpMk1dBnjpttkPn1vi-cid1Z9rg",
        {
            email,
            password,
            returnSecureToken: true,
        }) 
        return data;
    };

    export const IniciarUser = async({email, password}) => {
        const {data} = await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB7WbedVpMk1dBnjpttkPn1vi-cid1Z9rg",
        {
            email,
            password,
            returnSecureToken: true,
        }) 
        return data;
    };