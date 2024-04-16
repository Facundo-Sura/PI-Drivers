import { useSelector } from "react-redux";
import { useState } from "react";

const usePaginated = () => {
    const driversHome = useSelector(state=> state.driversHome);
    const [paginate, setPaginate] = useState(1);
    const [visual, setvisual] = useState([])
    const pagesnumber = 9; 

    const pages = () => {
        const startIndex = (paginate - 1) * pagesnumber;
        const endIndex = startIndex + pagesnumber;
        
        const driversvisual = driversHome.slice(startIndex,endIndex)
        setvisual(driversvisual)
    }
    
    return{
        pages,
        paginate,
        setPaginate,
        driversHome,
        visual,
        setvisual
    }
}

export default usePaginated