import formula1 from "../../imagenes/F1.webp";
import style from "./Landing.module.css";
import {Link} from "react-router-dom"

const Landing = () => {

    return(
        <div className={style.contenedorbase}>
            <div className={style.contenedorimg}>
            <img src="https://i.ebayimg.com/images/g/IIMAAOSwG3tevXF3/s-l1200.webp" alt="" />
            </div>
            <div className={style.divbutton}>
            <Link to="/home">
            <button className={style.button}>
                Ingresar
            </button>
            </Link>
            </div>
        </div>
    )
}

export default Landing