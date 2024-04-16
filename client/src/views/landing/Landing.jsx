import formula1 from "../../imagenes/F1.webp";
import style from "./Landing.module.css";
import {Link} from "react-router-dom"

const Landing = () => {

    return(
        <div className={style.container}>
      <div className={style.title}>
        <h1>PI Drivers Henry</h1>
      </div>
      <div className={style.button}>
        <Link to="/home">
          <button className={style.button}>HOME</button>
        </Link>
      </div>
    </div>
    )
}

export default Landing