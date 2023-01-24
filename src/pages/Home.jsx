import '../styles/Home.css'
import React from 'react'

export default function Home() {
return (
    <main>
    <div className='home-cc'>
    <div className='text-cc'>
        <h1>DISCOVER YOUR NEXT AMIIBO</h1>
        <div className='description-container'>
            <p>Disponible en las principales tiendas de aplicaciones digitales</p>
            <button className='purple-btn'>SEE THE CATALOGUE</button>
        </div>
    </div>
        <img className='gba' src="/img/gba.png" alt="" />
</div>
</main>
)
}


// const Home = () => {
//     return (
//         <>
//         <hgroup>
//         <h2> Home {import.meta.env.API_APP_SERPHP}</h2>
//         <h3> Inicio de la pagina </h3>
//         </hgroup>

//         <div className="img">
//             <img className="rd" src="https://i.imgur.com/jM3Nvp8.jpeg" alt="" />
//             </div>
//         <blockquote className="cc">
//         "Un origami que encontre por ahi, blanco como papel."
//         <footer>
//         <cite>- Bryan</cite>
//         </footer>
//         </blockquote>
//         </>
//     )
// };

// export default Home;
