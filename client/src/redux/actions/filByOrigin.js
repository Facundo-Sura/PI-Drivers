export const GET_BY_FILTER = "GET_BY_FILTER";

export const filByOrigin = (drivers) => {
    return{
        type: GET_BY_FILTER,
        payload: drivers
    }
}