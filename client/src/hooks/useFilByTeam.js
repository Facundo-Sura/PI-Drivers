import { useSelector , useDispatch} from "react-redux";
import { filByOrigin } from "../redux/actions/filByOrigin";

const useFilByTeam = () => {
    const apidrivers = useSelector(state=>state.apidrivers);
    const dbdrivers = useSelector(state=>state.dbdrivers);
    const valueFil = useSelector(state=> state.valueFil)
    const aux = useSelector(state=> state.aux)
    const dispatch = useDispatch();

    const filterTeam = (value) =>{
        if(valueFil=="all"){
            const filt = aux.filter(driver=>{
                return driver.teams?.includes(value)
            })
            dispatch(filByOrigin(filt))
        }
        if(valueFil == "api"){
        const filt = apidrivers.filter(driver=>{
            return driver.teams?.includes(value);
        })
        dispatch(filByOrigin(filt))
        };
        if(valueFil == "db"){
            const filt = dbdrivers.filter(driver=>{
                return driver.teams?.includes(value)
            })
            dispatch(filByOrigin(filt))
        }
    }
    return{
        filterTeam
    }
};

export default useFilByTeam