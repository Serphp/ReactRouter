import { uuContext } from "../context/UserContext";


const Dashboard = () => {

    const { user } = uuContext;

    return (<>

    <hgroup>
    <h2> Admin </h2>
    <h3> Tablero de  </h3>
    </hgroup>
    {user || <h1> Bienvenido </h1> }
    <blockquote> Hola </blockquote>
    </>)
};

export default Dashboard;
