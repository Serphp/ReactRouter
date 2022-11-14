import { Outlet, Navigate } from "react-router-dom";
import { uuContext } from "../context/UserContext";

const Admin = () => {

    const { user } = uuContext();
    const Serphreturn = Navigate;
    
    return (
        <>
            {/* <Outlet />*/}
            {user ? <Outlet/> : <Serphreturn to="/"></Serphreturn>}
        </>
    )
};

export default Admin;
