import {useState} from 'react';

export const useForm = (initialValue={
    email: '',
    password: ''
})=>{
    const [form, setForm] = useState(initialValue);
    const handleInputChange=({target})=>{
        const {name,value} = target
        setForm({
            ...form,
            [name]: value
        })
    }
    return [form,handleInputChange];
}