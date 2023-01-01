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
            <ul> 
            <NavLink className="pt" to="/"> Home </NavLink> 
            {/*Invitado */}
            {user || 
            (<> {/*onClick={login}*/}
            <NavLink className="pt" to="/RegistroUser"> Registro </NavLink>
            <NavLink className="pt" to="/SesionUser"> {'>'}Login </NavLink>
            </>)
            }
            {/*Registrado */}
            {user && 
                (<> 
                    <NavLink className="pt" to="/dashboard"> Dashboard</NavLink> 
                    <NavLink className="outline" onClick={() => setUser(false)}> {'>'}Logout </NavLink>
                </>)   
            }
            </ul>
        </nav>
        </>
    );
};

export default Navbar;
