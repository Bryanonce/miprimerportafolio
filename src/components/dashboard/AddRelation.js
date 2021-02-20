import React from 'react'

export const AddRelation = ({dataRel=[{name:'Angular',id_project: 0},{name:'React', id_project:1},{name:'Vue JS',id_project:2}]}) => {
    return (
        <div className="form-select">
            <h2>Formulario para añadir relaciones</h2>
            <select defaultValue="DEFAULT">
                <option value='DEFAULT' disabled>
                    {'<--Seleccione Tecnologia-->'}
                </option>
                {
                    dataRel.map((tecnologia,index)=>{
                        const {name, id_project} = tecnologia
                        return (
                            <option key={index} value={id_project}>
                                {name}
                            </option>        
                        );
                    })
                }
            </select>
            <button>Guardar Relación</button>
        </div>
    )
}
