import { useSelector,useDispatch } from "react-redux"
import { filByOrigin } from "../redux/actions/filByOrigin";


const useFil = () => {
    const driversHome = useSelector(state =>state.driversHome);
    const dispatch = useDispatch();
    let arr = [...driversHome]
    
    const orderByAlpha = (value) =>{
        switch(value){
          case "asbyalfa": arr.sort((a,b)=>a.name.localeCompare(b.name,"es",{sensitivity:"accent"})) 
          break;
          case "desbyalfa": arr.sort((a,b)=>b.name.localeCompare(a.name,"es",{sensitivity:"accent"}))
          break;
          case "desbydob": arr.sort((a,b)=>a.byfilterdob-b.byfilterdob)
          break;
          case "asbydob": arr.sort((a,b)=>b.byfilterdob-a.byfilterdob);
          break;
          default: arr
          break 
        }
        dispatch(filByOrigin(arr))
    }

    return{
        orderByAlpha
    }
};
export default useFil