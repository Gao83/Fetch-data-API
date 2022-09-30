import React from 'react'
import './Home.css'
import { BsLinkedin, BsGithub } from 'react-icons/bs'


function Home() {
    return (
        <div className="home_container">
            <header>
                <div className='img_container'>
                    <img src="https://mj-gallery.com/3bf8f68e-8eac-486d-bbc1-11208f25793f/grid_0.png" alt="" />
                </div>
                <div>
                    <h1>
                        Technical Challenge BeChiara:
                    </h1>
                    <h2>
                        "Fetch Data from an API"
                    </h2>
                    <p>Para la consecución del challenge, he creado un componente Post.jsx donde a través de el hook useFetch,
                        se obtienen los datos de la API. Además se han creado dos componentes más para mostrar un spinner en
                        caso de  que los datos tarden en llegar así como hacer una paginación y segmentar los datos de la API. 
                        También,  en caso de error, aparece un mensaje y botón para volver atras. </p>
                </div>

            </header>
            <section >
                <div className='info_container'>
                    <h3>
                        Isaac Miralles Roger
                    </h3>
                    <div className='header__socials'>
                        <a href="https://www.linkedin.com/in/isaac-miralles/" target="_blank"> <BsLinkedin /></a>
                        <a href="https://github.com/Gao83" target="_blank"> <BsGithub /> </a>
                    </div>
                </div>
                <div class="button_container">
                    <a href='/post/#' class="btn btn-three">
                        <span>Fetch the data</span>
                    </a>
                </div>
            </section>
        </div>
    )
}

export default Home