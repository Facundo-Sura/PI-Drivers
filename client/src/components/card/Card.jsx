import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const Card = (driver) => {
  const dispatch = useDispatch();
  const { name, lastName, image, nationality, id } = driver;
  return (
    <>
      <div className={style.card}>
        <Link className={style.linkCard} to={`/detailPage/${id}`}>
          <span className={style.name}>
            <h4 className={style.data}>
              {name} {lastName}
            </h4>
          </span>
          <img src={image} alt={name} className={style.img} />
          <span className={style.nationality}>
            <h4 className={style.data}>{nationality}</h4>
          </span>
        </Link>
      </div>
    </>
  );
};

export default Card;
