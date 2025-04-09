import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Background from "../../components/video/Video";
import style from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <Navbar />
      </div>
      <div className={style.video}>
        <Background />
      </div>
      <div className={style.info}>
        <h1 className={style.title}>Proyeco Individual Henry</h1>
      </div>
      <div className={style.content}>
        <p className={style.text}>
          La idea de este proyecto es construir una aplicación web a partir de
          la API [drivers] en la que se pueda:
        </p>
        <div className={style.listButton}>
          <ul className={style.list}>
            <li className={style.itemList}>Buscar corredores</li>
            <li className={style.itemList}>
              Visualizar la información de los corredores.
            </li>
            <li className={style.itemList}>Filtrarlos.</li>
            <li className={style.itemList}>Ordenarlos.</li>
            <li className={style.itemList}>
              Dar de Alta (Crear) nuevo corredor.{" "}
            </li>
          </ul>
          <Link className={style.linkBtn} to="/home">
            <button className={style.goBtn}>GO</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;