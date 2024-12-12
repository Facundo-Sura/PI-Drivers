import style from "./Footer.module.css";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";

export default function Footer() {
  return (
    <div className={style.container}>
      <div className={style.media}>
        <h3>Mis redes sociales</h3>
        <a href="https://www.linkedin.com/in/facundo-martin-emiliano-s-974b74253/">
          <img className={style.contact} src={linkedin} alt="linkedin" />
        </a>
        <a href="https://github.com/Facundo-Sura">
          <img className={style.contact} src={github} alt="github" />
        </a>
      </div>
      <div>
        <h3></h3>
      </div>
      <div>
        <h3></h3>
      </div>
    </div>
  );
}
