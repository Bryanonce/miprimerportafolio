import React,{useEffect} from 'react'
import Typewriter from 'typewriter-effect/dist/core';
//import css
import './Home.css';

export const Home = ()=>{
    useEffect(()=>{
        const app = document.getElementById('item_1')
        const typewriter = new Typewriter(app, {
            loop: true,
            delay: 100,
        });
        
        typewriter
            .typeString('Telecomunicaciones')
            .pauseFor(2500)
            .deleteChars(18)
            .typeString('Software')
            .pauseFor(2500)
            .deleteChars(8)
            .start();

        const app2 = document.getElementById('item_2')
        const typewriter2 = new Typewriter(app2, {
            loop: true,
            delay: 100,
            });
            
            typewriter2
                .typeString('Frontend')
                .pauseFor(2500)
                .deleteChars(8)
                .typeString('Backend')
                .pauseFor(2500)
                .deleteChars(7)
                .typeString('Full Stack')
                .pauseFor(2500)
                .deleteChars(10)
                .start();
    },[])
        
    
    return (
        <div className="home gradiente h-100">
            <div className="container h-100">
                <aside className="home-info">
                    <h2>Bryan Cedeño</h2>
                    <p>Ingeniero de <span id="item_1"></span> </p>
                    <p>Desarrollador Web <span id="item_2"></span></p>
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