import axios from "axios";
import { URL_BASE } from "../../endpoints";

export const GET_TEAMS = "GET_TEAMS";

export const getTeams = () => {
    return async (dispatch) =>{
        const {data} = await axios(`${URL_BASE}/teams`);
        dispatch({
            type: GET_TEAMS,
            payload: data
        })
    } 
}