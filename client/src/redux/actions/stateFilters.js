export const STATE_FILTER = "STATE_FILTER";

export const stateFiltered = (state) => {
    return{
        type:STATE_FILTER,
        payload:state
    }
}