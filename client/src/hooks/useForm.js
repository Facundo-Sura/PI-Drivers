import { useState } from "react"
import validates from "./validates";

const useForm = () => {

    const [form, setForm] = useState({
        name: "",
        lastName: "",
        nationality: "",
        dob: "",
        teams: [],
        description: "",
        image: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        lastName: "",
        nationality: "",
        dob: "",
        teams: "",
        description: "",
        image: "",
    });

    const handleForm = (event) => {
        const value = event.target.value;
        const property = event.target.name;
        setForm({
            ...form,
            [property] : value
        })
        validates({...form,[property]:value},errors,setErrors,property)
    };
    

    return {
        form,
        setForm,
        handleForm,
        errors,
        setErrors,
    }


}

export default useForm