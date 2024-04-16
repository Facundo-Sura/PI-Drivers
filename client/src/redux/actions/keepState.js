export const KEEP_STATE = "KEEP_STATE";

export const keepStatePyN = (value) => {
    return{
        type: KEEP_STATE,
        payload: value
    }
}