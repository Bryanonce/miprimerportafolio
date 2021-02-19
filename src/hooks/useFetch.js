import React,{useState,useEffect} from 'react';

export const useFetch = (initialUrl=null)=>{
    const [loadind,setLoading] = useState(false);
    const [url,setUrl] = useState(initialUrl);
    const [data,setData] = useState({});
    useEffect(()=>{
        if(url){
            fetch(url)
            .then((res)=>{
                return res.json()
            })
            .then((res)=>{
                if(res.ok){
                    setData(res.data)
                    setLoading(true)
                }
            })
        }        
    },[url])

    return [data,loadind];
}