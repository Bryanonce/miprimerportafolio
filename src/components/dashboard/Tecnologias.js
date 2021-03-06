import React,{useState,useEffect} from 'react'
import { ContentEntradas } from './ContentEntradas'
import { Dashboard } from './Dashboard'
import {env_url} from '../../config/enviroments';
import axios from 'axios';
import { useForm } from '../../hooks/useForm';

export const Tecnologias = () => {
    const [formState, handleInputState] = useForm({
        name: '',
        type: '',
        description: '',
        image: ''
    })
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get(`${env_url}/knowledges`)
        .then((res)=>{
            return res.data
        })
        .then((res)=>{
            if(res.ok){
                setData(res.data);
                setLoading(false);
            }
        })
    },[])
    return (
        <div className="login gradiente h-100">
            <div className="container h-100">
                <Dashboard />
                <ContentEntradas 
                    contenidos={
                        [
                            {label: 'Nombre', name: 'name',},
                            {label: 'Stack', name: 'type',},
                            {label: 'Descripción', name: 'description',},
                            {label: 'Imagen', name: 'image',}
                        ]
                    }
                    relaciones={
                        [
                            {label: 'Título', name: 'title',},
                            {label: 'Descripción', name: 'description',},
                            {label: 'Imagen', name: 'image',},
                            {label: 'Url', name: 'url',}
                        ]
                    }
                    loading={loading}
                    data={data}
                    formState={formState} 
                    handleInputState={handleInputState}
                    clave="id_project"
                />
            </div>
        </div>
    )
}
