import React,{useState,useEffect} from 'react';
//import axios
import axios from 'axios';
//impor context
import {AuthContext} from './AuthContext';
//import custom hook
import { useForm } from '../../hooks/useForm';
//import enviroments
import {login_env} from '../../config/enviroments';

export const AuthState = (props)=>{
    const [isloged,setIsLoged] = useState(false);
    const [form,handleInputChange] = useForm();
    const [token,setToken] = useState('');
    useEffect(()=>{
        const tokenStorage = localStorage.getItem('tokenPortfolio');
        if(tokenStorage){
            setToken(tokenStorage)
            setIsLoged(true)
        }
    },[])
    const login = ()=>{
        try{
            axios
            .post(login_env,form)
            .then((res)=>{
                return res.data
            })
            .then((res)=>{
                if(res.ok){
                    const tokenStorage = res.data.token;
                    localStorage.setItem('tokenPortfolio',tokenStorage);
                    setIsLoged(true)
                }
            })
        }catch(err){
            console.log(err)
        }
    }
    return (
        <AuthContext.Provider
            value={{
                form,
                handleInputChange,
                token,
                isloged,
                login
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}