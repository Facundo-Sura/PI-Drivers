import style from "./Card.module.css"
import {Link} from "react-router-dom"
import {useDispatch} from "react-redux";

const Card = (driver) => {
    const dispatch = useDispatch()
    const {name,image,id} = driver
    return(
        <>
        <div className={style.card}>
            <Link to={`/detailPage/${id}`}>
            <div className={style.divimage}>
            <img src={image} alt={name} className={style.img} />
            </div>
            <div className={style.divcontent} >
            <p className={style.name}>{name} </p>
            </div>
            </Link>
        </div>
        </>
    )
}

export default Card