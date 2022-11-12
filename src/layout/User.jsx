import { Outlet } from "react-router-dom";
//import Footer from "../components/footer";
import Navbar from "../components/Navbar";

const User = () => {
    return (
        <main className="amp-dark-mode amp-mode-mouse container">
            <Navbar />
            
            <Outlet />

            <article className="cc"> footer </article>
        </main>
    );
};
export default User;
