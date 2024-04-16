import { useDispatch, useSelector } from "react-redux";
import { filByOrigin } from "../redux/actions/filByOrigin";
import { filterValue } from "../redux/actions/filterValue";



const useFilByOrigin = () =>{
    const dispatch = useDispatch()
    const aux = useSelector(state => state.aux)
    const filByOr = (value) => {
        if(value == "api"){
            const filt = aux.filter(driver=>{
               return driver.id.length !== 36
            })
            dispatch(filByOrigin(filt))
        }else if(value =="db"){
            const filt = aux.filter(driver=>{
                return driver.id.length == 36
            });
            dispatch(filByOrigin(filt))
        }else{
            dispatch(filByOrigin(aux))
        }
        dispatch(filterValue(value))
    }
    return {
        filByOr
    }
};

export default useFilByOrigin