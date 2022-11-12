import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
        <nav className="breadcrumb container">
            <ul>
            <li><strong>OL </strong></li>
            </ul>
            <ul> 
            <NavLink to="/"> Home </NavLink> / 
            <NavLink to="/dashboard"> Dashboard</NavLink>
            </ul>
        </nav>
        </>
    );
};

export default Navbar;
