import { useEffect, useState } from "react";
import style from "./Detail.module.css";
import axios from "axios";
import { URL_BASE } from "../../endpoints";
import { useParams } from "react-router-dom";


const detailPage = () => {
   // const {name,lastName,nationality,image,description,dob,teams} = driverDetail;
    const [state,setState] = useState({})
    const {name,lastName,nationality,image,description,dob,teams} =state
    const {id} = useParams()

    useEffect(()=>{
        axios(`${URL_BASE}/${id}`)
        .then(({data})=>{
            setState(data)
            return () => {
                setState({})
            }
        })
    },[])

    if(state){
    return(
        <div className={style.contenedor} >
        <div className={style.detail}>
            <div className={style.contdivimg}>
            <div className={style.divimage}>
            <img src={image} alt={name} className={style.image} />
            </div>
            </div>
            <div className={style.datos}>
            <h1 style={{borderBottom:"1px solid black"}}>{`${name} ${lastName}`} </h1>
            <p className={style.pyh}>{id} </p>
            <h2 className={style.pyh}>{nationality} </h2>
            <p className={style.pyh}>{dob} </p>
            {teams?.map(team=>{
                return <span key={team} volue={team} className={style.pyh}>{team} </span>
            })}
            <div className={style.descrip}>
                <h2 className={style.h2}>Description</h2>
                <p >{description} </p>
            </div>
            </div>
            </div>
        </div>
    )}else{
        <h1>Loading...</h1>
    }
}

export default detailPage