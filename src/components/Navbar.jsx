import { useContext } from "react";
import { NavLink } from "react-router-dom";
//import { usercontext } from "../context/UserContext";
import { uuContext } from "../context/UserContext";

const Navbar = () => {

    const login = () => {
        //name: "Bryan",
        //email: "Bryan@hotmail.com"
        setUser(true)
    }

    const { user, setUser } = uuContext();
    //console.log(useContext(usercontext))
    return (
        <>
        <nav className="breadcrumb container mb">
            <ul>
            <li id=""><kbd>{'>'} SerphpRoute</kbd></li>
            </ul>
            <ul className="padding"> 
            <NavLink className="pt" to="/"> Home </NavLink> 
            {/*Invitado */}
            {user || 
            (<> 
            <NavLink className="pt" to="/RegistroUser"> Registro </NavLink>
            <NavLink className="pt" role="button" onClick={login}> {'>'}Login </NavLink>
            </>)
            }
            {/*Registrado */}
            {user && 
                (<> 
                    <NavLink className="pt" to="/dashboard"> Dashboard</NavLink> 
                    <NavLink role="button" className="outline" onClick={() => setUser(false)}> {'>'}Logout </NavLink>
                </>)   
            }
            </ul>
        </nav>
        </>
    );
};

export default Navbar;
