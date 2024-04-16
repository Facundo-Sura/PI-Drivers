import axios from "axios";
import { URL_BASE } from "../endpoints";

export const handle = (event,cb) =>{
    const value = event.target.value 
    cb(value)
}

export const handleSubmit = (event,form,errors) => {
    event.preventDefault();
    const {name,nationality,teams,lastName,dob,description,image} = errors;
    if(![name,lastName,nationality,teams,dob,description,image].some(error=>Boolean(error))){
    axios.post(URL_BASE,form)
    .then(response=>{
        window.alert(response.request.statusText)
    })
    .catch(error=>{
        window.alert(error.response.data.error)
    })
    }else{
        window.alert("No mandar cualquier cosa")
    }
}
