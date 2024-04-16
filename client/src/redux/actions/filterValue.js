export const FILTER_VALUE = "FILTER_VALUE";

export const filterValue = (value) =>{
    return{
        type: FILTER_VALUE,
        payload: value
    }
} 