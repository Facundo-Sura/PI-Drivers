export const GET_DETAIL = "GET_DETAIL";

export const getDetail = (driver) => {
    return{
        type: GET_DETAIL,
        payload: driver
    }
}