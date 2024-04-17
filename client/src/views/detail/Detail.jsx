import { useEffect, useState } from "react";
import style from "./Detail.module.css";
import axios from "axios";
import { URL_BASE } from "../../endpoints";
import { useParams } from "react-router-dom";

const detailPage = () => {
  // const {name,lastName,nationality,image,description,dob,teams} = driverDetail;
  const [state, setState] = useState({});
  const { name, lastName, nationality, image, description, dob, teams } = state;
  const { id } = useParams();

  useEffect(() => {
    axios(`${URL_BASE}/${id}`).then(({ data }) => {
      setState(data);
      return () => {
        setState({});
      };
    });
  }, []);

  if (state) {
    return (
      <div className={style.conteiner}>
        <div className={style.imginfo}>
          <div className={style.divimage}>
            <img src={image} alt={name} className={style.image} />
          </div>
          <div className={style.datos}>
            <h1 className={style.name} >
              {`${name} ${lastName}`}{" "}
            </h1>
            <p className={style.pyh}>ID: {id} </p>
            <p className={style.pyh}>Nationality: {nationality} </p>
            <p className={style.pyh}>Date of birth: {dob} </p>
            <p className={style.pyh}>Teams: {teams?.map((team) => {
              return (
                <span key={team} volue={team} className={style.pyh}>
                  {team}{". "}
                </span>
              );
            })} </p>
          </div>
        </div>
        <div className={style.descrip}>
          <h1 className={style.desc}>Description</h1>
          <p>{description} </p>
        </div>
      </div>
    );
  } else {
    <h1>Loading...</h1>;
  }
};

export default detailPage;
