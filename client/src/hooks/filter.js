import { useSelector,useDispatch } from "react-redux"
import { filterN } from "../redux/actions/filterByNat";


const filter = (state) => {

    const result = state.filter(driver=>{
        return driver.nationality == "British"
    })
    
    dispatch(filterN(result))
}

export default filter