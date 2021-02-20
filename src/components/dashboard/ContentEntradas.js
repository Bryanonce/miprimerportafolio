import React, { useEffect, useState } from 'react'
import { ContentArray } from './ContentArray';

export const ContentEntradas = ({contenidos,relaciones,loading,data,clave,handleInputState}) => {
    const [count, setCount] = useState(0);
    const [relForm,setRelForm] = useState(false);
    return (
        (!loading && data )?
        <div className="content-entr">
            <div className="col-md-6">
                <div className="form-container">
                    <div className="form-control">
                        {
                            contenidos.map((contenido,index)=>{
                                const {name,label} = contenido
                                return (
                                    <div key={index} className="form-admin">
                                        <label>{label}</label>
                                        {
                                            !(name === 'description')? <input onChange={handleInputState} type="text" name={name} value={data[count][name]} /> : <textarea onChange={handleInputState} name={name} value={data[count][name]} ></textarea>
                                        } 
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div className="btn-content">
                        <div className="btn-action">
                            <button>Nuevo</button>
                            <button>Editar</button>
                            <button>Eliminar</button>
                        </div>
                        <div className="directores">
                            <button>{'<<'}</button>
                            <button>{'<'}</button>
                            <button>{'>'}</button>
                            <button>{'>>'}</button>
                        </div>
                        <button onClick={()=>{return setRelForm((form)=>{
                            return !form
                        })}} className="btn-block">{relForm? 'Cancelar Relacion': 'Nueva Relacion'}</button>
                    </div>
                </div>
            </div>
            <div className="col-md-6 relations flex-column">
                <ContentArray dataRel={data[count][clave]} relForm={relForm} relaciones={relaciones} />
            </div>
        </div>
        :
        null
    )
}
