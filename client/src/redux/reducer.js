import { GET_DRIVERS } from "./actions/getDrivers";
import { SEARCH_DRIVER } from "./actions/searchDriver";
import { GET_BY_FILTER } from "./actions/filByOrigin";
import { GET_TEAMS } from "./actions/getTeams";
import { FILTER_VALUE } from "./actions/filterValue";
import { STATE_FILTER } from "./actions/stateFilters";
import { KEEP_STATE } from "./actions/keepState";
import { FILTERNAT } from "./actions/filterByNat";

const initialState = {
    driversHome : [],
    aux: [],
    teams: [],
    dbdrivers : [],
    apidrivers : [],
    valueFil: "all",
    stateFilter: 1,
    statePrevNext:1
};

const reducer = (state=initialState, {type,payload}) => {
    switch(type){
        case GET_DRIVERS:{
            const {apidrivers,dbdrivers} = payload
            return {
                ...state,
                driversHome:[...state.driversHome, ...dbdrivers, ...apidrivers],
                aux:[...state.driversHome, ...dbdrivers, ...apidrivers],
                apidrivers:[...apidrivers],
                dbdrivers: [...dbdrivers]
            } 
        }
        case SEARCH_DRIVER:{
            return {
                ...state,
                driversHome:[...payload]
            }
        }
        case GET_BY_FILTER:{
            return{
                ...state,
                driversHome:[...payload]
            }
        }
        case GET_TEAMS:{
            return{
                ...state,
                teams:[...payload]
            }
        }
        case FILTER_VALUE:{
            return{
                ...state,
                valueFil: payload
            }
        }
        case STATE_FILTER:{
            return{
                ...state,
                stateFilter:payload
            }
        }
        case KEEP_STATE:{
            return{
                ...state,
                statePrevNext:payload
            }
        }
        case FILTERNAT:{
            return{
                ...state,
                driversHome:payload
            }
        }
        default:{
            return{...state}
        }
    }
}

export default reducer