import React from 'react'
//import css
import './Home.css';

export const Home = ()=>{
    return (
        <div className="home gradiente h-100">
            <div className="container h-100">
                <aside className="home-info">
                    <h2>Bryan Cedeño</h2>
                    <p>Ingeniero de Telecomunicaciones</p>
                    <p>Desarrollador Web</p>
                    <button>Contáctame</button>
                </aside>
                <section className="news">
                    <div>
                        <h2>Últimas Actualizaciones</h2>
                    </div>
                </section>
            </div>
        </div>
    );
}