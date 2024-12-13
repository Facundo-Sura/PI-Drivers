import style from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={style.container}>
      <div className={style.media}>
        <h3>Mis redes sociales</h3>
        <a href="https://www.linkedin.com/in/facundo-martin-emiliano-s-974b74253/">
          <img className={style.contactImage} src="./linkedin.png" alt="linkedin" />
        </a>
        <a href="https://github.com/Facundo-Sura">
          <img className={style.contactImage} src="github.png" alt="github" />
        </a>
        <a href="https://www.facebook.com/facundo.sura/">
        <img className={style.contactImage} src="./facebook.png" alt="facebook" /></a>
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
