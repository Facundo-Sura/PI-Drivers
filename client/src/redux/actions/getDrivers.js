import {URL_BASE} from "../../endpoints";
import axios from "axios"

export const GET_DRIVERS = "GET_DRIVERS";

export const getDrivers = () =>{
    return async (dispatch) =>{
        const {data} = await axios(URL_BASE);
        const dbdrivers = data.filter(driver=> driver.id.length == 36)
        const apidrivers = data.filter(driver=> driver.id.length !== 36)
        dispatch({
            type: GET_DRIVERS,
            payload: {apidrivers,dbdrivers}
        })
    }
}