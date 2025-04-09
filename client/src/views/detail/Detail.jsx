import style from "./Detail.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { URL_BASE } from "../../endpoints";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const DetailPage = () => {
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios(`${URL_BASE}/${id}`);
        setState(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      setState(null);
    };
  }, [id]);

  if (loading) {
    return (
      <div className={style.conteiner}>
        <Navbar />
        <div className={style.imginfo}>
          <h1>Loading...</h1>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className={style.conteiner}>
        <Navbar />
        <div className={style.imginfo}>
          <h1>Error: {error}</h1>
        </div>
        <Footer />
      </div>
    );
  }

  if (!state) {
    return (
      <div className={style.conteiner}>
        <Navbar />
        <div className={style.imginfo}>
          <h1>No data found</h1>
        </div>
        <Footer />
      </div>
    );
  }

  const { name, lastName, nationality, image, description, dob, teams } = state;

  return (
    <div className={style.conteiner}>
      <Navbar />
      <div className={style.imginfo}>
        <img 
          src={image || 'https://via.placeholder.com/333x500'} 
          alt={`${name} ${lastName}`} 
          className={style.image} 
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/333x500';
          }}
        />
        <div className={style.datos}>
          <h1 className={style.name}>{`${name} ${lastName}`}</h1>
          <p className={style.pyh}>ID: {id}</p>
          <p className={style.pyh}>Nationality: {nationality || 'Unknown'}</p>
          <p className={style.pyh}>Date of birth: {dob || 'Unknown'}</p>
          <p className={style.pyh}>
            Teams:{" "}
            {teams?.length > 0 ? (
              teams.map((team) => (
                <span className={style.pyh} key={team} value={team}>
                  {team}
                  {". "}
                </span>
              ))
            ) : (
              <span>No teams specified</span>
            )}
          </p>
          <div className={style.descrip}>
            <h1 className={style.desc}>Description</h1>
            <p>{description || 'No description available'}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailPage;