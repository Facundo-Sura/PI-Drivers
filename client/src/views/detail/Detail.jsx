import style from "./Detail.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { URL_BASE } from "../../endpoints";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const detailPage = () => {
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
        <Navbar />
        <div className={style.imginfo}>
          <img src={image} alt={name} className={style.image} />
          <div className={style.datos}>
            <h1 className={style.name}>{`${name} ${lastName}`} </h1>
            <p className={style.pyh}>ID: {id} </p>
            <p className={style.pyh}>Nationality: {nationality} </p>
            <p className={style.pyh}>Date of birth: {dob} </p>
            <p className={style.pyh}>
              Teams:{" "}
              {teams?.map((team) => {
                return (
                  <span className={style.pyh} key={team} volue={team}>
                    {team}
                    {". "}
                  </span>
                );
              })}{" "}
            </p>
            <div className={style.descrip}>
              <h1 className={style.desc}>Description</h1>
              <p>{description} </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  } else {
    <h1>Loading...</h1>;
  }
};

export default detailPage;
