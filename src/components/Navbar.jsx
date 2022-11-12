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
            <NavLink to="/"> Home </NavLink> / 
            {user && <NavLink to="/dashboard"> Dashboard</NavLink>}
            </ul>
        </nav>
        </>
    );
};

export default Navbar;
