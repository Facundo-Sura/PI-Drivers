import axios from "axios";
import { URL_BASE } from "../endpoints";
import {useDispatch} from "react-redux"
import { getTeams } from "../redux/actions/getTeams";

const getAllTeam = () =>{
    
    const getAllTeams = ()=>{
    const dispatch = useDispatch();
    axios(`${URL_BASE}/teams`)
    .then(({data})=>{
        dispatch(getTeams(data))
    })
    .catch(error=>{
        window.alert(`Algo salio mal: ${error.message}`)
    })
}
return {
    getAllTeams
}
}
export default getAllTeam