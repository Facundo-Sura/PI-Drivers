import { useState } from "react";
import { useSelector } from "react-redux";

const useAuxValidates = () => {

    const [arrTeams, setArrTeams] = useState([]);
    const [find, setFind] = useState([])

    const teams = useSelector(state=>state.teams)

    const teamsSelecteds = (value) =>{
        if(!arrTeams.includes(value)){
            const match = teams.find(team=> team.name == value)
            setArrTeams([...arrTeams,match.name])
            setFind([...find,match.id])
        }
    };    

    return{
        teamsSelecteds,
        arrTeams,
        find,
        setArrTeams,
        setFind
    }
};

export default useAuxValidates;