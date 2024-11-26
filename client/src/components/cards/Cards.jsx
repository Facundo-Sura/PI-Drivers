import style from "./Cards.module.css";
import Card from "../card/Card";
import Paginate from "../paginate/Paginate";
import usePaginated from "../../hooks/usePaginated";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDrivers } from "../../redux/actions/getDrivers";
import { handle } from "../../hooks/handle";

const Cards = () => {
  const { driversHome, pages, paginate, setPaginate, visual } = usePaginated();
  const dispatch = useDispatch();
  const aux = useSelector((state) => state.aux);

  useEffect(() => {
    if (!aux[0]) dispatch(getDrivers());
    pages();
  }, [driversHome, paginate]);

  useEffect(() => {
    setPaginate(1);
  }, [driversHome]);

  return (
    <div className={style.contenedor}>
      <div className={style.cards}>
        {visual.map((driver) => {
          const {
            name,
            id,
            image,
            nationality,
            dob,
            description,
            teams,
            lastName,
          } = driver;
          return (
            <Card
              name={name}
              lastName={lastName}
              image={image}
              key={id}
              nationality={nationality}
              dob={dob}
              description={description}
              teams={teams}
              id={id}
            />
          );
        })}
      </div>
      <div className={style.pagintate}>
        <Paginate
          driversHome={driversHome}
          setPaginate={setPaginate}
          handle={handle}
        />
      </div>
    </div>
  );
};

export default Cards;
