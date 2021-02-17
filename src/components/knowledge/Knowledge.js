import React, { useState } from 'react';
//import css
import './Knowledge.css'
import {back, front} from './response';

export const Knowledge = ()=>{
    const [fadeIn,setFadeIn] = useState('popup');
    const frontend = front();
    const backend = back();
    
    const popupTech = ()=>{
        switch(fadeIn){
            case 'popup':
                setFadeIn('show-popup');
                break;
            default:
                setFadeIn('popup')
                break;
        }
    }

    return (
        <div className="h-100 gradiente">
            <div className="container h-100">
                <div className="front">
                    <h2>Frontend</h2>
                    <div className="logos-container"> 
                        {
                            frontend.map((element,index)=>{
                                const {name,img,describe} = element
                                return(
                                        <div onClick={popupTech} className="ubicador" key={index}>
                                            <img className="logo-tech" src={img} alt={name} />
                                            <span className={fadeIn}>{describe}</span>
                                        </div>
                                );
                            })
                        }
                    </div>
                </div>
                <div className="back">
                    <h2>Backend</h2>
                    <div className="logos-container"> 
                        {
                            backend.map((element,index)=>{
                                const {name,img,describe} = element
                                return(
                                    <div onClick={popupTech} className="ubicador" key={index}>
                                        <img className="logo-tech" src={img} alt={name} />
                                        <span className={fadeIn}>{describe}</span>
                                    </div>
                            );
                            })
                        }
                    </div>
                </div>
            </div>
            
        </div>
    );
}