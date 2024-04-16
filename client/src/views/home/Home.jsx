import SearchBar from "../../components/searchBar/SearchBar";
import style from "./Home.module.css"
import Cards from "../../components/cards/Cards";
import useFilByOrigin from "../../hooks/useFilByOrigin";
import { useEffect } from "react";
import useFilByTeam from "../../hooks/useFilByTeam";
import { handle } from "../../hooks/handle";
import useFil from "../../hooks/useFilter";
import { useDispatch, useSelector } from "react-redux";
import { getTeams } from "../../redux/actions/getTeams";
import { stateFiltered } from "../../redux/actions/stateFilters";
import { keepStatePyN } from "../../redux/actions/keepState";


const Home =  () => {

    const dispatch = useDispatch()
    const teams = useSelector(state=> state.teams)
    const {filByOr} = useFilByOrigin()
    const {filterTeam} = useFilByTeam()
    const {orderByAlpha} = useFil()
    
    useEffect(()=>{
        if(!teams.length) dispatch(getTeams())
    },[])

   
    return(
        <div className={style.home}>
        <div className={style.contSearch}>
            <div className={style.filters}>
                <select name="filter" id="filter" className={style.selects} onChange={()=>{
                    handle(event,filterTeam) 
                    dispatch(stateFiltered(1))
                    dispatch(keepStatePyN)
                    } }>
                    <option value="" disabled selected >Selected Team</option>
                    {teams.map(team=>{
                        const {name} = team
                        return <option key={name} value={name} id={name}>{name}</option>
                    })}
                </select>
                <select name="filter2" id="filter2" className={style.selects} onChange={()=>handle(event,filByOr)}>
                    <option value= "" disabled selected>Selected option</option>
                    <option value="all">All</option>
                    <option value="api" >Api</option>
                    <option value="db">DataBase</option>
                </select>
                <select name="filter3" id="filter3" className={style.selects} onChange={()=>handle(event,orderByAlpha)}>
                    <option value="" disabled selected>Selected option</option>
                    <option value="desbyalfa">Descend Alphabetically</option>
                    <option value="asbyalfa">Ascend Alphabetically</option>
                    <option value="desbydob">Desend By Date Of Birth</option>
                    <option value="asbydob">Ascend By Date Of Birth</option>
                </select>
            </div>
            <SearchBar />
        </div>
        <div className={style.cards}>
            <Cards />
        </div>
        </div>
    )
}

export default Home