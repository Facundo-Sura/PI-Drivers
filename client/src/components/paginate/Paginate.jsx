import { useState } from "react"
import style from "./Paginate.module.css"
import { useSelector,useDispatch } from "react-redux";
import { stateFiltered } from "../../redux/actions/stateFilters";
import {keepStatePyN} from "../../redux/actions/keepState"


const Paginate = ({driversHome,setPaginate,handle}) => {

    const statePrevNext = useSelector(state=>state.statePrevNext);
    const stateFilter = useSelector(state=>state.stateFilter);
    const dispatch = useDispatch();

    const pagesButtons = 10;  

    
    const renderButtons = (buttonsPage) => {
        const arrButtons = [];
        const startIndex = (buttonsPage - 1) * pagesButtons;
        const endIndex = Math.min(startIndex + pagesButtons, Math.ceil(driversHome.length/9));
        for(let i = startIndex; i<endIndex; i++){
            arrButtons.push(
                <button key={i+1} value={i+1} onClick={()=>{
                    handle(event,setPaginate)
                    dispatch(stateFiltered(parseInt(event.target.value)))
                }} className={style.buttons}>{i+1} </button>
            );
        }
        return arrButtons
    }

    const previus = () =>{
        if(statePrevNext > 1){
            dispatch(keepStatePyN(statePrevNext-1))
        } 
    }

    const next = () => {
        if(statePrevNext < Math.ceil(driversHome.length/9 /pagesButtons) ){
            dispatch(keepStatePyN(statePrevNext+1))
        }
    }


    return(
        <div className={style.paginate}>
            <button onClick={previus} className={style.nextyprev}>Prev</button>
            {renderButtons(statePrevNext)}
            {setPaginate(stateFilter)}
            <button onClick={next} className={style.nextyprev} >Next</button>
        </div>
    )
}

export default Paginate