import React, { Fragment, useState } from 'react'
import { AddRelation } from './AddRelation';

export const ContentArray = ({relaciones,dataRel,relForm=false}) => {
    return (
        <div className="form-container">
                {
                    !relForm? 
                    
                                    dataRel.map((data)=>{
                                        return <Fragment>
                                                <div className="form-control">
                                                    {
                                                        relaciones.map((relacion,index)=>{
                                                            const {name,label} = relacion
                                                            console.log(data[name])
                                                            return (
                                                                <div key={index} className="form-admin">
                                                                    <label>{label}</label>
                                                                    {
                                                                        !(name === 'description')? <input type="text" name={name} value={data[name]} disabled /> : <textarea disabled name={name} value={data[name]}></textarea>
                                                                    } 
                                                                </div>
                                                            );
                                                        })
                                                    }
                                                </div>
                                                <div className="btn-content">
                                                    <div className="btn-action">
                                                        <button className="btn-block">Eliminar</button>
                                                    </div>
                                                </div>
                                            </Fragment>
                                    })
                            
                    :
                        <AddRelation dataRel={dataRel}/>
                }
                    
        </div>
    )
}
