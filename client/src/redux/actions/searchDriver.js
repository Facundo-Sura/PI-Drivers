export const SEARCH_DRIVER = "SEARCH_DRIVER";

export const searchDriver = (drivers) => {
    return{
        type: SEARCH_DRIVER,
        payload: drivers
    }
}