import axios from "axios";
import { useState } from "react";
import { URL_QUERY } from "../endpoints";
import {useDispatch} from "react-redux";
import { searchDriver } from "../redux/actions/searchDriver";


const useSearch = () => {
    const dispatch = useDispatch();
    const [input,setInput] = useState("");
    
    const handleSearch = async () => {
        const {data} = await axios(`${URL_QUERY}${input}`);
        dispatch(searchDriver(data));
    }
    return{
        input,
        setInput,
        handleSearch
    }
}

export default useSearch