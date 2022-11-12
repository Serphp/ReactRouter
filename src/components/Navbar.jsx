import { useContext } from "react";
import { NavLink } from "react-router-dom";
//import { usercontext } from "../context/UserContext";
import { uuContext } from "../context/UserContext";

const Navbar = () => {

    const { user, setUser } = uuContext();
    //console.log(useContext(usercontext))
    return (
        <>
        <nav className="breadcrumb container mb">
            <ul>
            <li id="logo"><strong>Serphp Route </strong></li>
            </ul>
            <ul className="padding"> 
            <NavLink className="pt" to="/"> Home </NavLink> / 
            {user && 
                (<> 
                    <NavLink className="pt" to="/dashboard"> Dashboard</NavLink> 
                    <NavLink role="button" className="outline" onClick={() => setUser(false)}> Logout </NavLink>
                </>)   
            }
            </ul>
        </nav>
        </>
    );
};

export default Navbar;
