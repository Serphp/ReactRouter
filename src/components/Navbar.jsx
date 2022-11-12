import { useContext } from "react";
import { NavLink } from "react-router-dom";
//import { usercontext } from "../context/UserContext";
import { uuContext } from "../context/UserContext";

const Navbar = () => {

    const { user, setUser } = uuContext();
    //console.log(useContext(usercontext))
    return (
        <>
        <nav className="breadcrumb container">
            <ul>
            <li><strong>OL </strong></li>
            </ul>
            <ul> 
            <NavLink to="/"> Home </NavLink> / 
            {user && <NavLink to="/dashboard"> Dashboard</NavLink>}
            </ul>
        </nav>
        </>
    );
};

export default Navbar;
