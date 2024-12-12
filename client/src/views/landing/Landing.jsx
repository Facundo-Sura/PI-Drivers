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
        <h1 className={style.title}>ProyecI Drivers Henry</h1>
      </div>
    </div>
  );
};

export default Landing;
