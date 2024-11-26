import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const Card = (driver) => {
  const dispatch = useDispatch();
  const { name, image, id } = driver;
  return (
    <>
      <div className={style.card}>
        <Link className={style.linkCard} to={`/detailPage/${id}`}>
            <img src={image} alt={name} className={style.img} />
            <span className={style.name}>{name} </span>
        </Link>
      </div>
    </>
  );
};

export default Card;
