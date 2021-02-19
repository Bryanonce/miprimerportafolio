import React from 'react';
//import css
import './Knowledge.css'
// custom hook
import {useFetch} from '../../hooks/useFetch';
// import url_env
import {env_url} from '../../config/enviroments';

export const Knowledge = ()=>{
    const [frontend,loadingFrontend] = useFetch(`${env_url}/knowledges/front`);
    const [backend,loadingBackend] = useFetch(`${env_url}/knowledges/back`);

    return (
        <div className="h-100 gradiente">
            <div className="container h-100">
                <div className="front">
                    <h2>Frontend</h2>
                    <div className="logos-container"> 
                        {
                            loadingFrontend?
                                frontend.map((element,index)=>{
                                    return(
                                            <div className="ubicador" key={index}>
                                                <img className="logo-tech" src={`${env_url}${element.image}`} alt={element.name}/>
                                            </div>
                                    );
                                })
                            :
                                null
                        }
                    </div>
                </div>
                <div className="back">
                    <h2>Backend</h2>
                    <div className="logos-container"> 
                        {
                            loadingBackend?
                                backend.map((element,index)=>{
                                    return(
                                        <div className="ubicador" key={index}>
                                            <img className="logo-tech" src={`${env_url}${element.image}`} alt={element.name}/>
                                        </div>
                                    );
                                })
                            :
                                null
                        }
                    </div>
                </div>
            </div>
            
        </div>
    );
}